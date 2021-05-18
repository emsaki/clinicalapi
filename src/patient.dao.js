import mongoose from 'mongoose';
import patientSchema from './patient.model';

patientSchema.statics = {
    get: function(query, cb){
        this.find(query, cb);
    },
    create:function(data, cb){
        var patient = new this(data);
        patient.save(cb);
    },
    update: function(query, updateData, cb){
        this.findOne(query,{$set:updateData}, cb);
    },
    delete: function(query,cb){
        this.deleteOne(query, cb)
    }
}

var patientModel = mongoose.model("Patient",patientSchema, 'patient');
module.exports = patientModel;