const https = require('https')
const path = require('path')
const fs = require('fs')

function downloadImage(link, fileName, suffix = '') {
  const [name, ext] = fileName.split('.')
  const file = fs.createWriteStream(
    `public/profilePictures/${name}${suffix}.${ext}`
  )
  https.get(link, function(response) {
    response.pipe(file)
  })
}

function process() {
  ensureDownloadDirectoryExist()
  downloadImages('men', '', '-large')
  downloadImages('men', 'med/', '-medium')
  downloadImages('men', 'thumb/', '-thumbnail')
  downloadImages('women', '', '-large')
  downloadImages('women', 'med/', '-medium')
  downloadImages('women', 'thumb/', '-thumbnail')
}

function ensureDownloadDirectoryExist() {
  const profilePicturesDir = path.resolve(
    __filename,
    '..',
    '..',
    '..',
    'public',
    'profilePictures'
  )
  console.log('profieldir', profilePicturesDir)
  if (!fs.existsSync(profilePicturesDir)) {
    fs.mkdirSync(profilePicturesDir)
  }
}

function downloadImages(gender, subPath, suffix) {
  const baseUrl = 'https://randomuser.me/api/portraits'
  for (let i = 1; i <= 50; i++) {
    const imageUrl = `${baseUrl}/${subPath}${gender}/${i}.jpg`
    console.log(imageUrl, suffix)
    downloadImage(imageUrl, extractImageName(imageUrl), '-' + gender + suffix)
  }
}

function extractImageName(link) {
  return link.substr(link.lastIndexOf('/') + 1)
}

process()
