function Validation(){
    //Kiểm Tra rỗng
    this.checkEmpty = function (value, spanID, message) {
        // trim() xóa dấu khoảng trắng ở đầu và sau đoạn chữ
        if (value.trim() != "") {
            //Nếu hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkID = function (value, spanID, message, mang) {
       
        var isExist = false;

        isExist = mang.some(function (nv) {
            return nv.accNV == value;
        });
        if (isExist) {
            //mã bị trùng
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        // nếu hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    
}