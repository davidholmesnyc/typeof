## Type Of 
		
### A better way to check types in Javascript for more information on why types can sometimes suck visit this blog https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/


## Example
```javascript
  var array = [] // create a new array 
  array.typeof("array",function(){
    /*this matches an array lets do something with it. 
  })
  array.typeof("string",function(){
    /* this doesn't match so it won't do anything but if it does detect a string instead of an array you can throw an error 
  })
  
  array.typeof() // array 

  
```

