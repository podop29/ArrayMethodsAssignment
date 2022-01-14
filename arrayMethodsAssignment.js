
///ForEach
//doubleValues
let numArray = [1,2,3,4,5,6,7,8,9,10]

function doubleValues(arr){
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element*2);
    });
    return newArr;
}
//console.log(doubleValues(numArray))
//onlyEvenValues
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(element =>{
        if(element % 2 == 0){
            newArr.push(element)
        }
    })
    return newArr;
}
//console.log(onlyEvenValues(numArray));
//show first and last
let stringArr = ['Stevan', 'Grubac', "springBoard", "JavaScript", "hi"];
function showFirstAndLast(arr){
    let newArr = [];
    let str = '';
    arr.forEach(element =>{
        str = element.slice(0, 1);
        str = str + element.slice( element.length - 1, element.length);
        newArr.push(str);
    })
    return newArr;
}
//console.log(showFirstAndLast(stringArr));
//addKeyAndValue
let names = [
{name: 'stevan'},
{name: 'john'},
{name: 'jacoby'},
{name: 'steven'},
{name: 'lilly'},
]

function addKeyAndValue(arr, key, value){
    arr.forEach(element =>{
        element[key] = value
    })
    return arr;
}

//console.log(addKeyAndValue(names, 'title', 'developer'));
//removeVowels

function countVowels(str){
let arr = str.split('')
let obj = {};
const vowels = 'aeiou'
arr.forEach(char =>{
    let lowerCasedLetter = char.toLowerCase();
    if(vowels.indexOf(lowerCasedLetter) !== -1){
       if(obj[lowerCasedLetter]){
           obj[lowerCasedLetter]++;
       }else{
           obj[lowerCasedLetter] = 1;
       }
    }
})
return  obj;
}
//console.log(countVowels('Stevan grubac '));



//MAP

function doubleValuesWithMap(numArray){
    return numArray.map( function(num){
        return num * 2;
    })
}

//console.log(doubleValuesWithMap(numArray))

function valTimesIndex(arr){
    let i = -1;
    return arr.map((num, i)=>{
        return num * i;
    })
}
//console.log(valTimesIndex(numArray))

function extractKey(names, key){
    return names.map((name)=>{
       return name[key];
    })
}

//console.log(extractKey(names, 'name'))


let fullNames = [
    {first: 'stevan', last: 'grubac'},
    {first: 'john', last: 'leap'},
    {first: 'jacoby', last: 'cantolupo'},
    {first: 'steven', last: 'greer'},
    {first: 'lilly', last: 'hawkins',}
    ]

function extractFullName(arr){
    return arr.map((name)=>{
        return name.first + " " + name.last
    })
}

//console.log(extractFullName(fullNames))



//FILTER


let catOwners = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ];

  function filterByValue(obj, key){
    return obj.filter((name)=>{
         return name[key] !== undefined
    })
  }

  //console.log(filterByValue(catOwners, 'isCatOwner'));

  function find(arr, findNum){
      return arr.filter((num)=>{
          return num === findNum;
      })[0]

  }

  //console.log(find(numArray, 10));

  function findInObject(obj, key){
      return obj.filter((person)=>{
          return person[key] !== undefined
      })

  }

  //console.log(findInObject(catOwners, "isCatOwner"))

  let str = "Hello vowel remover";
  function removeVowels(str){
    let arr = str.split('')
    const vowels = 'aeiou'
    return arr.filter((char)=>{
        let lowerCasedLetter = char.toLowerCase();
        return vowels.indexOf(lowerCasedLetter) == -1
        }).join("")
    

  }
  //console.log(removeVowels(str))


  function doubleOddNumbers(arr){
    return arr.filter((num)=>{
        return num % 2 !== 0;
    }).map((num)=>{
        return num * 2;
    })

  }

  //console.log(doubleOddNumbers(numArray));