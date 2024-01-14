/**
 * MIT License
 *
 * Copyright (c) 2019 – 2024 Mohammad Abdul Ahad Chowdhury
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
export type valueType = string | number | boolean
export type dictionary = Record<string, valueType | valueType[]>

const update = (obj: dictionary, key: string, value: valueType): dictionary => {
  if (obj.hasOwnProperty(key)) {
    // the key is already there
    if (Array.isArray(obj[key])) {
      // the value is an array
      const array = obj[key] as valueType[]
      obj[key] = [...array, value]
    } else {
      // the value is an atomic ``
      const existingValue = obj[key] as valueType
      obj[key] = [existingValue, value]
    }
  } else {
    // the key does not exist on the object
    obj[key] = value
  }
  return obj
}

const properValue = (val: string): valueType => {
  if (val === 'false') return false
  if (val === 'true') return true
  const num = Number(val)
  if (!isNaN(num)) return num
  return val
}

const args = process.argv
const max = args.length

const vardict: dictionary = {}
let key: string
let keyLen: number
let value: valueType

for (let i = 2; i < max; i++) {
  if (args[i].startsWith('-')) {
    keyLen = args[i].length
    key = args[i].slice(1, keyLen)
    if (key.startsWith('-')) {
      // some key values might start with two dashes
      key = key.slice(1, keyLen - 1)
    }
    if (key.includes('=')) {
      // e.g. --country=BD means vardict[country] = 'BD'
      const [a, b] = key.split('=')
      update(vardict, a, properValue(b))
      continue
    }
    if (args[i + 1] && args[i + 1].startsWith('-')) {
      // key without value is set true by default
      update(vardict, key, true)
      vardict[key] = true
    } else {
      i++
      value = properValue(args[i])
      value = value === undefined ? true : value
      update(vardict, key, value)
    }
  }
}

export default vardict
