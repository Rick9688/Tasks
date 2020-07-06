function letterCount(a, b) {
    let strLowCase = a.toLowerCase();
    let coincide = 0;
    for (let i = 0; i < strLowCase.length; i++) {
        if (strLowCase[i] === b) {
            coincide++;
        }
    }
    return coincide;
}


console.log(letterCount("Barry", "b"));