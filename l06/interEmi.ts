var werte:number[][] = [
    [2008, 1028.0, 1132.6, 4965.7, 6600.4, 12954.7, 1993.0],
    [2009, 1041.9, 1093.1, 4616.4, 6139.9, 13246.6, 1875.7],
    [2010, 1072.1, 1164.2, 4705.8, 6375.8, 13986.8, 1939.1],
    [2011, 1073.7, 1215.5, 4615.2, 6262.8, 14860.1, 2035.2],
    [2012, 1107.1, 1262.0, 4541.5, 5998.9, 15308.8, 2063.2],
    [2013, 1134.4, 1308.9, 4436.9, 6167.0, 15660.2, 2014.7],
    [2014, 1167.1, 1331.3, 4202.0, 6268.9, 15787.7, 2027.6],
    [2015, 1174.5, 1321.7, 4191.6, 6048.7, 15877.0, 1986.8],
    [2016, 1192.1, 1294.7, 4247.3, 5938.3, 15984.0, 1997.4],
    [2017, 1207.0, 1279.2, 4278.7, 5920.5, 16274.3, 2001.3],
    [2018, 1235.5, 1261.5, 4209.3, 6035.6, 16274.1, 2100.5]
];

var namelist:string[] = ["Year", "Africa", "South America", "Europe", "North America", "Asia", "Australia"];

function changeEverything(id:number){
    var name:string = namelist[id];
    document.title = "Emission in " + name;
    document.getElementById("titleRegion").innerHTML = name;
    document.getElementById("recentTotal").innerHTML = werte[werte.length-1][id].toString()+"kg";
    document.getElementById("recentRelative").innerHTML = relativZuGesamt(id)+"%";
    document.getElementById("growthPercent").innerHTML = relativZuAnfang(id)+"%";
    document.getElementById("growthAbs").innerHTML = absolutZuAnfang(id)+"kg";
    document.getElementById("chart").style.height = relativZuGesamt(id)+"%";
}

function relativZuAnfang(id:number) {
    return (((werte[0][id] - werte[werte.length - 1][id]) / werte[0][id]) * -100).toFixed(1).toString();
}
function absolutZuAnfang(id:number) {
    return (werte[werte.length - 1][id] - werte[0][id]).toFixed(1).toString();
}
function relativZuGesamt(id:number) {
    var summe = 0;
    for (var i = 0; i < werte[werte.length - 1].length; i++) {
        summe += werte[werte.length - 1][i];
    }
    return ((werte[werte.length - 1][id] / summe) * 100).toFixed(1).toString();
}