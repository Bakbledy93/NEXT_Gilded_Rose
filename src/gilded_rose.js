import { handleUpdateStrategy } from "./strategy/update";

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    handleUpdateStrategy(this.items);
    return this.items;
  }
}

export const MAXQUALITY = 50
export const MINQUALITY = 0


module.exports = {
  Item,
  Shop,
}
