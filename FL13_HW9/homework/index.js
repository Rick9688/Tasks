//1
function convert(...args) {
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            let str = String(args[i]);
            arr.push(str);
        } else if (typeof args[i] === 'string') {
            let num = Number(args[i]);
            arr.push(num);
        }
    }
    return arr;
}

//2
function executeForEach(arr, cb) {
    const newArr = arr;
    for (const el in newArr) {
        newArr[el] = cb(newArr[el]);
    }
    return newArr;
}

function callback1(el) {
    return el * 2;
}

//3
function mapArray(arr, func, func2) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            let num = Number(arr[i]);
            array.push(num);
        } else {
            array.push(arr[i]);
        }
    }

    func(array, func2);
    return array;
}

function callback2(el) {
    return el + 3;
}

//4
function filterArray(arr, callback) {
    let newArr = [];
    for (const el of arr) {
        if (callback(el)) {
            newArr = [...newArr, el];
        }
    }
    return newArr;
}

const isEven = el => el % 2 === 0;

//5
function containsValue(arr, val) {
    for (const el of arr) {
        if (el === val) {
            return true;
        }
    }
    return false;
}


//6
function reverseString(str) {
    let revStr = '';
    for (i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

//7
function arrayFromRange(arr) {
    let array = [];
    i = arr[0];
    while (i <= arr[1]) {
        array.push(i);
        console.log(i)
        i++;

    }
    return array;
}

//8
function getArrayOfKeys(arr, key) {
    const newArr = [];
    for (const el of arr) {
        newArr.push(el[key])
    }
    return newArr;
}

//9
function substitute(arr, callback) {
    let newArr = [];
    for (const el of arr) {
        if (callback(el)) {
            newArr.push('*');
        } else {
            newArr.push(el);
        }
    }
    return newArr;
}

const check = el => el > 10 && el < 20;


//10
function getPastDay(date, days) {
    let dateNew = new Date(date);
    dateNew.setDate(date.getDate() - days);
    return dateNew.getDate();
}

//11
function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}`;
}

