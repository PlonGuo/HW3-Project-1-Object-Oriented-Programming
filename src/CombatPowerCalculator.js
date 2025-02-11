/**
 * CombatPowerCalculator is responsible for calculating a character's combat power.
 * This class follows the **Strategy Pattern** by delegating calculation to character-specific implementations.
 */
export class CombatPowerCalculator {
  /**
   * Calculate the combat power of a given character.
   * @param {import("./Character.js").Character} character - The character whose combat power is being calculated.
   * @returns {number} The calculated combat power.
   */
  static calculate(character) {
    return character.calculateCombatPower();
  }
}
