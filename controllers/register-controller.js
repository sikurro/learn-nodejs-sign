var connection = require('./../config');

module.exports.register = function(req, res){
    var today = new Date();

    var user = {
        "name" : req.body.name,
        "email": req.body.email,
        "password" : req.body.password,
        "created_at":today,
        "updated_at":today,
    };

    connection.query("INSERT INTO users SET ?", user, function(error, result, fields){
        if(error){
            res.json({
                status : false,
                message : 'there are some error with query ' + error
            });
        }else{
            res.json({
                status : true,
                data: result,
                message: 'user registered successfully'
            });
        }
    });
};