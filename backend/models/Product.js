class Product {
  constructor(id, name, price, image, description, url, totalResults) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
    this.url = url;
    this.totalResults = totalResults;
  }
}

module.exports = Product;
