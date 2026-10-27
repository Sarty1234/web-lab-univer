export class ClassProperty {
  static Passengers = new ClassProperty('p', 'Пасажирський', 'var(--bs-teal)');
  static Transport = new ClassProperty('t', 'Транспортний', 'var(--bs-yellow)');
  static Fishing = new ClassProperty('f', 'Рибальський', 'var(--bs-primary)');
  static list = { 1: this.Passengers, 2: this.Transport, 3: this.Fishing }

  constructor(teg, full, color) {
    this.teg = teg;
    this.full = full;
    this.color = color;
  }

  static fromTag(tag) {
    return Object.values(this).find((entry) => entry.teg === tag);
  }
}