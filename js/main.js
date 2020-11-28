
document.getElementById("btnTinhTien").addEventListener("click", function () {
    var distance = Number(document.getElementById("distance").value);
    console.log(distance);
    var duration = Number(document.getElementById("duration").value);
    console.log(duration);

    var _uberX = document.getElementById("uberX").checked;
    var _uberSUV = document.getElementById("uberSUV").checked;
    var _uberBlack = document.getElementById("uberBlack").checked;
    console.log(_uberX, _uberSUV, _uberBlack);

    if (_uberX == false && _uberSUV == false && _uberBlack == false) {
        alert ("Chọn loại xe!");
    }
    // UBERX
    if (distance < 1 && distance > 0) {
        var tinhTienX = (distance * 8000) + (duration * 2000);
        console.log(tinhTien);
    } else if (distance < 20) {
        var tinhTienX = (distance * 12000) + (duration * 2000);
        console.log(tinhTienX);
    } else {
        var tinhTienX = (distance * 10000) + (duration * 2000);
        console.log(tinhTienX);
    }

    // UBERSUV
     if (distance < 1 && distance > 0) {
        var tinhTienSUV = (distance * 9000) + (duration * 3000);
        console.log(tinhTienSUV);
    } else if (distance < 20) {
        var tinhTienSUV = (distance * 14000) + (duration * 3000);
        console.log(tinhTienSUV);
    } else {
        var tinhTienSUV = (distance * 12000) + (duration * 3000);
        console.log(tinhTienSUV);
    }

    // UBERBLACK

    if (distance < 1 && distance > 0) {
        var tinhTienBlack = (distance * 10000) + (duration * 4000);
        console.log(tinhTienBlack);
    } else if (distance < 20) {
        var tinhTienBlack = (distance * 16000) + (duration * 4000);
        console.log(tinhTienBlack);
    } else {
        var tinhTienBlack = (distance * 14000) + (duration * 4000);
        console.log(tinhTienBlack);
    }

    // Tính Tiền
    if (_uberX == true) {
        document.getElementById("xuatTien").innerHTML = tinhTienX;
    }

    else if (_uberSUV == true) {
        document.getElementById("xuatTien").innerHTML = tinhTienSUV;
    }

    else if (_uberBlack == true) {
        document.getElementById("xuatTien").innerHTML = tinhTienBlack;
    }

    document.getElementById("divThanhTien").style.display = "block";
});