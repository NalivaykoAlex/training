// === Задача на callback

const request = (value, clb) => {
    console.log(value, clb.toString());

    setTimeout(() => {
        clb(value);
    }, Math.floor(Math.random() * 100));
};

const requests = [
    request.bind(this, 1),
    request.bind(this, 2),
    request.bind(this, 3)
];

const PromiseAll = (requests, clb) => {
    const resp  = [];
    let   count = 0;

    requests.forEach((req, i) => {
        req(response => {
            resp[i] = response;
            count++;

            if (count === requests.length) clb(resp);
        });
    });
};

const clb = resp => {
    console.log(resp);
};

PromiseAll(requests, clb);
