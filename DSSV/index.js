var dssv = [];

var dataJson = localStorage.getItem("DSSV");
console.log("dataJson: ", dataJson);

if (dataJson !== null) {
  var dataRaw = JSON.parse(dataJson);
  for (var i = 0; i < dataRaw.length; i++) {
    var data = dataRaw[i];
    var sv = new SinhVien(
      data.ma,
      data.ten,
      data.email,
      data.matKhau,
      data.toan,
      data.ly,
      data.hoa
    );
    dssv.push(sv);
  }
  console.log("dssv: ", dssv);
  renderDssv(dssv);
}

function themSv() {
  var sv = layThongTinTuForm();
  dssv.push(sv);
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV", dataJson);
  renderDssv(dssv);
  resetForm();
}
function xoaSv(id) {
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  dssv.splice(index, 1);
  renderDssv(dssv);
}
function suaSv(id) {
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  var sv = dssv[index];
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemLy").value = sv.ly;
  document.getElementById("txtDiemHoa").value = sv.hoa;
  document.getElementById("txtMaSV").readOnly = true;
}
function capNhatSv() {
  var sv = layThongTinTuForm();
  console.log("sv: ", sv);
  var index = dssv.findIndex(function (item) {
    return item.ma == sv.ma;
  });
  dssv[index] = sv;
  renderDssv(dssv);
  resetForm();
}

function resetForm() {
  document.getElementById("formQLSV").reset();
  document.getElementById("txtMaSV").readOnly = false;
}
