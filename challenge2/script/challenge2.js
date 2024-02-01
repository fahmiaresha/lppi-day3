// 1. Buatlah sebuah perulangan dengan while untuk menampilkan list orang dari 120. 
// Di setiap perulangan,tampilkan di console saja format berikut: 'Halo, saya orang ke URUTAN ORANG

let people = 1;
while (people <= 120) {
    console.log(`Halo, saya orang ke ${people}`);
    people++;
}


// Ubah tugas 1 sebelumnya menjadi menggunakan for !
for (let orang = 1; orang <= 120; orang++) {
    console.log(`Halo, saya orang ke ${orang}`);
}


// 2. Sekarang, kembali ke kode tugas 1, kita modifikasi sedikit kode kita. 
// Gunakan percabangan/kondisionaluntuk 
// hanyamenampilkan teks dari orang urutan ganjil saja.Bebas menggunakan while atau for

for (let orang = 1; orang <= 120; orang++) {
    if (orang % 2 !== 0) {
        console.log(`Halo, saya orang ke ${orang}`);
    }
}

// buatlah sebuah perulangan yang akan menampilkan huruf O seperti dibawah ini: 
// OOO0 (1)
// OOO0 OOO0 OOO0 (3)
// tapi dengan syarat, kamu harus menggunakan looping untuk 
// menampilkan bentuk di bawah ini! Be creative!Pikirkan 
// bagaimanakalau kita harus menampilkan 100 "O" ke samping dengan 100 baris

for (let orang = 1; orang <= 120; orang++) {
    if (orang % 2 !== 0) {
        console.log(`0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    }
    else{
        console.log("");
    }
}