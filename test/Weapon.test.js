import { Weapon } from '../src/Weapon.js';

describe('Weapon', () => {
  test('should create a Weapon instance', () => {
    const sword = new Weapon('Sword', 50, 'sword');
    expect(sword.name).toBe('Sword');
    expect(sword.attackPower).toBe(50);
  });
});
