export class ConsumerDetails
{
    name = '';
    companyname = '';
    email = '';
    phone='';
    address='';
    comments='';

    constructor(name:string,companyname:string,email:string,phone:string,address:string,comments:string)
    {
        this.name = name;
        this.companyname = companyname;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.comments = comments;
    }
}