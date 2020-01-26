const File = require('../models/File');
const Box = require('../models/Box');

class FileController {
  async store(req, res) {
    const boxId = req.params.id;

    const box = await Box.findById(boxId);
    const newFile = await File.create({
      title: req.file.originalname,
      path: req.file.key,
    });

    box.files.push(newFile);
    await box.save();

    req.io.sockets.in(box._id).emit('file', newFile);

    res.json(newFile);
  }
}

module.exports = new FileController();