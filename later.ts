/**
 * MIT License
 *
 * Copyright (c) 2019 Mohammad Abdul Ahad Chowdhury
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
export type trueType = valueType | valueType[]

const properValue = (val?: string): valueType => {
  if (val === 'false') return false
  if (val === 'true' || val === undefined) return true
  const num = Number(val)
  if (!isNaN(num)) return num
  return val
}

const args = process.argv

const vardict: { [key: string]: trueType } = {}
let key: string

const keys: string[] = []
const values: valueType[] = []

for (let i = 2; i < args.length; i++) {
  if (args[i].startsWith('-')) {
    key = args[i].replace('-', '')
    if (key.startsWith('-')) key = key.replace('-', '')
    if (key.includes('=')) {
      const [a, b] = key.split('=')
      keys.push(a)
      values.push(properValue(b))
      continue
    }
    if (args[i + 1] && args[i + 1].startsWith('-')) {
      keys.push(key)
      values.push(true)
      continue
    }
    keys.push(key)
  } else {
    values.push(properValue(args[i]))
  }
}

for (let i = 0; i < keys.length; i++) {
  if (vardict[keys[i]] === undefined) vardict[keys[i]] = values[i]
  else {
    const existingValue = vardict[keys[i]]
    if (Array.isArray(existingValue))
      vardict[keys[i]] = [...existingValue, values[i]]
    else vardict[keys[i]] = [existingValue, values[i]]
  }
}

export default vardict
