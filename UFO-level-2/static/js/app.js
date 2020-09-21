// from data.js
var tbody = d3.select("tbody");  // select <tbody>
var inputDate = "";

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
  var inputDate = d3.select("#datetime").property("value");
  var inputCity = d3.select("#cityId").property("value");
  var inputState = d3.select("#stateId").property("value");
  var inputCountry = d3.select("#countryId").property("value");
  var inputShape = d3.select("#shapeId").property("value");

  //inputDate = document.getElementById("datetime").placeholder;  // read the placeholder value if there is no input when the search button is clicked
  console.log(inputDate);
  console.log(inputCity);
  console.log(inputShape);

  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  var isData = false;

  // add field values for drop down boxes
  city =[]; 
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    td1 = tr[0];
    dateValue = td[0];
    if (td[0]) {  // check if first column (date) is available - not working on an empty form
      if ( (td[0].textContent == inputDate) || (inputDate == "")) {   // continue only if Date data is available
          city[i] = td[1].textContent;
          isData = true;  // mark it true if date is matching. The following logic will set it to false, if any of the input field doesn't match
      }

        if (inputCity) { 
          if ( td[1].textContent.toUpperCase() != inputCity.toUpperCase()) { 
            isData = false;
          }   
        }

        if (inputState) {  // check if state data is entered
          if ( td[2].textContent.toUpperCase() != inputState.toUpperCase()) { 
            isData = false;
          } 
        }

        if (inputCountry) {
          if ( td[3].textContent.toUpperCase() != inputCountry.toUpperCase()) { 
            isData = false;
          } 
        }

        if (inputShape) {
          if ( td[4].textContent != inputShape) { 
            isData = false;
          } 
        }
    }
   
    if ( isData) {  // display the records that match the input criteria
      tr[i].style.display = "";
    }
    else {
      tr[i].style.display = "none";
    }
  } //end of for      
  
}

// just wamted to add one drop down list
function fillShape() {
  inputDate = d3.select("#datetime").property("value");

  var filterData = [];

  if (inputDate.length > 0)
  {
    filterData = data.filter((ufo)=>ufo.datetime == inputDate);
  }
  else
  {
    filterData = data;
  }
  
  var select = document.getElementById("shapeId");
  select.options.length=0;
  var el = document.createElement("option");
   el.textContent ="";
   el.value = "";
   select.appendChild(el);

  
  //var filterData = data.filter((ufo)=>ufo.datetime == inputDate);  // filter the data based on the date input
  
  var shape = filterData.map(function(item) // get the shape values in an array
  {
    return item.shape;
  });
  
  console.log(shape);
  shape.forEach((item, index) => {
      // add to the dropdown list only if it's unique;
      if (shape.indexOf(item) == index ) {
        console.log('$ufo')
        var el = document.createElement("option");
        el.textContent =item;
        el.value = item;
        select.appendChild(el);
      }
  });
}

d3.select("#filter-btn").on("click", handleClick);