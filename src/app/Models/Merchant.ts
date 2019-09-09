export class Merchant{
    merchantId:number;
    merchantName:string;
    merchantPassword:string;
    merchantContactNo:string;
    merchantGSTNo:string;
    merchantCompanyName:string;

    constructor(merchantId:number,merchantName:string,merchantPassword:string,merchantContactNo:string,merchantGSTNo:string,merchantCompanyName:string){
        this.merchantId = merchantId;
        this.merchantName = merchantName;
        this.merchantPassword = merchantPassword;
        this.merchantContactNo = merchantContactNo;
        this.merchantGSTNo = merchantGSTNo;
        this.merchantCompanyName = merchantCompanyName;
    }

}