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

const arrNum2 = [2,8,21,4,6,1,9,16,77]
const arrString = ["b","a","d","g","ca4","taisao"]
 
 
    function Bubblesort<T>(arr: T[], callback: (item: T, item2: T) => number): T[] { 
        for (let i = 0; i < arr.length - 1; i++) {  
          for (let j = i + 1; j < arr.length; j++) { 
            if(callback(arr[j], arr[i]) < 0) {
              [arr[j], arr[i]] = [arr[i], arr[j]];
            }
          }
        }
        return arr; 
      }
  

 
 const result = Bubblesort(arrString, (item,item2) => {
         return item.localeCompare(item2)
     })
     const result1 = Bubblesort(arrNum2, (item,item2) => {
      return item - item2
  })
  console.log( result);
     console.log( result1);
     
   
      

      