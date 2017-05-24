//FCC request
module.exports = {
        method: 'GET',
        path: '/freecodecamp/whoami',
        handler: function (request, reply) { 
            console.log(Object.keys(request.connection._connections)[0].split(":")[0]);   
            reply({
                ipadress_proper: Object.keys(request.connection._connections)[0].split(":")[0], 
                language: request.headers["accept-language"].split(",")[0],
                software: request.headers["user-agent"]
            });
        }    
    }