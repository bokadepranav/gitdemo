// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("Color changed to " + color);
//         }, delay);
//     });
// }

// // changeColor("red", 1000)
// //     .then(() => changeColor("orange", 1000))
// //     .then(() => changeColor("yellow", 1000))
// //     .then(() => changeColor("green", 1000))
// //     .then(() => changeColor("blue", 1000))
// //     .then(() => changeColor("indigo", 1000))
// //     .then(() => changeColor("violet", 1000))
// //     .catch((err) => console.log(err));

// async function rainbow() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("yellow", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("indigo", 1000);
//         await changeColor("violet", 1000);
//         return "All colors changed!";
//     } catch (err) {
//         console.log(err);
//     }   
// }

// rainbow();

let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res)
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.log(err));  

// async function getCatFact() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }
//     catch (err) {
//         console.log(err);
//     }
//     console.log("hello world");
// }

async function getCatFact() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
    }
    catch (err) {
        console.log(err);
    }
    console.log("hello world");
}