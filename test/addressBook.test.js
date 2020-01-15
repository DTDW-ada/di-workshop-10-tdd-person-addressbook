const chai = require('chai');
const expect = chai.expect;
const AddressBook = require('../models/AddressBook')
describe('person', ()=> {
    it('should initialize properly', ()=>{
        book = new AddressBook();
        expect(book.entries).to.deep.equal([])
    })
    it('can add people to the book', ()=>{
        book = new AddressBook();
        person
        expect(book.entries,length).to.equal([1])
    })
})