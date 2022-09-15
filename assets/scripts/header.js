const buttons = document.querySelectorAll('.menu-item')
const menuOptions = document.querySelectorAll('nav ul a li')
const mobileButton = document.querySelector('.mobile-menu-button')
const mobileDropdown = document.querySelector('.mobile-menu-dropdown')
const overlay = document.querySelector('.overlay')
const control = document.querySelector('.menu')
const navBar = document.querySelector('.nav-desktop')

let dropControl = false
let countScroll = false

buttons.forEach(button => {
    button.addEventListener('mouseover', function(){
        button.classes = Object.values(button.classList)
        
        menuOptions.forEach(option => {
            option.classes = Object.values(option.classList)

            if(button.classes.includes("link-sobre") && option.classes.includes("link-sobre")) {
                option.classList.add('active-js2')
                option.children[0].classList.add('active-js')     

            } else if (button.classes.includes("link-conhecimentos") && option.classes.includes("link-conhecimentos")){
                option.classList.add('active-js2')
                option.children[0].classList.add('active-js') 

            } else if (button.classes.includes("link-projetos") && option.classes.includes("link-projetos")){
                option.classList.add('active-js2')
                option.children[0].classList.add('active-js') 

            } else if (button.classes.includes("link-contato") && option.classes.includes("link-contato")){
                option.classList.add('active-js2')
                option.children[0].classList.add('active-js') 
            }
        })

    })

    button.addEventListener('mouseout', function(){
        button.classes = Object.values(button.classList)
        
        menuOptions.forEach(option => {
            option.classes = Object.values(option.classList)

            if(button.classes.includes("link-sobre") && option.classes.includes("link-sobre")) {
                option.classList.remove('active-js2')
                option.children[0].classList.remove('active-js')   

            } else if (button.classes.includes("link-conhecimentos") && option.classes.includes("link-conhecimentos")){
                option.classList.remove('active-js2')
                option.children[0].classList.remove('active-js') 

            } else if (button.classes.includes("link-projetos") && option.classes.includes("link-projetos")){
                option.classList.remove('active-js2')
                option.children[0].classList.remove('active-js') 

            } else if (button.classes.includes("link-contato") && option.classes.includes("link-contato")){
                option.classList.remove('active-js2')
                option.children[0].classList.remove('active-js') 
            }
        })
    })
});

menuOptions.forEach(option => {
    option.addEventListener('mouseover', function(){
        option.classes = Object.values(option.classList)
        
        buttons.forEach(button => {
            button.classes = Object.values(button.classList)

            if(button.classes.includes("link-sobre") && option.classes.includes("link-sobre")) {
                button.classList.add('include-test')    

            } else if (button.classes.includes("link-conhecimentos") && option.classes.includes("link-conhecimentos")){
                button.classList.add('include-test') 

            } else if (button.classes.includes("link-projetos") && option.classes.includes("link-projetos")){
                button.classList.add('include-test')

            } else if (button.classes.includes("link-contato") && option.classes.includes("link-contato")){
                button.classList.add('include-test')
                
            }
        })
    })

    option.addEventListener('mouseout', function(){
        option.classes = Object.values(option.classList)
        
        buttons.forEach(button => {
            button.classes = Object.values(button.classList)

            if(button.classes.includes("link-sobre") && option.classes.includes("link-sobre")) {
                button.classList.remove('include-test')       

            } else if (button.classes.includes("link-conhecimentos") && option.classes.includes("link-conhecimentos")){
                button.classList.remove('include-test')  

            } else if (button.classes.includes("link-projetos") && option.classes.includes("link-projetos")){
                button.classList.remove('include-test') 

            } else if (button.classes.includes("link-contato") && option.classes.includes("link-contato")){
                button.classList.remove('include-test') 
            }
        })
    })
})

mobileButton.addEventListener('click', () => {
    if(dropControl) {
        mobileDropdown.style.display = 'none'
        dropControl = false
    } else {
        mobileDropdown.style.display = 'block'
        overlay.style.display = 'block'
        dropControl = true

        overlay.addEventListener('click', () => {
            overlay.style.display = 'none'
            mobileDropdown.style.display = 'none'
            dropControl = false
        })
    }
})

document.addEventListener('scroll', () => {
    let cord = navBar.getBoundingClientRect()
    let tela = window.innerHeight

    if(cord.bottom < 60 && !countScroll) {

        countScroll = true

        control.classList.add('menu-down')
        control.classList.remove('menu-up')
    }

    if(cord.bottom > 60 && countScroll) {

        countScroll = false

        control.classList.remove('menu-down')
        control.classList.add('menu-up')
    }
})
