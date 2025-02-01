const pannels = document.querySelectorAll('.pannel');

pannels.forEach((pannel) => {
    pannel.addEventListener('click',() => {
        removeAcativeClasses()
        pannel.classList.add('active');
    })
})

function removeAcativeClasses() {
    pannels.forEach(pannel => {
        pannel.classList.remove('active')
    })
}