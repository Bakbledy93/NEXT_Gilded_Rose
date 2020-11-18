import  { MINQUALITY } from "../gilded_rose"
import  { MAXQUALITY } from "../gilded_rose"
import { handleIncrementQuality } from "../handleUpdate"
import { checkMagicItemQuality } from "../handleUpdate"

export const handleBackstage = (item)=>{
  if (checkMagicItemQuality(item)===true){
    if(item.sellIn < 0){
      item.quality = MINQUALITY
    }else if(item.sellIn < 5 && item.quality <MAXQUALITY-1){
      item.quality = handleIncrementQuality(item)+2
    }else if(item.sellIn < 11 && item.quality <MAXQUALITY){
      item.quality = handleIncrementQuality(item)+1
    }else if(item.sellIn > 10 && item.quality <MAXQUALITY){
      item.quality = handleIncrementQuality(item)
    }
  }
};