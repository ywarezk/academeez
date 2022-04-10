/**
 * We need to transform the list of apps/libs to a
 * Json array od strings
 * this script will get this: api-lessons az
 * the apps are seperated by space
 * should return a string
 *
 * Created April 10th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

const strEffected = process.argv[3]
const arrEffected = strEffected.split(' ')
console.log(`${process.argv[2]}${JSON.stringify(arrEffected)}`)
