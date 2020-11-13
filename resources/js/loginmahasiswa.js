function validasi() {
  var x = document.forms["form-login"]["username"].value;
  var y = document.forms["form-login"]["password"].value;
  if (x == "") {
    alert("username tidak boleh kosong");
    return false;
  } else if (y == "") {
    alert("password tidak boleh kosong");
    return false;
  } else if (x === "apaya" && y === "apaya") {
    window.location = "informasi.html";
    return false;
  } else {
    alert("username atau password salah");
    return false;
  }
}
