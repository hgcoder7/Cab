const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const captainSchema=new mongoose.Schema({
fullname:{
    firstname:{
        type:String,
        required:true,
        unique:true,
        minLength:[3,'firstname must be at least 3 character long']
    },
    lastname:{
        type:String,
        required: true,
        minLength:[3,'lastname must be at least 3 character long']
    }
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    match: [/^\S+@\S+\.\S+$/, 'please enter a valid email']
},
password:{
    type:String,
    required:true,
    unique:true,
    minLength:[6,'password must be at least has 6 character long']
},
socketId:{
    type:String
},
status:{
    type:String,
    enum:['active','inactive'],
    default:'inactive'
},
vehicle:{
    color:{
        type:String,
        required: true,
        minLength:[3,'Color must be at least 3 character long']
    },
    plate:{
        type:String,
        required: true,
        minLength:[3,'Plate must be at least 3 character long']
    },
    capacity:{
        type:String,
        required: true,
        minLength:[1,'Color must be at least 1']
    },
    vehicleType:{
        type:String,
        required: true,
        enum:['car','auto','motocycle']
    }
},
location:{
    lat:{
        type:Number,
    },
    lng:{
        type:Number,
    }
}
})
captainSchema.methods.generateAuthToken =function(){
    const token= jwt.sign({ _id:this._id},process.env.JWT_SECRET, { expiresIn: '24h'});
    return token;
}
captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}
const captainModel=mongoose.model('captain', captainSchema);
module.exports=captainModel;