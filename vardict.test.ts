import vardict from './vardict';

const AnirudhaPaul: { [key: string]: any } = {
  name: 'Anirudha',
  age: 25,
  single: true,
  c: 'Samsung R&D',
  home: 'Mymensingh',
  coolWithLadies: false
};

for (let prop in AnirudhaPaul) {
  if (AnirudhaPaul && AnirudhaPaul[prop] !== vardict[prop]) {
    process.exit(1);
  }
}
