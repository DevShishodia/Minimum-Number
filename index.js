

const minimumNumber =(...array) => {
    let minNum = array[0];
    for(let i =0; i < array.length ; i++ ){
        if(array[i] < minNum)
            minNum = array[i];
    }
    return minNum;
};

let minimum1 = minimumNumber(12,13,14,15);
console.log(minimum1);

let minimum2= minimumNumber(2,4,8,6);
console.log(minimum2);

let minimum3 = minimumNumber(65,76,234,756,65);
console.log(minimum3);

let minimum4 = minimumNumber(-1, -5, 10,-23);
console.log(minimum4);