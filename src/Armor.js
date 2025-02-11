/**
 * Armor class representing RPG armor.
 */
export class Armor {
  /**
   * @param {string} name - Name of the armor.
   * @param {number} defensePower - Defense power of the armor.
   * @param {string} type - Armor type (e.g., 'plate', 'cloth')
   */
  constructor(name, defensePower, type) {
    this._name = name; // private
    this._defensePower = defensePower; // private
    this._type = type; // Armor type
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

  /**
   * Get armor type
   * @returns {string}
   */
  get type() {
    return this._type;
  }
}
