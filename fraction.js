unction convertToUnicodeFraction(str) {
    const map = {
        "1/2": "½",
        "1/3": "⅓",
        "2/3": "⅔",
        "1/4": "¼",
        "3/4": "¾",
        "1/5": "⅕",
        "2/5": "⅖",
        "3/5": "⅗",
        "4/5": "⅘",
        "1/6": "⅙",
        "5/6": "⅚",
        "1/8": "⅛",
        "3/8": "⅜",
        "5/8": "⅝",
        "7/8": "⅞"
    };

    return map[str] || str;
}

// Convert decimal to fraction, then to unicode if possible
function toFractionUnicode() {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);

    if (isNaN(value)) {
        display.value = "Error";
        return;
    }

    let tolerance = 1.0E-6;
    let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
    let b = value;

    do {
        let a = Math.floor(b);
        let aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(value - h1 / k1) > value * tolerance);

    let fraction = h1 + "/" + k1;

    display.value = convertToUnicodeFraction(fraction);
}
