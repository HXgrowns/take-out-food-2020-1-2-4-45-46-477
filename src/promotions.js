function loadPromotions() {
  return [{
    type: '满30减6元'
  }, {
    type: '指定菜品半价',
    items: ['ITEM0001', 'ITEM0022']
  }];
}

function loadHalfItemIds() {
  let promotions = loadPromotions();
  let halfItemIds = [];
  promotions.forEach((promotion) => {
    if(promotion.type === "指定菜品半价") {
      halfItemIds = promotion.items;
    }
  });
  return halfItemIds;
}

module.exports = {
  halfItemIds: loadHalfItemIds(),
  opointItemIds: loadPromotions()[1].items
}
