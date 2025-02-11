import { Armor } from '../src/Armor.js';

describe('Armor', () => {
  test('should create an Armor instance', () => {
    const shield = new Armor('Shield', 30);
    expect(shield.name).toBe('Shield');
    expect(shield.defensePower).toBe(30);
  });
});
