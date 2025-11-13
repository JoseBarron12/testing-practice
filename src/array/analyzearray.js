import { mergeSort } from "./mergeSort";

const arrayIsNumeric = (arr) => {
    for(const element of arr)
    {
        if(typeof element != "number") return false;
    }
    return true;
}
export const analyseArray = (arr) => {
    if(! Array.isArray(arr)) throw new TypeError("Expected array");
    if(! arrayIsNumeric(arr)) throw new TypeError("Expected array to be numeric");
    
    const sortedArr = mergeSort(arr);

    return {
        average: (arr.length != 0) ? arr.reduce((a, b) => {return a + b}, 0 ) / arr.length : 0,
        min: (arr.length != 0) ? sortedArr[0] : 0,
        max: (arr.length != 0) ? sortedArr[sortedArr.length - 1] : 0,
        length: sortedArr.length,
    }

}
