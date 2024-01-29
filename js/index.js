// Bài 1: Tính lương nhân viên làm việc 26 ngày

// B1: Input
// lương 1 ngày: 100000
// số ngày làm

// B2: xử lí
// lương = lương 1 ngày * số ngày làm

// B3: output 
// tiền lương
var luongMotNgay = 100000;
var soNgayLam = 26;
var luong =luongMotNgay * soNgayLam;
console.log("tiền lương nhận được là: ", luong);

// Bài 2: Tính giá trị trung bình của 5 số 5, 10, 15, 20, 25

//  B1: Input
//  nhập 5 số thực

//  B2: xử lí
//   trung bình= (5+10+15+20+25)/5;

//  B3: Output 
//  xuất giá trị trung bình
var soThuc1 = 5;
var soThuc2 = 10;
var soThuc3 = 15;
var soThuc4 = 20;
var soThuc5 = 25;
var trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5)/5;
console.log("Giá trị trung bình của 5 số thực là: ",trungBinh);

// Bài 3: Quy đổi 5 USD sang VND

// B1: Input
// Nhập giá tiền USD

// B2: Xử lí
// GiáVND = giá USD * 23500

// B3: Output
// Xuât ra màn hình giá trị VND
var VND = 5 * 23500;
console.log("5 USD bằng:",VND );

//Bài 4: Tính chu vi và diện tích hình chữ nhật với chiều dài = 10, chiều rộng = 7

//B1: Input
//chieu dai = 10, chieu rong = 7

//B2: Xử lí
//Chuvi = (dài + rộng)*2
//dien tich = dài * rộng

//B3: Output
//Xuất ra màn hình kết quả chu vi và diện tích hình chữ nhật

var chieuDai= 10;
var chieuRong= 7;
var chuVi= (chieuDai + chieuRong)*2;
var dienTich= chieuDai * chieuRong;
console.log("Chu vi hình chữ nhật là: ",chuVi);
console.log("Diện tích hình chữ nhật là: ",dienTich);

//Bài 5: Tính tổng 2 ký số của số n

//B1: Input
//n=83 2 ký số 83= 8+3

//B2: Xử lí
//hàng đơn vị = n%10
//hàng chục = n/10
//tong 2 ký số = đơn vị + chục

//B3: Output
//xuất ra giá trị tổng 2 ký số\
var n= 83
var donVi = n%10;
var chuc = n/10;
var tong= donVi + chuc;
console.log("Tổng 2 ký sô của số 83 là: ",tong);