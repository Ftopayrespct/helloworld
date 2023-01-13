input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
