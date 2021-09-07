// function suma(a, b) {
//     return a + b;
// }
// function skirtumas(a, b) {
//     return a - b;
// }
// module.exports.suma = suma;
// module.exports.skirtumas = skirtumas;

// // taip rasytusi jeigu butu prie type taikoma common js

// taip rasosi jeigu taikoma type module (es modulius)

function suma(a, b) {
    return a + b;
}
function skirtumas(a, b) {
    return a - b;
}

export {
    suma, skirtumas
};