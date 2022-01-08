module.exports = function reverse (n) {
    n = String(n);
    let result = n.split("").reverse().join("");
    if (result[result.length-1] === "-") {
        return Number(result.slice(0,result.length-1));
    }
    return Number(result);
}
