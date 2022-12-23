export class Card {
  private id: number;
  private name: string;
  private playerClass: string;
  private rarity: string;
  private cost: number;
  private type: string;
  private spell: string;
  private attack: number;
  private health: number;
  
  constructor(id: number, name: string, playerClass: string, rarity: string, cost: number, type: string, spell: string, attack: number, health: number) {
    this.id = id;
    this.name = name;
    this.playerClass = playerClass;
    this.rarity = rarity;
    this.cost = cost;
    this.type = type;
    this.spell = spell;
    this.attack = attack;
    this.health = health;
  }
  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getPlayerClass(): string {
    return this.playerClass;
  }

  public setPlayerClass(playerClass: string): void {
    this.playerClass = playerClass;
  }

  public getRarity(): string {
    return this.rarity;
  }
  public setRarity(rarity: string): void {
    this.rarity = rarity;
  }

  public getCost(): number {
    return this.cost;
  }
  public setCost(cost: number): void {
    this.cost = cost;
  }
}