const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/XmlParseApi/my-uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'application/zip') {
    cb(null, false);
  } else {
    cb(null, true);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
const location = upload.single('xmlFile');

module.exports = location;
