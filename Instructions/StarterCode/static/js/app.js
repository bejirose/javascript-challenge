// from data.js
//var tableData = data;
var tbody = d3.select("tbody");
// 
data.forEach((ufoDict) => {
    var row = tbody.append("tr");
    console.log(row);
    Object.entries(ufoDict).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      console.log('value');
    });
  });
