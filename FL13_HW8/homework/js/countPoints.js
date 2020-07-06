function countPoints(array) {
    let pointsAmount = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayItem = array[i].split(':');
        if (arrayItem[0] > arrayItem[1]) {
            pointsAmount += 3;
        } else if (arrayItem[0] === arrayItem[1]) {
            pointsAmount++
        }
    }
    return pointsAmount;
}

console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));