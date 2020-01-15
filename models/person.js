// Your Person class goes here!
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        this.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
        this.dob = dob
        this.emails = []
        this.mobile = []
    }
    fullname(){
        return this.firstName + " " + this.lastName
    }
    addEmail(email){
        this.emails.push(email)
    }
    addMobile(mobile){
        this.mobile.push(mobile)
    }
    formatString(){
        var string = this.firstName +" "+ this.lastName + "\n" + "----------" + "\n" + "DOB: " + this.dob + "\n" + "\n" + "Email Addresses:" + "\n"+ "\n";
        let emailcounter = 0;
        while (emailcounter <= this.emails.length - 1){
            string = string + "- " + this.emails[emailcounter] + "\n";
            emailcounter += 1
        }
        let mobileCounter = 0;
        string = string + "\n" + "Phone Numbers:" + "\n";
        while (mobileCounter <= this.mobile.length - 1){
            string = string+ "- " + this.mobile[mobileCounter]+ "\n";
            mobileCounter += 1
        }
        var newStr = string.slice(0, -1);
        return newStr


    }




}
module.exports = Person