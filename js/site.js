//get starting values from screen
//controller function
function getUserString() {
    //get the user's input
    let userString = document.getElementById("userString").value;

    //reverse the user's input
    let revString = reverseStringA(userString);

    //compare original input and reversed input
    let result = compareStrings(userString, revString);

    //output result - separate function 
    displayData(result, userString, revString);

}

function reverseStringA(userString) {
    let startValue = userString.length - 1;
    let endValue = 0;

    //user input = frank
    //frank is a string and an array of characters
    //[f, r, a, n, k]
    let revString = "";



    for (let i = startValue; i >= endValue; i--) {
        revString += userString[i];
    };

    //loop 1 - "k"
    //loop 2 - "kn"
    //loop 3 - "kna"
    //loop 4 - "knar"'
    //loop 5 - "knarF"

    return revString
}

function reverseStringB(userString) {
    let splitArray = userString.split("");
    let revArray = splitArray.reverse();
    let rejoinArray = revArray.join("");

    //Uses array functions to reverse the strings
    return userString.split('').reverse().join("");
}


function compareStrings(userString, revString) {
    //this is the work part
    //A != a
    //normalize the case
    //extra credit - "A man, a plan, a canal; panama" - is a palindrome when the
    //spaces and special characters are removed
    //RegEx is used for this - google is your friend

    let cleanUser = userString.replace(/[^A-Z0-9]/ig, "");
    let cleanRev = revString.replace(/[^A-Z0-9]/ig, "");

    let normalUser = cleanUser.toLowerCase();
    let normalRev = cleanRev.toLowerCase();

    //== tests for equal value
    // a == a
    // 10 == 10 
    // "10" == 10

    //=== tests for equal value and type
    // a === a - true
    // 10 === 10 - true
    // "10" === 10 - false

    if (normalUser == normalRev) {
        return "was a palindrome"
    } else {
        return "was not a palindrome";
    };

};

function displayData(result, userString, revString) {
    //we want to output three things
    //1. the original input
    //2. the reversed input
    //3. was it a palindrome
    let output = document.getElementById("results");

    output.innerHTML = `After reversing your string, I found that it is ${result}. Your input was ${userString}, and reversed it is ${revString}`;

};