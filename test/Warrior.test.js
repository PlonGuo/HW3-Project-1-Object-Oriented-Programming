import { Warrior } from '../src/Warrior.js';
import { Weapon } from '../src/Weapon.js';

describe('Warrior', () => {
  let warrior;
  beforeEach(() => {
    warrior = new Warrior('Thor');
  });

  test('should create a Warrior instance', () => {
    expect(warrior.name).toBe('Thor');
    expect(warrior.type).toBe('Warrior');
  });

  test('should calculate combat power correctly', () => {
    warrior.equipWeapon(new Weapon('Sword', 50, 'sword')); // Added 'sword' type
    expect(warrior.calculateCombatPower()).toBe(75);
  });
});
