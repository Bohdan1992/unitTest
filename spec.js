var list = require('./1.js');
var ol = document.createElement('ol');

var chai = require('chai');
chai.use(require('chai-dom'));
var expect = chai.expect;


describe('Want to check that function returns ol element with li:', function () {
    expect(list(ol)).to.equal(document.getElementsByTagName('ol').not.to.be.empty)
})
