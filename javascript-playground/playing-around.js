// function Monster (attackPower, accuracy, armourStrength) {
//     this.attackPower = attackPower;
//     this.accuracy = accuracy;
//     this.currentArmourStrength = armourStrength;
// }

// Monster.prototype.attack = function () {
//     if (Math.random() <= this.accuracy) {
//         return this.attackPower;
//     }
//     return 0;
// }

// Monster.prototype.defend = function (hitStrength) {
//     const newStrength = this.currentArmourStrength - hitStrength;
//     this.currentArmourStrength = Math.max(0, newStrength);
// };

class Monster {
    constructor (attackPower, accuracy, armourStrength) {
        this.attackPower = attackPower;
        this.accuracy = accuracy;
        this.currentArmourStrength = armourStrength;
    }

    attack () {
        if (Math.random() <= this.accuracy) {
            return this.attackPower;
        }
        return 0;
    }
    
    defend (hitStrength) {
        const newStrength = this.currentArmourStrength - hitStrength;
        this.currentArmourStrength = Math.max(0, newStrength);
    }
}

console.log(Monster.prototype);

const dalek = new Monster(70, 0.4, 200);
const cyberman = new Monster (20, 0.5, 100);
cyberman.defend(dalek.attack());
console.log(cyberman.currentArmourStrength);
dalek.defend(cyberman.attack());
console.log(dalek.currentArmourStrength);
