const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//macam2 request dari client ke server yaitu GET,PATCH(ubah file),DELETE,POST(new)
//harus ada endpoint atau route yg layani, harus ada yg hande/function callback yg handle request
//tsb dan megembalikannya ke browser client kembali

app.get('/rentals', (req, res) => {
  return res.json([
    {
      city: 'New York',
      title: 'nice place',
    },
    { city: 'berlin', title: 'nice weather' },
  ]);
});

app.listen(PORT, () => {
  console.log('server runing on PORT ', PORT);
});

console.log('hello world');
