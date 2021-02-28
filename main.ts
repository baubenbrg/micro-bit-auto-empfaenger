function scheller () {
    vor()
    vr += 128
    vl += 128
}
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
        scheller()
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "langsamer") {
        langsamer()
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
function langsamer () {
    vor()
    vr += -128
    vl += -128
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
function schreibeGeschwindigkeit () {
    pins.analogWritePin(AnalogPin.P14, vr)
    pins.analogWritePin(AnalogPin.P13, vl)
}
let vl = 0
let vr = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
radio.setGroup(49)
vr = 703
vl = 703
basic.forever(function () {
    vr = Math.constrain(vr, 383, 1023)
    vl = Math.constrain(vl, 383, 1023)
    schreibeGeschwindigkeit()
})
