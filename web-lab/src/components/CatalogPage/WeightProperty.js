export class WeightProperty {
  static Light = new WeightProperty('s', 'Легкий', 'var(--bs-teal)');
  static Medium = new WeightProperty('m', 'Середній', 'var(--bs-warning)');
  static Heavy = new WeightProperty('l', 'Тяжкий', 'var(--bs-danger)');

  constructor(teg, full, color) {
    this.teg = teg;
    this.full = full;
    this.color = color;
  }

  static fromTag(tag) {
    return Object.values(this).find((entry) => entry.teg === tag);
  }
}