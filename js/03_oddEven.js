<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The HTML5 Herald</title>
  </head>

  <body>

    <div id = "mainDiv" class = "mainDiv"></div>
    
    <script>

      
      let numberOfDivs = 20;

      //Grab the maindiv from the HTML.
      let mainDiv = document.getElementById("mainDiv");

      //This div will be changed inside the for loop
      let temporaryDiv;
      
      for(let i = 0; i < numberOfDivs; i++){
	  temporaryDiv = document.createElement("div");

	  //Add a class to the div.
	  //if (i) divided by 2 gives a remainder of 0, it is even.
	  if(i % 2 == 0){
	      temporaryDiv.classList.add("evenDiv");
	      	  temporaryDiv.innerHTML = "Div " + i + " is even";
	      
	  }
	  else{
	      temporaryDiv.classList.add("oddDiv");
	      temporaryDiv.innerHTML = "Div " + i + " is odd";
	  }


	  //Put the temporary div inside
	  mainDiv.appendChild(temporaryDiv);

      }
      
    </script>

    
    <style>
      .evenDiv{
	  background-color: yellow;
      }
      .oddDiv{
	  background-color: red;
      }
    </style>
  </body>
</html>
