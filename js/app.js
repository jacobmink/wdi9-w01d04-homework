// VERBAL QUESTIONS
// 1) A parameter is a variable in a function. It serves as a placeholder when 
//      defining the function. Once that function is called, an argument is 
//      the actual value fed into the function at that point.
// 2) The difference within a function between return and console.log is that 
//      console.log will just print something to the console, whereas return
//      will spit out the result of the function. You can return this result
//      into a variable for use later in the code.
// 3) The fact that functions can return values makes it much easier to write DRY
//      code. Any time you want to get the function's value, you can just call
//      that function, instead of rewriting it every time.

// PALINDROME AGAIN

const new_string = 'Borscht';

var checkPalindrome = function (str) {
    const str_split = str.toLowerCase().split('');
    // console.log(str_split);
    const back_str_split = [];
    for (let i = str_split.length - 1; i > -1; i--) {
        back_str_split.push(str_split[i]);
    }
    // console.log(back_str_split);
    const back_join = back_str_split.join('');
    const str_join = str_split.join('');
    if (back_join == str_join) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

checkPalindrome('rader');

// DIGIT SUM
const sumDigits = (num)=>{
    let num_arr = num.toString().split('');
    sum = 0;
    for (let i = 0; i < num_arr.length; i++) {
        
        sum += parseInt(num_arr[i]);
    }
    return sum;
}

console.log(sumDigits(612));

// PYTHAGORAS
const calculateSide = (sideA, sideB)=>{
    let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    return sideC;
}

console.log(calculateSide(8,6));