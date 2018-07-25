const buttonA = document.getElementById('A');
buttonA.addEventListener('click', function(e) {
    console.log('A was clicked');

    fetch('/clickA', { method: 'POST' })
        .then(function(response) {
            if (response.ok) {
                console.log('A was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
});

const buttonB = document.getElementById('B');
buttonB.addEventListener('click', function(e) {
    console.log('B was clicked');

    fetch('/clickB', { method: 'POST' })
        .then(function(response) {
            if (response.ok) {
                console.log('B was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
});

const buttonC = document.getElementById('C');
buttonC.addEventListener('click', function(e) {
    console.log('C was clicked');

    fetch('/clickC', { method: 'POST' })
        .then(function(response) {
            if (response.ok) {
                console.log('C was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
});

const buttonD = document.getElementById('D');
buttonD.addEventListener('click', function(e) {
    console.log('D was clicked');

    fetch('/clickD', { method: 'POST' })
        .then(function(response) {
            if (response.ok) {
                console.log('D was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
});

const buttonE = document.getElementById('E');
buttonE.addEventListener('click', function(e) {
    console.log('E was clicked');

    fetch('/clickE', { method: 'POST' })
        .then(function(response) {
            if (response.ok) {
                console.log('E was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
});

const next = document.getElementById('F');
next.addEventListener('click', function(e) {
    console.log('next was clicked');

    fetch('/next', { method: 'POST' })
        .then(function(response) {
            if (response.ok) {
                console.log('next was recorded');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
});


const QQ = document.getElementById('W');
QQ.addEventListener('click', function(e) {


    fetch('/QQ', { method: 'POST' })
        .then(function(response) {
            if (response.ok) {
                console.log('change');
                return;
            }
            throw new Error('Request failed.');
        })
        .catch(function(error) {
            console.log(error);
        });
});