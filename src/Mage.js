import { Character } from './Character.js';

/**
 * Mage class extending Character.
 */
export class Mage extends Character {
  constructor(name) {
    super(name, 'Mage');
  }

  // Allowed weapon types for Mages
  get allowedWeaponTypes() {
    return ['wand'];
  }

  // Allowed armor types for Mages
  get allowedArmorTypes() {
    return ['cloth'];
  }
  /**
   * Calculate combat power for Mage.
   * @returns {number}
   */
  calculateCombatPower() {
    return (
      this.equippedArmors.reduce((sum, armor) => sum + armor.defensePower, 0) *
      2
    );
  }
}
