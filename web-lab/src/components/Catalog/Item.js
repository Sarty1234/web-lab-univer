export class Item {
  constructor({ id, headerTitle, passengers, weight, weightClass, type, description, priceHour, priceDay, imageSrc }) {
    this.id = id;
    this.headerTitle = headerTitle;
    this.passengers = passengers;
    this.weight = weight;
    this.weightClass = weightClass;
    this.type = type;
    this.description = description;
    this.priceHour = priceHour;
    this.priceDay = priceDay;
    this.imageSrc = imageSrc;
  }
}