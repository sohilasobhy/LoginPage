document.getElementById('darkBtn').addEventListener('click', function () {
    const body = document.getElementById('Body');
    body.classList.toggle('bgLight');
    body.classList.toggle('bgDark');
    body.classList.toggle('dark')
});


