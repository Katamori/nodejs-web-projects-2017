//numbers related to the TN universe that are potentiall important
//always read 'meaning' like: "the number of"
var numbersTN = [

    {   meaning:"solar systems",
        value:900000   },

    {   meaning:"Planet Monuments",
        value:15720000,
        {
            //first subset: gas giant, rocky planet and moon distribution
            {
                subset:"celestial body type",

                {   meaning:"gas giants",
                    value:1217000   },
                {   meaning:"rocky planets",
                    value:4822000   },
                {   meaning:"moons",
                    value:9681000   }
            },

            //second subset: faction division
            {
                subset:"faction affiliation",

                {   meaning:"Republic colonies",
                    value:3000000   },
                {   meaning:"Free Haven Movement colonies",
                    value:2640000   },
                {   meaning:"Technological Warzone colonies",
                    value:1558000,

                    //distribution within the TWZ
                    {
                        {   meaning:"Red Fist colonies",
                            value:392000   },
                        {   meaning:"Justice Empire colonies",
                            value:438000   },
                        {   meaning:"Church of the Cybergod colonies",
                            value:256000   },
                        {   meaning:"Future Empire colonies",
                            value:372000   },
                    }
                },

                {   meaning:"Aurost Fatherland colonies",
                    value:1351000   },
                {   meaning:"Cloudan Confederacy colonies",
                    value:1933000   },
                {   meaning:"Anubis colonies (non-COTC)",
                    value:156000   },
                {   meaning:"colonies under Dark Machine occupation",
                    value:157000   }

                {   meaning:"everything else",
                    value:4025000   }
                //so far, 4,025,000 are the rest
                //these are autonomous, uninhabitable, undiscovered or otherwise outsider.

            }
        }



]
