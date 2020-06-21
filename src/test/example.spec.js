var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const suggestionTool = require("../suggestion");


//funkcija ne smije biti dulja od 5-6 redaka

describe('suggestionTool', function() {
    it('suggestionTool mora biti funkcija', function () {
        suggestionTool();
    });
    it('suggestionTool mapira sljedece rijeci', function () {
        let result = suggestionTool()
        assert.isObject(result)
    })
    it('suggestionTool lizlistava listu rijeci', function () {
        let result = suggestionTool()
        assert.isArray(result)
    })
    
});


//R-G-R