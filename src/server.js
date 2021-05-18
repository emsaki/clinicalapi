import express from 'express';
import properties from './config/properties';
import db from './config/db';
import bodyParser from 'body-parser';
import clinicalRoutes from './routes';

db();

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var clinicalRouter = express.Router();
clinicalRoutes(clinicalRouter);
app.use('/clinicalsapi',clinicalRouter);

app.listen(properties.PORT, (err)=>{
    if(err) console.log(err);
    console.log("Application Started on Port: "+ properties.PORT);
});