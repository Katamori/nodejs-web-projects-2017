//FCC request
module.exports = {
        method: 'GET',
        path: '/freecodecamp/whoami',
        handler: function (request, reply) {   
            reply({
                ipaddress: request.info.remoteAddress, 
                language: request.headers["accept-language"].split(",")[0],
                software: request.headers["user-agent"]
            });
        }    
    }