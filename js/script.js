const changeNumber = (string) => {

    let zero = string.replace(/0/g, "zero");
    let one = zero.replace(/1/g, "one");
    let two = one.replace(/2/g, "two");
    let three = two.replace(/3/g, "three");
    let four = three.replace(/4/g, "four");
    let five = four.replace(/5/g, "five");
    let six = five.replace(/6/g, "six");
    let seven = six.replace(/7/g, "seven");
    let eight = seven.replace(/8/g, "eight");
    let nine = eight.replace(/9/g, "nine");

    return nine;
}

console.log(changeNumber('2 apples'));