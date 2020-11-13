function myFunction() {
  var x = document.forms["data-plat"];
  var text = "";
  var i;
  for (i = 0; i < 2; i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

var i = 1;
function tableFunction() {
  var x = document.forms["data-plat"];
  var table = document.getElementById("tabel-parkir");
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = x.elements[0].value;
  cell2.innerHTML = x.elements[1].value;
  i++;
}

//console.log(x.elements[0]);
