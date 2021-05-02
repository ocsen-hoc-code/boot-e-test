const problem1 = (arr) => {
    let numberArr = [];
    let specialCharArr = [];
    let strArr = [];

    arr.forEach(item => {
        let tmp = parseFloat(item);
        if (tmp || tmp === 0) {
            numberArr.push(item);
        } else {
            if (0 < item.length) {
                let val = item[0].charCodeAt(0);
                if ((val < 'A'.charCodeAt(0))
                    || (val > 'Z'.charCodeAt(0) && val < 'a'.charCodeAt(0))
                    || (val > 'z'.charCodeAt(0))) {
                    specialCharArr.push(item);
                } else {
                    strArr.push(item);
                }
            }
        }
    });

    numberArr = numberArr.sort((a, b) => {
        return parseFloat(a) - parseFloat(b);
    });
    specialCharArr = specialCharArr.sort();
    strArr = strArr.sort();

    return numberArr.concat(strArr, specialCharArr);
}

export default problem1;
