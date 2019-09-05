// const getRandomArray = require('./helper').getRandomArray;
// const printArray = require('./helper').printArray;
import { getRandomArray } from "./helper";
import { printArray } from "./helper";

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
        while (arr[right] >= pivot) {
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

var arr = getRandomArray(10);
// arr = [95, 95, 35, 83, 35, 97, 95, 91, 97, 40];
QuickSort(arr, 0, arr.length - 1);
printArray(arr);
