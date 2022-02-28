input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 1023)
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 1023)
        basic.pause(2000)
    }
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
})
pins.analogWritePin(AnalogPin.P0, 1023)
pins.analogWritePin(AnalogPin.P1, 1023)
pins.analogWritePin(AnalogPin.P2, 1023)
basic.forever(function () {
	
})
