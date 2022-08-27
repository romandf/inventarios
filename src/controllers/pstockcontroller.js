const pembuCtrl = {};

pembuCtrl.getdata = (req, res)=> res.json({message:'Stock de Pembu'});
pembuCtrl.createdata = (req, res) => res.json({message:'Data Laboratory created'});

module.exports = pembuCtrl;