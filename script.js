// 1. Manipulasi Array
// Buatlah sebuah array kosong dengan nama `myArray`. Kemudian, lakukan operasi sebagai berikut:

// Tambahkan elemen 'apple' ke dalam array.
// Tambahkan elemen 'banana' ke dalam array.
// Hapus elemen terakhir dari array.
// Tambahkan elemen 'orange' ke awal array.
// Hapus elemen pertama dari array.

let myArray = [];
myArray.push('apple');
myArray.push('banana');
myArray.pop();
myArray.unshift('orange'); 
myArray.shift();
console.log(myArray); 

// 2. Penggabungan Array
// Buatlah dua array, `firstArray` dan `secondArray`. Gabungkan keduanya menjadi satu array dengan menggunakan fungsi 
// `concat`. Kemudian, gabungkan array tersebut menjadi satu string dengan menggunakan fungsi `join` dan pisahkan 
// setiap elemen dengan tanda koma.

let firstArray = [10, 11, 12];
let secondArray = [13, 14, 15];
let Array = firstArray.concat(secondArray);
let Combined = Array.join(',');
console.log(Combined);


// 3.Pengurutan Array
// Buatlah sebuah array bernama `numbers` yang berisi angka acak. 
//Urutkan array tersebut secara ascending menggunakan fungsi `sort`. 
// Kemudian, urutkan array secara descending.

let numbers = [4, 3, 1, 3, 11];

numbers.sort(function(a, b){return a - b})
console.log(numbers); 

numbers.sort(function(a, b){return b - a})
console.log(numbers); 


// 4. Pemotongan Array
// Buatlah sebuah array dengan nama `fruits` yang berisi 'apple', 'banana', 'orange', 'grape',   
// 'kiwi'. Gunakan fungsi `splice` untuk menghapus 'banana' dan 'orange' dari array. 

//  Output akhir yang diharapkan adalah array `fruits` yang berisi 'apple', 'grape', 'kiwi'.

// Buat array dengan nama fruits
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
fruits.splice(1, 2);
console.log(fruits); 


// 5.Pemisahan String menjadi Array
// Buatlah sebuah string dengan nama `sentence` 
// yang berisi "Hello,World,JavaScript". Gunakan fungsi `split` 
// untuk memisahkan string tersebut menjadi sebuah array dengan delimiter.

let sentence = "Hello,World,JavaScript";
let sentenceArray = sentence.split(',');
console.log(sentenceArray); 
