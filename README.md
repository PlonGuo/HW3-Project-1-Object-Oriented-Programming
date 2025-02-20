# RPG Character Equipment Management System 🎮🛡️⚔️

## Overview

The RPG Character Equipment Management System is a lightweight and efficient system designed to help players create and manage characters, equip/unequip weapons and armor, and calculate combat power dynamically.

This project is built using Object-Oriented Programming (OOP) principles and follows SOLID principles and design patterns to ensure modularity, maintainability, and scalability.

## Features

- Character Management – Create and manage Warrior and Mage characters
- Equipment Management – Equip and unequip weapons/armor with enforced limits
- Combat Power Calculation – Dynamic formula-based combat power updates
- User-Friendly Interface – Simple CLI-based UI for seamless interaction
- Scalability – Easy expansion for new character classes, equipment types, and game mechanics

## Installation & Usage

- You can view all materials through the github repository: https://github.com/PlonGuo/HW3-Project-1-Object-Oriented-Programming/tree/main
- You can also clone the project to your local machine by running the following command in your terminal: git clone git@github.com:PlonGuo/HW3-Project-1-Object-Oriented-Programming.git
- To run the project, navigate to the project directory and install all dependencies by running the following command: npm install
- Once the dependencies are installed, you can start the application by running the following command: node main.js
- You can also try the Jest testing by running the following command: npm test

## OOP Pillars

### Encapsulation

    • Private fields (_name, _attackPower, _defensePower) in Weapon.js, Armor.js, and Character. js ensure that properties cannot be directly modified from outside the class.
    • Getter methods (e.g., get name(), get attackPower()) expose necessary information without breaking encapsulation.
    • Bad Example:
        class BadWeapon {
            constructor(name, attackPower) {
                this.name = name;
                this.attackPower = attackPower; // ❌ Public field (bad practice)
            }
        }

### Abstraction

    • The Character.js class is abstract and cannot be instantiated directly, enforcing that all character instances must be of a derived type like Mage or Warrior.
    • CombatPowerCalculator.js abstracts the combat power calculation logic.
    • Bad Example:
        const brokenCharacter = new Character("Unnamed", "Unknown"); // ❌ Should not be possible

### Inheritance

    • Mage.js and Warrior.js extend Character.js, inheriting properties and behaviors while modifying the combat power calculation for their specific needs.
    • Bad Example:
        If Mage.js and Warrior.js did not extend Character.js, they would duplicate the same logic instead of inheriting:
            class Mage {
                constructor(name) {
                    this.name = name;
                    this.type = "Mage";
                    this.equippedWeapons = [];
                }
            }

### Polymorphism

    • calculateCombatPower() is overridden in Mage.js and Warrior.js, implementing different power calculations based on the class type.
    • Bad Example:
        If a subclass does not override calculateCombatPower(), it may cause errors:
            class Warrior extends Character {
                constructor(name) {
                    super(name, "Warrior");
                }
                // ❌ Missing calculateCombatPower() override
            }

## SOLID Principles Applied

### Single Responsibility Principle (SRP)

    •	Character.js handles character properties.
    •	Weapon.js and Armor.js define equipment.
    •	CombatPowerCalculator.js calculates combat power separately.

### Open-Closed Principle (OCP)

    •	The Character class can be extended with new character types (Mage, Warrior) without modifying its base class.
    •	CombatPowerCalculator.js delegates calculation to character-specific implementations, making it open for extension but closed for modification.

### Liskov Substitution Principle (LSP)

    •	Mage.js and Warrior.js can be used interchangeably where Character.js is expected without breaking functionality.

### Interface Segregation Principle (ISP)

    •	Character.js enforces specific capabilities without forcing all characters to implement unnecessary methods. Mages and Warriors only define what they need.

### Dependency Inversion Principle (DIP)

    •	CombatPowerCalculator.js depends on the abstract Character class rather than concrete subclasses, allowing flexibility and reusability.

## Design Patterns in My Code

    • Factory Pattern - (CharacterFactory.js)
    • Strategy Pattern - (CombatPowerCalculator.js)
    • Singleton Pattern - (EquipmentManager.js)

## AI Usage:

    • User Persona, the prompt that I gave ChatGPT 4o is Casual player, hardcore gamer which has knowledge of game design, and the master player of RPG game. I think the response AI gave me makes sense because it covers players from different dimensions logically.    
    • I ask ChatGPT 4o to summarize the key points in Problem Statement, and the prompt is the entire Problem Statement, and the summary is precise.
    • I ask ChatGPT 4o to help me implement the Business Requirement in case that I miss something. The prompt is the Business Requirement that I wrote. It did help me add something about     Scalability and Rules & Constraints which are both significant to RPG Games. 
    • I used ChatGPT4o to assist in writing JSDoc documentation. The prompt that I use is all my classes with attributes and method that I defined in UML diagram.
    • I also talked to ChatGPT 4o a lot to discuss whether some of my ideas were logical or not.

## Youtube Video Link for App UI mockup
    https://youtu.be/tUaCVw40EH0

## UML Diagram/Figma UI mockup
    Please find these pdf above in the main branch.

