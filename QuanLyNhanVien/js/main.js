var qlnv = new QuanLyNhanVien();

getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

//Hàm lấy thông tin từ form
getEle("btnThemNV").onclick=function(){
    var acc = getEle("tknv").value;
    var name = getEle("name").value;
    var email = getEle("email").value;
    var pass = getEle("password").value;
    var ngay = getEle("datepicker").value;
    var luong = getEle("luongCB").value;
    var chucvu = getEle("chucvu").value;
    var gio = getEle("gioLam").value;

    var sv = new NhanVien(acc, name,email,pass,ngay,Number(luong),chucvu,gio);
    sv.tinhTongLuong();
    sv.xepLoaiNV();
    console.log(sv);
    qlnv.them(sv);
    console.log(qlnv.mangNV);
    listTable(qlnv.mangNV);
    setLocalStorage(qlnv.mangNV);

}
// tableDanhSach
function listTable(mang){
    var content="";
    mang.map((sv, index) => {
        var tr = `<tr>
            <td>${sv.accNV}</td>
            <td>${sv.nameNV}</td>
            <td>${sv.emailNV}</td>
            <td>${sv.ngayLam}</td>
            <td>${sv.chucvu}</td>
            <td>${sv.tongLuong}</td>
            <td>${sv.loaiNv}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaSV('${sv.maSV}')">Xóa</button>
            </td>
            <td>
            <button class="btn btn-info" onclick="xemSV('${sv.maSV}')">Xem Chi Tiết</button>
        </td>
        </tr>`;
        content += tr;
    });
    getEle("tableDanhSach").innerHTML = content;
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