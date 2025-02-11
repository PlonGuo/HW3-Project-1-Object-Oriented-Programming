import { Weapon } from '../src/Weapon.js';

describe('Weapon', () => {
  test('should create a Weapon instance', () => {
    const sword = new Weapon('Sword', 50);
    expect(sword.name).toBe('Sword');
    expect(sword.attackPower).toBe(50);
  });
});
