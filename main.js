let btn = document.getElementById('btn');

if(btn)
{
    btn.onclick = () =>
    {
        let email = document.getElementById('email').value;
        let chEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (chEmail.test(email)) 
            {
               alert('Вы успешно зарегистрировались!');
            } 
        else 
            {
               let p = document.getElementById('p').innerHTML = `<p>Некорректный формат почты!</p>`;
            }


    }
}




    