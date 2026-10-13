// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------

let million =1_000_000;
let binarySep = 0b1010_0001;
let hexSep =0xFF_FF;

// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n; //when the big integer is added normally then n is added at the end
let big2 = BigInt("123456789012345678901234567890"); //this is the way the exact integer is represented
let bigFromNum = BigInt(42); //the max limit of big integer is 42 digits

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"

