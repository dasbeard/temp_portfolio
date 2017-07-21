// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var User = mongoose.model('User');

module.exports = (function(){
  return {

    reg: function(req,res){
      console.log('In the Reg method  ----> users controler'. cyan);
      console.log(req.body);
      res.json({message: 'Made it to server/controllers/users.js'})
    },

  }
})();



// ========================== BCRYPT TOOLS ===============================
// Encrypt password before saving
// var pw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));

// Authenticate password
// if(bcrypt.compareSync(req.body.password, oneUser.password)){}
