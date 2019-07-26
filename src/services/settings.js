import Promise from 'bluebird'

export const settingsService = {
  get() {
    return Promise.delay(2000).then(() => mockSettings)
  }
}

const mockSettings = {
  name: 'John Wick',
  username: 'JohnW',
  contact: 'john.w@gmail.com',
  adsContact: 'john.w@gmail.com'
}
