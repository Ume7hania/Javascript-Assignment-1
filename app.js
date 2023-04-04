// alert("Error");

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var city = prompt("Enter your city name");
// document.write(firstname + " " + lastname + " from " + city);

// var a = prompt("what is your name ?");
// document.write(a);
 
// var a = confirm("do you like our websit ?");
//  if(a){
//     alert("thanks");
//  }else{
//     alert("sorry");
//  }
 
//  var a = 40;
//   var b = 20;
//   if(a > b){
//      alert(a);
// }else{
//     alert(b);
//  }
var per = prompt("Enter your percentage");

if(per >= 80 && per <= 100){
    document.write("your in merit.");
}else if(per >= 60 && per < 80){
    document.write("your in 1st division.");
}else if(per >= 45 && per < 60 ){
    document.write("your in 2nd division .");
}else if(per >= 33 && per < 45){
    document.write("your in 3rd division");
}else if(per < 33){
    document.write("your fail");
}else{
    document.write("please enter valid percentage");
}
