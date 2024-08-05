// let son={
// ism:"Johongir",
// familiya:"shavkatov",
// yosh:14,
// nomber:900680683,

// }
// console.log(son)

// for (const son in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }
const ismBody = document.getElementById("ism");
const sonH1 = document.getElementById("son");

ismBody.style = "background:yellow; display:flex; align-items:center; justify-content:center; height:100vh;"

// ismBody.style = "background-color:yellow";


let arr = ['Jahongir', "Sherzod", 12,19,92,02,8,9,209,282,28,29,82]

let randomResult = arr[(Math.floor(Math.random() * arr.length))]

sonH1.innerHTML = randomResult
