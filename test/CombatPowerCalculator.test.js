import { CombatPowerCalculator } from '../src/CombatPowerCalculator.js';
import { Warrior } from '../src/Warrior.js';
import { Mage } from '../src/Mage.js';
import { Weapon } from '../src/Weapon.js';
import { Armor } from '../src/Armor.js';

describe('CombatPowerCalculator', () => {
  let warrior;
  let mage;

  beforeEach(() => {
    warrior = new Warrior('Thor');
    mage = new Mage('Merlin');
  });

  test('should calculate combat power for a Warrior', () => {
    warrior.equipWeapon(new Weapon('Sword', 50, 'sword')); // Fixed weapon type
    expect(CombatPowerCalculator.calculate(warrior)).toBe(75); // 50 * 1.5
  });

  test('should calculate combat power for a Mage', () => {
    mage.equipArmor(new Armor('Magic Robe', 30, 'cloth')); // Fixed armor type
    expect(CombatPowerCalculator.calculate(mage)).toBe(60); // 30 * 2
  });

  test('should return 0 when character has no equipment', () => {
    expect(CombatPowerCalculator.calculate(warrior)).toBe(0);
    expect(CombatPowerCalculator.calculate(mage)).toBe(0);
  });
});
