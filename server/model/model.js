const mongoose = require("mongoose")

const Auth = mongoose.Schema({
    username: { type: String, required: true },
    password: {type :String,required:true},

})


module.exports = mongoose.model("Auths",Auth)