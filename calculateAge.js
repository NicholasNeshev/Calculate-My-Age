function calculateAge() {
			var age;
			var elem;
						
			age = document.getElementById("numb").value;

			elem = document.getElementById("result");
	
			if (age == "" || age < -3 || age > 237) {
				elem.innerHTML = "Please enter a valid number.";
				elem.style.color = "#ED1C24";
			}
			else{
				// Converting string to a number
				age = age * 1;
				
				// Decrypting age
				age = (age + 3) / 2;
				
				if (age < 1) {
					elem.innerHTML = "You're still a baby!";
				}
				else {			
					elem.innerHTML = "Your age is " + age + "!";
				}
	
				elem.style.color = "lime";
			}			
		}
