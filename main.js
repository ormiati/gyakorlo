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
    let result = 0
    for ( let i=0; i<even.length; i += 1){
        if (even[i] % 2===0)
        result += 1;
    }
    console.log(result);
    }
getNumberOfEvens(numericArray);

console.log('6. feladat:');

function getSencondMinElement(sec){
    let min = sec [0];
    let secmin = sec [0];
        for (let i = 1; i < sec.length; i += 1){
            for (let j = 1; j < sec.length; j +=1){
                if (sec[i] < min) {
                min = sec[i]
                if (sec [j] < secmin){
                    secmin = sec [j]
                }
            }
        }
    };
    console.log(secmin);
};
getSencondMinElement(numericArray);


console.log('7. feladat:');

function compare(a,b) {
    return b - a;
}
numericArray.sort(compare);

console.log(numericArray[2]);

console.log('8. feladat:');

const newarray=[55, 'szia', true, 99, 88, false, 'hello'];

function isItFalseOrTrues(newarray, b) {
    for(let i=0; i<newarray.length; i +=1) {
        if (newarray[i] === b) {
            return true;
        }
    }
    return false;
}

console.log(isItFalseOrTrues(newarray, 23));

console.log('9. feladat:');

function compared(a,b) {
    return a - b;
}
let numarr = numericArray.sort(compared);

function binarysearch(numarr, search){
    let start = 0;
    let end = numericArray.length-1;
    while (start <= end) {
        let mid= parseInt ((start + end) / 2);
        if (numarr[mid] === search){
            return true;
        } 
        else if (numarr[mid] < search) {
            start= mid + 1;
        }
        else{
            end= mid - 1;
        }
    }
    return false;
}
console.log (binarysearch(numarr, 23));

console.log('10. feladat:');

function isAnyInIt (howin, b) {
    let result = 0
    for(let i=0; i<howin.length; i +=1) {
        if (howin[i] === b)
        result +=1; 
        }
    console.log(result);
}

isAnyInIt (newarray, 23);

console.log('11. feladat:');

const float=[8.88, 5.55, 77.14, 24.14, 25.52];

function bubbleSort (ordered) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < ordered.length; i +=1) {
            if (ordered[i] > ordered[i + 1]) {
                let tmp = ordered[i];
                ordered[i] = ordered[i + 1];
                ordered[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return  console.log(ordered);
};

bubbleSort(float);

console.log('12. feladat:');

function bubbleSortOrdered (swaporder) {
    const number = [];
    const other= [];
    for (let i = 0; i < swaporder.length; i +=1){
        if(typeof swaporder[i]=== 'number'){
            number.push(swaporder[i]);
        }
        else {
            other.push(swaporder[i]);
        };
    };
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < number.length; i +=1) {
            if (number[i] < number[i + 1]) {
                let tmp = number[i];
                number[i] = number[i + 1];
                number[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    for (let i = 0; i < other.length ; i +=1){
        number.push(other[i])
    }
    return  console.log(number);
};

bubbleSortOrdered(newarray);
