/**
 * 负责Email验证并作为一个Person_SRP类的一个属性
 */
/*
class Email{
    public email : string;
    constructor(email : string){
        if (this.validateEmail(email)){
            this.email = email;
        } else {
            throw new Error("Invalid email!");
        }
    }
    validateEmail(email : string){
        var re = /\S+@\S+\.\S+/;
        return re.test(this.email);
    }
}
*/


/**
 * 抽象类的等级实现数据和行为的封装
 */
/*
class Email_ABS {
    private email : string;
    constructor(email : string){
        if (this.validateEmail(email)){
            this.email = email;
        } else {
            throw new Error("Invalid email!");
        }
    }
    private validateEmail(email : string){
        var re = /^[0-9a-z_]+@(([0-9a-z]+)[.]){1,2}[a-z]{2,3}$/;
        return re.test(this.email);
    }
    get() : string {
        return this.email;
    }
}
var email = new Email_ABS("323243@qq.com");

class Person_SRP {
    public name : string;
    public surname : string;
    public email : Email;
    constructor(name : string, surname : string, email : Email){
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    greet(){
        console.log("Person_SRP!")
    }
}
*/
