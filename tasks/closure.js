// === замыкание

sum = a => {
    const c = 100;

    return b => {
        return a + b + c;
    };
};
