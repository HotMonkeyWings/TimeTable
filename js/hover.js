var slotlist = document.querySelectorAll('.slot-block')
console.log(slotlist)

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}

slotlist.forEach(modal => {
    modal.addEventListener('mouseover', () => {
        openModal(modal)
        console.log("Hello")
    })
})

slotlist.forEach(modal => {
    modal.addEventListener('mouseleave', () => {
        closeModal(modal)
    })
})