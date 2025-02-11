import readline from 'readline';
import { CharacterFactory } from './src/CharacterFactory.js';
import { Weapon } from './src/Weapon.js';
import { Armor } from './src/Armor.js';
import { CombatPowerCalculator } from './src/CombatPowerCalculator.js';

// Create Readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Available Weapons and Armors
const availableWeapons = [
  new Weapon('Sword', 60, 'sword'),
  new Weapon('Axe', 55, 'axe'),
  new Weapon('Dagger', 40, 'dagger'),
  new Weapon('Wand', 100, 'wand'),
];

const availableArmors = [
  new Armor('Steel Plate', 40, 'plate'),
  new Armor('Helmet', 30, 'plate'),
  new Armor('Boots', 20, 'plate'),
  new Armor('Silk Robe', 25, 'cloth'),
  new Armor('Silk Turban', 30, 'cloth'),
  new Armor('Silk Shoes', 35, 'cloth'),
  new Armor('Leather Vest', 25, 'leather'),
];

// Character creation function
function createCharacter() {
  rl.question('Choose your character type (Warrior/Mage): ', (type) => {
    type = type.trim();
    if (type !== 'Warrior' && type !== 'Mage') {
      console.log(
        "❌ Invalid character type! Please enter 'Warrior' or 'Mage'."
      );
      rl.close();
      return;
    }

    rl.question('Enter your character name: ', (name) => {
      name = name.trim();
      if (!name) {
        console.log('❌ Character name cannot be empty!');
        rl.close();
        return;
      }

      const character = CharacterFactory.createCharacter(type, name);
      console.log(
        `✅ Character Created: ${character.name} the ${character.type}\n`
      );

      equipWeapons(character, () => {
        equipArmors(character, () => {
          unequipItems(character, () => {
            runTestCases(character);
          });
        });
      });
    });
  });
}

// Equip Weapons
function equipWeapons(character, callback) {
  function equipLoop() {
    if (character.equippedWeapons.length >= 2) {
      console.log(`✅ You have reached the weapon limit (2).`);
      callback();
      return;
    }

    console.log(`\nAvailable Weapons:`);
    availableWeapons.forEach((weapon, index) => {
      console.log(
        `[${index + 1}] ${weapon.name} (Type: ${weapon.type}, Power: ${weapon.attackPower})`
      );
    });
    console.log(`[0] Skip`);

    rl.question('Choose a weapon to equip: ', (choice) => {
      choice = parseInt(choice);
      if (choice === 0) {
        callback();
        return;
      }
      if (choice < 1 || choice > availableWeapons.length) {
        console.log('❌ Invalid choice.');
        equipLoop();
        return;
      }

      const weapon = availableWeapons[choice - 1];
      character.equipWeapon(weapon);
      equipLoop();
    });
  }
  equipLoop();
}

// Equip Armors
function equipArmors(character, callback) {
  function equipLoop() {
    if (character.equippedArmors.length >= 3) {
      console.log(`✅ You have reached the armor limit (3).`);
      callback();
      return;
    }

    console.log(`\nAvailable Armors:`);
    availableArmors.forEach((armor, index) => {
      console.log(
        `[${index + 1}] ${armor.name} (Type: ${armor.type}, Power: ${armor.defensePower})`
      );
    });
    console.log(`[0] Skip`);

    rl.question('Choose an armor to equip: ', (choice) => {
      choice = parseInt(choice);
      if (choice === 0) {
        callback();
        return;
      }
      if (choice < 1 || choice > availableArmors.length) {
        console.log('❌ Invalid choice.');
        equipLoop();
        return;
      }

      const armor = availableArmors[choice - 1];
      character.equipArmor(armor);
      equipLoop();
    });
  }
  equipLoop();
}

// Unequip Items
function unequipItems(character, callback) {
  function unequipWeaponLoop() {
    if (character.equippedWeapons.length === 0) {
      unequipArmorLoop();
      return;
    }

    console.log(`\nUnequipped Weapons:`);
    character.equippedWeapons.forEach((weapon, index) => {
      console.log(
        `[${index + 1}] ${weapon.name} (Type: ${weapon.type}, Power: ${weapon.attackPower})`
      );
    });
    console.log(`[0] Skip`);

    rl.question('Choose a weapon to unequip: ', (choice) => {
      choice = parseInt(choice);
      if (choice === 0) {
        unequipArmorLoop();
        return;
      }
      if (choice < 1 || choice > character.equippedWeapons.length) {
        console.log('❌ Invalid choice.');
        unequipWeaponLoop();
        return;
      }

      const weaponName = character.equippedWeapons[choice - 1].name;
      character.unequipWeapon(weaponName);
      unequipWeaponLoop();
    });
  }

  function unequipArmorLoop() {
    if (character.equippedArmors.length === 0) {
      callback();
      return;
    }

    console.log(`\nUnequipped Armors:`);
    character.equippedArmors.forEach((armor, index) => {
      console.log(
        `[${index + 1}] ${armor.name} (Type: ${armor.type}, Power: ${armor.defensePower})`
      );
    });
    console.log(`[0] Skip`);

    rl.question('Choose an armor to unequip: ', (choice) => {
      choice = parseInt(choice);
      if (choice === 0) {
        callback();
        return;
      }
      if (choice < 1 || choice > character.equippedArmors.length) {
        console.log('❌ Invalid choice.');
        unequipArmorLoop();
        return;
      }

      const armorName = character.equippedArmors[choice - 1].name;
      character.unequipArmor(armorName);
      unequipArmorLoop();
    });
  }

  unequipWeaponLoop();
}

// Run Test Cases
function runTestCases(character) {
  console.log(
    `\n=== Running Equipment & Combat Power Tests for ${character.name} ===`
  );
  console.log(`📜 Final Equipment for ${character.name}`);
  console.log(
    `⚔️ Weapons: ${character.equippedWeapons.map((w) => w.name).join(', ') || 'None'}`
  );
  console.log(
    `🛡️ Armors: ${character.equippedArmors.map((a) => a.name).join(', ') || 'None'}`
  );
  console.log(
    `🔥 Final Combat Power: ${CombatPowerCalculator.calculate(character)}`
  );
  rl.close();
}

// Start character creation process
createCharacter();
