/**
 * Weapon class representing an RPG weapon.
 */
export class Weapon {
  /**
   * @param {string} name - Name of the weapon.
   * @param {number} attackPower - Attack power of the weapon.
   * @param {string} type - Weapon type (e.g., 'sword', 'axe', 'staff')
   */
  constructor(name, attackPower, type) {
    this._name = name; // private
    this._attackPower = attackPower; // private
    this._type = type; // Weapon type
  }

  /**
   * Get weapon name
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * Get attack power
   * @returns {number}
   */
  get attackPower() {
    return this._attackPower;
  }

  /**
   * Get weapon type
   * @returns {string}
   */
  get type() {
    return this._type;
  }
}
