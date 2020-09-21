var tbody = d3.select("tbody");  // select <tbody>

// read Object entries from data.js and fill up the table (within <tbody>)
data.forEach((ufoDict) => {
    var row = tbody.append("tr");
    Object.values(ufoDict).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Add a function to handle search button click
  function handleClick() {
    var input = d3.select("#datetime").property("value"); // read the datetime field to search thru the data
    if (input == "") {
      input = document.getElementById("datetime").placeholder;  // read the placeholder value if there is no input
    }
    console.log(input);

    // delete the rows to make it clean to add the new filter result
    table = document.getElementsByTagName("tbody")[0];
    for(var i = table.rows.length-1; i >= 0; --i) {
      table.deleteRow(i);
    }
   
    var filterData = data.filter((ufo)=>ufo.datetime == input);  // filter the data based on the date input
    console.log(filterData);
    filterData.forEach((ufoDict) => {
      var row = tbody.append("tr");
      Object.values(ufoDict).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }

  d3.select("#filter-btn").on("click", handleClick);