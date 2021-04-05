// ----------------------Table Data --------------------------

let tableData = [
  {r11: "Black Pantera", r12: 66, r13: 53},
  {r11: "Captain America", r12: 79, r13: 137},
  {r11: "Captain Marvel", r12: 97, r13: 26},
  {r11: "Hulk", r12: 5, r13: 49},
  {r11: "Iron Man", r12: 88, r13: 48},
  {r11: "Thanos", r12: 99, r13: 1000},
  {r11: "Thor", r12: 95, r13: 1000},
  {r11: "Yong-Rogg", r12: 73, r13: 52}
];

let tHeadString = ["Name", "Strength", "Age"];

// ----------------------Creatinng Table and Adding Classes --------------------------
function tableCreate(){
  var table = document.createElement("TABLE");
  table.classList.add('table');
  document.body.append(table);

  let tHead = document.createElement("THEAD");
  tHead.classList.add("tHead");
  table.append(tHead);

  let tBody = document.createElement("TBODY");
  tBody.classList.add("tBody");
  table.append(tBody)

  let tr = document.createElement("TR");
  tHead.append(tr);

  for(let i = 0; i < tHeadString.length; i++){
    var headString = document.createTextNode(tHeadString[i]);
    tHead.appendChild(headString);
    }
  for(let j = 0; j < tableData.length; j++){
    var tData = document.createTextNode(tableData[j]);
    tBody.appendChild(tData);
    for(let k = 0; k < Object.keys(tableData[0]); k++){
      
    }
  }
}

tableCreate();