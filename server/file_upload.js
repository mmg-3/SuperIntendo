const multer = require('multer')
const axios = require('axios')
const FormData = require('form-data')
// use this as middleware to accept an incoming file
// look at resident ticket for use to use
const uploader = multer({
  // this is bad for large images
  // TODO change this to use fs and clean up after self
  storage: multer.memoryStorage()
})

// takes a file, will upload to imgur and return back the url or throw error
const imgurUpload = async file => {
  const formData = new FormData()

  formData.append('image', Buffer.from(file.buffer))
  formData.append('type', 'file')
  formData.append('name', file.originalname)

  const headers = {
    ...formData.getHeaders(),
    Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`
  }

  const {data} = await axios.post(
    'https://api.imgur.com/3/upload',
    formData.getBuffer(),
    {
      headers
    }
  )
  // I know it's double data, but that's what axios and imgur do to me
  return data.data.link
}

module.exports = {
  uploader,
  imgurUpload
}
