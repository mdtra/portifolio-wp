const tools = document.querySelector('.wrap-tools')

let controlTools = false

document.addEventListener('scroll', () => {
    let fimTela = window.innerHeight
    let cord = tools.getBoundingClientRect()

    if(cord.bottom <= fimTela + 50) {
        tools.classList.add('tools-down')
    }
})