const countDownAndUp = (number) => {
	console.log(number);
  
	if (number === 0) {
	  console.log("Reached base case");
	  return;
	} else {
	  countDownAndUp(number - 1);
	  console.log(number);
	}
};

countDownAndUp(3);
