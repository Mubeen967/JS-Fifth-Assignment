

// Chapter # 1 ALERTS


// Task  1;
// alert("Hello..! \nWelcome to my site");

// Task # 2
// alert("Error!Please enter a valid password")

// Task # 3
// alert("Welcome to JS land...\nHappy Coding!");

// Task # 4
// alert("Welcome to JS Land");
// alert("Happy Coding! \nPrevent this page from creating additional dialogs.");

// Task # 5
// alert("Hello..I can run JS through my web broswser's console")

// Task # 6
// I have used it in my html file

// Task # 7
// I have practiced by placing script at different sections





//Chpater # 2 VARIABLES FOR STRINGS 

//Task # 1
// var username;

//Task # 2
// var myname="Mubeen Abdul-Majeed";

//Task # 3
// var message;
// message="Hello World";
// alert(message);

//Task # 4
// var name ="John Doe";
// var age  ="15 years old";
// var course = "Certified Mobile Development";
// alert(name);
// alert(age);
// alert(course);

//Task # 5
// var a ="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(a);

//Task # 6
// var email = " hmubeenm@gmail.com"
// alert("My email address is " +email);

//Task # 7
// var learn = "A smarter way to learn JavaScript";
// alert("I am tryig to learn form the book" +learn);

//Task # 8
// var a ="yah! I can write html content through js";
// document.write(a);

//Task # 9
// var message;
// message = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(message);
// document.write(message);






//Chapter # 3 VARIABLES FOR NUMBERS 
//Task #1
// var age;
// age = 15;
// alert(age  +"years old");

//Task # 2
// var n = 3;
// alert("you have visited this site " +n +" times")




//Task # 3
// var birthyear;
// birthyear = 1998;
// document.write("My birth year is " +birthyear + "<br>" +" Data type of my declared vaiable is number");

//Task # 4
// var name ="John Doe";
// var product ="T-shirt(s)";
// var quantity = 5;
// document.write(name + " ordered " +quantity+" " +product +" on XYZ Clothing store.")





//Chapter # 3 Variable Names Legal and Illegal

//Task # 1
// var myName , farherName , age;

//Task # 2

//Legal Variables
// var myName , farherName , age ,$my , _1stVariable;

//Illegal

// var 1stName;
// var alert;
// var number="7"
// var n ame;
// var 3 = "name";

//Task # 4
// document.write("Rules for naming JS variables" +"<br>");
// document.write("Variable names can only contain numbers , $ and _. For Example : $my_1stVariable" +"<br>");
// document.write("Variables must begin with a $ and _ . For Example : $name , _name or name" +"<br>");
// document.write("Variable names are case sensitive" +"<br>");
// document.write("Variable names should not be JS keywords")




//Chapter # 5 MATH EXPRESSIONS

//Task # 1
// var firstNumber = 3;
// var secondNumber = 5;
// var total =firstNumber+secondNumber;
// document.write("Sum of 3 and 5 is " +total);

//Task # 2
// Part-1 (Subtraction)
// var firstNumber = 3;
// var secondNumber = 5;
// var total =firstNumber-secondNumber;
// document.write("Subtraction of 3 and 5 is " +total);

//Task # 2
// Part-2 (Multiplication)
// var firstNumber = 3;
// var secondNumber = 5;
// var total =firstNumber*secondNumber;
// document.write("Multiplication of 3 and 5 is " +total);

//Task # 2
// Part-3 (Division)
// var firstNumber = 3;
// var secondNumber = 5;
// var total =firstNumber/secondNumber;
// document.write("Division of 3 and 5 is " +total);

//Task # 2
// Part-4 (Mosulus)
// var firstNumber = 3;
// var secondNumber = 5 ;
// var total =firstNumber % secondNumber;
// document.write("Modulus of 3 and 5 is " +total);

//Task # 3
// var a;
// document.write("Value after variable declaration is "+a +"<br>" );
// a=5;
// document.write("Initial value:" +a +"<br>");
// a++;
// document.write("Value after increment is:" +a +"<br>");
// a=a+7;
// document.write("Value after addition is: " +a +"<br>")
// --a;
// document.write("Value after decrement is: " +a +"<br>");
// a=a%3;
// document.write("The remainder is:" +a);

//Task # 4
// var ticketCost = 600;
// ticketCost=5*600;
// document.write("Total cost to buy 5 tickets to a movie is " +ticketCost +"<b>PKR")

//Task # 5
// document.write("Table of 4"+" <br>");
// var i ;
// for( i =1 ; i<10 ; i++){
// document.write(4 +"*" +i + "=" +4*i  +"<br>");
// }

//Task # 6
// var celsius =  25;
// var fahrenheit =70;
// fahrenheit = (celsius * 9/5) +32;
// document.write( "25°C is " +fahrenheit +"°F" +"<br>");
// var celsius =  25;
// var fahrenheit =70;
// c =(fahrenheit-32) * 5/9;
// document.write( "70°F is " + c + "°C");

//Task # 7
// var item1_price= 650;
// var quantityOfItem1= 3;
// var item2_price = 100;
// var quantityOfItem2 = 7;
// var charges = 100;
// document.write ("Price of item 1 is " + item1_price  + "<br>")
// document.write("quantity of item 1 is " + quantityOfItem1 + "<br>")
// document.write ("Price of item 2 is " + item2_price  + "<br>")
// document.write("quantity of item 2 is " + quantityOfItem2 + "<br>")
// document.write("Shipping Charges " + charges + "<br>" + "<br>")
// var totalCost =item1_price*quantityOfItem1 + item2_price*quantityOfItem2 + charges;
// document.write("Total Cost of your order is " +totalCost);

//Task # 8
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = obtainedMarks/totalMarks*100;
// document.write("Total Marks :" +totalMarks + "<br>");
// document.write("Obtained Marks :" +obtainedMarks + "<br>");
// document.write("Percentage :" +percentage +"%");

//Task # 9
// var usDollar = 10;
// var riyals = 25;
// var exchangeRateOfDollars = 104.80 *usDollar;
// var exchangeRateOfRiyals= 28 * riyals;
// var totalCurrency = exchangeRateOfDollars+ exchangeRateOfRiyals;
// document.write("Exchange Rate : 10 US dollars = " + exchangeRateOfDollars +"<br>")
// document.write("Exchange Rate : 25 Riyals = " + exchangeRateOfRiyals  +"<br>")
// document.write("Total Currency in PKR :" + totalCurrency);

//Task # 10
// var a = 5;
// a = (a+5 *10)/2;
// document.write(a);

//Task # 11
// var currentYear = 2020;
// var birthYear = 1998;
// var age = currentYear-birthYear;
// document.write("<h1> Age Calculator</h1>")
// document.write("Current Year " + currentYear +"<br>");
// document.write("Birth Year " + birthYear +"<br>");
// document.write("Your age is :" +age);

//Task # 12
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius*radius;
// document.write("<h1>The Geometrizer:</h1> <br>" )
// document.write("Radius of a Circle :" +radius +"<br>");
// document.write("The circumference is " + circumference +"<br>");
// document.write("The area is " + area );

//Task # 13
// document.write("<h1>The Lifetime Supply Calculator: </h1> <br>" )
// var favouriteSnack = "Chocolate Chip";
// var oneYear = 365;
// var currentAge = 15;
// var maximumAge = 65;
// var amountOfSnacks = 3;
// var totalEatSnacks =( maximumAge-currentAge )* amountOfSnacks*oneYear;
// document.write("Favorite snack :" +favouriteSnack +"<br>");
// document.write("Current age :" +currentAge +"<br>");
// document.write("Maximum age  :" +maximumAge +"<br>");
// document.write("Estimated amount  :" +amountOfSnacks +"<br>");
// document.write("You will need " +totalEatSnacks +" to last you until the ripe old age of " + maximumAge);





//Chapter # 6-9 

//Task # 1
// var a = 10;
// document.write("Result:" +"<br>")
// document.write("The value of a is: " +a +"<br>") ;
// document.write("......................................." +"<br>" +"<br>");
// ++a;
// document.write("The value of ++a is : " +a +"<br>");
// document.write("Now the value of a is : " +a +"<br>" +"<br>");
// document.write("The value of a++ is : " +a +"<br>");
// a++;
// document.write("Now the value of a is : " +a +"<br>" +"<br>");
// --a;
// document.write("The value of --a is : " +a +"<br>");
// document.write("Now the value of a is : " +a +"<br>" +"<br>");
// document.write("The value of a-- is : " +a +"<br>");
// a--;
// document.write("Now the value of a is : " +a +"<br>" +"<br>");

//Task # 2
// var a = 2, b = 1, result;
// document.write("a is " +a +"<br>");
// document.write("b is " +b +"<br>");
// --a; =1; 
// --a - --b; = 1-0 ; 
// --a - --b + ++b; = 1+1 = 2
// --a - --b + ++b + b--; = 2+1;

// result = --a - --b + ++b + b--;
// document.write("result is " +result);

//Task # 3
// var name = prompt("Enter your name");
// document.write("Dear " +name +" Welcome to our site.")

//Task # 4
// var num = +prompt("Enter a number");
// if (num == "") {
//     var number = 5;
//     for (var i = 1; i <= 10; i++) {
//         document.write(number + " *" + i + " =" + number * i + "<br>")
//     }
// }

// else
// {

//             for (var i = 1; i <= 10; i++) {
//             document.write(num + " *" + i + " =" + num * i + "<br>")
//         }
// }


// //Task # 5
// var sub1 = prompt("Enter first Subject");
// var sub2 = prompt("Enter Second Subject");
// var sub3 = prompt("Enter third Subject");

// var totalMarksOfSub1 = 100;
// var totalMarksOfSub2 = 100;
// var totalMarksOfSub3 = 100;
// var totalMarks = totalMarksOfSub1+totalMarksOfSub2+totalMarksOfSub3;

// var obtainedMarksOFSub1 = +prompt("Enter obtained marks of subject 1");
// var obtainedMarksOFSub2 = +prompt("Enter obtained marks of subject 2");
// var obtainedMarksOFSub3 = +prompt("Enter obtained marks of subject 3");
// var totalObtainedMarks = obtainedMarksOFSub1+obtainedMarksOFSub2+obtainedMarksOFSub3;

// var percentageOfSub1 = obtainedMarksOFSub1/totalMarksOfSub1*100;
// var percentageOfSub2 = obtainedMarksOFSub2/totalMarksOfSub2*100;
// var percentageOfSub3 = obtainedMarksOFSub3/totalMarksOfSub3*100;
// var totalPercentage = (percentageOfSub1+percentageOfSub2+percentageOfSub3) /3 *100;

// var totalMarks = totalMarksOfSub1+totalMarksOfSub2+totalMarksOfSub3;
// var obtainedMarks =obtainedMarksOFSub1+obtainedMarksOFSub2+obtainedMarksOFSub3;
// var percentage = obtainedMarks/totalMarks *100;

// document.write("<table><tr><th><b>Subject &nbsp    Total Marks Obtained Marks Percentage</b>");
// document.write("<tr><td>"+sub1 +  "  &nbsp &nbsp  "+ totalMarksOfSub1 +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     "+ obtainedMarksOFSub1 + " &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp        " + percentageOfSub1 +"%" +"</td></tr>")
// document.write("<tr><td>"+sub2 +  " &nbsp &nbsp &nbsp  "+ totalMarksOfSub2 +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     "+ obtainedMarksOFSub2 + " &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp        " + percentageOfSub2 +"%" +"</td></tr>")
// document.write("<tr><td>"+sub3 +  " &nbsp &nbsp &nbsp  "+ totalMarksOfSub3 +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     "+ obtainedMarksOFSub3 + " &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp        " + percentageOfSub3 +"%" +"</td></tr>")
// document.write("<tr><td>" +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp     " + totalMarks + " &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp        "+totalObtainedMarks +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp " +totalPercentage +"%" +"</td></tr></table>")







//Chapter # 9-11



//Task # 1
// var cityName =  prompt("Enter City Name ");
// if (cityName === "Karachi"){
//     alert("Welcome to city of lights")
// }

// Task # 2
// var gender = prompt("Enter your gender");
// if (gender ==="male"){
//     alert("  Good Morning Sir. ")
// }
// if (gender==="female"){
//     alert("Good Morning Ma’am.")
// }

//Task # 3
// var signalColor = prompt("Enter color of road traffic signal ")
// document.write("<table><tr><th><b>Signal Color &nbsp &nbsp&nbsp  Message</b></th></tr>");
// if (signalColor ==="Red"){
// document.write("<tr><td> Red"+  " &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp " +      "Must Stop"  +"</td></tr>")

// }

// if (signalColor==="Yellow"){
//  document.write("<tr><td>Yellow"+  "   &nbsp&nbsp&nbsp&nbsp " +      "Ready to move"  +"</td></tr>")

// }
// if (signalColor==="Green"){
//     document.write("<tr><td> Green"+  " &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp " +      "Move now"  +"</td></tr></table>")

// }




// Task # 4
// var remainingFuel = prompt("Enter remaining fuel in liters")
// if (remainingFuel <0.25 ){
//     alert("Please refill the fuel in your car");
// }

//Task # 5
//a Result : Alert is displayed
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//Task # 5
//b Result : Alert is not displayed
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//Task # 5 
//c Result : Alert is  displayed at condition 2 and 4
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

//Task # 5
//d Result : Alert is  displayed
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//Task # 5
//e Result : Alert is  displayed
// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     }

//Task # 5
// f Result : Alert is  displayed
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//Task # 6
// var obtainedMarks = prompt("Enter obtained marks in three subjects")
// var totalMarks = prompt("Enter total marks");
// var percentage = obtainedMarks/totalMarks*100;
// document.write("<h1><b>Marks Sheet</b></h1> <br> <br>");
// document.write("Total marks :" + totalMarks +"<br>");
// document.write("Marks obtained" +obtainedMarks +"<br>")
// document.write("Percentage" +percentage +"%" +"<br>");
// if (percentage >=80 ){
//     document.write("Grade : A-one" +"<br>")
//     document.write("Excellent")
// }
// if (percentage < 80 &&percentage >=70){
//     document.write("Grade : A" +"<br>")
//     document.write("Good")
// } 
// if (percentage < 70 && percentage >=60){
//     document.write("Grade : B" +"<br>")
//     document.write("You need to improve")
// }
// if (percentage < 60){
//     document.write("Grade : Fail" +"<br>")
//     document.write("Sorry")
// } 

//Task # 7
// var secretNumber = 4;
// var guessNumber = +prompt("Guess the secret number");
// // var closeNumber = guessNumber+1;
// if(guessNumber ===secretNumber){
//     alert("Bingo! Correct answer")
// }
// if( guessNumber+1 === secretNumber){
// alert("Close enough to the correct answer")
// }

//Task # 8
// var number = +prompt("Enter a number");
// if (number % 3 ==0){
//     alert("This number is divisible by 3")
// }
// else{
//     alert("The given number is not divisible by 3")
// }

//Task # 9
// var number = +prompt("Enter a number");
// if (number % 2 == 0) {
//     alert("This number an even number")
// }

// if(number % 2 != 0) {
//     alert("The given number is an odd number")
// }

//Task # 10
// var temp = +prompt("Enter temperature");
// if (temp >40 ){
//     document.write("It is too hot outside.")
// }
// if(temp < 40 && temp > 30 ){
//     document.write("The Weather today is Normal.")
// }
// if(temp <31 && temp > 20){
//     document.write("Today’s Weather is cool.")
// }
// if( temp<21 && temp> 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }

//Task # 11
// var firstNumber = +prompt("Enter first number");
// var secondNumber = +prompt("Enter second number");
// var operator = prompt("Chosse the operation +,-,*, / , % ");

// if (operator === "+") {
//     var additon = firstNumber + secondNumber;
//     alert("Addition of two numbers is " + additon);
// }
// if (operator === "-") {
//     var sub = firstNumber - secondNumber;
//     alert("Subtraction of two numbers is " + sub);
// }
// if (operator === "*") {
//     var mul = firstNumber * secondNumber;
//     alert("Multiplication of two numbers is " + mul);
// }
// if (operator === "/") {
//     var div = firstNumber / secondNumber;
//     alert("Division of two numbers is " + div);
// }
// if (operator === "%") {
//     var remainder = firstNumber % secondNumber
//     alert("Remainder of two numbers is " +remainder)
// }




//Chapeters 12-13

//Task # 1
// var input = prompt("Enter any character");
// if (input.charCodeAt(0) >=65  && input.charCodeAt(0) <=90){
//     alert("This is uppercase letter");
// }
// else if (input.charCodeAt(0) >=97 && input.charCodeAt(0)<=122 ){
//     alert("This is lowercase letter");
// }
// else {
//     alert("This is a number");
// }

//Task # 2
// var firstNumber = +prompt("Enter frst integer");
// var secondNumber = +prompt("Enter second integer");
// if (firstNumber > secondNumber){
//     alert(firstNumber +" is larger");
// }
// else if (secondNumber > firstNumber){
//     alert(secondNumber + " is larger");
// }
// else{
//     alert("Both numbers  are equal");
// }

//Task # 3
// var input = prompt("Enter a number");
// if (input>0){
//     alert("This is a positive number");
// }
// else if (input<0){
//     alert("This is a negative number");

// }
// else{
//     alert("You have entered zero")
// }

//Task # 4
// var str = prompt("Enter any character");
// if (str.length===1 && (str === "a" || str ==="e" ||str==="o" || str==="i" || str==="u" )){
//     alert("true")
// }
// else {
//     alert("False")
// }

//Task # 5
// var password = "Agree123";
// var inputPassword = prompt("Enter your password");
// if (inputPassword===""){
//     alert("Please enter your password");
// }
// else if (inputPassword===password){
//     alert("Correct! The password you entered matches the original password")
// }
// else {
//     alert("Incorrect password")
// }

//Task # 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else
// {
// greeting = "Good evening";
// alert(greeting);
// }

//Tasl # 7
// var inputTime = +prompt("Enter time ");
// if (inputTime>=0000 && inputTime<1200){
//     alert("Good morning");
// }
// else if (inputTime >= 1200 && inputTime <1700){
//     alert("Good afternoon!");
// }
// else if (inputTime >=1700 && inputTime<2100){
//     alert("Good evening");
// }
// else if (inputTime>=2100 && inputTime <=2359){
//     alert("Good night");
// }
// else {
//     alert("please! Enter valid time ");
// }





//Chapters 14-16

//Task # 1
// var arr = [];
// console.log(arr);

//Task # 2
// var arr = new Array();
// console.log(arr);

//Task # 3
// var strArr = ["Mubeen" , "Maheen" , "Muqaddas" , "Maham"];
// document.write(strArr);

//Task # 4
// var numberArr = [1,2,3,4,5,6,7,8];
// document.write(numberArr);

//Task # 5
// var array = [true , false];


//Task # 6
// var arr = ["ali", 1, 2 ,"Alina" , 6];
// document.write(arr[2]);

//Task # 7
// var qualification =[" SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// var number = ["1)", "2)" , "3)" , "4)" , "5)" , "6)" , "7)" , "8)"]
// for (var i =0 ; i<qualification.length ; i++)
// {
//     document.write( number[i] +" "+qualification[i] +"<br>")
// }


//Task # 8
// var StudentNames = ["Michael" , "John" , "Tony"];
// var marks = [320,230,480];
// var totalMarks = 500;
// for (var i =0 ;i<StudentNames.length ; i++){
//     document.write("Score of " +StudentNames[i] +" is " +marks[i] + " Percentage :" + marks[i]/totalMarks*100 +"%"+ "<br>")
// }

//Task # 9
// var colorNames = ["white " , "Blue" , "Green" , "Yellow" , "Black" ];
// document.write(colorNames +"<br>");
// var addingAtFirst = prompt("What color you want to add color at beginning" );
// colorNames.unshift(addingAtFirst);
// document.write(colorNames +"<br>");
// var addingAtLast = prompt("What color you want to add color to the end" );
// colorNames.push(addingAtLast);
// document.write(colorNames +"<br>");
// colorNames.unshift("Aqua " , "Brown");
// document.write(colorNames +"<br>");
// colorNames.shift(colorNames[0]);
// document.write(colorNames +"<br>");
// colorNames.pop(colorNames[colorNames.length-1]);
// document.write(colorNames +"<br>");
// var startIndex = +prompt("At which index you want to add a color & color name. Enter the index");
// var removeValue = +prompt("Enter the index at which you want to replace that value . Write 0 if you just want to add");
// var colorName = prompt("Enter the color name ")
// colorNames.splice(startIndex , removeValue , colorName);
// document.write(colorNames +"<br>");
// var startIndexToRemove = +prompt("At which index you want to delete the color? Enter the index.");
// var colorIndexes = +prompt("How many colors you want to delete?");
// colorNames.splice(startIndexToRemove , colorIndexes);
// document.write(colorNames +"<br>");

//Task # 10
// var scores = [320 , 230 ,480 , 120];
// document.write("Scores of Students : " +scores +"<br>");
// scores.sort();
// document.write( "Ordered Scores of Students : "+ scores);

//Task # 11
// var cityNames = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities list :" +"<br>");
// document.write(cityNames +"<br><br><br>");
// var copyCityNames = cityNames.slice(2,4);
// document.write( "Selected Cities list : <br>" +copyCityNames );

//Task # 12
// var arr = ["This" , "is" , "my" , "cat"];
// document.write("Array : <br>"+arr +"<br><br>");
// arr1=arr.join("  ");
// document.write("String : <br>"+arr1);

//Task # 13
// var arr = ["Keyboard" , "mouse" , "printer" , "monitor"];
// document.write("Devices <br>"+arr +"<br><br><br>");
// for (var i=0 ; i<arr.length; i++){
//     document.write("OUT <br> " +arr.shift(arr[i]) +"<br><br>"); 
//     arr.length=arr.length+1;
//     }

//Task # 14
// var arr = ["Keyboard" , "mouse" , "printer" , "monitor"];
// document.write("Devices <br>"+arr +"<br><br><br>");
// for (var i= arr.length ; i > 0; i--){
//     document.write("OUT <br> " +arr.pop(arr[i]) +"<br><br>"); 

//     }


//Task # 15
// var arr = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
// document.write("<select>" )
// for (var i=0 ; i<arr.length ; i++){
//     document.write("<option>" + arr[i] +"</option>" )
// }
// document.write("</select>")



//==== Chapter # 17-20

//Task # 1
// var mulArray = [["Mubeen"] , 2 ,"Hira"];
// alert(mulArray);

//Task # 2

// var arr = [[0,1,2,3] , [1,0,1,2],[2,1,0,1]];
// for (var i=0 ; i<arr.length ; i++){
//     for ( var j=0 ; j< arr[i].length ;j++){
//     document.write(arr[i][j] +" " );
//     }
//     document.write("<br>");
// }

// }

//Task # 3
// var i;
// for (i=1 ; i<=10 ; i++){
//     document.write(i +"<br>")
// }

//Task # 4
// var number = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// document.write("Multiplication table of " +number +"<br>");
// document.write("Length " +length +"<br>")
// for (i = 1 ; i<=length ; i++){

//     document.write(number +" * " +i + " =" +number*i +"<br>");
// }

//Task # 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");


// }
// document.write("<br>");
// for (var j = 0; j < fruits.length; j++) {
//     document.write("Element at index" + j + " is " + fruits[i] + "<br>")
// }

//Task # 6
//a
// document.write("Counting :<br><br>")
// for (var i = 1 ; i<=15 ;i++)

// {
//     document.write( i +",")
// } 
// b
// document.write("<br><br>Reverse Counting : <br><br>")
// for (var i = 10 ; i>=1 ;i--)

// {
//     document.write( i +",")
// } 

// c
// document.write("<br><br>Even: <br><br>")
// for (var i = 0 ; i<=20 ;i=i+2)

// {
//     document.write( i +",")
// } 
// d
// document.write("<br><br>Odd: <br><br>")
// for (var i = 1 ; i<=20 ;i=i+2)

// {
//     document.write( i +",")
// } 
// e
// document.write("<br><br>Series: <br><br>")
// for (var i = 2 ; i<=20 ;i=i+2)

// {
//     document.write( i+"k" +",")
// } 

//Task # 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt('Welcome to ABC Bakery.What do you want to order ?');
// var convert = input.toLowerCase();
// var jadoo
// for (var i = 0 ; i<A.length ; i++) {
//     if(convert==A[i]) {
//         jadoo = 1
//         var j = i
//     }
//     else {
//         continue;
//     }
// }
// if(jadoo === 1){
//     alert(input + ' is available at index ' + j +' in our bakery');
// }else{
//     alert("We are sorry 🙁" +input +' is not available in our bakery');
// }


//Task # 8
// var A = [24, 53, 78, 91, 12];
// var maximum = A[0];
// for (i=0 ; i<A.length ; i++){
//     if (maximum < A[i]){
//         maximum = A[i];

//     }
// }
// document.write(maximum);

//Task # 9
// var A = [24, 53, 78, 91, 12];
// var minimum = A[0];
// for (i=0 ; i<A.length ; i++){
//     if (minimum > A[i]){
//         minimum = A[i];

//     }
// }
// document.write(minimum);

//Task # 10

// var number = 5;
// for (var i = 1 ; i<=20 ;i++){
//     document.write(number*i +",");
// }




// Chapter # 21


//Task # 1
// var firstName = prompt('Enter your first name');
// var secondName = prompt('Enter your second name');
// var fullName = firstName+ " " + secondName;
// alert('Hello! ' +fullName);


// //Task # 2
// var favouritePhone = prompt('Write your favourite phone model');
// var favouriteLength = favouritePhone.length;
// document.write('My favourite phone is: ' +favouritePhone +"<br>")
// document.write('Length of string: '+favouriteLength);

//Task # 3
// var word = 'Pakistani';
// var index = word.indexOf('n');
// alert('String: '+word +"\n" + "Index of 'n':  " +index );

//Task # 4
// var letter = 'Hello World';
// var lastIndex = letter.lastIndexOf('l');
// alert('String: ' +letter +'\n' +"Last index of  'l' :  "  +lastIndex)

//Task # 5
// var word = 'Pakistani';
// var index = word.charAt(3);
// alert('String: '+word +"\n" + "Character at index 3 :  " +index );

//Task # 6
// var firstName = prompt('Enter your first name   ');
// var secondName = prompt('Enter your second name');
// var space = "  "
// var fullName = firstName.concat(space,secondName);
// alert('Hello! '.concat(fullName))

//Task # 7
// var city = '“Hyderabad';
// var replace = city.replace('Hyder' , 'Islam');
// alert('city: ' +city +'\nAfter replacement: ' +replace)

//Task # 8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// document.write(message.replace(/and/g , '&'))

//Task # 9
// var str = '472'
// var number =Number(str);
// document.write('Value: ' +str +"<br>");
// document.write('Type: '+ typeof(str)+"<br>");
// document.write('Value: ' +number +"<br>");
// document.write('Type:' +typeof(number) +"<br>");

//Task # 10
// var userInput = prompt('Please Write Something');
// var convertedWord = userInput.toUpperCase();
// document.write('User input: ' +userInput +"<br>");
// document.write('Upper case: ' +convertedWord);

// Task # 11
// var input = prompt('please Write something');
// var firstWord = input.slice(0,1);
// var otherChar = input.slice(1);
// firstWord = firstWord.toUpperCase();
// otherChar = otherChar.toLowerCase();
// document.write('User input: ' + input  +"<br>");
// document.write('Title case: ' +firstWord.concat(otherChar) );

//Task # 12
// var num = 35.36;
// var str = num.toString().replace("." , "")
// document.write("Number: " +num +"<br>");
// document.write("Result: " + str)

//Task # 13
// var input = prompt( 'Enter your name');
// for (var i = 0 ; i<input.length;i++){
//     var check = input.charCodeAt(i);
//     if(check===33|| check===44 || check===46 ||check===64){
//        var a=1;


//     }
//     else{
//         continue;
//     }
// }
// if(a===1){
//     alert('Please enter a valid username');
// }
// else{
//     alert('Valid Username');
// }


//Task # 14 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt('Welcome to ABC Bakery.What do you want to order ?');
// var convert = input.toLowerCase();
// var jadoo
// for (var i = 0 ; i<A.length ; i++) {
//     if(convert==A[i]) {
//         jadoo = 1
//         var j = i
//     }
//     else {
//         continue;
//     }
// }
// if(jadoo === 1){
//     alert(input + ' is available at index ' + j +' in our bakery');
// }else{
//     alert("We are sorry 🙁" +input +' is not available in our bakery');
// }

// //Task # 15
// var pass = prompt("Enter password: ");
// for (var i = 0; i<pass.length;i++){
//     for (var j=48;j<58;j++){
//         if(j===(pass.charCodeAt(i))){var num = 1;}
//         if(j===(pass.charCodeAt(0))){var invalid = 0;}
//     }
//     for (var k=65;k<91;k++){
//         if(k===(pass.charCodeAt(i))){var alp = 1;}
//     }
//     for (var k=97;k<123;k++){
//         if(k===(pass.charCodeAt(i))){var alp = 1; }
//     }
//     if((num === 1 && alp === 1) && invalid!=0 && pass.length >= 6){var condition = 1; break; }
//     else{continue;}
// }
// if(condition === 1){document.write("Entered Password: "+pass+"<br>"+"Passwrod is correct")}
// else{document.write("Entered Password: "+pass+"<br>"+"Please insert a valid password")}


//Task # 16
// var university = "University of Karachi";
// var split =university.split("")
// for (var i= 0 ; i<university.length;i++){
//     document.write(split[i] +'<br>');
// }


//Task # 17
// var input = prompt('Enter any word');
// var length = input.length
// var index = input.charAt(length-1);
// document.write('User input: ' +input+'<br>');
// document.write('Last character of input: ' +index);

//Task # 18
// var text = "The quick brown fox jumps over the lazy dog";
// var convert  = text.toLowerCase();
// var count = convert.match(/the/g).length
// document.write(text+'<br>')
// document.write("There are " +count + " occurrence(s) of the word 'the'")







//Chapter 26-30
//Task # 1
// var input = +prompt('Enter a positive integer ')
// var sign = Math.sign(input);
// var roundOff = Math.round(input);
// var floor = Math.floor(input);
// var ceil = Math.ceil(input);
// if (sign===1){
// document.write('number :' +input +"<br>");
// document.write("round off value: " +roundOff +"<br>" +'floor value: ' +floor +"<br>" +'ceil value: ' +ceil)
// }
// else{
//     alert('Enter a positive integer')
// }

//Task # 2
// var input = +prompt('Enter a negative floating point ')
// var sign = Math.sign(input);
// if (input % 1 != 0){
//     var roundOff = Math.round(input);
//     var floor = Math.floor(input);
//     var ceil = Math.ceil(input);
//     if (sign===-1){
//     document.write('number :' +input +"<br>");
//     document.write("round off value: " +roundOff +"<br>" +'floor value: ' +floor +"<br>" +'ceil value: ' +ceil)
//     }   
// }
// else{
//     alert('Enter a negative floating point number')
// }

//Task # 3
// var number  = +prompt('Enter any number');
// var absoluteValue = Math.abs(number);
// document.write('The absolute value of ' + number + ' is ' + absoluteValue);

//Task # 4
// var dice = 'random dice';
// var random = Math.floor(Math.random()*6 +1);
// document.write(dice+" " +random);

//Task # 5
// var coin = 'random coin value';
// var head = 'Heads';
// var tail = 'Tails'
// var random = Math.floor(Math.random()*2+1 );
// if(random===2){
// document.write('2' +"<br>" +coin+" " +head);}
// else{
//     document.write('1' +"<br>"+coin + "" +tail)
// }

//Task # 6
// var number='random number between 1 and 100: '
// var random = Math.floor(Math.random()*100 +1)
// document.write(number+ " " +random);

//Task # 7
// var number  = +prompt('Enter your weight in kilograms');
// var weight = parseFloat(number);
// alert(weight)

//Task # 8
// var number = Math.floor(Math.random*10+1)
// var input = +prompt('Enter a number between 1 and 10')
// if(input===number){
//     alert('Congratulations')
// }
// else if (input>=11){
//     alert('Please enter number between 1 and 10')

// }
// else{
//     alert('Try again')
// }





//Chapter 31-34

//Task # 1
// var d = new Date();
// document.write(d)

//Task # 2
// var month = new Array();
//   month[0] = "January";
//   month[1] = "February";
//   month[2] = "March";
//   month[3] = "April";
//   month[4] = "May";
//   month[5] = "June";
//   month[6] = "July";
//   month[7] = "August";
//   month[8] = "September";
//   month[9] = "October";
//   month[10] = "November";
//   month[11] = "December";

//   var d = new Date();
//   var n = month[d.getMonth()];
//   document.write('Current month: ' + n);

//Task # 3
// var weekday = new Array();
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var d = new Date();
// var n = weekday[d.getDay()];
// var slice = n.slice(0,3)
// alert('Today is ' +slice)

//Task # 4
// var weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
// for(var i = 0;i<weekday.length;i++){
// var d = new Date();
// var n = d.getDay();
// if (n===6 || n===0){
//     var a=1;
// }
// else{
//    continue
// }
// }
// if(a===1){
//     alert("It's a Fun day")
// }
// else{
//     alert("It's not a Fun day")
// }

//Task # 5
// var d = new Date();
// var n = d.getDate();
// if(n<16){
//     alert('First fifteen days of the month')
// }
// else{
//     alert('Last days of the month')
// }

//Task # 6
// var d= new Date();
// var milliseconds = d.getTime();
// var minutes = milliseconds/(100*60*60);
// document.write('Current Date: ' +d+ "<br>");
// document.write('Elapsed milliseconds since January 1 , 1970: ' +milliseconds+"<br>");
// document.write('Elapsed minutes since January 1 , 1970: ' +minutes +"<br>");

//Task # 7
// var d= new Date();
// var hours = d.getHours();
// if(hours<=12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM")
// }

//Task # 8
// var d = new Date(2020,12,0 );
// alert(d)


// //Task # 9
// var date = new Date();
// var ramdan = new Date (2020 , 03 , 24);
// var dateTime = date.getTime();
// var ramdanTime = ramdan.getTime();
// var passDays = dateTime-ramdanTime;
// var totalPassDays = passDays/(1000*60*60*24);
// var result=Math.floor(totalPassDays)
// alert(result +' days have been passed since 1st Ramdan , 2020');

//Task # 10
// var reference = new Date( "Sat Dec 05 2015 22:50:16 GMT +0500(PKT)");
// var referenceSec = reference.getTime();
// var date = new Date ("2015");
// var dateSec = date.getTime();
// var elapsed = referenceSec-dateSec;
// var totalPassed = elapsed/(1000); 
// var finalsPass=Math.floor(totalPassed);
// document.write('On reference date ' +reference +"<BR>" + finalsPass +" seconds had passed since beginning of 2015")

// Task # 11
// var date = new Date();
// var hour = date.getHours();
// var previous_date= new Date(); 
// previous_date.setHours(hour-1);
// document.write('Current date: ' +date +"<br>" +'1 hour age, it was ' +previous_date)

//Task # 12
// var date = new Date();
// var year = date.getFullYear();
// var pre_year = new Date();
// pre_year.setFullYear(year - 100);
// document.write('Current date: ' + date +"<br>" + '100 years back, it was ' +pre_year)


//Task # 13
// var age = prompt('Enter your age');
// var date = new Date();
// var Year = date.getFullYear();
// var birthYear = Year- age;
// document.write('Your age is ' +age+"<br>" + 'Your birth year is ' +birthYear);

//Task  # 14
// var name = prompt('Enter your name ');
// var month = prompt('Enter month');
// var units = +prompt('Enter units');
// var charges = +prompt('What are charges per unit ?');
// var netAmount = units*charges;
// var payment_surcharges = +prompt('Enter late payment subcharges');
// var payment_after_date = netAmount+payment_surcharges;
// document.write('Customer Name: ' +name +"<br>");
// document.write('Month: ' +month+"<br>");
// document.write('Number of units: ' + units.toFixed(2)+"<br>");
// document.write('Charges per unit: ' +charges.toFixed(2)+"<br><br>");
// document.write('Net Amount Payable (within Due Date): '+netAmount.toFixed(2)+"<br>");
// document.write('Late payment surcharges: ' +payment_surcharges+"<br>")
// document.write('Gross Amount Payable (after Due Date): ' +payment_after_date)


//Chapters 35-38

//Task # 1
// function date(){
//     var d=new Date();
//     alert(d)
// }
// date();


//Task # 2
// var firstName = prompt('Enter your first name');
// var lastName = prompt('Enter your last name');
// function greetUser (){

//     alert(firstName.concat( " " , lastName));
// }
// greetUser();

//Task # 3
// var firstNumber = +prompt('Enter your first number');
// var lastNumber = +prompt('Enter your last number');
// function add() {
//     sum = firstNumber + lastNumber;
//     return sum;
// }
// document.write(add());

//Task # 4
// var num1 = +prompt('Enter first number')
// var operator = prompt('Type operator');
// var num2 = +prompt('Enter second number');
// function cal(num1, operator, num2) {
//     if (operator === "+") {
//         return num1 + num2;
//     }
//     else if (operator === "-") {
//         return num1 - num2;
//     }
//     else if (operator === "*") {
//         return num1 * num2;
//     }
//     else if (operator === "/") {
//         return num1 / num2;
//     }
//     else if (operator === "%") {
//         return num1 % num2;
//     }
// }
// document.write(cal(num1 ,operator, num2))

//Task # 5
// var sq = +prompt("Enter an integer")
// function square(sq){
//     var result = sq ** 2;
//     return result;
// }
// document.write(square(sq))

//Task # 6
// var ans = 1;
// var n = +prompt('Enter a number');
// function fac(n){
//     if (n === 0 || n===1){
//         return ans;
//     }
//     else{
//         for(var i = n ; i>=1 ; i--){
//             ans = ans*i

//         }
//         return ans;
//     }

// }
// document.write(fac(n));

//Task # 7
// var startNum = +prompt('Enter starting number');
// var endNum = +prompt('Enter ending number');

// function counting(startNum , endNum){
//     for (var i = startNum ; i<=endNum ; i++){

//         document.write(i +"<BR>");

//     }

// }
// counting(startNum , endNum)

//Task # 8
// function calculateHypotenuse(base , perpendicular){
//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     function calculateSquare(square){
//         var sqr = square**2;
//         return sqr;
//     }
//     return hypotenuse;
// }
// document.write(calculateHypotenuse(13 , 13))

//Task # 9 
// var height = 8
// function area(width , height ){
// var A = width * height;
// return A;
// }
// document.write('Area is ' +area(4 , height));

//Task # 10
// var str = prompt('Please write something');
// var check = "";
// str = str.toLowerCase();
// function palindrome (str){
// for (var i = str.length-1 ; i >=0 ; i-- ){
//     check += str[i];
// }
// if (str ===check){
//     document.write('This is a palindrome word')
// }
// }
// palindrome((str));

//Task # 11
// var str = prompt('Write something');
// function conversion(str) {
//     str = str.split(' ');
//     var arr1 = [];
//     for(var i =0 ; i <str.length  ; i++){
//         arr1.push(str[i].charAt(0).toUpperCase()+str[i].slice(1));
//     }
//     return arr1.join(' ')}

//     var a =  conversion((str))
//    document.write( "EXAMPLE STRING : " +str +"<br> " +"EXPECTED OUTPUT :"+a );



//Task # 12
// var str = prompt('Write any sentence');
// str = str.split(' ');
// var result = str[0];
// function logest(str){

//     for(var i = 0 ; i<str.length ; i++){
//         if(result.length < str[i].length){
//             result = str[i]
//         }
//     }
//     return result;
// }
// document.write(logest((str)));

//task # 13

// function myFunction(string, letter) {
//     var i = 0;
//     for (count in string) {
//         if (string[count] === letter) {
//             i++;
//         }
//     }
//     document.write("The word " + letter + " comes in " + string + " " + i + " times");

// }
// var ans = myFunction("JSResourceS.com", "o")


//Task 14
// var radius = +prompt("Enter radius to find circumference");
// function calcCircumference(radius){
//     var pi = Math.PI;
//     var circumference = Math.round((2 * pi * radius));
//     return circumference;
// }
// function calcArea(radius){
//     var pi = Math.PI;
//     var circumference = Math.round((pi * (radius**2)));
//     return circumference;
// }
// document.write("The circumference is "+calcCircumference(radius)+ "<br>" )
// document.write("The area is "+calcArea(radius))



// var str="Pakistanan Zindabad zinda";
// var x=str.split(" ");
// var word="";
// for(var i=0;i<=x.length;i++){
// if(x[i].length>x[i+1].length) {
// word=x[i];
// break;
// }
// else{
// word=x[i+1];
// }
// }
// alert(word);



//Chapter  38-43
//Task # 1
// var a = +prompt('Enter a');
// var b = +prompt('Enter b');
// function power(a,b){
//     var c = Math.pow(a,b);
//     alert(c);
// }
// power(a,b);

//Task # 2
// var year = +prompt('Enter year to find leap year');
// function leap(year) {
//     if (year%4 === 0 && year%100 !== 0 || year%400 === 0) {
//         alert('This is a leap year')
//     }
//     else {
//         alert('This is not a leap year')
//     }
// }
// leap(year);

//Task # 3
// var a = +prompt('Enter a');
// var b = +prompt('Enter b');
// var c = +prompt('Enter c');
// function calcArea(a, b, c) {
//     S = Sides();
//     var area = Math.sqrt(S * ((S - a) * (S - b) * (S - c)));
//     alert(area);

// }
// function Sides() {
//     var S = (a + b + c) / 2;

//     return S;
// }
// calcArea(a, b, c);

//Task # 4
// var marks=[];
// var totalmarks = +prompt('Enter your total marks');
// for(var i=0;i<3;i++){
// var obtmarks = +prompt('Enter your obtained marks');
// marks.push(obtmarks);
// }
// function avg(x){
//     var average = 200;
//     average=x/totalmarks;
//     return average;

// }
// function per(x){
//     var percentage;
//     percentage=(x/totalmarks)*100;
//     return percentage;
// }
// function main(){
//     while(true){
//     var choice=prompt('What do you want to see ..?  \nPress 1 for average and 2 for percentage\n 3 for quit');

//         if(choice==='1'){
//             for(var i=0;i<3;i++){
//                 alert('Student '+i+' average is '+ avg(marks[i]));
//             }

//         }
//         else if(choice==='2'){
//             for(var i=0;i<3;i++){
//                 alert('Student '+i +' percentage is '+ per(marks[i]));
//             }

//         }
//         else if(choice==='3'){
//             break;
//         }
//         else {
//             alert('Choose correct key')
//         }
//     }
// }
// main();


//Task # 5
// var text = prompt('Please write something');
// var char = prompt('Write character to find its index');

//     function indexNo(text , char) {
//         for (var i = 0; i < text.length; i++){
//         if (text[i] === char) {
//             return i;
//         }

//     }}
// alert('Your required letter is at ' +indexNo(text , char) + 'index')


//Task # 6
// string = prompt("Enter a sentence,\nI will delete vowels from it.");
// function voweldelete(x){
//     var a = "";
//     let words = x.split("")
//     for (i of words){
//         if (!i.match("a|e|i|o|u|A|E|I|O|U")){
//             a=a+i    }}
//     return a;}
// alert('Your sentence after removing vowels is : \n'+voweldelete(string))

//Task # 7
// if character ch is a vowel 
// function isVowel(ch) {
//     switch (ch) {
//         case 'a':
//         case 'A':
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':

//             return true;
//         default:
//             return false;    }}

// // Function to return the count of adjacent 
// // vowel pairs in the given string 
// function vowelPairs(s, n){
//     var count = 0;
//     for (var i = 0; i < n-1; i++){
//         // If current character and the 
//         // character after it are both vowels 
//         if (isVowel(s[i]) && isVowel(s[i+1])){
//             list.push(s[i]+s[i+1])
//             count++;        }    }   
//     return count;}
    
// function printlist(list) {
//     document.write("The pairs of vowels are: " )
//     for (i of list){
//         document.write(i+", ")    }}
// // Driver code 
// var list = []
// function main(){
//     var s = prompt("Enter a sentence to check for joint vowels\n it will alert number of occurances")
//     // var s = "Please read this application and give me gratuity";
//     var n = s.length;
//     // pairs = list.join();
//     document.write("The occurences of vowels are: ",vowelPairs(s, n),"<br>");
//     printlist(list)} 
// main()

//  Task8
// var dis = prompt("Enter distance in kilimeter");
// function distanceFeet(dis) {
//     var ft = dis * 3280.8;
//     var feet =  Math.round(ft);
//     return (feet);
// }
// function distanceMeter(dis) {
//     var meter = dis * 1000;
//     var meter =  Math.round(meter);
//     return (meter);
// }

// function distanceInches(dis) {
//     var inch = dis * 39370;
//     var inche =  Math.round(inch);
//     return (inche);
// }

// function distanceCentimeter(dis) {
//     cm = dis * 100000
//     var cmeter = Math.round(cm);
//     return (cmeter);
// }
// document.write("Convert distance from kilometer throught feet " + distanceFeet(dis) + " ft" + "<br>");
// document.write("Convert distance from kilometer throught feet " + distanceMeter(dis) + " m" + "<br>");
// document.write("Convert distance from kilometer throught inch " + distanceInches(dis) + " inch" + "<BR>");
// document.write("Convert distance from kilometer throught centimeter " + distanceCentimeter(dis) + " cm" + "<BR>");

//Task # 9
// var hours= prompt('Enter your work hours');
// hours = parseInt(hours);

// var overPay;
// if (hours > 40){
//     var extraHours = hours - 40;
//      overPay = extraHours*12;
//      alert('Your work hours are '+ hours +'\nYou have worked ' + extraHours +' hours over \nYour overtime salary is : ' +overPay)
// }
// else{
//     alert("You did not work above 40")
// }


// Task#10

// var remaining;
// var total = +prompt("Enter Rupees you want to change in notes: ");
// fiveth     = Math.floor(total / 5000); 
// remaining  = total % 5000;
// oneth      = Math.floor(remaining / 1000);
// remaining  = remaining % 1000;
// fivehund   = Math.floor(remaining / 500);
// remaining  = remaining % 500;
// onehund    = Math.floor(remaining / 100);
// remaining  = remaining % 100;
// fifty      = Math.floor(remaining / 50);
// remaining  = remaining % 50;
// twenty     = Math.floor(remaining / 20);
// remaining  = remaining % 20;
// ten        = Math.floor(remaining / 10);
// remaining  = remaining % 10;
// five       = Math.floor(remaining / 5);
// remaining  = remaining % 5;
// two        = Math.floor(remaining / 2);
// one        = remaining % 2;
// document.write("Note/s of Five Thousand is/are: " +fiveth+"<br>")
// document.write("Note/s of One Thousand is/are: "  +oneth+"<br>")
// document.write("Note/s of Five Hundred is/are: "  +fivehund+"<br>")
// document.write("Note/s of One Hundred is/are: "   +onehund+"<br>")
// document.write("Note/s of Fifty is/are: "         +fifty+"<br>")
// document.write("Note/s of Twenty is/are: "        +twenty+"<br>")
// document.write("Note/Coin/s of Ten is/are: "      +ten+"<br>")
// document.write("Coin/s of Five is/are: "          +five+"<br>")
// document.write("Coin/s of Two is/are: "           +two+"<br>")
// document.write("And Coin of One is: "             +one)




//Chapter # 43-48
//Task # 1 is in html file
//Task # 2 is in html file
//Task # 4 is in html file

//Task # 3
// function del(r){
//    var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById('delBtn').deleteRow(i);
// }
// function edit(r){

// }

//Task # 5
// var count = 0;
// function increase() {
//     count+=1;
//     document.getElementById('click').innerHTML = 'Clicks: ' +count;
// }
// function decrease() {
//     count-=1;
//     document.getElementById('click').innerHTML = 'Clicks: ' +count;
// }


//Chapter # 49-52
//Task # 1
// function submit1() {
//     var fn = document.getElementById('fName').value;
//     var ln = document.getElementById('lName').value;
//     var mail = document.getElementById('mail').value;
//     var password = document.getElementById('password').value;
//     var head = '<h1>Congratulations..! You have successfully signed up</h1><br>';
//     document.write(head);
//     var record = 'Your First Name ' + fn + ' Your Last Name ' + ln + 'Your Email Address is ' + mail + ' <br>Your password is :' + password
//     document.write(record);
// }





//Task # 2

// function readMore(){
//     var text = 'Lorem ipsum dolor sit amet consecteturDoloribus maxime blanditiis ameteveniet nam, qui quo eum. Voluptatibus molestiae itaque, qui hic assumenda nihil consequatur corporis iste consequuntur doloribus modi.'
//     var paragraph = document.getElementById('pera');
//     paragraph.innerHTML= text;

// }

//Task # 3


//Chapter 53-58
//Task # 1
// function showImage(e){
//     var modalImage=document.getElementById('modalImage');
//     modalImage.src = e.src;
// }


// function zoomIn(){
//     var a = document.getElementById('pera');
//     a.className= "zoomIn";
// }
// function zoomOut(){
//     var a = document.getElementById('pera');
//     a.className= "zoomOut";
// }


//Chapter # 59-67
//Task # 1 (i)
// var main = document.getElementById('main-content');

//Task # 1 (ii)
// var main = document.getElementById('main-content');
// var child = main.childNodes;
// console.log(child)

//Task # 1 (iii)
// var content = document.getElementsByClassName('render').innerHTML;
// document.write(content)
// document.write(content.item(i).innerHTML);

// var x = document.getElementsById("main-content");
// var rend = x.ge
// for (i = 0; i < 5; i++) {
// document.write(x.item(0).innerHTML);
// }
// 

// document.write(x.length)

//Task # 1 (iv)
// var input = document.getElementById('first-name');
// input.value = 'Mubeen'

// Task # 1 (v)
// var lName = document.getElementById('last-name');
// lName.value = "Abdul-Majeed"
// var lName = document.getElementById('email');
// lName.value = "hmubeenm@gmail.com"


//Task # 2 (i)
// var findType = document.getElementById('form-content');
// alert(findType.nodeType);

//Task # 2 (ii)
// var type = document.getElementById('lastName');
// alert(type.nodeType);
// var child = type.childNodes;
// alert(child.nodeType)


//Task # 2 (iii)
// var update = document.getElementById('last-name');
// update.innerHTML = 'Mubeen'
// console.log(update);

//Task # 2 (iv)
// var first = document.getElementById('main-content');
// console.log(first.firstChild);
// console.log(first.lastChild);

//Task # 2 (v)
// var first = document.getElementById('lastName');
// console.log(first.nextSibling);
// console.log(first.previousSibling);

//Task # 2(vi)
// var first = document.getElementById('email');
// console.log(first.parentNode);
// alert(first.nodeType)















