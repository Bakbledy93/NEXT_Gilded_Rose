import  { MAXQUALITY } from "../gilded_rose"
import { handleIncrementQuality } from "../handleUpdate"
import { checkMagicItemQuality } from "../handleUpdate"


export const handleAgedBrie = (item)=>{
  if (checkMagicItemQuality(item)===true){
    if(item.sellIn < 0){
      item.quality = MAXQUALITY
    }else if(item.sellIn > 10 && item.quality <MAXQUALITY){
      item.quality = handleIncrementQuality(item)
    }
  }
};