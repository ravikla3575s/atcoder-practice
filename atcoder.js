function Main(input) {
    input = input.split('\n'); 

    const N = parseInt(input[0], 10);
    const numbers = input[1].split(' ').map(Number);
    var result = numbers[0];
    var ans = 0;

    for (let i = 1; i < N; i++) {
        result |= numbers[i];
    }

    while (result % 2 === 0) {
        result >>= 1;
        ans++;
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));