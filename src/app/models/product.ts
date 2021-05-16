export class Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  tag: string;
  brand: string;
  category: string;
  price: number;
  imageUrl: string;

  constructor(id: number, sku: string, name: string ,description: string,tag:string = "New", brand: string,category: string,price: number,imageUrl: string) {
    this.id = id
    this.sku = sku
    this.name = name
    this.description = description
    this.tag = tag;
    this.brand = brand
    this.category = category
    this.price = price
    this.imageUrl = imageUrl

  }
}
