var arr = ["ad", "adsas"];
var arr2 = [[1, 3, 3], [5, 7, 3], [2, 4, 5]];
//KHONG DUNG ANY
var str3 = 10;
str3 = "okasad";
str3 = [2, 3, 5, 6];
//Tuples
var tuple = ["HungLT", "Hoai Duc", 20];
// Enum 
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["BADA"] = 2] = "BADA";
})(STATUS || (STATUS = {}));
var trangthai1 = STATUS.PENDING;
console.log(trangthai1);
var CODE;
(function (CODE) {
    CODE[CODE["OK2"] = 200] = "OK2";
    CODE[CODE["OK4"] = 400] = "OK4";
    CODE[CODE["OK5"] = 401] = "OK5";
})(CODE || (CODE = {}));
// Functions
var upperCase = function (a) {
    if (typeof a == "string") {
        console.log(a.toLowerCase);
    }
};
upperCase(10);
