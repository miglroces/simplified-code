radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    potato = randint(0, 10)
})
input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
let potato = 0
radio.setGroup(33)
potato = -1
basic.forever(function () {
    if (potato < 0) {
        basic.showIcon(IconNames.Tortoise)
    }
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("C C D C C D C C ", 120)
        basic.pause(100)
    }
    if (potato > 0) {
        basic.showIcon(IconNames.Confused)
        basic.pause(200)
        basic.showIcon(IconNames.Sad)
        potato += -1
        basic.pause(500)
    }
})
