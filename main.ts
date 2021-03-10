function vor () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
}
function stop () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
}
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
})
function zurück () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.South)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "schneller") {
        vor()
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "langsamer") {
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "stop") {
        stop()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "zurück") {
        zurück()
        basic.showArrow(ArrowNames.South)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
radio.setGroup(49)
basic.forever(function () {
	
})
