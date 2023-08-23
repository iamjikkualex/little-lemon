// APIs used for Little Lemon website

const fetchAPI = (selectedDate) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let seed = selectedDate.getDate();
    let s = seed % m;
    let random = () => (s = s * a % m) / m;
    let result = [];

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) result.push(i + ':00');
        if (random() < 0.5) result.push(i + ':30');
    }

    return result;
}

const submitAPI = (formData) => true;

export {fetchAPI, submitAPI};