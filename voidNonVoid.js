function deretAngka(atas,bawah){
    for(let i=atas; i<=bawah;i++){
        console.log(i+" , ")
    }
}

deretAngka(10,20);
deretAngka(0,5);

function luasLingkaran(jari){
    let luas = 3.14*jari*jari
    return luas;
}

console.log("Fungsi Non Void");
console.log("Luas Lingkaran:" +luasLingkaran(10))
console.log(luasLingkaran(15))

;
