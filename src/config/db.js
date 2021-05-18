import mongoose from 'mongoose';
import properties from './properties';

module.exports=function(){
    mongoose.connect(properties.DB);
}