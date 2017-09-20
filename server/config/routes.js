// =========================================================================
// ========================= Required Models ===============================
// =========================================================================
var users = require('./../controllers/users.js');
var messages = require('./../controllers/messages.js');
var days = require('./../controllers/days.js');


module.exports = function(app){

  // =========================================================================
  // =========================== Days Routes =================================
  // =========================================================================
    app.post('/updateFedDog', function(req,res){
      days.updateFedDog(req,res)
    });

    app.post('/updateFedCat', function(req,res){
      days.updateFedCat(req,res)
    });

    app.post('/updateWalkedDog', function(req,res){
      days.updateWalkedDog(req,res)
    });

    app.post('/getStatus', function(req,res){
      days.getStatus(req,res)
    });






// =========================================================================
// =========================== User Routes =================================
// =========================================================================
  // app.post('/reg', function(req,res){
  //   users.reg(req,res)
  // });

// =========================================================================
// ============================ Wall Routes ================================
// =========================================================================
// app.get('/messages/all', function(req,res){
//   messages.getAllMessages(req, res);
// });
//
// app.post('/messages/new', function(req,res){
//   messages.addMessage(req,res);
// });


}; // End Routes
