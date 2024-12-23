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
    origin: 'https://cabify-zdbf.onrender.com', // Allow your frontend's origin
    methods: ['GET', 'POST'], // Allowed methods
    Headers: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Allow cookies/credentials
}));

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
