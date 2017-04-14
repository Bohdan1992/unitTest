var list = require('./1.js');


var chai = require('chai');
chai.use(require('chai-dom'));
var expect = chai.expect;
var ol = document.createElement('ol');

describe('Want to check that function returns ol element with li:', function () {
    expect(list.list(ol)).to.equal(document.getElementsByTagName('ol').not.to.be.empty)
})
