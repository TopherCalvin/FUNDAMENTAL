//area of rectangle
function luasPersegiPanjang (p, l) {
    return LuasPP = p * l
}
console.log(luasPersegiPanjang(10, 15))
//perimeter of rectangle
function kelilingPersegiPanjang (p, l) {
    return kelilingP = 2 * (p + l)
}
console.log(kelilingPersegiPanjang(10, 15))
//diameter, circumference and area of a circle
function diameterLingkaran (r) {
    return diameterL = 2*r
};
function luasLingkaran (r) {
    let P = 3.14; 
    return  luasL = P * r ** 2;
};
function kelilingLingkaran (r) {
    let P = 3.14;
    return kelilingL= P * diameterLingkaran(r);
};
console.log(luasLingkaran(5));
//angles of triangle if two angles are given
function triangle (a, b) {
    if (a + b < 180) {
    return c = 180 - (a + b);
}
}
console.log(triangle(70, 30));
//difference between dates in days
let date1 = new Date('2023-03-01');
let date2 = new Date('2023-03-03');
let diff = (date2 - date1)
console.log(diff);
//convert days to years, months and days
function timeFormat(days) {
    let year1 = parseInt(days / 365) + " year "
    let month1 = parseInt(days % 365 / 30) + " month "
    let days1 = days % 365 % 30 + " days."
    return Format = year1 + month1 + days1
}
console.log(timeFormat(400));