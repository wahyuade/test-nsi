module.exports = class Response {
  constructor() {
    this.status = true,
    this.message = {},
    this.geoJSON = {}
  }

  setStatus (status) {
    this.status = status
  }

  setMessage (message) {
    this.message = message
  }

  setGeoJSON (geoJSON) {
    this.geoJSON = geoJSON
  }
}