'use strict'

console.log('13. feladat:');

const trd=[32, 54, 11, 44, 98, 88, 12];

function bubbleSort (nordered) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < nordered.length; i +=1) {
            if (nordered[i] > nordered[i + 1]) {
                let tmp = nordered[i];
                nordered[i] = nordered[i + 1];
                nordered[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    console.log(nordered);
};

    bubbleSort(trd);

    let newnum = document.getElementsByClassName('txt');

    function decide(newnum){
        if(newnum === 'number'){
            trd.push(newnum);
            bubbleSort(trd);
            window.alert('Köszi!')
        }
        else {
            window.alert('Ez nem egész szám!');
        }
    }

