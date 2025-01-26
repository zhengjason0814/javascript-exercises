const fibonacci = function(n) {
    let answer = 1;
    let n1 = 1;
    let n2 = 0;

    if (typeof n ==  "string") n = parseInt(n);
    else if (n < 0) return "OOPS";

    if (n === 0) return 0;
    else if (n === 1) return 1;
    else {
        for (let i = 2; i <= n; i++) {
            answer = n1 + n2;
            n2 = n1;
            n1 = answer;
        }
    }
    return answer;
};

// Do not edit below this line
module.exports = fibonacci;
