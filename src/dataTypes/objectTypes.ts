const arr : string[] = ["ad","adsas"];
const arr2 : number[][] = [[1,3,3],[5,7,3],[2,4,5]]

//KHONG DUNG ANY
let str3 : any = 10
str3 = "okasad"
str3 = [2,3,5,6]

//Tuples
 const tuple: [string,string,number] = ["HungLT","Hoai Duc",20]

// Enum 
enum STATUS { PENDING,REJECTED,BADA}
const trangthai1: STATUS = STATUS.PENDING

console.log( trangthai1);
enum CODE { OK2 = 200 , OK4 = 400 , OK5}
// Functions
const upperCase = (a : string | number) =>{
      if(typeof a == "string"){
        console.log(a.toLowerCase);
      }
}
upperCase(10)

 