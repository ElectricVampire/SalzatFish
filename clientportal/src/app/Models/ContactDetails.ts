export class contactDetails{
    name:string = "";
    email:string = "";
    message:string = ""
    subject:string = "";
    phone:string = "";
    constructor(name:string,email:string,message:string,subject:string,phone:string)
    {
        this.name = name;
        this.email = email;
        this.message = message;
        this.subject = subject;
        this.phone = phone;
    }

}