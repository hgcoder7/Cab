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

app.use(cors({
    origin: 'https://cabify-zdbf.onrender.com', // Frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Allow cookies and authorization headers
}));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://cabify-zdbf.onrender.com');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });
// app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('hello')
})
app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps',mapsRoutes)
app.use('/rides',rideRoutes,)

module.exports=app;
