// JavaScript Document
(function() {
	"use strict";
	//variables
	var button = document.querySelector('#button');
	var result = document.querySelector('#result');
	var board = "";
	var submit = document.querySelector('#submit');

		//functions
		function yourname() {
		//console.log('from name()');
				var name = document.querySelector('#name').value;
				var answer = confirm("Hello "+name+"! Crazypsum allows you to create customized Lorem Ipsum text. Wanna try?");
				var question = document.querySelector('#question');

				if (answer == true){
					question.classList.add("invisible");
					button.classList.add("visible");
				} else {
					question.classList.add("invisible");
					result.classList.add("visible");
					result.innerHTML = "Ok "+name+"! Maybe some other day ;)"
				}
		}

		function theme() {
	    var person = prompt("Select your crazy word!");
			var n = person.length;

	 		if (n == 0) {
				 prompt("Select your crazy word!");
			} else if (person != null) {
							breakipsum(person);
			 		}
			}

		function breakipsum(prs) {
			//console.log(pos);
			var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis lacus quis dui ultrices tristique eget non elit. Donec gravida mauris eu libero ullamcorper congue. Ut at vehicula justo. In mattis nunc elit, id egestas arcu laoreet quis. Sed porta diam ac ex imperdiet vestibulum. Maecenas eu velit enim. Ut tincidunt tincidunt purus, eu rhoncus tortor fermentum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras luctus, nulla non commodo pellentesque, tellus nulla egestas mi, ut vehicula ligula orci a neque. In et interdum eros. Pellentesque viverra eget dolor ac semper. Vivamus varius neque eget bibendum dignissim. In sed est sed ante euismod tincidunt. Integer ultricies nunc eu lectus rhoncus congue. Donec nec nibh fermentum, rhoncus turpis vitae, fringilla elit. Aliquam nec erat auctor, vestibulum nisi et, mollis quam."
			var inputWords = ipsum.split(' ').concat(prs);

			document.querySelector('#result').innerHTML = inputWords;
			result.classList.add("visible");
			mixing(inputWords);
			}

			function mixing(inputWords) {
				var board = [];

				for (var i = 0; i <= inputWords.length; i++) {
					if (i % 7 == 0) {
						board += inputWords[inputWords.length - 1]+" ";
						result.innerHTML = board;
					} else  if (i % 2 == 0){
						var randIndex = Math.floor(Math.random()*inputWords.length);

						board += inputWords[randIndex]+" ";
						result.innerHTML = board;
					}
				}
			}

	//eventListeners
	button.addEventListener('click',theme,false);
	submit.addEventListener('click',yourname,false);
	//alert("yes javascript is linked");

})();
