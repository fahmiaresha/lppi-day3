// cek palindrome not case sensitive
function CheckPalindromeSenstive(str) {
    // menghapus space
    str = str.replace(/\s+/g, '').toLowerCase(); 

    // Menghapus tanda baca dengan menggunakan ekspresi reguler
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); 

    let rev = str.split("").reverse().join(""); 
    
    if (rev == str) {
        return true
    }
    return false
}
 
let str1 = "Katak";
let str2 = "Kasur Ini Rusak";
let str3 = "Level";
let str4 = "Malam";
let str5 = "A man, a plan, a canal, Panama!";
let str6 = "Coding";

console.log(CheckPalindromeSenstive(str1));
console.log(CheckPalindromeSenstive(str2));
console.log(CheckPalindromeSenstive(str3));
console.log(CheckPalindromeSenstive(str4));
console.log(CheckPalindromeSenstive(str5));
console.log(CheckPalindromeSenstive(str6));

// cek palindrome case sensitive
function CheckPalindrome(str) {
    let rev = str.split("").reverse().join(""); 
    if (rev == str) {
        return true
    }
    return false
}
 
let st1 = "Katak";
let st2 = "Kasur Ini Rusak";
let st3 = "Level";
let st4 = "Malam";
let st5 = "A man, a plan, a canal, Panama!";
let st6 = "Coding";

console.log(CheckPalindrome(st1));
console.log(CheckPalindrome(st2));
console.log(CheckPalindrome(st3));
console.log(CheckPalindrome(st4));
console.log(CheckPalindrome(st5));
console.log(CheckPalindrome(st6));
