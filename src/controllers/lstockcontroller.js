const labCtrl = {};

labCtrl.getdata = (req, res) => res.json({mensaje:'Stock Laboratory'});
labCtrl.createdata = (req, res) => res.json({mensaje:'data laboratory created'});

module.exports = labCtrl;