// SOAL 3: RAPOR MINI (GABUNGAN VOID DAN NON-VOID)

// FUNGSI UNTUK MENGHITUNG RATA-RATA
function hitungRataRata(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

//FUNGSI UNTUK MENENTUKAN PREDIKAT
function tentukanPredikat(rata) {
    if (rata >= 85) {
        return "A";
    } else if (rata >= 75) {
        return "B";
    } else if (rata >= 60) {
        return "C";
    } else {
        return "D";
    }
}

//FUNGSI UNTUK MENCETAK RAPOR
function cetakRapor(nama, n1, n2, n3) {

    // MEMANGGIL FUNGSI hitungRataRata
    let rata = hitungRataRata(n1, n2, n3);

    //MEMANGGIL FUNGSI tentukanPredikat
    let predikat = tentukanPredikat(rata);

    // MENAMPILKAN HASIL RAPOR
    console.log("Nama      : " + nama);
    console.log("Rata-rata : " + rata.toFixed(2));
    console.log("Predikat  : " + predikat);
    console.log("----------------------");
}

// PENGUJIAN UNTUK 4 SISWA DENGAN NILAI BERBEDA
cetakRapor("Budi", 80, 85, 82);
cetakRapor("Siti", 90, 88, 95);
cetakRapor("Andi", 60, 65, 70);
cetakRapor("Rina", 50, 55, 58);