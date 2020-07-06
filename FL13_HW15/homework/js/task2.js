function inheritance(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Vehicle(engine, color) {
    this.engine = engine;
    this.color = color;
    this.model = 'unknown model';
    this.maxSpeed = 70;
    this.currentSpeed = 0;
    this.maxSpeedFromDrive = 0;
    this.isStopped = true;
    this.name = 'vehicle';
    this.isBraking = false;
}

Vehicle.prototype.getInfo = function () {
    if (this.isStopped) {
        let info = {}
        info.engine = this.engine;
        info.color = this.color;
        info.model = this.model;
        info.maxSpeed = this.maxSpeed;
        return info;
    } else {
        console.log('Already drive');
    }
};

Vehicle.prototype.drive = function () {
    if (this.isStopped) {
        clearInterval(this.timerId);
        let startInterval = 2000;
        this.isStopped = false;
        if (this.name === 'motorcycle') {
            console.log('Let’s drive');
        }
        this.timerId = setInterval(() => {
            this.currentSpeed += 20
            let limitOfSpeed = 30;
            console.log(this.currentSpeed)
            if (this.currentSpeed > this.maxSpeed) {
                console.log('speed is too high, SLOW DOWN!');
                if (this.name === 'motorcycle' && this.currentSpeed + limitOfSpeed > this.maxSpeed) {
                    console.log('Engine overheating');
                    clearInterval(this.timerId);
                    this.stop();
                }
            }
            if (this.currentSpeed > this.maxSpeedFromDrive) {
                this.maxSpeedFromDrive = this.currentSpeed
            }
        }, startInterval)
    } else {
        console.log('Already drive');
    }
};

Vehicle.prototype.stop = function () {
    clearInterval(this.timerId);
    let stopInterval = 1500;
    this.timerId = setInterval(() => {
        if (this.currentSpeed > 0) {
            this.currentSpeed -= 20
            this.isBraking = true;
            console.log(this.currentSpeed)
            if (this.currentSpeed === 0) {
                this.isStopped = true;
                clearInterval(this.timerId);
                if (this.name === 'vehicle') {
                    console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maxSpeedFromDrive}`);
                } else if (this.name === 'car') {
                    console.log(`Car ${this.model} is stopped. Maximum speed during'+ 
                    'the drive was ${this.maxSpeedFromDrive}`);
                } else {
                    console.log(`Motorcycle ${this.model} is stopped. Good drive`);
                }
            }
        } else {
            clearInterval(this.timerId);
        }

    }, stopInterval)
    if (this.isBraking) {
        console.log('Already slows down');
    }
};

Vehicle.prototype.upgradeEngine = function (newEngine, maxSpeedUpGrade) {
    if (this.isStopped) {
        this.engine = newEngine;
        this.maxSpeed = maxSpeedUpGrade;
    } else {
        console.log('Already drive');
    }
};

inheritance(Car, Vehicle);
inheritance(Motorcycle, Vehicle);

function Car(engine, color, model) {
    Vehicle.call(this, engine, color);
    this.name = 'car';
    this.maxSpeed = 80;
    this.model = model;
    this.changeColor = function (newColor) {
        if (!(this.color === newColor)) {
            this.color = newColor;
        } else {
            console.log(`The car is already painted ${this.color}`);
        }
    }
}

function Motorcycle(engine, color, model) {
    Vehicle.call(this, engine, color);
    this.maxSpeed = 90;
    this.model = model;
    this.name = 'motorcycle';
}
