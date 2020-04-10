// Make Cards
const sectionGallery = document.querySelector('div.card-images')

const gallery = document.querySelector('div.image')

const images = [
  {
    image_id: 1,
    thumb: '../public/assets/img/projects/comoUsarMascara.jpeg',
  },
  {
    image_id: 2,
    thumb: '../public/assets/img/projects/epiItacoatiara.jpeg',
  },
  {
    image_id: 3,
    thumb: '../public/assets/img/projects/ufamProduzAlcool.jpeg',
  },
  {
    image_id: 4,
    thumb: '../public/assets/img/projects/impressora3D.jpeg',
  },
  {
    image_id: 5,
    thumb: '../public/assets/img/projects/faceShieldItacoatiara.jpeg',
  },
  {
    image_id: 6,
    thumb: '../public/assets/img/projects/ufam.jpeg',
  },
  {
    image_id: 7,
    thumb: '../public/assets/img/projects/ufam2.jpeg',
  },
  {
    image_id: 8,
    thumb: '../public/assets/img/projects/ufam4.jpeg',
  },
  {
    image_id: 9,
    thumb: '../public/assets/img/projects/impressoras.jpeg',
  },
]

images.map(image => {
  const galleryClone = gallery.cloneNode(true)
  galleryClone.setAttribute('id', images.image_id)
  galleryClone.querySelector('.imageLink').href = image.thumb
  galleryClone.querySelector('img').src = image.thumb
  sectionGallery.appendChild(galleryClone)
})

gallery.remove()
