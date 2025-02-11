import { Character } from '../src/Character.js';

describe('Character', () => {
  test('should not allow direct instantiation of Character', () => {
    expect(() => new Character('Test', 'Warrior')).toThrow(Error);
  });
});