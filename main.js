'use strict';

console.log ('1. feladat:')

const numericArray = [5, 10, 55, 25, 8, 2, 9];

function getMinElementOfArray (minarr){
    let min = minarr[0];
        for (let i = 1; i < minarr.length; i += 1){
            if (minarr[i] < min) {
            min = minarr[i]
            }
        };
    console.log(min);
};
getMinElementOfArray(numericArray);

console.log('2. feladat:')

function getMaxElementofArray(maxarr){
    let max=maxarr[0];
        for (let i=1; i < maxarr.length; i += 1){
            if (maxarr[i] > max){
                max = maxarr[i]
            };
        };
    console.log (max);
};

getMaxElementofArray(numericArray); 

console.log('3. feladat:');

function getAvarageOfArray(avg){
    let result=0;
    for( let i=0; i< avg.length; i += 1){
        result += (avg [i])
    }
    let avarage= result / avg.length;
    console.log(avarage);
}
getAvarageOfArray(numericArray);

console.log('4. feladat:');

function getSumOfArray(sum){
    let result=0;
    for( let i=0; i< sum.length; i += 1){
        result += (sum [i])
    }
    console.log(result);
    }
getSumOfArray(numericArray);

console.log('5. feladat:');

function getNumberOfEvens(even){
    let result = function newBlock(even){
    return (even % 2===0)
    }
    console.log(result.length);
    }
getNumberOfEvens(numericArray);
