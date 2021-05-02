import problem1 from './resolve/problem1';
import problem3 from './resolve/problem3';
import problem4 from './resolve/problem4';
import problem5 from './resolve/problem5';
const inputProblem1 = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];
const inputProblem4 = 'Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options';

const swap = (arr, indexA, indexB) => {
    let tmp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = tmp;
}

const partition = (arr, low, high) => {

    let pivot = arr[high];    // pivot
    let left = low;
    let right = high - 1;
    let tmp = 0;
    while (true) {
        while (left <= right && arr[left] < pivot) left++;
        while (right >= left && arr[right] > pivot) right--;
        if (left >= right) break;
        swap(arr, left, right);
        left++;
        right--;
    }
    swap(arr, left, right);
    // tmp = arr[left];
    // arr[left] = arr[right];
    // arr[right] = tmp;
    console.log(low, high);

    console.log(arr);
    return left;
}

const quickSort = (arr, low, high) => {
    if (low < high) {
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

const insertSort = (arr) => {
    let len = arr.length;
    let j = 0;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}


const selectSort = (arr) => {
    let len = arr.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;

    }
    return arr;
}

const bubbleSort = (arr) => {
    let len = arr.length;
    let j = 0;
    for (let i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] < arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }

    }
    return arr;
}

(() => {
    // console.log('\nResolve Problem1');
    // console.log('Input:');
    // console.log(`let arr = ["${inputProblem1.join('", "')}"];`);
    // console.log('Output:');
    // console.log(`["${problem1(inputProblem1).join('", "')}"]`);

    // console.log('\nResolve Problem3');
    // let startDate = new Date();
    // let endDate = new Date(startDate.getTime());
    // endDate.setHours(startDate.getHours() + 9);
    // console.log(`9h = ${problem3(startDate, endDate)}$`);
    // console.log(`Swap 9h = ${problem3(endDate, startDate)}$`);
    // endDate = new Date(startDate.getTime());
    // endDate.setHours(startDate.getHours() + 24);
    // console.log(`24h = ${problem3(startDate, endDate)}$`);
    // endDate = new Date(startDate.getTime());
    // endDate.setHours(startDate.getHours() + 25);
    // console.log(`25h = ${problem3(startDate, endDate)}$`);

    // console.log('\nResolve Problem4');
    // const { matchWorks, variations } = problem4(inputProblem4);
    // console.log('Input:');
    // console.log(`'${inputProblem4}'`);
    // console.log('Output:');
    // console.log(`Matched Words: '${matchWorks.join(', ')}'`);
    // console.log(`Variations with '-' character: '${variations.join(', ')}'`);

    // console.log('\nResolve Problem5');
    // problem5();

    // let rs = insertSort([5, 4, 1, 9, 3, 6, 8, 7, 2]);
    // console.log(rs);
    // rs = selectSort([5, 4, 1, 9, 3, 6, 8, 7, 2]);
    // console.log(rs);
    // rs = bubbleSort([5, 4, 1, 9, 3, 6, 8, 7, 2]);
    // console.log(rs);
    // let rs = [5, 4, 1, 9, 3, 6, 8, 7, 2];
    // quickSort(rs, 0, rs.length - 1);
    // console.log(rs);
})();
