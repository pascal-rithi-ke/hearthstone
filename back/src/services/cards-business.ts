const cardsRepositories = require("../repositories/cards-repositories");

exports.getCards =  async () => {
  try {
    const data = await cardsRepositories.getCards()
    console.log(data)
    return data
  } catch (error) {
    console.log("error business");
  }
};