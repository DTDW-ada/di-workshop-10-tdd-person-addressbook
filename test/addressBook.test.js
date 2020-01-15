const chai = require('chai');
const expect = chai.expect;
const AddressBook = require('.../models/AddressBook.js')
describe('person', ()=> {
    it('should initialize properly', ()=>{
        book = new AddressBook;
        expect(book.entries).to.deep.equal([])
    })
})