const admZip = require('adm-zip');
const zipExtract = async (filename) => {
  const zip = new admZip(`/XmlParseApi/my-uploads/${filename}`);

  zip.extractAllTo('/XmlParseApi/xmlFiles');
};

module.exports = zipExtract;
