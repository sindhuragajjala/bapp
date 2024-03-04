import { Injectable } from '@nestjs/common';
import { IProduct, IProductInput, IProductUpdateInput } from 'src/types';
@Injectable()
export class ProductService {
  productList: IProduct[] = [
    {
      pId: '111',
      pName: 'product1',
      price: 120,
    },
    {
      pId: '112',
      pName: 'product2',
      price: 130,
    },
  ];
  getAllProducts(): IProduct[] {
    return this.productList;
  }
  addProduct(product: IProductInput) {
    this.productList.push({ pId: new Date().toISOString(), ...product });
  }
  updateProduct(pId: any, productUpdate: IProductUpdateInput) {
    const indexToUpdate = this.productList.findIndex(
      (product) => product.pId == pId,
    );
    console.log(indexToUpdate);
    if (indexToUpdate >= 0) {
      let newProduct = this.productList[indexToUpdate];
      newProduct = {
        ...newProduct,
        ...productUpdate,
      };
      this.productList[indexToUpdate] = newProduct;
      return newProduct;
    }
  }
  deleteProduct(pId: any) {
    // const indexToUpdate = this.product.findIndex(
    //   (product) => product.pId == pId,
    // );
    this.productList = this.productList.filter((product) => product.pId != pId);
    return pId;
  }

  getProductById(pId: any) {
    //logic to get Product
    const indexToGet = this.productList.findIndex(
      (product) => product.pId == pId,
    );
    if (indexToGet >= 0) {
      let newProduct = this.productList[indexToGet];
     
      return newProduct;
    }
    
    return null;
  }
}
