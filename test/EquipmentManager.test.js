import { EquipmentManager } from '../src/EquipmentManager.js';
import { Warrior } from '../src/Warrior.js';
import { Mage } from '../src/Mage.js';
import { Weapon } from '../src/Weapon.js';
import { Armor } from '../src/Armor.js';

describe('EquipmentManager', () => {
  let manager;
  let warrior;
  let mage;

  beforeEach(() => {
    manager = new EquipmentManager(); // Ensuring Singleton behavior
    warrior = new Warrior('Thor');
    mage = new Mage('Merlin');
  });

  test('should prevent equipping more than 2 weapons', () => {
    warrior.equipWeapon(new Weapon('Sword', 50));
    warrior.equipWeapon(new Weapon('Axe', 40));
    expect(manager.canEquipWeapon(warrior)).toBe(false);
  });

  test('should allow equipping up to 2 weapons', () => {
    warrior.equipWeapon(new Weapon('Sword', 50));
    expect(manager.canEquipWeapon(warrior)).toBe(true);
  });

  test('should prevent equipping more than 3 armors', () => {
    mage.equipArmor(new Armor('Robe', 10));
    mage.equipArmor(new Armor('Shield', 20));
    mage.equipArmor(new Armor('Helmet', 15));
    expect(manager.canEquipArmor(mage)).toBe(false);
  });

  test('should allow equipping up to 3 armor pieces', () => {
    mage.equipArmor(new Armor('Robe', 10));
    mage.equipArmor(new Armor('Shield', 20));
    expect(manager.canEquipArmor(mage)).toBe(true);
  });

  test('should ensure EquipmentManager is a singleton', () => {
    const anotherManager = new EquipmentManager();
    expect(manager).toBe(anotherManager);
  });
});
