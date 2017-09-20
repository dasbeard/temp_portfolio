// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');

var Days = mongoose.model('Days');

module.exports = (function(){
  return {

    updateFedDog: function(req,res){
      // console.log(req.body);
      var myTime = getMyTime();

      Days.findOne({date: myTime[0]}, function(err, today){
        if (err){
          console.log('====== Error ======'.red);
          console.log(err);
        } else {
          if(!today){
            // console.log('======== Create Today =========');
            var today = new Days({
                                  fedDogStatus: req.body.status,
                                  fedDogTime: myTime[1],
                                  fedCatStatus: false,
                                  fedCatTime: 'Not Yet',
                                  walkedDogStatus: false,
                                  walkedDogTime: 'Not Yet',
                                  date: myTime[0]
                                });
            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          } else {
            // console.log('======== Update Today =========');
            today.fedDogStatus = req.body.status;
            today.fedDogTime = myTime[1];

            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          }
        }
      }); //End findOne

    }, // End Fed Dog

    updateFedCat: function(req,res){
      // console.log(req.body);
      var myTime = getMyTime();

      Days.findOne({date: myTime[0]}, function(err, today){
        if (err){
          console.log('====== Error ======'.red);
          console.log(err);
        } else {
          if(!today){
            // console.log('======== Create Today =========');
            var today = new Days({
                                  fedDogStatus: false,
                                  fedDogTime: 'Not Yet',
                                  fedCatStatus: req.body.status,
                                  fedCatTime: myTime[1],
                                  walkedDogStatus: false,
                                  walkedDogTime: 'Not Yet',
                                  date: myTime[0]
                                });
            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          } else {
            // console.log('======== Update Today =========');
            today.fedCatStatus = req.body.status;
            today.fedCatTime = myTime[1];

            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          }
        }
      }); //End findOne

    }, // End Fed Cat

    updateWalkedDog: function(req,res){
      // console.log(req.body);
      var myTime = getMyTime();

      Days.findOne({date: myTime[0]}, function(err, today){
        if (err){
          console.log('====== Error ======'.red);
          console.log(err);
        } else {
          if(!today){
            // console.log('======== Create Today =========');
            var today = new Days({
                                  fedDogStatus: false,
                                  fedDogTime: 'Not Yet',
                                  fedCatStatus: false,
                                  fedCatTime: 'Not Yet',
                                  walkedDogStatus: req.body.status,
                                  walkedDogTime: myTime[1],
                                  date: myTime[0]
                                });
            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          } else {
            // console.log('======== Update Today =========');
            today.walkedDogStatus = req.body.status;
            today.walkedDogTime = myTime[1];

            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          }
        }
      }); //End findOne

    }, // End Fed Cat










    getStatus: function(req,res){
      // console.log('== In Get Status Method =='.cyan);
      var myTime = getMyTime();

      Days.findOne({date: myTime[0]}, function(err, today){
        if(err){
          console.log('======== Error ========'.red);
          console.log(err);
        } else {
          if(today){
            // console.log('===== Today Already Exists ====='.cyan);
            res.json(today);
          } else {
            // console.log('======== Create New Today =========');
            var today = new Days({
                                  fedDogStatus: false,
                                  fedDogTime: 'Not Yet',
                                  fedCatStatus: false,
                                  fedCatTime: 'Not Yet',
                                  walkedDogStatus: false,
                                  walkedDogTime: 'Not Yet',
                                  date: myTime[0]
                                });
            today.save(function(err){
              if(err){
                console.log('======== Error ========'.red);
                console.log(err);
              } else {
                res.json(today);
              }
            });
          }
        }
      });
    }, // End Get Status






  } // end return

  // ~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~

  // For time refrence needs
  function getMyTime(){
    var getDate = new Date();
    var hour = getDate.getHours();
    var time = getDate.toLocaleTimeString();
    var currentDate = getDate.toLocaleDateString();
      if(hour > 14){
        currentDate += "pm";
      } else {
        currentDate += "am";
      }
    var myTime = [currentDate, time];
    return (myTime);
  }
})();
