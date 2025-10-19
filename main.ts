radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let input2 = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    input2 = String.fromCharCode(CardKB.readCharcode())
    if (input2 != "") {
        basic.showString(input2)
    }
})
