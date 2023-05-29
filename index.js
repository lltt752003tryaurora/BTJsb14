// Bài tập 1: Tính tiền lương nhân viên
/*
input: số ngày làm, lương mỗi ngày
progress: dom tới thẻ input lấy dữ liệu số ngày và lương mỗi ngày
từ đó, dùng công thức để tính ra số lương tổng
output: tính ra tiền lương của nhân viên
*/

document.getElementById("tinhLuong").onclick = function () {
  var luongNgay = document.getElementById("luongNgay").value;
  var soNgay = document.getElementById("soNgay").value;
  var tongLuong = luongNgay * soNgay;
  console.log(tongLuong);
  var ketQua = tongLuong.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  });

  var ketQua = (document.getElementById("xuatKetquaLuong").innerHTML =
    "Tổng lương của nhân viên này là: " + ketQua);
};

// Bài tập 2: Tính giá trị trung bình
/*
input: nhập data cho 5 số
progress: dom tới tửng thẻ input láy dữ liệu từng số rồi dùng công thức
để tính ra giá trị trung bình
output: tính giá trị trung bình 5 số, hiển thị cho người dùng
*/

document.getElementById("tinhTB").onclick = function () {
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var num4 = document.getElementById("num4").value * 1;
  var num5 = document.getElementById("num5").value * 1;
  var GTTB = (num1 + num2 + num3 + num4 + num5) / 5.0;
  var Ketqua = (document.getElementById("xuatketquaTB").innerHTML =
    "Giá trị trung bình của 5 số là: " + GTTB);
};

//Bài tập 3: Quy đổi tiền
/*
input: nhập số tiền (USD) muốn quy đổi sáng VND
progress: dom tới thẻ input lấy giá tiền để quy đổi bằng công thức nhân
output: quy đổi tiền, hiển thị cho người dùng
*/

document.getElementById("quyDoiTien").onclick = function () {
  var giaTienUSD = document.getElementById("soTienUSD").value * 1;
  var giaTienVND = giaTienUSD * 23500;
  var giaTien = giaTienVND.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  });
  var ketQua = (document.getElementById("kqQuyDoiTien").innerHTML =
  "Giá trị quy đổi từ " + giaTienUSD +" USD là: " +  giaTien);
}

//Bài tập 4: Tính diện tích, chu vi hình chữ nhật
/*
input: nhập chiều dài, chiều rộng
progress: dom tới thẻ input lấy dữ liệu giá trị của 2 cạnh
output: tính diện tích, chu vi hình chữ nhật
*/
document.getElementById("tinhToan").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  var ketqua = document.getElementById("xuatDienTichChuVi").innerHTML =
  "Dien tich: " + dienTich + "; Chu vi: " + chuVi;
}

//Bài tập 5: Tính tổng kí số
/*
input: số có 2 chữ số
progress: dom tới thẻ input lấy dữ liệu giá trị của số đó để xác định
giá trị của 2 chữ số đó
output: tính tổng 2 kí số
*/

document.getElementById("tinhkyso").onclick = function () {
  var soLieu = document.getElementById("soLieu").value * 1;
  var donvi = soLieu % 10;
  var hangChuc  = Math.floor(soLieu / 10);
  var tongkiso = donvi + hangChuc;
  var ketqua = document.getElementById("xuatKiso").innerHTML = 
  "Kết quả kí số: " + tongkiso;
}