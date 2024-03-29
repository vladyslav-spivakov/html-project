document.querySelector('.rate-form input[type=submit]')
    .addEventListener('click', rate);

function rate(e) {
    if (document.querySelector('.rate-form').checkValidity()) {
        e.preventDefault();
        fetch('rate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: document.querySelector('.rate-form input[name=name]').value,
                email: document.querySelector('.rate-form input[name=email]').value,
                message: document.querySelector('.rate-form textarea[name=message]').value,
                rate: ((document.querySelector('.rate-form input[name=rateRadio]:checked').id)[4] + '★')
            })
        })
            .then(_ => document.querySelector('.rate-form').reset());
    }
}

