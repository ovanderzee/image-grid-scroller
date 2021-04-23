const gallery = {
  path: 'https://www.flickr.com/services/rest/',
  search: {
    method: 'flickr.galleries.getPhotos',
    api_key: '980b06a4493f051d32e73dc5af2f56bc',
    gallery_id: '66911286-72157647277042064',
    format: 'json',
    nojsoncallback: '1',
  },
}

const photograph = {
  path: 'https://live.staticflickr.com/',
}

export { gallery, photograph }
