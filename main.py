while True:
    print("light level:" + input.light_level())
    if input.light_level() > 15:
        light.clear()
    elif input.light_level() > 10: 
        light.set_all(light.rgb(0,0,255))
    else: 
        light.set_all(light.rgb(255,255,0))
