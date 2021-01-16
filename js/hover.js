var slotlist = document.querySelectorAll('.slot-block')
console.log(slotlist)

function openModal(modal) {
    if (modal == null || modal.innerText == "") return
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null || modal.innerText == "") return
    modal.classList.remove('active')
}

slotlist.forEach(modal => {
    modal.addEventListener('mouseover', () => {
        openModal(modal)
    })
})

slotlist.forEach(modal => {
    modal.addEventListener('mouseleave', () => {
        closeModal(modal)
    })
})