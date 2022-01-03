function QuanLyNhanVien() {
    this.mangNV = [];
    this.them = function (nv) {
        this.mangNV.push(nv)
    }

    this.timVT = function (id) {
        var vitri = -1;
        this.mangNV.map(
            function (nv, index) {
                if (nv.accNV === id)
                    vitri = index;
            }
        )
        return vitri;
    }

    this.xoa = function (id) {
        var vitri = this.timVT(id);
        if (vitri != -1) {
            this.mangNV.splice(vitri);
        }
        else {
            console.log("Ko tìm thấy tài khoản cần xóa");
        }
    }
    this.capNhap = function (nv) {
        var vitri = this.timVT(nv.accNV);
        if (vitri != -1) {
            this.mangNV[vitri] = nv;
        }
        else{
            console.log("Ko tìm thấy NV để cập nhập");
        }

    }
    this.searchName = function (keyword){
        var keywordToLower =  keyword.toLowerCase();
        var mangTK = [];
        this.mangNV.map(function(nv){
            var nameToLower = nv.nameNV.toLowerCase();
            var indexName = nameToLower.indexOf(keywordToLower);
            if(indexName >-1)
            mangTK.push(nv)
        });
        return mangTK;
    }
}