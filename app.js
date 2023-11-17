const express = require('express');
const app = express();
const multer = require('multer');
const zipCompress = require('./src/compressZip');
const location = require('./src/multer');
const zipExtract = require('./src/unzip');
const xmlParse = require('./src/readXml');
app.use(express.json());

app.post('/', location, async function (req, res, next) {
  const filename = req.file.filename;
  await zipExtract(filename);
  const [xmlFilename, xmlData] = await xmlParse(filename);
  await zipCompress(xmlFilename, xmlData);
  res.send('ok');
});
app.listen(4000, () => console.log('Server started'));
