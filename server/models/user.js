// =========================================================================
// ============================== Require ==================================
// =========================================================================
const mongoose = require('mongoose');


// =========================================================================
// ============================== Schemas ==================================
// =========================================================================
var UserSchema = new mongoose.Schema({
  firstName: {type: String, required: true, minlength: 3, trim: true},
  lastName: {type: String, required: true, minlength: 3, trim: true},
  birthday: {type: Date, required: true},
  email:{
        type: String,
        required: true,
        validate: [{
          validator: function (email){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          },
          message: "{ VALUE } is not a valid email"
        }]
      },
  password: {type: String, required: true, minlength: 4, trim: true}

}, {timestamps: true});

// =========================================================================
// ========================== Set Schema Name===============================
// =========================================================================

mongoose.model('User', UserSchema);
