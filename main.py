while True:
    if input.logo_is_pressed():
        basic.show_icon(IconNames.NO, 0)
    else:
        basic.clear_screen()
    basic.pause(100)
