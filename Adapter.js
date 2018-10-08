const URL = "https://dog.ceo/api/breeds/image/random"

export default class Adapter {
  static get() {
    return fetch(URL).then(r => r.json()).then(json => json.message)
  }
}
