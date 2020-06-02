# [React Practice] External API communication with React

## Data download & construction

```bash
$ git clone https://github.com/dai-570415/react-getapi.git

$ cd react-getapi

$ npm install

$ npm start
```

## Put each API key in "YourKey"

```js
// components/News/Index.js
// NEWS API(https://newsapi.org/) 
const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=YourKey`;
```

```js
// components/Gourmet/Index.js
// ぐるなび API(https://api.gnavi.co.jp/api/)
const keyId = 'YourKey';
```
