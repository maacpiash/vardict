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
import vardict from './vardict'
import type { valueType, dictionary } from './vardict'

const arraysEqual = (a: valueType[], b: valueType[]): boolean => {
  if (a === b) return true
  if (a == null || b == null) return false
  if (a.length !== b.length) return false

  const x = a.sort()
  const y = b.sort()

  for (let i = 0; i < a.length; ++i) {
    if (x[i] !== y[i]) return false
  }

  return true
}

const valuesAreEqual = (a: valueType | valueType[], b: valueType | valueType[]): boolean => {
  if (Array.isArray(a)) {
    if (Array.isArray(b))
      return arraysEqual(a, b)
    return false
  }
  return a === b
}

const AnirudhaPaul: dictionary = {
  'full name': 'Anirudha Paul',
  age: 25,
  single: true,
  c: 'Samsung R&D',
  home: 'Mymensingh',
  coolWithLadies: false,
  wantsToGoTo: 'USA',
  IELTS: 7.5,
  favoriteFood: 'kachchi',
  'nick-name': 'Prasun',
}

for (const k in AnirudhaPaul) {
  valuesAreEqual(AnirudhaPaul[k], vardict[k]) || process.exit(1)
}
