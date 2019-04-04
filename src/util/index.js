function getImgUrl (device) {
    return `http://vorto.eclipse.org/rest/default/models/${device.attributes.definition[0]}/images`;
}

module.exports = {
    getImgUrl
}