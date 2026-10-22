// Map and Filters


// every vs some

// every — ALL must pass
//  console.log([80, 90, 85].every(i => i >= 70));
//  console.log([80, 60, 85].every(i => i >= 70));


// some — AT LEAST ONE must pass
console.log([80,60,85].some(s=> s< 90));
console.log([80,60,75].some(s=>s<60));