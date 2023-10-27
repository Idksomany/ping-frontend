const btn = document.querySelector("#ping-btn-email");

let email_text = document.querySelector(".input-email");

const error_txt = document.querySelector(".ping-email-error");

const div_email = document.querySelector(".ping-email-btn");

btn.addEventListener('click', () =>{
    if(email_text.value !== " " && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_text.value)){
        email_text.value = "";
        error_txt.classList.remove('active');
        div_email.classList.remove('active-e');
    }
    else{
        error_txt.classList.add('active');
        div_email.classList.add('active-e');
    }
});