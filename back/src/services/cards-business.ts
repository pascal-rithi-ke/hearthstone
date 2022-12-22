import { MySQLAdapter } from "../config/MySQLAdapter";
import { CardsRepository } from "../repositories/cards-repositories";

exports.getCards =  async () => {
  try {
    const repository = new CardsRepository(new MySQLAdapter());
    const data = await repository.getAllCards()
    return data
  } catch (error) {
    console.log("error business");
  }
};