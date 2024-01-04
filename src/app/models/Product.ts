export class Product {

  private _id: number;
  private _name: string;
  private _image: string;
  private _price: number;
  private _size: number;

  constructor(id: number, name: string, image: string, price: number, size: number) {
    this._id = id ?? '';
    this._name = name ?? '';
    this._image = image ?? '';
    this._price = price ?? '';
    this._size = size ?? '';
  }

  get id(): number {
    return this._id ?? '';
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }
}
