const info = document.querySelector('.section-info')
const tools = document.querySelector('.wrap-tools')
const projImg = document.querySelector('.galeria')
const projInfo = document.querySelector('.galeria-info')
const projetos = document.querySelectorAll('.clickable')
const contatoInfo = document.querySelector('.contato-info')
const contatoForm = document.querySelector('.contato-form')
const email = document.querySelector('#email')
const button = document.querySelector('.button-form')
const inputs = document.querySelectorAll('input')
const error = document.querySelector(".alerta-erro")
const textarea = document.querySelector('#msg')
const alertaMsg = document.querySelector('.alerta-envio')

let div1 = document.querySelector('.div-projeto-1')
let div2 = document.querySelector('.div-projeto-2')
let div3 = document.querySelector('.div-projeto-3')
let div4 = document.querySelector('.div-projeto-4')

const regEmail = /\S+@\S+\.\S+/

let controlTools = false
let controlProj = false

document.addEventListener('scroll', () => {
    let fimTela = window.innerHeight
    let infoCord = info.getBoundingClientRect()
    let toolCord = tools.getBoundingClientRect()
    let projCord = projImg.getBoundingClientRect()
    let contatoCord = contatoInfo.getBoundingClientRect()

    if(document.body.clientWidth > 750) {

        if(infoCord.bottom <= fimTela + 50) {
            info.classList.add('info-down')
        }

        if(toolCord.bottom <= fimTela + 50) {
            tools.classList.add('tools-down')
        }
    
        if (projCord.top <= fimTela + 50) {
            projImg.classList.add('galeria-scroll')
            projInfo.classList.add('galeria-info-scroll')
        }

        if (contatoCord.top <= fimTela + 50) {
            contatoInfo.classList.add('ativa-info')
            contatoForm.classList.add('ativa-form')
        }

    } else {
        if(toolCord.top <= fimTela) {
            tools.classList.add('tools-down')
        }
    
        if (projCord.top <= fimTela) {
            projImg.classList.add('galeria-scroll')
            projInfo.classList.add('galeria-info-scroll')
        }

        if (contatoCord.top <= fimTela + 50) {
            contatoInfo.classList.add('ativa-info')
            contatoForm.classList.add('ativa-form')
        }
    }

})

projetos[0].control = true
projetos[0].parentElement.classList.add('projeto-sel')
projetos[0].classList.add('clickable-active')

projetos.forEach(projeto => {

    projeto.addEventListener('click', () => {

        projetos.forEach(projeto => {
            if(projeto.control) {
                projeto.parentElement.classList.remove('projeto-sel')
                projeto.classList.remove('clickable-active')

            }
        })

        projeto.control = true
        projeto.parentElement.classList.add('projeto-sel')
        projeto.classList.add('clickable-active')

        if (projeto.parentElement.classList.contains('projeto-1')) {
            div1.style.display = 'block'
            div2.style.display = 'none'
            div3.style.display = 'none'
            div4.style.display = 'none'

            if (document.body.clientWidth < 800) {
                window.open(div1.children[3].children[0], '_blank')
            }

        } else if (projeto.parentElement.classList.contains('projeto-2')) {
            div1.style.display = 'none'
            div2.style.display = 'block'
            div3.style.display = 'none'
            div4.style.display = 'none'

            if (document.body.clientWidth < 800) {
                window.open(div2.children[3].children[0], '_blank')
            }

        } else if (projeto.parentElement.classList.contains('projeto-3')) {
            div1.style.display = 'none'
            div2.style.display = 'none'
            div3.style.display = 'block'
            div4.style.display = 'none'

        } else if (projeto.parentElement.classList.contains('projeto-4')) {
            div1.style.display = 'none'
            div2.style.display = 'none'
            div3.style.display = 'none'
            div4.style.display = 'block'
        }
    })
})

email.addEventListener('keyup', () => {

    if (regEmail.test(email.value)) {
        button.disabled = false
        error.style.display = 'none'
    }
})

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (!regEmail.test(email.value)) {
            button.disabled = true
            error.style.display = 'block'
        }

        alertaMsg.style.display = 'none'
    })
});

button.addEventListener('click', () => {
    let nome
    let email
    let celular
    let msg
    let url = 'https://webvisiondigital.com/scripts/teste.php'

    let formData = new FormData()

    inputs.forEach(input => {
        if(input.name == 'nome') {
            nome = input.value

        } else if (input.name == 'email'){
            email = input.value

        } else if (input.name == 'celular'){
            celular = input.value
        } 
    })

    let str = 'nome=' + nome + '&email=' + email + '&celular=' + celular + '&msg=' + textarea.value

    const req = {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': str.length
        },
        body: str
    }

    fetch(url, req)
        .then(response => {
            console.log(response.status)
        })
        .catch(error => {
            console.log(error.message)
        })

    inputs.forEach(input => {
        input.value = ""
    })

    textarea.value = ""
    alertaMsg.style.display = 'block'

})

