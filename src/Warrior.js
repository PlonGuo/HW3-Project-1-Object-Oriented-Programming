import { Character } from './Character.js';

/**
 * Warrior class extending Character.
 */
export class Warrior extends Character {
  constructor(name) {
    super(name, 'Warrior');
  }

  /**
   * Calculate combat power for Warrior.
   * @returns {number}
   */
  calculateCombatPower() {
    return (
      this.equippedWeapons.reduce(
        (sum, weapon) => sum + weapon.attackPower,
        0
      ) * 1.5
    );
  }
}
