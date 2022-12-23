import { MySQLAdapter } from "../config/MySQLAdapter";
import { Card } from "../model/Card";
import { CardsRepository } from "../repositories/cards-repositories";

exports.getCards =  async () => {
  try {
    const repository = new CardsRepository(MySQLAdapter);
    const data = await repository.getAllCards()
    return data
  } catch (error) {
    console.log("error business");
  }
};