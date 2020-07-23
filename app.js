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
// {
//     function indexNo() {
//         for (var i = 0; i < text.length; i++){
//         if (text[i] === char) {
//             var a = 1;
//         }
//         if(a=1){
//             alert(char + ' is at index ' +i + ' in your string');

//         }
//         else{
//             break;
//         }
//     }}
// }
// indexNo();

//Task # 6
// var sentence = prompt('Enter anyting');
// function replace(){
//     for(var i =0 ; i<sentence.length;i++){
//         if(sentence[i] ==='a' || sentence[i] ==='o'||sentence[i] ==='e'||sentence[i] ==='i'||sentence[i] ==='u'){
//             sentence[i] = " "
//         }
//     }
//     alert(sentence)
// }

// replace();






//Chapter # 43-48
//Task # 1 is in html file
//Task # 2 is in html file
//Task # 4 is in html file

//Task # 3
function del(r){
   var i = r.parentNode.parentNode.rowIndex;
    document.getElementById('delBtn').deleteRow(i);
}
function edit(r){

}

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
// function submit() {
//     var fn = document.getElementById('fName').value;
//     var ln = document.getElementById('lName').value;
//     var mail = document.getElementById('mail').value;
//     var password = document.getElementById('password').value;
//     var formShow = document.getElementById('displayAgain');
//     console.log(formShow);
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
