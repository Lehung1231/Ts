var showName = function (firstName, lastName, midName) {
    if (midName) {
        return firstName + " " + midName + " " + lastName;
    }
    return firstName + " " + lastName;
};
// Union type
// Narrowing typeof
var unionFunc = function (a) {
    if (typeof a === "string") {
        return parseInt(a);
    }
    return a;
};
console.log(unionFunc("10.11111"));
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
function login(user) {
    if ("role" in user) {
        console.log("Welcome to admin");
    }
    console.log("Welcome back");
}
