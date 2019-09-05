import { getRandomArray } from 'helper.js';
import { printArray } from 'helper.js';

let getRandomArray = function (count) {
    var temp = [];
    for (let index = 0; index < count; index++) {
        var value = Math.ceil((Math.random() * 100));
        temp.push(value);
    }
    return temp;
}

let printArray = function (arr) {
    let str = "";
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        str = str.concat("[" + element + "].");
    }
    console.log(str);
}

function Partition(arr, low, high) {
    console.log("-----BEFORE PARTITION-----");
    printArray(arr);

    var pivotIndex = high;
    var pivot = arr[pivotIndex];
    console.log("pivot: " + pivot + ".<" + pivotIndex + ">");

    var left = low;
    var right = high - 1;
    console.log("left: " + left + ".right: " + right + "\n");

    while (true) {
        if (left > right) {
            let temp = arr[pivotIndex];
            arr[pivotIndex] = arr[left];
            arr[left] = temp;

            console.log("--STOP PARTITION--");
            printArray(arr);
            console.log("\n\n");
            return left;
        }

        while (arr[left] < pivot) {
            left++
            console.log("(left: " + left + ")");
        };
        while (arr[right] > pivot) {
            right--
            console.log("(right: " + right + ")");
        };

        if (left < right) {
            console.log("swap: arr[" + left + "]" + "=" + arr[left] + " and arr[" + right + "]" + "=" + arr[right]);
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++; right--;

            console.log("left ater swap: " + left + "-right after swap: " + right);
            console.log("--array after swap: ");
            printArray(arr);
            console.log("\n");
        }
    }


}

function QuickSort(arr, low, high) {
    console.log("low big: " + low + ".high big: " + high + "\n");
    if (low < high) {
        var pi = Partition(arr, low, high);
        console.log("pi: " + pi);
        QuickSort(arr, low, pi - 1);
        QuickSort(arr, pi + 1, high);
    }
}

arr = getRandomArray(10);
// arr = [52, 95, 53, 83, 36, 98, 96, 91, 97, 40];
QuickSort(arr, 0, arr.length - 1);
printArray(arr);
