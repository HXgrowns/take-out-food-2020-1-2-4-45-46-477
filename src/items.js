function loadAllItems() {
  return [{
    id: 'ITEM0001',
    name: '黄焖鸡',
    price: 18.00
  }, {
    id: 'ITEM0013',
    name: '肉夹馍',
    price: 6.00
  }, {
    id: 'ITEM0022',
    name: '凉皮',
    price: 8.00
  }, {
    id: 'ITEM0030',
    name: '冰锋',
    price: 2.00
  }];
}
() => {
  
}

function loadId2price() {
  let items = loadAllItems();
  const id2price = {};
  items.forEach((item) => id2price[item.id] = item.price);
  return id2price;
}

function loadId2name() {
  let items = loadAllItems();
  const id2name = {};
  items.forEach((item) => id2name[item.id] = item.name);
  return id2name;
}

module.exports = {
  allItems: loadAllItems(),
  id2price: loadId2price(),
  Id2name: loadId2name()
}
