const table = document.querySelector(".grid-container")

function init(A, B, C, D, E, F, G) {
    let slots = [A, B, C, D, E, F, G]
    var c
    var msg
    for (let i = 0; i < 9 * 5; i++) {
        c = i % 7
        msg = slots[c]
        if (i <= 21 || (i >= 25 && i <= 29)) {
            var hex = "#"
            switch (c) {
                case 0:
                    hex += "EDAE49"
                    c = "A"
                    break
                case 1:
                    hex += "63B4D1"
                    c = "B"
                    break
                case 2:
                    hex += "C0FDFB"
                    c = "C"
                    break
                case 3:
                    hex += "90FCF9"
                    c = "D"
                    break
                case 4:
                    hex += "53DD6C"
                    c = "E"
                    break
                case 5:
                    hex += "D1495B"
                    c = "F"
                    break
                case 6:
                    hex += "8B85C1"
                    c = "G"
                    break

                default:
                    hex += "FFFFFF"
            }
        } else if (i == 22 || i == 24 || i == 40 || i == 41) {
            c = "H"
            var hex = "#E83F6F"
        } else {
            c = "LAB"
            var hex = "#1B262C"
        }


        table.insertAdjacentHTML('beforeend',
            `
    <div class="slot-block" id="${c}_Slot" style="background-color: ${hex}">
            <span>${msg}</span>
    </div>
    `
        )
    }
}

function changerSlot(S, msg) {
    console.log(msg)
    var slots = document.querySelectorAll("#" + S + "_Slot")
    slots.forEach(slot => {
        slot.innerText = msg
    });
}
init(
    document.getElementById("A").value,
    document.getElementById("B").value,
    document.getElementById("C").value,
    document.getElementById("D").value,
    document.getElementById("E").value,
    document.getElementById("F").value,
    document.getElementById("G").value,
    document.getElementById("H").value
)

// init("A", "B", "C", "D", "E", "F", "G")

// $("#A").change(() => {
//     changerSlot("A", document.getElementById("A").value)
// })

// $("#B").change(() => {
//     changerSlot("B", document.getElementById("B").value)
// })

// $("#C").change(() => {
//     changerSlot("C", document.getElementById("C").value)
// })

// $("#D").change(() => {
//     changerSlot("D", document.getElementById("D").value)
// })

// $("#E").change(() => {
//     changerSlot("E", document.getElementById("E").value)
// })

// $("#F").change(() => {
//     changerSlot("F", document.getElementById("F").value)
// })

// $("#G").change(() => {
//     changerSlot("G", document.getElementById("G").value)
// })