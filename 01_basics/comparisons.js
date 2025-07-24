// console.log(2>1)
// console.log(2>=1);
// console.log(2==1);
// console.log(2<1);
// console.log(2!=1);

// -----------------------------

// console.log("2">1);
// console.log("02">1);
// both the statements output to true

//--------------------------------

// console.log(null>0);
// console.log(null == 0);
// console.log(null>=0);

 // FALSE FALSE TRUE
 // NULL KO ZERO MAI CONVERT KR LIYA ISLEY , CASE 3 MEI 0>=0 IS TRUE
 // BUT IN CASE 1 OUTPUT IS FALSE KYUKI , COMPARISONS CHECK WORK DIFFERENTLY , LIKE CONVERT NULL TO 0 AND THEN GIVES THE OUTPUT 
 // BUT EQUALITY OPERATOR (==) TREATS NULL AND UNDEFINED AS IT IS 

 //--------------------------------

// console.log(undefined ==0);
// console.log(undefined >0);
// console.log(undefined < 0);

// all outputs lead to FALSE

//-----------------------

// strict check not even checks the values but checkes the data type as well
// (===)

console.log("2" === 2 );
// false
// (==) conversions ho jata hai but (===) no conversions jst do strict checking
