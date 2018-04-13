module.exports = class Response {
  constructor() {
    this.status = true,
    this.message = {},
    this.data = {}
  }

  setStatus (status) {
    this.status = status
  }

  setMessage (message) {
    this.message = message
  }

  setData (data) {
    this.data = data
  }
}