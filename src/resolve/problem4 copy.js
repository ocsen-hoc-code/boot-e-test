const problem4 = (str) => {
    let arr = str.split(' ');
    let variations = [];
    let matchWorks = [];
    let count = 0;
    const checkExist = (orgVal, newVal) => {
        if (orgVal !== newVal) {
            if (!variations.includes(newVal)) {
                variations.push(newVal);
            }
        }
    }
    arr.forEach(item => {
        checkExist(item, item.replace(/(\d)(\D+)$/g, '$1-$2'));
        checkExist(item, item.replace(/(\D)(\d+)$/g, '$1-$2'));
        // checkExist(item, item.replace(/(\D)(\d+)$/g, '$1-$2'));
        // checkExist(item, item.replace(/(\D+)(\d+)(\D+)$/g, '$1-$2$3'));
        // checkExist(item, item.replace(/(\D+)(\d)(\D+)$/g, '$1$2-$3')); 
        
        checkExist(item, item.replace(/(\D+)(\d+)(\D+)$/g, '$1-$2-$3'));
        checkExist(item, item.replace(/(\D+)(\d+)(\D+)$/g, '$1-$2$3'));
        // checkExist(item, item.replace(/(\D+)(\d)(\D+)$/g, '$1$2-$3'));
        
        
        if (variations.length > count) {
            matchWorks.push(item);
            count = variations.length
        }
    });

    return { matchWorks, variations };
}

export default problem4;
