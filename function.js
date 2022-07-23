//modulejs
// export const ageCal = (year) => {
//     let age = 20;
//     return age;
// }
//-------------------------------

//commonjs
const fun = {}
const ageCal = (year) => {
    let age = 20;
    return age;
}

const devs = [
    {
        id: 1,
        name: 'shohan',
        pone: 056454
    },
    {
        id: 2,
        name: 'jahan',
        pone: 05434454
    },
    {
        id: 3,
        name: 'sarwar',
        pone: 0534244
    },

]

//sceap holding 
fun.ageCal = ageCal;
fun.devs = devs;

module.exports = fun; 