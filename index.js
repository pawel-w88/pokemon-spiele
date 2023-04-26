class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(skill) {
    this.skills.push(skill);
  }

  showStatus() {
    if (this.health <= 0) {
      console.log(`${this.name} died!`);
    } else if (this.magic <= 0) {
      console.log(`${this.name} has not enough magic, can't launch attack!\n`);
    } else {
      console.log(
        `${this.name} status:\n health = ${this.health}\n magic = ${this.magic}\n`
      );
    }
  }

  attack(enemy) {
    let index = Math.floor(Math.random() * this.skills.length);
    let skill = this.skills[index];
    if (this.magic >= skill.lossMagic) {
      enemy.health -= skill.damage;
      this.magic -= skill.lossMagic;
      console.log(
        `${this.name} used ${skill.attackName.toUpperCase()} and caused ${
          skill.damage
        } damage to ${enemy.name} and used ${skill.lossMagic} magic.\n`
      );
    } else {
      console.log(
        `${this.name} does not have enough magic to use ${skill.name}.\n`
      );
    }
  }

  getMagic() {
    this.magic = this.magic + 30;
    console.log(`${this.name} got 30 magic back \n`);
  }
}

class AttackSkill {
  constructor(attackName, damage, lossMagic) {
    this.attackName = attackName;
    this.damage = damage;
    this.lossMagic = lossMagic;
  }
}

const pikachu = new Pokemon("Pikachu", 200, 150);

let voltTackle = new AttackSkill("Volt Tackle", 40, 30);
pikachu.learnAttackSkill(voltTackle);

let electroBall = new AttackSkill("Electro Ball", 30, 25);
pikachu.learnAttackSkill(electroBall);

let quickAttack = new AttackSkill("Quick Attack", 20, 10);
pikachu.learnAttackSkill(quickAttack);
console.log(pikachu);

const bulbasaur = new Pokemon("Bulbasaur", 180, 175);

let sludgeBomb = new AttackSkill("Sludge Bomb", 40, 30);
bulbasaur.learnAttackSkill(sludgeBomb);

let frustrationShadow = new AttackSkill("Frustration Shadow", 20, 10);
bulbasaur.learnAttackSkill(frustrationShadow);

console.log(bulbasaur);

// pikachu.attack(bulbasaur);
// bulbasaur.attack(pikachu);
// pikachu.showStatus();
// bulbasaur.showStatus();
// pikachu.attack(bulbasaur);
// bulbasaur.attack(pikachu);
// pikachu.attack(bulbasaur);
// bulbasaur.attack(pikachu);
// pikachu.attack(bulbasaur);
// bulbasaur.attack(pikachu);
// pikachu.attack(bulbasaur);
// bulbasaur.attack(pikachu);
// pikachu.showStatus();
// bulbasaur.showStatus();
// pikachu.attack(bulbasaur);
// bulbasaur.attack(pikachu);
// // // pikachu.getMagic();
// pikachu.showStatus();
// bulbasaur.showStatus();
