function receivesAFunction(callback){
    return callback()
  }

 // receivesAFunction(function () { return "spy"})

  function returnsANamedFunction(){
    return function confusion(){}
  }

function returnsAnAnonymousFunction() {
    return function (){}
}