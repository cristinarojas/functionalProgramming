function myFunction() {
	var names = ["Cristina", "Carlos", "Nayeli", "Kike"];
	var result = "";
	var i;

	for (i = 0; i < names.length; i++) {
	    result += "position " + [i] + " = " + names[i] + " ";
	}

	return result;
}

myFunction();

// Output
// position 0 = Cristina position 1 = Carlos position 2 = Nayeli position 3 = Kike