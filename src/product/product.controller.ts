import { Controller, Get, Post,Body, Patch, Param, Delete } from "@nestjs/common";
import { ProductService } from "./product.service";
import { IProductInput, IProductUpdateInput} from "src/types";

@Controller('/product')
export class ProductController{
    constructor (private productService:ProductService){}
    @Get() //localhost:3002/product
    getAllProducts() {
      return this.productService.getAllProducts();
    }
    @Post()
    createProduct(@Body() inp: IProductInput) {
        return this.productService.addProduct(inp);
      }
    @Patch(':id')
    updateProduct(@Body() product: IProductUpdateInput, @Param('id') id: any) {
        //we'll  return complete product
    
        return this.productService.updateProduct(id, product);
      }
    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        //i want to return deleted product Id
       // console.log('id', id);
    
        return this.productService.deleteProduct(id);
      }
    
     @Get(':id') //localhost:3002/product/12hgy21
      productById(@Param('id') id: string) {
        //return product of request Id if exist
        console.log('id', id);
    
        return this.productService.getProductById(id);
      }
}