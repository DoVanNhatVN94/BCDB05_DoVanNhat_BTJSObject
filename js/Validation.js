function Validation() {
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
    this.checkName = function (value, spanID, message,) {
        var parentString = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ"
            + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ"
            + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";

        var pattern = new RegExp(parentString);
        if (pattern.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        else {
            // ko đúng định dạng
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    this.checkEmail = function (value, spanID, message) {
        var pattent = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattent.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        else {
            // ko đúng định dạng
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    this.checkPassword = function (value, spanID, message) {
        var pattent = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if (pattent.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        else {
            // ko đúng định dạng
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    this.checkDate = function (value, spanID, message) {
        var pattent = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (pattent.test(value)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        else {
            // ko đúng định dạng
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    this.checkLuongCB = function (value, spanID, message) {
        if (value >= 1000000 && value <= 20000000) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        else {
            // ko đúng định dạng
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    this.checkSelect = function (SelectID, spanID, message) {
        if (document.getElementById(SelectID).selectedIndex != 0) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    this.checkTime = function (value, spanID, message) {
        if (value >= 80 && value <= 200) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        else {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

    }

}