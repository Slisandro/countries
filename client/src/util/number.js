export function converter(num) {
    num = parseInt(num)
    let str = Number(num.toFixed(1)).toLocaleString();
    return str;
}