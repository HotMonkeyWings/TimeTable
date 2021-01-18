const table = document.querySelector(".grid-container")

function init(A, B, C, D, E, F, G) {
    let slots = [A, B, C, D, E, F, G]
    var c
    var msg
    for (let i = 0; i < 10 * 6; i++) {

        //For timings
        if (i % 6 == 0) {
            let start_time = ""
            let end_time = ""
            switch (i) {
                case 6:
                    start_time = "08:00 AM"
                    end_time = "09:00 AM"
                    break
                case 12:
                    start_time = "09:00 AM"
                    end_time = "10:00 AM"
                    break
                case 18:
                    start_time = "10:15 AM"
                    end_time = "11:15 AM"
                    break
                case 24:
                    start_time = "11:15 AM"
                    end_time = "12:15 AM"
                    break
                case 30:
                    start_time = "01:00 PM"
                    end_time = "02:00 PM"
                    break
                case 36:
                    start_time = "02:00 PM"
                    end_time = "03:00 PM"
                    break
                case 42:
                    start_time = "03:00 PM"
                    end_time = "04:00 PM"
                    break
                case 48:
                    start_time = "04:00 PM"
                    end_time = "05:00 PM"
                    break
                case 54:
                    start_time = "05:00 PM"
                    end_time = "06:00 PM"
                    break
            }
            table.insertAdjacentHTML('beforeend',
                `
        <div class="slot-block time" style="font-size:16px;color:#587D71;text-align:right">
        <span>${start_time}<br>
        ${end_time}
        <span></div>
        `)
            continue
        }


        //For day titles
        if (i < 6) {
            let day
            switch (i) {
                case 1:
                    day = "Monday"
                    break;
                case 2:
                    day = "Tuesday"
                    break;
                case 3:
                    day = "Wednesday"
                    break;
                case 4:
                    day = "Thursday"
                    break;
                case 5:
                    day = "Friday"
                    break;
            }
            table.insertAdjacentHTML('beforeend',
                `
        <div class="slot-block day" style="font-size:20px;color:#587D71"><span>${day}<span></div>
        `)
            continue
        }


        //For slots
        c = (i - 6 - Math.floor(i / 6)) % 7
        msg = slots[c]
        if (i < 33 || i > 35 && i < 40) {
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
        } else if (i == 33 || i == 35 || i == 55 || i == 56) {
            c = "H"
            var hex = "#E83F6F"
        } else if (i == 40) {
            hex = "#C0FDFB"
            c = "C"

        } else if (i == 41) {
            hex = "#63B4D1"
            c = "B"
        } else if (i == 59) {
            hex = "#90FCF9"
            c = "D"
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
        if (msg != "") {
            slot.innerHTML = "<span>" + msg + "</span>"
        } else {
            slot.style.backgroundColor = "#1B262C"
        }

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