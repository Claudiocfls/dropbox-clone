const Box = require('../models/Box.model');

class BoxController {
  async store(req, res) {
    const boxTitle = req.body.title;
    const box = await Box.create({ title: boxTitle });
    
    return res.json(box);
  }

  async show(req, res) {
    const boxId = req.params.id;
    const box = await Box.findById(boxId).populate({
      path: 'files',
      options: { sort: { createdAt: -1 } },
    });
    
    res.json(box);
  }
}

module.exports = new BoxController();