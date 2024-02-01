// 1.Buatlah sebuah script untuk meminta user untuk meminta password, bisa menggunakan
// prompt.
// Buat juga sebuah variabel yang menampung password yang seharusnya.
// Kemudian, buat sebuah logika jika password yang dimasukkan user benar, berikan informasi
// benar (bisa menggunakan alert). Jika salah, direct ke halaman lain, misalnya Google,
// menggunakan code di bawah ini:

let input = prompt("Masukkan password:");
let correctPassword = "password-benar";

if (input === correctPassword) {
    alert("Password benar. Selamat datang!");
} else {
    window.location.href = "https://www.google.com";
}

// 2. Gunakan Prompt untuk meminta user memasukkan angka antara 1 sampai 100.
// ketika score di antara 80 and 100, alert 'your grade is A' ketika score di antara 80 and 60, alert
// 'your grade is B' ketika score di antara 60 and 40, alert 'your grade is C' ketika score di bawah 40,
// alert 'your grade is D'. Ketika value is di luar dari 1 sampai 100, alert 'cannot calculate your grade'

var userScore = prompt("Masukkan angka antara 1 dan 100:");
var score = parseInt(userScore);

if (score >= 80 && score <= 100) {
    alert("Your grade is A");
} else if (score >= 60 && score < 80) {
    alert("Your grade is B");
} else if (score >= 40 && score < 60) {
    alert("Your grade is C");
} else if (score < 40 && score >= 1) {
    alert("Your grade is D");
} else {
    alert("Cannot calculate your grade.");
}