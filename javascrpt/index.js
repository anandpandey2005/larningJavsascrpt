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
* /