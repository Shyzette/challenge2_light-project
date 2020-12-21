while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() > 40) {
        light.setAll(light.rgb(0, 0, 0))
    } else {
        light.setAll(light.rgb(255, 0, 255))
    }
    
    if (input.lightLevel() < 0) {
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
