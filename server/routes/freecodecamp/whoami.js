//FCC request
module.exports = {
        method: 'GET',
        path: '/freecodecamp/whoami',
        handler: function (request, reply) { 
            //console.log(request.connection.info);   
            reply({
                ipadress: request.connection.info.address, 
                language: request.headers["accept-language"].split(",")[0],
                software: request.headers["user-agent"]
            });
        }    
    }