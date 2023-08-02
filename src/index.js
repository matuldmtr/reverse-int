module.exports = function reverse(n) {
    return n > 0
        ? +n.toString().split("").reverse().join("")
        : +n.toString().split("").reverse().slice(0, -1).join("");
};
