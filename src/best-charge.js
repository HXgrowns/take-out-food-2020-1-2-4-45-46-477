'use strict';

const itemData = require('./items');
const halfItemIds = require('./promotions');

const originPrice = (selectedItems) => {
  let total = 0;
  for (let item of selectedItems) {
    const arr = item.split(' x ');
    let [count, price] = [arr[1], itemData.id2price[arr[0]]];
    total = total + price * count;
  }
  return total;
}

const fullMinus = (selectedItems) => {
  let total = originPrice(selectedItems);
  total = total - (Math.floor(total / 30) * 6);
  return total;
}

const halfPrice = (selectedItems) => {
  let total = 0;
  for (let item of selectedItems) {
    const arr = item.split(' x ');
    let [id, count, price] = [arr[0], arr[1], itemData.id2price[arr[0]]];
    if (halfItemIds.halfItemIds.indexOf(id) >= 0) {
      price = price / 2;
    }
    total = total + price * count;
  }
  return total;
}

const shoppingDetail = (selectedItems) => {
  let result = '';
  for (let item of selectedItems) {
    const arr = item.split(' x ');
    let [name, count, price] = [itemData.Id2name[arr[0]], arr[1], itemData.id2price[arr[0]]];
    result = result + `${name} x ${count} = ${count * price}元\n`
  }
  return result;
}

const output = (selectedItems, discountType, discountPrice, total) =>
  `============= 订餐明细 =============
${shoppingDetail(selectedItems)}-----------------------------------
使用优惠:
${discountType}，省${discountPrice}元
-----------------------------------
总计：${total}元
===================================`
  ;

function bestCharge(selectedItems) {
  let origin = originPrice(selectedItems);
  let total1 = fullMinus(selectedItems);
  let total2 = halfPrice(selectedItems);
  let pointItems = itemData.Id2name[halfItemIds.halfItemIds[0]];
  for (let i = 1, len = halfItemIds.halfItemIds.length; i < len; i++) {
    pointItems = `${pointItems}，${itemData.Id2name[halfItemIds.halfItemIds[i]]}`;
  }
  if (total1 <= total2) {
    return output(selectedItems, `满30减6元`, origin - total1, total1);
  }
  return output(selectedItems, `指定菜品半价(${pointItems})`, origin - total2, total2);
}
let data = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
console.log(bestCharge(data));


// module.exports = bestCharge();
