import { Merchant } from './Merchant';
import { Category } from './Category';

export class Product{
    productId:number;
    productName:string;
    productDescription:string;
    productPrice:number;
    productDiscount:number;
    merchant:Merchant[];
    category:Category[];

    constructor(productId:number , productName:string,productDescription:string,productPrice:number,productDiscount:number,merchant:Merchant[],category:Category[]){
        this.productId  = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
        this.productDiscount = productDiscount;
        this.merchant = merchant;
        this.category = category;
    }


}
