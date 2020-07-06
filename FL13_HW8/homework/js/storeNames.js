function storeNames() {
    let array = [];
    let args = Array.from(arguments);
    args.forEach(function f(item) {
        array.push(item);
    })
    console.log(array);
}


console.log(storeNames('Nick Fury', 'Iron Man', 'Doctor Strange'));