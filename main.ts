input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    disoben = 0
    disunten = 0
    links = 0
    rechts = 0
    logoben = 0
    logunten = 0
    z1 = 0
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    onoff = 1
    basic.pause(5000)
    onoff = 0
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (links < rechts) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        z1 = links
        led.plot(1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        z1 = rechts
        led.plot(3, 0)
    }
    if (logoben < logunten) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        z2 = logoben
        led.plot(1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        z2 = logunten
        led.plot(3, 1)
    }
    if (disoben < disunten) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        z3 = disoben
        led.plot(1, 2)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        z3 = disunten
        led.plot(3, 2)
    }
    z4 = z1 - (z2 + z3)
    z5 = z1 + (z2 - z3)
    if (z4 < z5) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        led.plot(1, 3)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 0)
        led.plot(3, 3)
    }
})
let z5 = 0
let z4 = 0
let z3 = 0
let z2 = 0
let onoff = 0
let z1 = 0
let logunten = 0
let logoben = 0
let rechts = 0
let links = 0
let disunten = 0
let disoben = 0
disoben = 0
disunten = 0
links = 0
rechts = 0
logoben = 0
logunten = 0
z1 = 0
basic.forever(function () {
    while (onoff == 1) {
        if (input.isGesture(Gesture.ScreenUp)) {
            disoben += 1
            basic.pause(1)
        }
        if (input.isGesture(Gesture.ScreenDown)) {
            disunten += 1
            basic.pause(1)
        }
        if (input.isGesture(Gesture.LogoUp)) {
            logoben += 1
            basic.pause(1)
        }
        if (input.isGesture(Gesture.LogoDown)) {
            logunten += 1
            basic.pause(1)
        }
        if (input.isGesture(Gesture.TiltLeft)) {
            links += 1
            basic.pause(1)
        }
        if (input.isGesture(Gesture.TiltRight)) {
            rechts += 1
            basic.pause(1)
        }
    }
})
