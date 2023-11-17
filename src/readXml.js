const fs = require('fs');
const path = require('path');
const xmlParser = require('xml-js');
const { zipCompress } = require('./compressZip');
const xmlParse = async () => {
  const directoryPath = '/XmlParseApi/xmlFiles';

  let dataArray = [];
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const data = fs.readFileSync(filePath);
    dataArray.push(data);
  });

  let jsonDataArray = [];
  dataArray.forEach((data) => {
    const jsonData = xmlParser.xml2json(data, { compact: true, spaces: 4 });
    jsonDataArray.push(jsonData);
  });
  let xmlDataArray = [];
  let filename = [];
  for (i = 0; i < files.length; i++) {
    const xmlData = xmlParser.json2xml(jsonDataArray[i], {
      compact: true,
      spaces: 4,
    });
    xmlDataArray.push(xmlData);
    filename.push(files[i]);
  }
  return [filename, xmlDataArray];
};
module.exports = xmlParse;
