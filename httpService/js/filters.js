app.filter('apple', function(){
	return function(input){
		console.log(input);
		return input;
	};
});

app.filter('kebab', function(){
	return function(input){
		if(!isNaN(input)) {
			console.log('nan', input);
			return input;
		}
		return input.replace(/_/g, "-");
	};
});


app.filter('ordinal', function(){
  return function(number){
    if(isNaN(number) || number < 1){
      return number;
    } else {
      var lastDigit = number % 10;
      if(lastDigit === 1){
        return number + 'st';
      } else if(lastDigit === 2){
        return number + 'nd';
      } else if (lastDigit === 3){
        return number + 'rd';
      } else if (lastDigit > 3){
        return number + 'th';
      }
    }
  };
});


app.filter('num', function(){
	return function(input){
		return false;
	};
});
