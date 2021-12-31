var qlnv = new QuanLyNhanVien();
var validation = new Validation();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

//Hàm lấy thông tin từ form
getEle("btnThemNV").onclick = function () {
    var isValid = true;

    var acc = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var pass = getEle("password").value;
    var ngay = getEle("datepicker").value;
    var luong = getEle("luongCB").value;
    var chucvu = getEle("chucvu").value;
    var gio = getEle("gioLam").value;

    isValid &= validation.checkEmpty(acc, "tbTKNV", "Tài Khoản Không Để Trống") && validation.checkID(acc, "tbTKNV", "Tài Khoản Bị Trùng", qlnv.mangNV);
    isValid &= validation.checkEmpty(name, "tbTen", "Họ Và Tên Không Để Trống");
    isValid &= validation.checkEmpty(email, "tbEmail", "Email Không để trống");
    isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật Khẩu Không Để Trống");
    isValid &= validation.checkEmpty(ngay, "tbNgay", "Ngày Làm Không Để Trống");
    isValid &= validation.checkEmpty(luong, "tbLuongCB", "Lương Cơ Bản Không Để Trống");
    // isValid &= validation.checkEmpty(chucvu,"tbChucVu","Chọn Chức Vụ");
    isValid &= validation.checkEmpty(gio, "tbGiolam", "Giờ Làm Không Để Trống");

    if (isValid) {
        var nv = new NhanVien(acc, name, email, pass, ngay, Number(luong), chucvu, gio);
        nv.tinhTongLuong();
        nv.xepLoaiNV();
        console.log(nv);
        qlnv.them(nv);
        console.log(qlnv.mangNV);
        listTable(qlnv.mangNV);
        setLocalStorage(qlnv.mangNV);
    }



}
// tableDanhSach
function listTable(mang) {
    var content = "";
    mang.map((nv, index) => {
        var tr = `<tr>
            <td>${nv.accNV}</td>
            <td>${nv.nameNV}</td>
            <td>${nv.emailNV}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucvu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNv}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNV('${nv.accNV}')">Xóa</button>
            </td>
        </tr>`;
        content += tr;
    });
    getEle("tableDanhSach").innerHTML = content;
}

function xoaNV(id) {
    qlnv.xoa(id);
    setLocalStorage(qlnv.mangNV);
    listTable(qlnv.mangNV);
}





getEle("btnCapNhat").onclick = function () {
    var acc = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var pass = getEle("password").value;
    var ngay = getEle("datepicker").value;
    var luong = getEle("luongCB").value;
    var chucvu = getEle("chucvu").value;
    var gio = getEle("gioLam").value;

    var nv = new NhanVien(acc, name, email, pass, ngay, Number(luong), chucvu, gio);
    nv.tinhTongLuong();
    nv.xepLoaiNV();
    qlnv.capNhap(nv);

    listTable(qlnv.mangNV);
    setLocalStorage(qlnv.mangNV);
}
 
function setLocalStorage(mang) {
    localStorage.setItem("DSNV", JSON.stringify(mang));
}
function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        qlnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        listTable(qlnv.mangNV);
    }
}