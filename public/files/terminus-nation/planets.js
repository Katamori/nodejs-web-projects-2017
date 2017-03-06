/*

    Terminus Nation planet information JSON template

    name: generated with either "planetgen"

    1)
    planet type:
        1 - gas giant
        2 - rocky planet
        3 - some moon

    Planet Monument gates:
        - a fix number of gates between 1 and 15
        - a list of the destinations, gate types and supplementary info
        - gate type enumeration is available at http://terminusnation.com/spatial-warp

    2)
    inhabiting race: human, Clouan, Aurost, Sun Serpent, other, or uninhabited

    affiliation:
        - never add in case of uninhabited planet
        - mildly consequential from inhabiting race
        - humans: 7 main and countless minor options
            - 7 main: Republic/FHM/Red Fist/Justice Empire/COTC/Futire Empire
        - Cloudan: most likely Cloudan Confederacy but other options exist too
        - same rule of thumb for Aurosts and Sun Serpents

    inhabited since: value and calendar


*/
var planetData = [
    {   name: "Neocairo",
        type: 2,
        planetMonument:
        {
            gates:
            [
                { type: 1, data: {to: "Gaia-96"}                                },
                { type: 1, data: {to: "Noshak Ra"}                              },
                { type: 3, data: {to: "Krepo Nex"}                              },
                { type: 3, data: {to: "Vaiapel"}                                },
                { type: 5, data: {}                                             },
                { type: 6, data: {from: "Galadiuv", to: "Velpoza"}              },
                { type: 6, data: {from: "Gokhe", to: "Vuvek"}                   },
                { type: 6, data: {from: "Obcao", to: "Uasa"}                    },
                { type: 13, data: {open: [44,"day"], closed: [4,"day"] }        }
            ]
        },
        race: "human",
        faction: "Chuch of the Cybergod",
        since: [4431,"RD"]
    }

];

//a Planet object template for uses
function Planet(){

    var self = this;

    this.name = "";
    this.type = "";
    this.planetMonument = { size: 0, gates: {} };

    this.inhabited = false;
    this.race = "";
    this.faction = "";
    this.colonizedOn = "";

    this.fillData = function(dataset){

        if (typeof dataset.name !== "undefined"){ self.name = dataset.name }else self.name = "undefined";


        switch(dataset.type){
            case 1: self.name = "moon"; break;
            case 2: self.name = "planet"; break;
            case 3: self.name = "gas giant"; break;
            default: self.name = "undefined";
        }


        if (typeof dataset.planetMonument !== "undefined"){

            self.planetMonument.size = dataset.planetMonument.length;

            for(g=0;g<dataset.planetMonument.length-1;g++){
                self.planetMonument.gates.push(dataset.planetMonument.gates[g]);
            }
        }

        //if "faction" is missing, only then, planet is considered uninhabited
        if (typeof dataset.faction !== "undefined"){
            self.colonized = true;
            self.race = dataset.race;
            self.faction = dataset.faction;
            self.colonizedOn = convertDate(dataset.since[1], dataset.since[0], "BY");
        }


    }

}
