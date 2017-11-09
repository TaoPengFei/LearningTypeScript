/**
 * Based Persion Class
 */
/*
class Person_1 {
    public name : string;
    public surname : string;
    public email : string;
    constructor(name : string, surname : string, email : string){
        this.email = email;
        this.name = name;
        this.surname = surname;
    }
    greet(){
        console.log("Hello Boy!")
    }
}
var me : Person_1 = new Person_1("Remo", "Jansen", "remo.jansen@wolksoftware.com");
*/


/**
 *
 * @type {(name, surname, email) => any}
 */

/*
var Person_2 = (function () {
    function Person_2(name, surname, email) {
        //this.email = email;
        this.name = name;
        this.surname = surname;
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("Invalid email!");
        }
    }
    Person_2.prototype.validateEmail = function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(this.email);
    };
    Person_2.prototype.greet = function () {
        console.log("Hi! I'm " + this.name + ". You can reach me at " + this.email);
    };
    return Person_2;
}());
var me_SRP = new Person_2("Remo", "Jansen", "remo.jansen@wolksoftware.com");
*/
