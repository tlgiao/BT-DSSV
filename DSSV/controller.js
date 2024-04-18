function renderDssv(svArray) {
  var contentHTML = "";
  for (var i = 0; i < svArray.length; i++) {
    var sv = svArray[i];
    var trString = ` <tr>
    <td>${sv.ma}</td>
    <td>${sv.ten}</td>
    <td>${sv.email}</td>
    <td>${sv.tinhDTB()}</td>
    <td><button onclick="xoaSv('${sv.ma}')" class='btn btn-danger'>Xoa</button>
    <button onclick="suaSv('${sv.ma}')" class='btn btn-dark'>Sua</button>
    </td>
    </tr> `;
    contentHTML += trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function layThongTinTuForm() {
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var ly = document.getElementById("txtDiemLy").value * 1;
  var hoa = document.getElementById("txtDiemHoa").value * 1;
  var sv = new SinhVien(ma, ten, email, matKhau, toan, ly, hoa);
  return sv;
}
