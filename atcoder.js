// // // inputに入力データ全体が入る
// // function Main(input) {
// // 	input = input.split("\n"); // 入力データに必要な処理を加える
// //     const tmp = input[1].split(" ");
// //     const a = parseInt(input[0],10);
// //     const b = parseInt(tmp[0],10);
// //     const c = parseInt(tmp[1],10);
// //     const s = input[2]
// // 	// 問題を解決するための処理を書く

// //     console.log(a+b+c,s);
// // // 処理結果を出力する　※return resultではありません！
// // }

// // //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// // Main(require("fs").readFileSync("/dev/stdin", "utf8")); // これは必ず必要な呪文です

// function Main(input) {
// 	input = input.split(" "); 

//     const a = parseInt(input[0],10);
//     const b = parseInt(input[1],10);
//     if ((a * b) % 2 === 0){
//         console.log('Even')
//     }
//     else{
//         console.log('Odd')
//     }
// }
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// function Main(input) {
// 	input = input.split(''); 

//     const a = parseInt(input[0],10);
//     const b = parseInt(input[1],10);
//     const c = parseInt(input[2],10);
//     console.log(a+b+c)
// }
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// function Main(input) {
// 	input = input.split('\n'); 

//     const N = parseInt(input[0],10);
//     const total = input[1].reduce(function(sum, element){
//         return sum + element;
//     }, 0); 
//     let ans = 0
//     while(total % (2**N) === 0){
//         total/(2**N)
//         ans = ans++
//     }
//     console.log(ans)
// }
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// function Main(input) {
//     input = input.split('\n'); 

//     const N = parseInt(input[0], 10);
//     const numbers = input[1].split(' ').map(Number);
//     let total = numbers.reduce(function(sum, element){
//         return sum + element;
//     }, 0); 

//     let ans = 0;
//     while (total % (2 ** N) == 0) {
//         total = total / (2 ** N);
//         ans++;
//     }
//     console.log(ans);
// }

// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function Main(input) {
// let input = [];
// rl.on('line', (line) => {
//   inputLines.push(line);
// }).on('close', () => {
//   let N = parseInt(inputLines[0]);
//   let b = 0, ans = 0;

//   for (let i = 1; i <= N; ++i) {
//     let A = parseInt(inputLines[i]);
//     b = (A | b);
//   }

//   while ((b & 1) === 0) {
//     b = b >> 1;
//     ans++;
//   }

//   console.log(ans);
// });

// const readline = require('readline');

function Main(input) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the number of elements followed by the elements themselves: ', (input) => {
        const inputArray = input.trim().split(' '); // 入力をスペースで分割
        const N = parseInt(inputArray[0], 10); // 最初の要素はN

        if (isNaN(N) || N < 1 || inputArray.length < N + 1) {
            console.error("Invalid input");
            rl.close();
            return;
        }

        let b = 0;
        let ans = 0;

        for (let i = 1; i <= N; i++) {
            const A = parseInt(inputArray[i], 10);
            if (isNaN(A)) {
                console.error("Invalid element");
                rl.close();
                return;
            }
            b |= A; // ビット和の計算
        }

        while (b !== 0 && (b & 1) === 0) {
            b >>= 1; // ビットシフト
            ans++;
        }

        console.log(ans);
        rl.close();
    });
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));