const CATEGORIES = {
    LOCATION: [
        "org.eclipse.vorto:Location:1.0.0",
        "org.eclipse.vorto:Geolocation:1.0.0"
    ],
    BOOLEAN: [
        "org.eclipse.vorto:BinaryState:1.0.0"
    ],
    GAGE: [
        "org.eclipse.vorto:Voltage:1.0.0"
    ],
    TEMPERATURE: [
        "org.eclipse.vorto:Temperature:1.0.0"
    ],
    BATTERY: [
        "org.eclipse.vorto:Battery:1.0.0"
    ],
    BAR: [
        "org.eclipse.vorto:Acceleration:1.0.0"
    ],
    JSON: []
}

function mapDeftoCardCategorie(featureDefs) {
    for (const definition of featureDefs) {
        if (CATEGORIES.LOCATION.includes(definition)) {
            return CATEGORIES.LOCATION
        }

        if (CATEGORIES.BOOLEAN.includes(definition)) {
            return CATEGORIES.BOOLEAN
        }

        if (CATEGORIES.GAGE.includes(definition)) {
            return CATEGORIES.GAGE
        }

        if (CATEGORIES.TEMPERATURE.includes(definition)) {
            return CATEGORIES.TEMPERATURE
        }

        if (CATEGORIES.BATTERY.includes(definition)) {
            return CATEGORIES.BATTERY
        }

        if (CATEGORIES.BAR.includes(definition)) {
            return CATEGORIES.BAR
        }
    }

    return CATEGORIES.JSON
}

module.exports = {
    CATEGORIES,
    mapDeftoCardCategorie,
}