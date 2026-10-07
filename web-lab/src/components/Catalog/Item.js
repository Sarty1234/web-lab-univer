export class Item {
  constructor({ id, headerTitle, passengers, weight, type, description, price, imageSrc }) {
    this.id = id;
    this.headerTitle = headerTitle;
    this.passengers = passengers;
    this.weight = weight;
    this.type = type;
    this.description = description;
    this.price = price;
    this.imageSrc = imageSrc;
  }
}