const admZip = require('adm-zip');
const zipCompress = async (filename, xmlData) => {
  const zip = new admZip();
  for (i = 0; i < filename.length; i++) {
    zip.addFile(filename[i], Buffer.from(xmlData[i]));
  }
  zip.writeZip('/XmlParseApi/jsonToXml/files.zip');
};
module.exports = zipCompress;
