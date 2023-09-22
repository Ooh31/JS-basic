/* ----------- 1 ----------- */

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}

// Обе функции сработают одинаково т.к. else не обязательная часть конструкции if..else

/* ----------- 2 ----------- */

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родитли разрешил?');
//     }
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили');
// }

/* ----------- 3 ----------- */

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

/* ----------- 4 ----------- */

