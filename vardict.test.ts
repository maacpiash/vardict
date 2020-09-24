import vardict, { valueType, trueType } from './later'

const AnirudhaPaul: { [key: string]: trueType } = {
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
  lang: ['Bengali', 'English', 'Hindi'],
}

const keys = Object.keys(AnirudhaPaul)
keys.forEach(k => {
  if (AnirudhaPaul[k] !== vardict[k]) {
    if (Array.isArray(AnirudhaPaul[k] && Array.isArray(vardict[k]))) {
      const expected = AnirudhaPaul[k] as valueType[]
      const received = vardict[k] as valueType[]
      if (
        !expected.every(value => received.includes(value)) ||
        !received.every(value => expected.includes(value)) ||
        expected.length !== received.length
        // two sets A and B are equal if and only if A ⊆ B and B ⊆ A
        // since these are arrays and not sets, they may have duplicates
        // hence checking whether their lengths are equal
      ) {
        console.log(`Error with key ${k}`)
        console.log(`Expected ${expected}, received ${received}`)
        process.exit(1)
      }
    } else {
      console.log(`Error with key ${k}`)
      console.log(`Expected ${AnirudhaPaul[k]}, received ${vardict[k]}`)
      process.exit(1)
    }
  }
})
