export class Item {
  constructor({ id, headerTitle, title, description, price, imageSrc }) {
    this.id = id;
    this.headerTitle = headerTitle;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageSrc = imageSrc;
  }
}