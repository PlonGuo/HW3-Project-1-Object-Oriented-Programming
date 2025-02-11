import { Warrior } from './Warrior.js';
import { Mage } from './Mage.js';

/**
 * Factory pattern to create characters.
 */
export class CharacterFactory {
  /**
   * Create a character based on type.
   * @param {string} type - The type of character to create.
   * @param {string} name - The name of the character.
   * @returns {Character}
   */
  static createCharacter(type, name) {
    switch (type) {
      case 'Warrior':
        return new Warrior(name);
      case 'Mage':
        return new Mage(name);
      default:
        throw new Error('Invalid character type.');
    }
  }
}
