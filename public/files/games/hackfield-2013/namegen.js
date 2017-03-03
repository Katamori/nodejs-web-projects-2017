var aimTypeSet=
[
"Public",
"Bulletin",
"Gas station",
"Personal",
"Shopping centre",
"Office",
"Hospital",
"Traffic",
"Private bank",
"Library",


"Science",
"Mall",
"National bank",
"Security",
"Police",
"Corporational",
"Infrastructure",
"University",
"Central",
"Military",
];

var buildingTypeSet=
[
"terminal",
"computer",
"network",
"database",
"facility",
"maintenance",

"research",
"system",
"surveillance",
"complex",
"mainframe",
"supercomputer",
];

var citySet=
[
"Tirana, Albania",
"Buenos Aires, Argentina",
"Rio De Janeiro, Brazil",
"Sao Paulo, Brazil",
"Melbourne, Canada",
"Toronto, Canada",
"Beijing, China",
"Hong Kong, China",
"Karlovy Vary, Czech Rep.",
"Praha, Czech Republic",
"Kairo, Egypt",
"Helsinki, Finland",
"Paris, France",
"Berlin, Germany",
"Hamburg, Germany",
"Koln, Germany",
"Salzburg, Germany",
"London, Great Britain",
"Glasgow, Great Britain",
"Cardiff, Great Britain",
"Budapest, Hungary",
"Pecs, Hungary",
"Gyor, Hungary",
"Debrecen, Hungary",
"Szeged, Hungary",
"Jakarta, Indonesia",
"Rome, Itely",
"Venice, Italy",
"Kuala Lumpur, Malaysia",
"Chisinau, Moldova",
"Oslo, Norway",
"Maebashi, Japan",
"Tokio, Japan",
"Manila, The Philippines",
"Krakow, Poland",
"Warszawa, Poland",
"Moscow, Russia",
"Kazan, Russia",
"Omsk, Russia",
"Vladivostok, Russia",
"Singapore, Singapore",
"Seoul, South Korea",
"Barcelona, Spain",
"Madrid, Spain",
"Valencia, Spain",
"Goteborg, Sweden",
"Stockholm, Sweden",
"Bern, Switzerland",
"Genf, Switzerland",
"Zurich, Switzerland",
"Kiev, Ukraine",
"New York, USA",
"Los Angeles, USA",
"San Fransisco, USA",
"Salt Lake City, USA",
];

//this function creates a random name for each levels you visit.
function nameGen(){

if (difficulty<6){
  var randAim = aimTypeSet[Math.floor(Math.random() * 10)];
  var randBld = buildingTypeSet[Math.floor(Math.random() * 5)];
} else {
  var randAim = aimTypeSet[Math.floor((Math.random() * 10)+10)];
  var randBld = buildingTypeSet[Math.floor((Math.random() * 5)+5)];
}

var randCity = citySet[Math.floor(Math.random() * 54)];


name = (randAim+" "+randBld+"\n"+randCity);

return name;
}
