/*

Terminus Nation JSON template

calendar options:
- BY: Beacon Year
- KW: Kvahk'er'Weplec
- RD: Republic Date
- RY: Resistance Year
- IC: Initial Contact
- CD: CyberDomini
- UD: Union Day

year: whole integer
month: 0 if not defined, otherwise 1-12
day: 0 if not defined, otherwise 1-31 (depending on month)

race:
- general event
- human
- Aurost
- Cloudan
- Sun Serpent
- Shaper
- minor race

faction: obvious; this is what going to be the main definer
		 (in case of minor races, this is the race definer too)
		 (can be used for important planets, too)
		 (also optional - in that case, use "unspecified")
		 (when conflicts come out, write the ATTACKER to this field)

context: differentiating inventions, culture and such

content: description of the event


*/

var timelineJSON = [


    {
        calendar:"BY", year:-10/**/000/**/000/**/000, month:0, day:0,
        race:"Shaper", faction:"unspecified", context:"main",
        content:"Earliest known evidence of the existence of the Shapers.",

    },




    {
        calendar:"BY", year:-150/**/000/**/000, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"The cult of Vermyys emerges in Shaper culture."
    },



    {
        calendar:"BY", year:-1/**/000/**/000/**/000, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"Estimated age of the oldest Planet Monument."
    },







    {
        calendar:"BY", year:-400/**/000/**/000, month:0, day:0,
        race:"Shaper", faction:"Kidar Manedorgtem", context:"main",
        content:"Kidar Manedorgtem unifies the Shaper race within the Filament Supercluster.",

    },









    {
        calendar:"BY", year:-100/**/000/**/000, month:0, day:0,
        race:"Shaper", faction:"unspecified", context:"main",
        content:"Earliest estimated date of the Shaper Ascension into the Starless Space.",

    },







    {
        calendar:"BY", year:-72000000, month:0, day:0,
        race:"Cloudan", faction:"unspecified", context:"main",
        content:"Cloudan race evolves from an ancient metal-silicon hybrid based "+
                "avian predator species, by accomodating to a pseudo-ground lifeform.",

    },


    {
        calendar:"BY", year:-70000000, month:0, day:0,
        race:"Shaper", faction:"unspecified", context:"main",
        content:"Latest estimated date of the Shaper Ascension.",

    },

    {
        calendar:"BY", year:-68000000, month:0, day:0,
        race:"Cloudan", faction:"unspecified", context:"main",
        content:"A Planet Monument Core hits Sme, the Cloudan homeworld. The resulting "+
                "ecological disaster almost exterminates the Cloudan race, with only the "+
                "toughest and solely the flightless members have survived.\n\n "+
                "This event has defined both the cultural and the genetic traits of the "+
                "race for the rest of their history.",

    },














/* Beacon World Era */

    {
        calendar:"BY", year:-30000, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"The beginning of the Beacon World Era. The estimated age of the youngest Planet Monument."
    },
    {
        calendar:"BY", year:1, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"The most recent Beacon World Activation Event. Ezbekuar's Gate is activated by Cloudan forces, "+
		"teleporting them to Regh. Majority of Cloudan, Sun Serpent and minor beings are destroyed.\n\n"+
        "With the last surviving Shaper beings leaving the Cosmic Disk, every active evidence of the Shaper "+
        "influence disappears from the galaxy.",
    },









/* Serpent Resurrection */












    {
        calendar:"KW", year:1, month:0, day:0,
        race:"Sun Serpent", faction:"Sun Serpent Empire", context:"main",
        content:"The beginning of the in-galaxy history of the Sun Serpents; an event they call the Serpent " +
		"Resurrection. After defeating the siege of both the Cloudans and the Aurosts, the remaining " +
		"Sun Serpents settle down on a planet only known as Seupi-wuewu (meaning City to the Star of " +
		"the Sky in their language), and build their first Sun Temple.",
    },
    {
        calendar:"KW", year:32142, month:0, day:0,
        race:"Cloudan", faction:"unspecified", context:"main",
        content:"Beginning of the all-out warfare between the Cloudans and the Aurosts and the Sun Serpents, " +
		"known as the Immortal War.",
    },
    {
        calendar:"KW", year:32908, month:0, day:0,
        race:"Cloudan", faction:"unspecified", context:"main",
        content:"End of the Immortal War.",
    },
    {
        calendar:"KW", year:84661, month:0, day:0,
        race:"Sun Serpent", faction:"Ontenedian tribes", context:"main",
        content:"Beginning of the Age of Tribes on Ontenedis.",
    },











/* Human Dawn */












    {
        calendar:"KW", year:97701, month:0, day:0,
        race:"human", faction:"unspecified", context:"main",
        content:"The first man-made space ship that was able to cross the Frontier lands with 100 "+
		"thousand cryosleeping people on planet Volada.",
    },
    {
        calendar:"KW", year:97746, month:0, day:0,
        race:"Cloudan", faction:"Cloudan Confederacy", context:"main",
        content:"The Cloudan Confederacy allies with the Dark Machine.",
    },
    {
        calendar:"KW", year:97853, month:0, day:0,
        race:"Cloudan", faction:"Cloudan Confederacy", context:"main",
        content:"The Cloudan Confederacy launches another war against the rival races.",
    },


    {
        calendar:"RD", year:1, month:0, day:0,
        race:"human", faction:"Republic", context:"main",
        content:"The declaration of the First Democratic Union on Republic Haven, the earliest lawful ancestor of the Republic.",
    },











    {
        calendar:"RD", year:490, month:0, day:0,
        race:"Cloudan", faction:"Cloudan Confederacy", context:"main",
        content:"End of the Second Immortal War.",
    },





    {
        calendar:"RD", year:2830, month:0, day:0,
        race:"human", faction:"Republic", context:"main",
        content:"Date of the Jade Incident.",
    },










/* Resistance Rise */












    {
        calendar:"RD", year:3426, month:0, day:0,
        race:"human", faction:"Free Heaven Movement", context:"main",
        content:"Rest In Peace Movement, political ancestor of the Free Heaven Movement "+
		          "besieges Republic Haven the first time. First year of Resistance Year calendar.",
    },







    {
        calendar:"RD", year:3609, month:0, day:0,
        race:"human", faction:"Free Heaven Movement", context:"main",
        content:"Foundation of the Free Heaven Movement.",
    },










    {
        calendar:"RD", year:4431, month:0, day:0,
        race:"human", faction:"unspecified", context:"main",
        content:"The first colonists settle down on Neocairo.	",
    },
    {
        calendar:"RD", year:4485, month:0, day:0,
        race:"human", faction:"Starcloud Nation", context:"main",
        content:"Starcloud Nation is formed.",
    },








    {
        calendar:"RD", year:4832, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Initial contact of Republic units with the nations of Augoma - first year of "+
		"Augoman nations (until the Great Augoma System Siege), and later, the Future Empire.",
    },





    {
        calendar:"RD", year:5000, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Foundation of Augopia, a hidden technology-driven sanctuary buried "+
		"deeply below a mountainous island of the Archipelago."
    },






    {
        calendar:"RD", year:5248, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"The Planet Monument of Augoma closes the connection with Republic planets."
    },




    {
        calendar:"RD", year:5359, month:0, day:0,
        race:"human", faction:"People of Neocairo", context:"main",
        content:"The first Pharaoh King unifies the shattered lordships, thus establishing the Old Kingdom in Neocairo.",
    },











    {
        calendar:"RD", year:6402, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Boson dies; he resurrects on Vekka.",
    },



    {
        calendar:"RD", year:6516, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"Aurost surveillance detects that Beacon World will be depleted within less "+
                "than 1500 years, indicating the approach of the activation of the Gate.",
    },



    {
        calendar:"RD", year:6691, month:0, day:0,
        race:"general", faction:"unspecified", context:"main",
        content:"Adao Beran founds the Boson Conundrum.",
    },

    {
        calendar:"RD", year:6704, month:0, day:0,
        race:"human", faction:"Free Heaven Movement", context:"main",
        content:"The Old Kingdom of Neocairo becomes a member of the Free Heaven Movement.",
    },
    {
        calendar:"RD", year:6721, month:0, day:0,
        race:"human", faction:"Justice Empire", context:"main",
        content:"Born of the Way of Justice.",
    },

    {
        calendar:"RD", year:6746, month:0, day:0,
        race:"human", faction:"Justice Empire", context:"main",
        content:"Gboski of Augoma becomes the first country that applies Way of Justice in practice. "+
		"The Justice Party brings an end to endless inflation in post-war Gboski.",
    },




/* TechWar Age */








    {
        calendar:"RD", year:6833, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Creation of the 'Internet of Augoma'.",
    },
    {
        calendar:"RD", year:6834, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"End of the Afterwar Age on Augoma.",
    },
    {
        calendar:"RD", year:6857, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Establishment of the New Age Protocol, a variation of DFTP; complete control over the internet.",
    },
    {
        calendar:"RD", year:6861, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Creation of Hackfield.",
    },
    {
        calendar:"RD", year:6863, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Declaration of the Coalition.",
    },
    {
        calendar:"RD", year:6868, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"The Anubis Incident. The first year of history within the Church (1CD, where CD means CyberDomini).",
    },
    {
        calendar:"RD", year:6869, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Remaining Hackfield Dev Team divisions take control, and eventually merge into the supernation of Future Empire.",
    },
    {
        calendar:"RD", year:6870, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"Hackers who could decrypt portions of the Anubis codes reveal its acts, and found the Church of the Cybergod.",
    },
    {
        calendar:"RD", year:6871, month:0, day:0,
        race:"Sun Serpent", faction:"Sun Serpent Empire", context:"main",
        content:"The Sun Serpent Empire allies with Anubis.",
    },
    {
        calendar:"RD", year:6873, month:0, day:0,
        race:"human", faction:"People of Augoma", context:"main",
        content:"After a bloody civil war, the planet is unified under the FE-COTC Unity Pact.",
    },

    {
        calendar:"RD", year:6883, month:0, day:0,
        race:"human", faction:"Justice Empire", context:"main",
        content:"Justice Party reemerges within Esmos country of Augoma. Anti-Anubis voices increasing.",
    },








    {
        calendar:"RD", year:6914, month:5, day:15,
        race:"human", faction:"Justice Empire", context:"main",
        content:"The four countries following the Way of Justice on Augoma sign an union treaty, forming "+
		"a superblock of countries. Justice Empire is officially formed. (2032IC)",
    },
    {
        calendar:"RD", year:6917, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Ladykiller dies; he resurrects on Xyronex.",
    },
    {
        calendar:"RD", year:6962, month:0, day:0,
        race:"AI", faction:"Anubis", context:"main",
        content:"Augopia of Augoma is found, robbed and conquered by Anubis. Extreme technological advancement on its side.",
    },
    {
        calendar:"RD", year:6964, month:5, day:15,
        race:"human", faction:"Justice Empire", context:"main",
        content:"On the celebration of the 50th year anniversary of the existence of the Justice Empire, the last Cybergod "+
		"Church and Red Fist prisoners within the block are executed.",
    },
    {
        calendar:"RD", year:6965, month:0, day:0,
        race:"AI", faction:"Anubis", context:"main",
        content:"Anubis (after an unsuccessfull siege) finally leaves the solar system of Augoma and starts building its so-called 'chapel'.",
    },












    {
        calendar:"RD", year:7013, month:0, day:0,
        race:"human", faction:"Shadow Legion of Caidox", context:"main",
        content:"The alliance of settled mercenaries and local Future Empire scientists form "+
                "the Shadow Legion on planet Caidox.",
    },









    {
        calendar:"RD", year:7103, month:0, day:0,
        race:"human", faction:"People of Anberoi", context:"main",
        content:"Anberoi is colonized.",
    },





    {
        calendar:"RD", year:7420, month:0, day:0,
        race:"human", faction:"People of Anberoi", context:"main",
        content:"Date of the Anberian Alien War & the Black Dawn.",
    },

    {
        calendar:"RD", year:7430, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Hackerboy dies; he resurrects on Bhohavo.",
    },
    {
        calendar:"RD", year:7431, month:8, day:17,
        race:"human", faction:"Church of the Cybergod", context:"main",
        content:"The Cybergod Church defeats the Old Kingdom and takes control over Neocairo. Free Heaven Movement declares war on the Church.",
    },
    {
        calendar:"RD", year:7431, month:8, day:21,
        race:"human", faction:"Free Heaven Movement", context:"main",
        content:"Following the takeover of Neocairo, Free Heaven Movement declares war on the Church of the Cybergod.",
    },

    {
        calendar:"RD", year:7460, month:0, day:0,
        race:"human", faction:"Union Fort", context:"main",
        content:"The Declaration of the One Union Fort of Anberoi; official foundation of Union Fort.",
    },






    {
        calendar:"RD", year:7528, month:0, day:0,
        race:"human", faction:"Nation of the Independent Ghost Hunter Troops", context:"main",
        content:"By Jacob becoming 18, the Minkren dynasty is officially founded.",
    },

    {
        calendar:"RD", year:7534, month:0, day:0,
        race:"human", faction:"Shadow Legion of Caidox", context:"main",
        content:"Caidox, capital city of the Shadow Legion falls, making an end to the empire. Nation of "+
                "the Independent Ghost Hunter Troops is founded.",
    },








    {
        calendar:"RD", year:7690, month:0, day:0,
        race:"human", faction:"unspecified", context:"main",
        content:"Red is born.",
    },





    {
        calendar:"RD", year:7702, month:0, day:0,
        race:"human", faction:"Nation of the Independent Ghost Hunter Troops", context:"main",
        content:"Adam Minkren, the leader of the NIGHT disappears after a military operation.",
    },
    {
        calendar:"RD", year:7709, month:0, day:0,
        race:"human", faction:"unspecified", context:"main",
        content:"Red dies within the galaxy; he resurrects on Mieivo. ",
    },
    {
        calendar:"RD", year:7730, month:0, day:0,
        race:"human", faction:"Union Fort", context:"main",
        content:"Union Fort is assaulted by the Republic and the Justice Empire; tourism, immigration and trade reduced.",
    },








    {
        calendar:"RD", year:7844, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Anput is born.",
    },
    {
        calendar:"RD", year:7863, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Jumper is born.",
    },
    {
        calendar:"RD", year:7870, month:5, day:11,
        race:"human", faction:"Scarab Node", context:"main",
        content:"Roimata Thueban Ramil founds the Scarab Node after becoming pregnant with Anjema.",
    },
    {
        calendar:"RD", year:7871, month:2, day:27,
        race:"human", faction:"unspecified", context:"borns",
        content:"Kebechet is born.",
    },
    {
        calendar:"RD", year:7877, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Hammer dies; he resurrects on Galaris.",
    },
    {
        calendar:"RD", year:7879, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Amazon is born on Ontenedis.",
    },
    {
        calendar:"RD", year:7884, month:0, day:0,
        race:"human", faction:"unspecified", context:"borns",
        content:"Jelly is born.",
    },
    {
        calendar:"RD", year:7886, month:3, day:0,
        race:"human", faction:"Scarab Node", context:"main",
        content:"Kebechet takes control over the Scarab Node, after the death of her mother.",
    },
    {
        calendar:"RD", year:7898, month:0, day:0,
        race:"human", faction:"Jade Legion", context:"main",
        content:"Jade Legion's conflict against the Greed Squad intensifies.",
    },
    {
        calendar:"RD", year:7899, month:0, day:0,
        race:"human", faction:"People of Ontenedis", context:"main",
        content:"Split of the Insect Tamer Tribe on Ontenedis.",
    },




/* Terminus Nation Invasion */

    {
        calendar:"RD", year:7901, month:0, day:0,
        race:"human", faction:"unspecified", context:"nontemps",
        content:"Drifter dies, he resurrects on Vel.",
    },

    {
        calendar:"UD", year:100000, month:0, day:0,
        race:"human", faction:"unspecified", context:"main",
        content:"Placeholder.",
    },

];
