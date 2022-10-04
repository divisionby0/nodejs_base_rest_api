import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

// Урок
// https://www.youtube.com/watch?v=tKM44vPHU0U

const PORT = 5000;
const app = express();
const DB_URL = 'mongodb+srv://divisionby0:seDoychek1978_1978@cluster0.s9wsv9j.mongodb.net/?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

app.get("/", (req, res) => {
    console.log(req.query);
    res.status(200).json("OK 123").end();
})

async function startApp(){
 try{
     await mongoose.connect(DB_URL);
     app.listen(PORT, () => console.log('server started on port ' + PORT));
 }
 catch(error){
     console.log(error);
 }
}

startApp();


