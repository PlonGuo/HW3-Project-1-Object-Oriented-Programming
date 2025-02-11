import { CharacterFactory } from './src/CharacterFactory.js';
import { Weapon } from './src/Weapon.js';
import { Armor } from './src/Armor.js';
// import { EquipmentManager } from './src/EquipmentManager.js';
import { CombatPowerCalculator } from './src/CombatPowerCalculator.js';

// create characters
const warrior = CharacterFactory.createCharacter('Warrior', 'Thor');
const mage = CharacterFactory.createCharacter('Mage', 'Merlin');

// create items
const sword = new Weapon('Sword', 60, 'sword'); // Valid for Warrior
const axe = new Weapon('Axe', 55, 'axe'); // Valid for Warrior
const machete = new Weapon('Dagger', 40, 'dagger'); // Valid for Mage
const wand = new Weapon('Wand', 35, 'wand'); // Invalid for both

const plateArmor = new Armor('Steel Plate', 40, 'plate'); // Valid for Warrior
const clothArmor = new Armor('Silk Robe', 20, 'cloth'); // Valid for Mage
const leatherArmor = new Armor('Leather Vest', 25, 'leather'); // Invalid for both
const helmet = new Armor('Helmet', 15, 'plate'); // ✅ Valid for Warrior
const boots = new Armor('Boots', 10, 'plate'); // ✅ Valid for Warrior

console.log('\n=== Testing Warrior Equipment ===');
[sword, axe, machete].forEach((weapon) => warrior.equipWeapon(weapon));
[plateArmor, helmet, boots].forEach((armor) => warrior.equipArmor(armor));

console.log('\n=== Testing Mage Equipment ===');
[wand, sword, axe].forEach((weapon) => mage.equipWeapon(weapon));
[clothArmor, helmet].forEach((armor) => mage.equipArmor(armor));

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
warrior.unequipArmor('Helmet'); // Should remove "Shield"
warrior.unequipWeapon('Bow'); // ❌ Should fail (not equipped)
warrior.unequipArmor('Boots'); // Should remove "Helmet"

mage.unequipWeapon('Wand'); // Should remove "Magic Staff"
mage.unequipArmor('Wand'); // Should remove "Silk Robe"
mage.unequipWeapon('Axe'); // ❌ Should fail (not equipped)
mage.unequipArmor('Helmet'); // ❌ Should fail (wrong type)

console.log('\n=== Final Equipped Items ===');
// Final items Warrior equipped
console.log(
  `${warrior.name} equipped weapons: ${warrior.equippedWeapons.map((w) => w.name).join(', ')}`
);
console.log(
  `${warrior.name} equipped armors: ${warrior.equippedArmors.map((a) => a.name).join(', ')}`
);
// Final items Mage equipped
console.log(
  `${mage.name} equipped weapons: ${mage.equippedWeapons.map((w) => w.name).join(', ')}`
);
console.log(
  `${mage.name} equipped armors: ${mage.equippedArmors.map((a) => a.name).join(', ')}`
);

// Calculate final combat power
console.log('\n=== Final Combat Power ===');
console.log(
  `${warrior.name} Combat Power: ${CombatPowerCalculator.calculate(warrior)}`
);
console.log(
  `${mage.name} Combat Power: ${CombatPowerCalculator.calculate(mage)}`
);
