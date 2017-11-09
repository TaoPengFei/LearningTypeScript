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

class Person {
    public name : string;
    public surname : string;
    public email : Email;
    constructor(name : string, surname : string, email : Email){
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    greet(){
        console.log("Person!")
    }
}

class Teacher extends Person {
    teach() {
        console.log("老师...")
    }
}

var teacher = new Teacher("T","T",new Email("TTT.TT@TTT.COM"));
var person = new Person("P","P",new Email("PPP.PP@PPP.COM"));

person.greet();
teacher.greet();
//person.teach();
teacher.teach();