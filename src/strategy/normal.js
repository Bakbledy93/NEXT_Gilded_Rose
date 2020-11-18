import  { MINQUALITY } from "../gilded_rose"
import { handleDecrementQuality } from "../handleUpdate"
import { handleExpirateDateQuality} from "../handleUpdate"
import { checkExpirateDate } from "../handleUpdate"


export const handleNormalItems =(item)=>{
  if(item.quality > MINQUALITY  && checkExpirateDate(item) === true){
    handleDecrementQuality(item)
  }else if(item.quality > MINQUALITY && !checkExpirateDate(item) === true){
    handleExpirateDateQuality(item)
  }
};