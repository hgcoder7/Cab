const dotenv=require('dotenv');
dotenv.config();

const cors=require('cors');
const express=require('express')
const app=express();
const userRoutes=require('./routes/user.routes')
const cookieParser=require('cookie-parser');
const captainRoutes=require('./routes/captain.routes');
const mapsRoutes =require('./routes/maps.routes')
const rideRoutes=require('./routes/ride.routes')
const connectToDb=require('./db/db');
connectToDb();

// app.use(cors());
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
// app.options('https://cabify-zdbf.onrender.com', cors()) // include before other routes
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('hello')
})
app.use('/users',cors(corsOptionsDelegate),userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps',mapsRoutes)
app.use('/rides',rideRoutes,)

module.exports=app;
