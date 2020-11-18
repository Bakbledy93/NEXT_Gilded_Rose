import  { MINQUALITY } from "./gilded_rose"
import  { MAXQUALITY } from "./gilded_rose"

export const checkMagicItemQuality = (item) =>{
  if(item.quality >= MINQUALITY && item.quality <=MAXQUALITY){
    return true
  };
  return false
};

export const handleSellIn = (item) =>{
  item.sellIn = item.sellIn-1
}

export const handleIncrementQuality = (item) =>{
  if (item.quality < 50){
      return item.quality +1
    }
  return MAXQUALITY
};

export const handleDecrementQuality = (item) =>{
  item.quality = item.quality-1
};

export const handleExpirateDateQuality = (item) => {
  item.quality = item.quality -2
};

export const checkExpirateDate = (item) => {
  if(item.sellIn >= 0){    
    return true
  }
  return false
};
