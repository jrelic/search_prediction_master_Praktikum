var fs = require('fs');

function search(){
	this.text = fs.readFile("./long.txt", "utf-8")
	return this;
}


//uklanjanje suvisnih znakova, lista ociscena
search.prototype.cleanSplitText = function() {
    this.ociscenTekst =  this.text.split(/[\s,]+/).map((eachWord) =>{
        return eachWord.replace(/[|&;?.!#$%@"/*:<>()+,]/g, ' ')
    }).join(" ").split(/[\s,]+/)
    return this
}

search.prototype.mappingWords = function(){
	this.mapiraneRijeci = this.ociscenTekst.reduce()
}


function suggestionTool(currentText) {
	//implementirati neku magiju
	//vratiti array top 5 sugestija
}	



module.exports = suggestionTool;