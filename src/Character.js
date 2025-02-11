/**
 * Base Character class representing an RPG character.
 * @abstract
 */
export class Character {
  /**
   * @param {string} name - Character's name
   * @param {string} type - Character's type (Warrior, Mage, etc.)
   */
  constructor(name, type) {
    if (this.constructor === Character) {
      throw new Error(
        'Abstract class Character cannot be instantiated directly.'
      );
    }
    this._name = name; // private
    this._type = type; // private
    this._equippedWeapons = [];
    this._equippedArmors = [];
  }

  /**
   * Get character name
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * Get character type
   * @returns {string}
   */
  get type() {
    return this._type;
  }

  /**
   * Get equipped weapons
   * @returns {Weapon[]} A copy of the equipped weapons array
   */
  get equippedWeapons() {
    return [...this._equippedWeapons]; // return copy，prevents external modifications to the original array
  }

  /**
   * Get equipped armors
   * @returns {Armor[]} A copy of the equipped armors array
   */
  get equippedArmors() {
    return [...this._equippedArmors]; // return copy, prevents external modifications to the original array
  }

  /**
   * Equip a weapon
   * @param {Weapon} weapon - The weapon to equip
   */
  equipWeapon(weapon) {
    this._equippedWeapons.push(weapon);
  }

  /**
   * Equip an armor
   * @param {Armor} armor - The armor to equip
   */
  equipArmor(armor) {
    this._equippedArmors.push(armor);
  }

  /**
   * Unequip a weapon by name
   * @param {string} weaponName - The name of the weapon to remove
   */
  unequipWeapon(weaponName) {
    const index = this._equippedWeapons.findIndex((w) => w.name === weaponName);
    if (index !== -1) {
      this._equippedWeapons.splice(index, 1);
      console.log(`${this.name} unequipped ${weaponName}`);
    } else {
      console.log(`${this.name} does not have ${weaponName} equipped.`);
    }
  }

  /**
   * Unequip an armor piece by name
   * @param {string} armorName - The name of the armor to remove
   */
  unequipArmor(armorName) {
    const index = this._equippedArmors.findIndex((a) => a.name === armorName);
    if (index !== -1) {
      this._equippedArmors.splice(index, 1);
      console.log(`${this.name} unequipped ${armorName}`);
    } else {
      console.log(`${this.name} does not have ${armorName} equipped.`);
    }
  }
}
