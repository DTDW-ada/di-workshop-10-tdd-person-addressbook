const chai = require('chai');
const expect = chai.expect;

const Person = require("../models/person.js");
// Your Person test goes here!

describe('person', ()=> {
    it('should initialize properly', ()=>{
        var person = new Person("Joe","Bloggs", "1 Jan 1998");
        expect(person.firstName).to.equal("Joe");
        expect(person.lastName).to.equal("Bloggs");
        expect(person.dob).to.equal("1 Jan 1998");
        expect(person.emails).to.deep.equal([])
    });
    it('should capitalise the first name', ()=>{
        var person = new Person("ben","Dover", "1 Jan 1998");
        expect(person.firstName).to.equal("Ben")
    });

    it('should return the full name', ()=>{
        var person = new Person("ben","dover", "1 Jan 1998");
        expect(person.fullname()).to.equal("Ben Dover")
    });

    it('should add email', ()=>{
        var person = new Person("ben","dover", "1 Jan 1998");
        var email = 'ben3@gmail.com';
        person.addEmail(email);
        expect(person.emails).to.deep.equal(['ben3@gmail.com'])
    });

    it('should add mobile', ()=>{
        var person = new Person("ben","dover", "1 Jan 1998")
        var mobile = '07342040402';
        person.addMobile(mobile);
        expect(person.mobile).to.deep.equal(['07342040402'])
    })

    it('should return format string', ()=>{
        var person = new Person("Joe","bloggs", "1 Jan 1990");
        person.addEmail("joe@example.com");
        person.addEmail("joe.bloggs@workexample.com");
        person.addMobile("07712345678");
        person.addMobile("07654321987");
        expect(person.formatString()).to.equal("Joe Bloggs" +"\n"+
            "----------" +"\n"+
            "DOB: 1 Jan 1990" + "\n"+
            "\n" +
            "Email Addresses:\n" + "\n"+
            "- joe@example.com"+ "\n"+
            "- joe.bloggs@workexample.com" + "\n"+
            "\n"+
        "Phone Numbers:" + "\n"+
            "- 07712345678" + "\n"+
            "- 07654321987")
    })

    });