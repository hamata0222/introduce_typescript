// paizaの問題で練習
// https://paiza.jp/challenges/571/retry_result/f4561a7285a5861056f678379095bda6
process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    lines.push(line);
});
reader.on('close', () => {
    const stringToInt = (ele) => { return parseInt(ele); };
    const [numofShop, months] = lines[0].split(' ').map(stringToInt);
    const [initialCost, runningCost, profit] = lines[1].split(' ').map(stringToInt);
    main(numofShop, months, initialCost, runningCost, profit, ...(lines.slice(2).map(stringToInt)));
});

function main(numofShop, months, initialCost, runningCost, profit, ...salesAmounts) {
    const threshold = initialCost + (runningCost * months);
    const closeShops = salesAmounts.filter(amount => (amount * profit) < threshold);
    console.log(closeShops.length);
}