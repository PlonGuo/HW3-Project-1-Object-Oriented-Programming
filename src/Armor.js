/**
 * Armor class representing RPG armor.
 */
export class Armor {
  /**
   * @param {string} name - Name of the armor.
   * @param {number} defensePower - Defense power of the armor.
   */
  constructor(name, defensePower) {
    this._name = name; // private
    this._defensePower = defensePower; // private
  }

  /**
   * Get armor name
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * Get defense power
   * @returns {number}
   */
  get defensePower() {
    return this._defensePower;
  }
}
