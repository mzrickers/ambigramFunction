

const letterPartners = 
{
    a: 'e',
    b: 'q',
    d: 'p',
    e: 'a',
    h: 'y',
    i: 'i',
    j: 'r',
    l: 'l',
    m: 'w',
    n: 'u',
    o: 'o',
    p: 'd',
    q: 'b',
    r: 'j',
    s: 's',
    t: 't',
    u: 'n',
    w: 'm',
    x: 'x',
    y: 'h',
    z: 'z'
}
  

capitalLetterPartners = 
{
    'H': 'H',
    'I': 'I',
    'L': 'T',
    'M': 'W',
    'N': 'N',
    'O': 'O',
    'S': 'S',
    'T': 'L',
    'W': 'M',
    'X': 'X',
    'Z': 'Z'
}
    


function ambigram(word) {
    //let newArr = word.split('');
    let newString = '';
    for (let i = 0; i < word.length; i++)
    {
        let letter = word[i];
        // console.log(letter);
        if (letterPartners[letter]) 
        {
            newString += letterPartners[letter];
        } else {
            return false;
        }       
    }
    return newString;
}

let fs = require("fs");
let text = fs.readFileSync("./words_alpha.txt", "utf-8");
let ambiArray = text.split("\n");


function viableAmbigramArray(arr) {
    let okAmbigram = [];
    for (let i = 0; i < arr.length; i++)
    {
        let result = ambigram(arr[i]);
        if (result) 
        {
            okAmbigram.push(result);
        }
    }
    return okAmbigram;
}



let test = "zach";

console.log(ambigram(test));

console.log(ambiArray[1].length);

let testStr = ambiArray[1].replace('\r', '');

let arrayWithoutLinebreaks = ambiArray.map(n => n.replace('\r', ''));

console.log(`1 is ${arrayWithoutLinebreaks[0].length} and 2 is ${arrayWithoutLinebreaks[1].length}`);

console.log(`new length ${testStr.length} should be 2`)

// let finalArray = viableAmbigramArray(ambiArray);

// console.log(finalArray.length);

let reversedStringArray = arrayWithoutLinebreaks.map(word => reverseString(word));

// let finalArray2 = viableAmbigramArray(arrayWithoutLinebreaks);

let finalArray3 = viableAmbigramArray(reversedStringArray);

// console.log(`should be 134919: ${finalArray2.length}`);

// console.log(finalArray2[0]);
// console.log(finalArray2[100]);

function binarySearch(arr, word) { 
   
    let start = 0; 
    let end = arr.length-1; 
          
    // Iterate while start not meets end 
    while (start<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 
   
        // If element is present at mid, return True 
        if (arr[mid]===word) return word; 
  
        // Else look in left or right half accordingly 
        else if (arr[mid] < word)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
    return false; 
} 

function hasAmbigram(arr, fullArr)
{
    let newArr = arr.filter(word => binarySearch(fullArr, word));
    return newArr;
}

// let isAmbigramArray = hasAmbigram(finalArray2, arrayWithoutLinebreaks);

let isAmbigramArray = hasAmbigram(finalArray3, arrayWithoutLinebreaks);

console.log(`length of array is ${isAmbigramArray.length}`);

// console.log(isAmbigramArray.length);

// console.log(isAmbigramArray[20]);

// let testELOD = ambigram('elod');

// console.log(testELOD);

// console.log(arrayWithoutLinebreaks.includes('elod'));

// console.log(isAmbigramArray.slice(1, 20));

// let doesInclude = isAmbigramArray.filter(word => arrayWithoutLinebreaks.includes(word));

// console.log(doesInclude.length);

// console.log(isAmbigramArray);

let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
// fs.writeFile('ambigram.txt', isAmbigramArray, (err) => { 
      
//     // In case of a error throw err. 
//     if (err) throw err; 
// }) 

const arrayToTxtFile = require('array-to-txt-file')

arrayToTxtFile(isAmbigramArray, './newestAmbigram.txt', err => {
    if(err) {
      console.error(err)
      return
    }
    console.log('You did it')
})

function longestWord(arr) {
    let word = '';
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i].length >= word.length)
        {
            word = arr[i];
        }
    }
    return word;
}

let longWord = longestWord(isAmbigramArray);

console.log(`longestWord: ${longWord}`);

// console.log(`soloists ambigram is ${ambigram('soloists')}`);

function reverseString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--)
    {
        newStr += str[i];
    }
    return newStr;
}

let backWardsWord = reverseString('hello');

console.log(`bwards: ${backWardsWord}`);

