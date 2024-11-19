let dataString = "abcde";
console.log(dataString);

// char at
let dataChar = dataString.charAt(3);
console.log(`character pada index ke 3 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index ke 5 = ${dataChar}`);

// menyambung string
let namaDepan = "Ucup";
let namaBelakang = "Surucup";
let umur = 30;

let namaLengkap = namaDepan.concat(' ',namaBelakang,' si keren ',umur);
console.log(namaLengkap);
// Ucup Surucup si keren 30

// mengambil index (kemunculan pertama)
console.log(dataString.indexOf('c'));
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('3'));

// substring

let dataSubs = namaLengkap.substring(16,21);
console.log(dataSubs);
console.log(namaLengkap.substring(5));




