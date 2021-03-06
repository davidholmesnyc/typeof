(function(){
/* better typeof than the default. For more information on why the default can suck sometimes visit this https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/  */
	this.typeof = function(string,callback) {
		var type = ({}).toString.call(this).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
		this.error = function(callback){
			return callback(type)
		}
		if(callback && string === type){
			callback( type )
	  	return this
		}else{
			return this
		}
	  return type
	}
	Function.prototype.typeof = this.typeof
	String.prototype.typeof = this.typeof
	Object.prototype.typeof = this.typeof
	Array.prototype.typeof = this.typeof

})()