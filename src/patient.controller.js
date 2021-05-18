import dao from './patient.dao';
exports.getAll=(req,res)=>{
    dao.get({},(err,patients)=>{
        if(err) console.log(err);
        res.send(patients);
    })
}

exports.getPatient=(req,res)=>{
    dao.get({_id:req.params.id}, (err,patient)=>{
        if(err) console.log(err);
        res.send(patient);
    })
}

exports.create=(req,res)=>{
    var patient = req.body;
    dao.create(patient, (err,patient)=>{
        if(err) console.log(err);
        res.send(patient);
    })
}

exports.update=(req,res)=>{
    var patient = {
        "age": req.body.age
    }
    dao.update({_id:req.params.id}, patient, (err,patient)=>{
        if(err) console.log(err);
        res.send(patient);
    })
}

exports.delete=(req,res)=>{
    dao.delete({_id:req.params.id}, (err,result)=>{
        if(err) console.log(err);
        res.send(result);
    })
}