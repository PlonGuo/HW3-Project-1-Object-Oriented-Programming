import { CharacterFactory } from './src/CharacterFactory.js';
import { Weapon } from './src/Weapon.js';
import { Armor } from './src/Armor.js';
import { EquipmentManager } from './src/EquipmentManager.js';
import { CombatPowerCalculator } from './src/CombatPowerCalculator.js';

// create characters
const warrior = CharacterFactory.createCharacter('Warrior', 'Thor');
const mage = CharacterFactory.createCharacter('Mage', 'Merlin');

// create items
const sword = new Weapon('Sword', 50);
const axe = new Weapon('Axe', 40);
const machete = new Weapon('Machete', 60);

const robe = new Armor('Magic Robe', 30);
const shield = new Armor('Shield', 20);
const helmet = new Armor('Helmet', 15);
const boots = new Armor('Boots', 10);

// Get the EquipmentManager instance
const manager = new EquipmentManager();

console.log('\n=== Testing Warrior Equipment ===');
[sword, axe, machete].forEach((weapon) => {
  if (manager.canEquipWeapon(warrior)) {
    warrior.equipWeapon(weapon);
    console.log(`${warrior.name} equipped ${weapon.name}`);
  } else {
    console.log(
      `❌ ${warrior.name} cannot equip ${weapon.name}, weapon limit reached`
    );
  }
});

[robe, shield, helmet, boots].forEach((armor) => {
  if (manager.canEquipArmor(warrior)) {
    warrior.equipArmor(armor);
    console.log(`${warrior.name} equipped ${armor.name}`);
  } else {
    console.log(
      `❌ ${warrior.name} cannot equip ${armor.name}, armor limit reached`
    );
  }
});

console.log('\n=== Testing Mage Equipment ===');
[sword, axe].forEach((weapon) => {
  if (manager.canEquipWeapon(mage)) {
    mage.equipWeapon(weapon);
    console.log(`${mage.name} equipped ${weapon.name}`);
  } else {
    console.log(
      `❌ ${mage.name} cannot equip ${weapon.name}, mages cannot equip weapons`
    );
  }
});

[robe, shield, helmet, boots].forEach((armor) => {
  if (manager.canEquipArmor(mage)) {
    mage.equipArmor(armor);
    console.log(`${mage.name} equipped ${armor.name}`);
  } else {
    console.log(
      `❌ ${mage.name} cannot equip ${armor.name}, armor limit reached`
    );
  }
});

// Calculate current combat power
console.log('\n=== Calculating Combat Power ===');
console.log(
  `${warrior.name} Combat Power: ${CombatPowerCalculator.calculate(warrior)}`
);
console.log(
  `${mage.name} Combat Power: ${CombatPowerCalculator.calculate(mage)}`
);

// Current items Warrior equipped
console.log('\n=== Current Items Equipped ===');
console.log(
  `${warrior.name} equipped weapons: ${warrior.equippedWeapons.map((w) => w.name).join(', ')}`
);
console.log(
  `${warrior.name} equipped armors: ${warrior.equippedArmors.map((a) => a.name).join(', ')}`
);
// Current items Mage equipped
console.log(
  `${mage.name} equipped weapons: ${mage.equippedWeapons.map((w) => w.name).join(', ')}`
);
console.log(
  `${mage.name} equipped armors: ${mage.equippedArmors.map((a) => a.name).join(', ')}`
);

console.log('\n=== Testing Unequipping ===');
warrior.unequipWeapon('Sword'); // Should remove "Sword"
warrior.unequipArmor('Shield'); // Should remove "Shield"
warrior.unequipWeapon('Bow'); // Should fail (not equipped)
warrior.unequipArmor('Helmet'); // Should remove "Helmet"

mage.unequipWeapon('Sword'); // Should remove "Sword"
mage.unequipArmor('Shield'); // Should remove "Shield"
mage.unequipWeapon('Bow'); // Should fail (not equipped)
mage.unequipArmor('Helmet'); // Should remove "Helmet"

// Current items Warrior equipped
console.log('\n=== Current Items Equipped ===');
console.log(
  `${warrior.name} equipped weapons: ${warrior.equippedWeapons.map((w) => w.name).join(', ')}`
);
console.log(
  `${warrior.name} equipped armors: ${warrior.equippedArmors.map((a) => a.name).join(', ')}`
);
// Current items Mage equipped
console.log(
  `${mage.name} equipped weapons: ${mage.equippedWeapons.map((w) => w.name).join(', ')}`
);
console.log(
  `${mage.name} equipped armors: ${mage.equippedArmors.map((a) => a.name).join(', ')}`
);

// Calculate combat power
console.log('\n=== Calculating Combat Power ===');
console.log(
  `${warrior.name} Combat Power: ${CombatPowerCalculator.calculate(warrior)}`
);
console.log(
  `${mage.name} Combat Power: ${CombatPowerCalculator.calculate(mage)}`
);
