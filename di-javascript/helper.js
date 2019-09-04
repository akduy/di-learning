export { getRandomArray, printArray };

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
