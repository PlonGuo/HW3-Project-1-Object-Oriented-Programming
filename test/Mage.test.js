import { Mage } from '../src/Mage.js';
import { Armor } from '../src/Armor.js';

describe('Mage', () => {
  let mage;
  beforeEach(() => {
    mage = new Mage('Merlin');
  });

  test('should create a Mage instance', () => {
    expect(mage.name).toBe('Merlin');
    expect(mage.type).toBe('Mage');
  });

  test('should calculate combat power correctly', () => {
    mage.equipArmor(new Armor('Shield', 30));
    expect(mage.calculateCombatPower()).toBe(60);
  });
});
