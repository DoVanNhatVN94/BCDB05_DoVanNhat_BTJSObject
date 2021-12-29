function NhanVien(acc, name, email, pass, ngay, luong, chucvu, gio) {

    this.accNV = acc;
    this.nameNV = name;
    this.emailNV = email;
    this.passNV = pass;
    this.ngayLam = ngay;
    this.luongCB = luong;
    this.chucvu = chucvu;
    this.gioLam = gio;

    this.tongLuong = 0;
    this.tinhTongLuong = function () {
        if (this.chucvu == "Sếp")
            this.tongLuong = 3 * this.luongCB;
        else if (this.chucvu == "Trưởng phòng")
            this.tongLuong = 2 * this.luongCB;
        else if (this.chucvu == "Nhân viên")
            this.tongLuong = this.luongCB;
        else
            console.log("Sai Thông Tin");
    }
    this.loaiNv = "";
    this.xepLoaiNV = function () {
        if (this.gioLam >= 192)
            this.loaiNv = "Nhân Viên Xuất Xắc";
        else if (this.gioLam >= 176)
            this.loaiNv = "Nhân Viên Giỏi";
        else if (this.gioLam >= 160)
            this.loaiNv = "Nhân Viên Khá";
        else if (this.gioLam < 160)
            this.loaiNv = "Nhân Viên Trung Bình";
    }




}