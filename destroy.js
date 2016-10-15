function SpaceThing(name, loc, speed, health) {
  this.name = name;
  this.loc = loc;
  this.speed = speed; 
  this.health = health;
  this.isAlive = true;
}

function DeathStar(name, loc, speed, health, energy, damage) {
  SpaceThing.call(this, name, loc, speed, health);
  this.energy = energy; 
  this.damage = damage;
}

SpaceThing.prototype.toString = function() {
  console.log('Name: ' + this.name);
  console.log('Location: ' + this.loc);
  console.log('Speed: ' + this.speed);
  console.log('Health: ' + this.health);
}

DeathStar.prototype = Object.create(SpaceThing.prototype);
DeathStar.prototype.constructor = DeathStar

DeathStar.prototype.attack = function(target) {
  if (target.health)  {
    console.log(this.name + ' is attacking ' + target.name + ' for ' + this.damage + '!' );
    this.energy -= (this.energy/2);
    target.health -= this.damage;
    if (target.health < 0) {
      target.health = 0;
      target.isAlive = false
    }
    console.log(target.name + ' is ' + (target.isAlive === true ? 'alive': 'dead') 
        + ' with ' + target.health + ' health remaining ');
    console.log(this.name + ' has ' + this.energy + ' energy remaining');
  } else {
    console.log('Relax, they\'re dead!');
  }
}

DeathStar.prototype.toString = function () {
  SpaceThing.prototype.toString.call(this);
  console.log('Energy: ' + this.energy);
  console.log('Damage: ' + this.damage);
}

var vaderStar = new DeathStar('Death Star', 'Alderaan', 434.1, 100, 100, 9001);
var alderaan = new SpaceThing('Alderaan', 'Alderaan System', 0 , 9000);

vaderStar.toString();
console.log('\n========================\n')
alderaan.toString();
console.log('\n========================\n')
vaderStar.attack(alderaan);
