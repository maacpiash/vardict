import vardict from './vardict';

const AnirudhaPaul: { [key: string]: any } = {
  'full name': 'Anirudha Paul',
  age: 25,
  single: true,
  c: 'Samsung R&D',
  home: 'Mymensingh',
  coolWithLadies: false,
  wantsToGoTo: 'USA',
  IELTS: 7.5,
  favoriteFood: 'kachchi',
  'nick-name': 'Prasun'
};

const keys = Object.keys(AnirudhaPaul);
keys.forEach(k => AnirudhaPaul[k] !== vardict[k] && process.exit(1));
