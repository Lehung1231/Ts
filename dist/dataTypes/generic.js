// const ArrString = ["ok","ko"]
// function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }
// const result = we17304_map(ArrString, (item) => {
//     return item + " - Cân5"
// })
// console.log(result);
var arrNum2 = [2, 8, 21, 4, 6, 1, 9, 16, 77];
var arrString = ["b", "a", "d", "g", "ca4", "taisao"];
function Bubblesort(arr, callback) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[j], arr[i]) < 0) {
                _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
            }
        }
    }
    return arr;
}
var result = Bubblesort(arrString, function (item, item2) {
    return item.localeCompare(item2);
});
var result1 = Bubblesort(arrNum2, function (item, item2) {
    return item - item2;
});
console.log(result);
console.log(result1);
