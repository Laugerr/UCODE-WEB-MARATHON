let tHeadString = ["Name", "Strength", "Age"];
var tNameString = ["Black Panther", "Captain America", "Captain Marvel", "Hulk", "Iron Man", "Thanos", "Thor", " Yon-Rogg"];
let tStrengthString = [66, 79, 97, 80, 88, 78, 99, 95, 73];
let ageString = [53, 137, 26, 49, 48, 16, 1000, 1000, 52];

let data = [ tNameString,tStrengthString, ageString];


function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');

    // ------------------------ Table Header-------------------------
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    

    for(var i = 0; i < tHeadString.length; i++){
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(tHeadString[i]));
        td.className = tHeadString[i];
        td.onclick = function (){
          tableSort(tHeadString[i]);
        };
        tr.appendChild(td);
    }
    thead.appendChild(tr);
    // ------------------------ Table Body-------------------------
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < tNameString.length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < tHeadString.length; j++) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data[j][i]))
        tr.appendChild(td);
        
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(thead);
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
  tableCreate();



function tableSort(SortT){
  if(SortT === "Name"){
    tNameString.sort();
    document.querySelector('#notification').innerHTML= "Sorting by Name, order: ASC"
  }
}