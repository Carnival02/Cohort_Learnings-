const express=require('express');
const jwt=require('jsonwebtoken');
const JWT_SECERT="HARSHloveanvi123451"


const { userRoutes }=require('./routes/user');
const { couresRoute }=require('./routes/courses');
const { adminRoutes } =require('./routes/admin');

const app=express();

app.use(express.json());

app.use('./api/v1/user',userRoutes);
app.use('/api/v1/course',couresRoute);
app.use('/api/v1/admin',adminRoutes);


// async function main(){
//     await 
// }



app.listen(3000);