const ruoaCtrl = {};

ruoaCtrl.getdata = (req, res)=> res.json({message: 'GET-REQUEST..'});
ruoaCtrl.createdata = (req, res)=> res.json({message:"POST - Request to Ruoa Stock"});

module.exports = ruoaCtrl;