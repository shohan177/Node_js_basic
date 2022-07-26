// import { parse } from 'url';
import { basename, dirname, parse } from 'path';

// const url = parse('https://shohan.com/shop');

// console.log(url)


// retrun Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'shohan.com',
//     port: null,
//     hostname: 'shohan.com',
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/shop',
//     path: '/shop',
//     href: 'https://shohan.com/shop'
//   }
//--------------------------
const base = basename('https://shohan.com/shop/last-valu')

console.log(base)  //return "last-valu"

//----------------------------
//file derectory 
const dir = dirname('https://shohan.com/shop/last-valu/index.js')

console.log(dir) //return https://shohan.com/shop/last-valu
//---------------------------------
const dirPrase = parse('https://shohan.com/shop/last-valu/index.js')

console.log(dirPrase)

// //return {
//   root: '',
//   dir: 'https://shohan.com/shop/last-valu',
//   base: 'index.js',
//   ext: '.js',
//   name: 'index'
// }