// from data.js
var tbody = d3.select("tbody");  // select <tbody>

// read Object entries from data.js
data.forEach((ufoDict) => {
    var row = tbody.append("tr");
    console.log(row);
    Object.values(ufoDict).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // add a function to seach on date
  function handleClick() {
    // get the value from the datetime field to search thru the data
    var input = d3.select("#datetime").property("value");
    if (input == "") {
      input = document.getElementById("datetime").placeholder;  // read the placeholder value if there is no input
    }
    console.log(input);

    // now filter the data that matching the date
    var filterData = data.filter((ufo)=>ufo.datetime == input);
    console.log(filterData);
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(input) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  d3.select("#filter-btn").on("click", handleClick);