while True:
    print("light level:" + input.light_level())
    if input.light_level() > 40:
        light.set_all(light.rgb(0,0,0))
    else: 
        light.set_all(light.rgb(255,0,255))
    if input.light_level() < 0: 
        light.set_all(light.rgb(255,255,0))
