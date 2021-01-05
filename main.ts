while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() > 15) {
        light.clear()
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
