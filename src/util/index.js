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

function getImgUrl(device) {
  return `http://vorto.eclipse.org/rest/default/models/${device.attributes.definition[0]}/images`;
}

function checkDeviceForQuery(device, { searching, query }) {
  if (!searching || !query) {
    return true
  }

  const [serachKeyword, searchQuery] = query.split(":").map(elem => elem.trim())

  /* TODO add more filtering options
    - gt:temperature 5
    - lt:battery 50
    - ...
  */
  switch (serachKeyword) {
    case "has":
      return Object.keys(device.features)
        .some(feature => device.features[feature].definition
          .some(def => def.toLowerCase().includes(searchQuery)));
    default:
      return device.attributes.definition[0]
        .toLowerCase()
        .includes(query)
  }
}

function getRepositoryLink(path) {
  return `https://vorto.eclipse.org/#/details/${path}`
}

module.exports = {
  getImgUrl,
  CATEGORIES,
  mapDeftoCardCategorie,
  checkDeviceForQuery,
  getRepositoryLink
}