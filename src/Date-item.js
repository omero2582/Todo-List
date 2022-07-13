const DateItem = () => {
    const date = new Date();
    const getDate = () => date;
    const sortByDateOld = (array) => {
        array.sort( (a,b) => a.getDate().getTime() - b.getDate().getTime());
    };
    const sortByDateNew = (array) => {
        array.sort( (a,b) => b.getDate().getTime() - a.getDate().getTime());
    };
    return {getDate, sortByDateNew, sortByDateOld}
}

export default DateItem;