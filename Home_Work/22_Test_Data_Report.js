// Sample input is written directly here, just for testing
const input = `3
loginTest 1200
checkoutTest 3400
searchTest 800`;

const lines = input.trim().split('\n');
const n = parseInt(lines[0], 10);

class Report {
  constructor() {
    this.total = 0;
    this.slowestName = "";
    this.slowestTime = -1;
  }

  addTest(name, time) {
    this.total = this.total + time;

    if (time > this.slowestTime) {
      this.slowestTime = time;
      this.slowestName = name;
    }
  }
}

const report = new Report();

for (let i = 1; i <= n; i++) {
  const parts = lines[i].trim().split(' ');
  const name = parts[0];
  const time = Number(parts[1]);

  report.addTest(name, time);
}

console.log("Total: " + report.total + " ms");
console.log("Slowest: " + report.slowestName);