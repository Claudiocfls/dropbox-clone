const File = require('../models/File.model');
const Box = require('../models/Box.model');

class FileController {
  async store(req, res) {
    const boxId = req.params.id;

    const box = await Box.findById(boxId);
    const newFile = await File.create({
      title: req.file.originalname,
      path: req.file.key,
      type: req.file.mimetype,
      size: req.file.size,
    });

    box.files.push(newFile);
    await box.save();

    req.io.sockets.in(box._id).emit('file', newFile);

    res.json(newFile);
  }
}

module.exports = new FileController();