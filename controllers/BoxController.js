const Box = require('../models/Box');

class BoxController {
  async store(req, res) {
    const boxTitle = req.body.title;
    const box = await Box.create({ title: boxTitle });
    
    return res.json(box);
  }
}

module.exports = new BoxController();