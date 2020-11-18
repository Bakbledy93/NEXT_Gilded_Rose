import { handleSellIn } from "../handleUpdate"
import { handleNormalItems } from "./normal"
import { handleBackstage } from "./backstage"
import { handleAgedBrie } from "./brie"
import { handleSulfura } from "./sulfura"
import { handleConjured } from "./conjured"



export const handleUpdateStrategy =(items)=>{
  for (let i = 0; i < items.length; i++) {
    handleSellIn(items[i]);

    if(checkBackstage(items[i])===true ){
      handleBackstage(items[i])

    }else if(checkAgedBrie(items[i])===true ){
      handleAgedBrie(items[i])

    }else if(checkSulfura(items[i])===true ){
      handleSulfura(items[i])

    }else if(checkConjured(items[i])===true ){
      handleConjured(items[i])
    
    }else{
      handleNormalItems(items[i]);
    };
  }
};

const checkAgedBrie = (item) =>{
  if(item.name =="Aged Brie"){
    return true
  }
  return false
};

const checkBackstage = (item) =>{
  if(item.name =="Backstage passes to a TAFKAL80ETC concert"){
    return true
  }
  return false
};

const checkSulfura = (item) =>{
  if(item.name =="Sulfuras, Hand of Ragnaros"){
    return true
  }
  return false
};

const checkConjured = (item) =>{
  const word = "Conjured"
  if(item.name.includes(word) === true ){
    return true
  }
  return false
};


