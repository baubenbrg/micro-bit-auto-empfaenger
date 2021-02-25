input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.South)
})
radio.onReceivedString(function (receivedString) {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
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
