let assign = function (obj, creditCard, paymentCard) {
    this.obj = obj;
    this.creditCard = creditCard;
    this.paymentCard = paymentCard;
    let i = 0;
    let il = arguments.length;
    let key;
    for (; i < il; i++) {
        for (key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                obj[key] = arguments[i][key];
            }
        }
    }
    return console.log(obj);
};

