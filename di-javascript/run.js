function GetRandomArray(count) {
    var temp = [];
    for (let index = 0; index < count; index++) {
        var value = Math.ceil((Math.random() * 100));
        temp.push(value);
    }
    return temp;
}

function PrintArray(arr) {
    let str = "";
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        str = str.concat("[" + element + "].");
    }
    console.log(str);
}

function Partition(arr, low, high) {
    console.log("-----BEFORE PARTITION-----");
    PrintArray(arr);

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
            PrintArray(arr);
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
            PrintArray(arr);
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

// arr = GetRandomArray(10);
arr = [95, 95, 35, 83, 35, 97, 95, 91, 97, 40];
QuickSort(arr, 0, arr.length - 1);
PrintArray(arr);
