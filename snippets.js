document.getElementById('from').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('username',username);
    localStorage.setItem('password',password);

    window.location.href = '';
});