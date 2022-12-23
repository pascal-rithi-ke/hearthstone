import { Card } from "../model/Card";

export class CardsRepository {
  private adapter

  constructor(adapter: any) {
    this.adapter = adapter;
  }
  async getAllCards() {
    try {
      const db = this.adapter.connect();
      const dbpromise = db.promise();

      const sql = "SELECT * from cards";

      const [rows] = await dbpromise.query(sql);
      if (rows.length === 0) {
        return [];
      }
      const data = rows.map((x: any) => new Card(
        x.id,
        x.name,
        x.playerClass,
        x.rarity,
        x.cost,
        x.type,
        x.spell,
        x.attack,
        x.health))
      return data
    } catch (error) {
      console.error(error);
    }
  }
}