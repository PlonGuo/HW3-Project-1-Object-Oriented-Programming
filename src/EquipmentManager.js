/**
 * EquipmentManager is responsible for managing equipment limits and preventing over-equipping.
 * This class follows the **Singleton Pattern** to ensure only one instance manages equipment rules.
 */
export class EquipmentManager {
  constructor() {
    if (!EquipmentManager.instance) {
      this.weaponLimit = 2;
      this.armorLimit = 3;
      EquipmentManager.instance = this; // Ensuring Singleton
    }
    return EquipmentManager.instance;
  }

  /**
   * Check if a character can equip another weapon.
   * @param {import("./Character.js").Character} character - The character to check.
   * @returns {boolean} Whether the character can equip more weapons.
   */
  canEquipWeapon(character) {
    return character.equippedWeapons.length < this.weaponLimit;
  }

  /**
   * Check if a character can equip another armor piece.
   * @param {import("./Character.js").Character} character - The character to check.
   * @returns {boolean} Whether the character can equip more armor.
   */
  canEquipArmor(character) {
    return character.equippedArmors.length < this.armorLimit;
  }
}
