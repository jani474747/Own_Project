const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema(
   {
     name : {type : String, require : true},
     email : {type : String, require : true},
     password : {type : String, require : true}
    
    },
    {
        versionKey : false,
        timestamps : true,
    }

);

userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password,8);
    this.password = hash;
    return next();
}
);

userSchema.method.checkPassword = function (password){
    return bcrypt.compareSync(password,this.password);
}

const User = mongoose.model("user",userSchema);
module.exports = User;


