import { CharacterFactory } from '../src/CharacterFactory.js';
import { Warrior } from '../src/Warrior.js';
import { Mage } from '../src/Mage.js';

describe('CharacterFactory', () => {
  // ✅ 修正 describe 名称
  test('should create a Warrior', () => {
    const warrior = CharacterFactory.createCharacter('Warrior', 'Thor');
    expect(warrior).toBeInstanceOf(Warrior);
    expect(warrior.name).toBe('Thor');
  });

  test('should create a Mage', () => {
    const mage = CharacterFactory.createCharacter('Mage', 'Merlin');
    expect(mage).toBeInstanceOf(Mage);
    expect(mage.name).toBe('Merlin');
  });

  test('should throw error for invalid type', () => {
    expect(() =>
      CharacterFactory.createCharacter('InvalidType', 'Test')
    ).toThrow(Error);
  });
});
