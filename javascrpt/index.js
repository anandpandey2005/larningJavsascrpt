/* 
-------------------------------------------------------------------------------
------> object 

const userProfile = {
    profileName: "ANAND PANDEY",
    isFollow: true,
    message: "send message",
    post: 198 + "kpost",
    follower: 555 + "kpost",
    following: 4 + "following",
    bio: "bca student",
};
document.write(userProfile.profileName);
document.write(userProfile.isFollow);
document.write(userProfile.message);
document.write(userProfile.post);
document.write(userProfile.follower);
document.write(userProfile.following);
document.write(userProfile.bio);
document.write(typeof userProfile.bio);
----------------------------------------------------------------------------
----->   conditional statement-- -> driving license eligibility check

let age = 21;
if (age >= 18) {
    document.write("YOU ARE ELIGIBLE FOR DRIVING LICENCE");

} else {
    document.write("YOU ARE NOT ELIGIBLE FOR DRIVING LICENCE");
}
------------------------------------------------------------------------------

---> arithematic operator
let a = 10;
let b = 5;
document.write("a+b=", a + b);
document.write("a-b=", a - b);
document.write("a*b=", a * b);
document.write("a**b=", a ** b);//----> exponention  operator a^b or b^a
document.write("a/b=", a / b);
document.write("a%b=", a % b);
--------------------------------------------------------------------------------
-----> evn or odd checking

let num = prompt("ENTER THE NUMBER");
if (num % 2 === 0) {
    document.write("even");
} else {
    document.write("odd");
}
---------------------------------------------------------------------------------
    ----> gaving grade

let num = prompt("ENTER THE NUMBER");
if (num >= 80 && num <= 100) {
    document.write("A");
}
else if (num >= 70 && num <= 79) {
    document.write("B");
}
else if (num >= 50 && num <= 69) {
    document.write("C");
}
else if (num >= 0 && num <= 49) {
    document.write("FAIL");
}
else if (num <= 0 || num >= 100) {
    document.write("ENTER A VALID NUMBER");
}
---------------------------------------------------------------------------------
------->   using loop  we find factorial of the given  number
let num=prompt("ENTER THE NUMBER");
let number=1;

for (let index = 1; index <=num; index++) {
   number=number*index;
}
document.write( "THE FACTORIAL OF THE GIVEN NUMBER  IS :",number);

----------------------------------------------------------------------------------
------>  sum from 0 to enterd value

let num=prompt("ENTER THE NUMBER");
let sum=0;
for (let index = 0; index <=num; index++) {
  sum=sum+index;
    
}document.write(sum);
------------------------------------------------------------------------------------
------> ENTERED NUMBER IS PRIME OR NOT 

let num = prompt("ENTER THE NUMBER");
if (num == 0) {
    document.write("YOU ENTERED A WHOLE NUMBER (0)");
}
else if (num == 1 || num == 2) {
    document.write("PRIME NUMBER");
}
for (let index = 2; index < num/2; index++) {
    if (num%index== 0||num%3==0||num%2==0) {
        document.write("NOT PRIME");break;
    }
    else {
        document.write("PRIME");
    break;}

}
---------------------------------------------------------------------------------------
*/
