const fs = require('fs')

console.log('before');

// setTimeout(()=>{
//     console.log('Inside Timer');
// },10)

// setImmediate(()=>{
//     console.log('Inside Immediate')
// })


// ========================================

// IO callback?

// fs.readFile('./data.txt' , 'utf-8' , function read(){
//     setTimeout(()=>{
//         console.log('Inside timer 1');
//     },0)

//     // Inside IO callback setImmediate will be guarantted to execute first
//     setImmediate(()=>{
//         console.log('Inside Immediate');
//     },0)
//     setTimeout(()=>{
//         console.log('Inside Timer 2');
//     },0)
// })



// ==============================
// setTimeout(()=>{
//             console.log('Inside timer 1');
//         },0)
    
//         // Inside IO callback setImmediate will be guarantted to execute first
//         setImmediate(()=>{
//             console.log('Inside Immediate');
//         },0)
//         setTimeout(()=>{
//             console.log('Inside Timer 2');
//         },0)


// // nexttick Will be highest priority in callback que
// process.nextTick(()=>{
//     console.log('Next tick');
// })



console.log("After")