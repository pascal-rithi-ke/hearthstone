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
      return rows
    } catch (error) {
      console.error(error);
    }
  }
}