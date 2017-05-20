//FCC timestamp microservice
module.exports = {
        method: 'GET',
        path: '/freecodecamp/timestamp-ms/{number}',
        handler: function (request, reply) {

            var input = request.params.number.replace(',','');
            var nat = null;
            var err = "No error found.";

            var months = 
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'];

            var set = input.split(" ");

            if(isNaN(input)){

                    //string validation
                    try{

                        //valid length
                        if(set.length != 3){ throw "Invalid length."}  

                        //month
                        if(typeof months.find(function(x){return x===set[0]}) === 'undefined'){ throw 'Not a valid month.'}

                        //day and year format
                        set.map(Number);
                        if(isNaN(set[1]) || isNaN(set[2])){ throw 'A valid number is missing.'}

                        //the day is not exceeding
                        if( set[1]>31 ||
                        (set[1]>30 && (set[0] == 'April' || set[0] == 'June' || set[0] == 'September' || set[0] == 'November')) ||
                        (set[1]>28+(set[2]%4==0) && set[0] == 'February')
                        ){ throw "Invalid day." }

                        //set the date object
                        var result = new Date(set[2], months.findIndex(function(x){return 1+(x===set[0])}), set[1]);
                        
                        //set the output
                        nat = input;
                        input = result.getTime()/1000;

                    }catch(e){ input = null; nat = null; err = e; }

            }else{
                var d = new Date(input*1000);
                nat = months[d.getMonth()+1]+" "+d.getDate()+", "+d.getFullYear();

            };

            reply({unix: input, natural: nat, error: err});
        }
}


