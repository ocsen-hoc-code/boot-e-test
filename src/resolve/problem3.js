const problem3 = (startDate, endDate, price = 5) => {
    let seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    //Use abs fix swap start date and end date
    let hours = Math.abs(parseFloat(seconds) / 3600);
    let days = Math.ceil(hours / 24);
    
    return days * price;
}

export default problem3;
