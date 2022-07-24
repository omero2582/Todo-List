const DateItem = () => {
    let date = new Date();
    const getDateCreated = () => date;
    const setDateCreated = (dateString) => date = new Date(dateString);
    const sortByDateOld = (array) => {
        array.sort( (a,b) => a.getDate().getTime() - b.getDate().getTime());
    };
    const sortByDateNew = (array) => {
        array.sort( (a,b) => b.getDate().getTime() - a.getDate().getTime());
    };
    return {getDateCreated, setDateCreated, sortByDateNew, sortByDateOld}
}

export default DateItem;