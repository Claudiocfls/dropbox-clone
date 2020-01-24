const File = require('../models/File');

class FileController {
  async store(req, res) {
    console.log(req.file);
    res.send("OK");
  }
}

module.exports = new FileController();