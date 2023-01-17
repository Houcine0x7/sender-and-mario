radio.setGroup(1)

input.onGesture(Gesture.TiltLeft,function(){
    radio.sendNumber(7)
})

input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(0)
})