while True:
    print("light level:" + input.light_level())
    if input.light_level() > 15:
        light.clear()  
    else: 
        light.set_all(light.rgb(0,0,255))
 
