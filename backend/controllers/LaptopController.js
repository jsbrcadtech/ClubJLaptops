const laptopService = require('../services/LaptopService');
const Product = require('../models/Product');

async function getLaptops() {
  let laptopSearch = await laptopService.loadData('/search');
  let laptopsData = [];
  let results = laptopSearch.data.searchResult.mods.itemList.content;
  let totalResults = laptopSearch.data.searchResult.pageInfo.totalResults;

  for (let i = 0; i < results.length; i++) {
    let resultObj = results[i];
    let product = new Product();

    if (product.id == undefined) {
      product.id = null;
    } else {
      product.id;
    }

    product.id = resultObj.productId;
    product.name = resultObj.title.displayTitle;
    if (resultObj.prices == undefined) {
      resultObj.prices = null;
    } else {
      product.price = resultObj.prices.salePrice.formattedPrice;
    }
    if (resultObj.image == undefined) {
      resultObj.imgUrl = null;
    } else {
      product.image = resultObj.image.imgUrl;
    }

    product.description = resultObj.title.seoTitle;
    product.totalResults = totalResults;

    laptopsData.push(product);
  }
  return laptopsData;
}

async function getLaptopsById(id) {
  let laptopSearch = await laptopService.loadDataById('/product/' + id);

  let product = new Product();
  product.id = 1;
  product.name = laptopSearch.titleModule.subject;
  product.price = laptopSearch.priceModule.formatedActivityPrice;
  product.image = laptopSearch.pageModule.imagePath;
  product.description = laptopSearch.titleModule.subject;
  product.url = laptopSearch.pageModule.itemDetailUrl;

  return product;
}

// module.exports.getLaptops = getLaptops;
module.exports = {
  getLaptops,
  getLaptopsById,
};
