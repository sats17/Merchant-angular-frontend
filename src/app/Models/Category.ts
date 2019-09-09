export class Category{
    categoryId:number;
    categoryGender:string;
    categoryType:string;
    
    constructor(categoryId:number,categoryGender:string,categoryType:string){
        this.categoryId = categoryId;
        this.categoryGender = categoryGender;
        this.categoryType = categoryType;
    }
}