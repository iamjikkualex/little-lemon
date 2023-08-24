const getMinDate = () => {
    return new Date().toISOString().split('T')[0];
}

const getMaxDate = () => {
    let dateObj = new Date();
    return new Date(dateObj.setMonth(dateObj.getMonth() + 6)).toISOString().split('T')[0];
}

export {getMinDate, getMaxDate};