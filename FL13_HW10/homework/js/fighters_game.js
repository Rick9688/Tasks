class Fighter {
    constructor({ name, damage, hp, strength, agility }) {
        this._name = name;
        this._damage = damage;
        this._hp = hp;
        this._strength = strength;
        this._agility = agility;
        this._Wins = 0;
        this._Loses = 0;

    }

    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getHealth() {
        return this._hp;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    logCombatHistory() {
        return 'Name: ' + this._name + ', Wins: ' + this._Wins + ', Loses:' + this._Loses;
    }
    addWin() {
        this._Wins++;
    }
    addLoses() {
        this._Loses++
    }
    heal(points) {
        const health = 100;
        if (this._hp + points > health) {
            this.hp = health;
        } else {
            this._hp += points;
        }
    }
    dealDamage(points) {
        if (this._hp - points < 0) {
            this._hp = 0;
        } else {
            this._hp -= points;
        }
    }
    attack(fighter) {
        const saltItem = 10;
        const saltItem2 = -10;
        const probabilityItem = 50;
        const probabilityItem2 = 100;
        const probabilityItem3 = 3;
        const ourPower = this.getStrength() + this.getAgility();
        const opponentPower = fighter.getStrength() + fighter.getAgility();
        const diffPower = Math.abs(opponentPower - ourPower);
        const salt = Math.round(Math.random() * (saltItem - saltItem2) + saltItem2);
        let probability;
        if (opponentPower > ourPower) {
            probability = probabilityItem - probabilityItem2 * diffPower / ourPower / probabilityItem3;
        } else {
            probability = probabilityItem + probabilityItem2 * diffPower / opponentPower / probabilityItem3;
        }

        probability += salt;

        if (probability > probabilityItem2) {
            probability = probabilityItem2;
        } else if (probability < 0) {
            probability = 0;
        }
        const isHit = Math.random() * saltItem < probability;

        if (isHit) {
            fighter.dealDamage(this.getDamage());
        }
    }
}

const myFighter = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });
const myFighter2 = new Fighter({ name: 'Valera', damage: 28, hp: 100, strength: 35, agility: 30 });

function battle(fighter, anotherFighter) {
    let fighterHp = fighter.getHealth();
    let anotherFighterHp = anotherFighter.getHealth();

    if (!fighterHp && !anotherFighterHp) {
        console.warn('one of fighters is dead.');
    }

    let turn = true;

    while (fighterHp && anotherFighterHp) {
        if (turn) {
            fighter.attack(anotherFighter);
        } else {
            anotherFighter.attack(fighter)
        }
        turn = !turn;
        fighterHp = fighter.getHealth();
        anotherFighterHp = anotherFighter.getHealth();
    }

    if (fighterHp) {
        console.warn('first fighter wins');
        fighter.addWin();
        anotherFighter.addLoses();
    } else {
        console.warn('second fighter wins');
        anotherFighter.addWin();
        fighter.addLoses();
    }
}
console.log(battle(myFighter, myFighter2));




