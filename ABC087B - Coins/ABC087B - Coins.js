function Main(input) {
    input = input.split('\n'); 

    const A = parseInt(input[0], 10);
    const B = parseInt(input[1], 10);
    const C = parseInt(input[2], 10);
    const X = parseInt(input[3], 10);
    let ans = 0
    for (let a = 0 ; a <= 40 && a <= A ; a++){
        for (let b = 0; b <= 50 && b <= B; b++){
            for (let c = 0; c <= 50 && c <= C ; c++){
            if (X === 500 * a + 100 * b + 50 * c){
                ans++
            }
            }
        }
    }
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));