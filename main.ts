while (true) {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.No, 0)
    } else {
        basic.clearScreen()
    }
    
    basic.pause(100)
}
