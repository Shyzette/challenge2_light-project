while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() > 15) {
        light.clear()
    } else if (input.lightLevel() > 10) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
