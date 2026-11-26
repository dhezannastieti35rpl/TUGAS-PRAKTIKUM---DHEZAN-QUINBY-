// SOAL 2: PERSEGI PAJANG (FUNGSI-NON VOID)

// FUNGSI UNTUK MENGHITUNG LUAS PERSEGI PANJANG
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

// FUNGSI UNTUK MENGHITUNG KELILING PERSEGI PANJANG
function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

//PENGUJIAN: PANJANG 10, LEBAR 4
let luas = luasPersegiPanjang(10, 4);
let keliling = kelilingPersegiPanjang(10, 4);

console.log("Persegi Panjang :");
console.log("Luas     = " + luas);
console.log("Keliling = " + keliling);