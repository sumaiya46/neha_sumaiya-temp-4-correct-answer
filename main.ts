while (true) {
    console.log("temperture" + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 40) {
        light.setAll(light.rgb(0, 255, 0))
    } else {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
