// Make Cards
const sectionCards = document.querySelector('div.container-card')

const card = document.querySelector('div.card-project')

const box = document.getElementsByClassName('lightbox-target')

const projects = [
  {
    title: 'Mascara modelo Prusa Remix Lasoft',
    info:
      ' Face Shield open-source, onde qualquer pessoa com uma impressora 3D pode ajudar na produção. \
      Junte-se a comunidade para ajudar os profissionais da sua região.',
    thumb: '/public/assets/img/projects/shield-1.jpg',
    link: 'https://www.prusa3d.com/covid19/',
    textLink: 'Site oficial da prusa 3d',
    project_id: '1',
    tag: '#MascaraPrusa',
    zoom: 'prusa',
  },
  {
    title: 'Impressão 3D',
    info:
      'Universidade Federal do Amazoinas (UFAM) inicia a produção de Equipamentos de Proteção Individual no município de Itacoatiara',
    thumb: '/public/assets/img/projects/ufam.jpeg',
    link:
      'https://ufam.edu.br/noticias-destaque/1250-impressao-3d-ufam-inicia-a-producao-de-equipamentos-de-protecao-individual-em-itacoatiara.html',
    textLink: 'Acompanhe',
    project_id: '2',
    tag: '#UFAM #Impressão3D',
    zoom: '3d',
  },
  {
    title: 'Face Shield',
    info: 'Deve ser utilizada com uma máscara por baixo',
    thumb: '../public/assets/img/projects/comoUsarMascara.jpeg',
    link:
      'http://www.in.gov.br/web/dou/-/resolucao-rdc-n-356-de-23-de-marco-de-2020-249317437',
    textLink: 'Segue a resolução',
    tag: '#FaceShield #ICET',
    project_id: '3',
    zoom: 'face',
  },
  {
    title: 'Face Shield entregue ao Hospital de Itacoatiara',
    info:
      'Secretária de saúde de Itacoatiara. Dra Enfa.Keity recebe face shileds produzidas no \
      Instituo de Ciências Exatas e Tecnologia (ICET-UFAM)',
    thumb: '../public/assets/img/projects/faceShieldItacoatiara.jpeg',
    link: '#',
    textLink: '',
    tag: '#Itacoatiara #UFAM',
    project_id: '4',
    zoom: 'clinica',
  },
  {
    title: 'Icet produz álcool em gel para distribuição em Itacoatiara',
    info:
      'O ICET realiza a fabricação e distribuição de álcool em gel em pontos estratégicos e a\
       diluição de álcool para que possam ser utilizados de forma eficaz na higienização dos ambientes nas unidades de saúde. ',
    thumb: '../public/assets/img/projects/ufamProduzAlcool.jpeg',
    link:
      'https://ufam.edu.br/noticias-destaque/1237-icet-produz-alcool-em-gel-para-distribuicao-em-itacoatiara.html',
    tag: '#ICET #UFAM',
    textLink: 'Acompanhe',
    project_id: '5',
    zoom: 'icet',
  },
  {
    title: 'Modelo para Impressão da Máscara',
    info:
      'No link abaixo você pode baixar o modelo para realizara a impressão da máscara de proteção. ',
    thumb: '../public/assets/img/projects/modeloMascara.png',
    link:
      'https://drive.google.com/file/d/1VK3c0d-yY8nAfS3YsmhGePPUaasltpan/view?usp=sharing',
    tag: '#Máscara',
    textLink: 'Download',
    project_id: '6',
    zoom: 'modelo',
  },
  {
    title: 'Entrega de EPI',
    info:
      'Universidade Federal do Amazonas realiza a entrega de Equipamentos de Proteção Individual \
      (EPI) na UPA do município de Itacoatiara',
    thumb: '../public/assets/img/projects/epiItacoatiara.jpeg',
    link: '',
    tag: '#Itacoatiara #UFAM',
    textLink: '',
    project_id: '7',
    zoom: 'epi',
  },
]

projects.map(project => {
  const cardClone = card.cloneNode(true)
  cardClone.setAttribute('id', project.project_id)
  cardClone.querySelector('#change').id = project.zoom
  cardClone.querySelector('img').src = project.thumb
  cardClone.querySelector('.lightbox-target img').src = project.thumb
  cardClone.querySelector('.content > .right span.tag').innerHTML = project.tag
  cardClone.querySelector('.content .title').innerHTML = project.title
  cardClone.querySelector('.content .text').innerHTML = project.info
  cardClone.querySelector('#linkImage').href = '#' + project.zoom
  cardClone.querySelector('.goLink').href = project.link
  cardClone.querySelector('.goLink').innerHTML = project.textLink
  if (project.textLink == '') {
    cardClone.querySelector('.goLink').style = 'display: none'
  }
  sectionCards.appendChild(cardClone)
})

card.remove()
