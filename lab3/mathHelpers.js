function squareRoot(x) {
    return Math.sqrt(x);
}

function square(x) {
    return x * x;
}

function distance ([x1, y1, x2, y2]) {
    return squareRoot(square(x2-x1)+square(y2-y1));
}

module.exports = {distance};



