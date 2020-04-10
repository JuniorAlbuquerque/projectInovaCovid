// Make Cards
const sectionMember = document.querySelector('div.containerMember')

const cardMember = document.querySelector('div.cardMember')

const members = [
  {
    name: 'Fernando Silvano',
    instituicao: 'Instituto Federal de Santa Catarina - IFSC',
    info:
      ' Doutor em Engenharia de Automação e Sistemas (2018) pela \
        mesma instituição, com período de sanduíche (8 meses) no \
        Research Centre in Real-Time & Embedded Computing Systems - \
        CISTER pelo Instituto Superior de Engenharia do Porto (ISEP).',
    thumb: '../public/assets/img/members/member1.jpeg',
    link: '#',
    textLink: 'Lattes',
    member_id: '1',
  },
  {
    name: 'Luís Otávio',
    instituicao: 'Instituto Federal de Sergipe',
    info:
      'Professor Efetivo do Instituto Federal de Sergipe. Tem \
      experiência na área de Ciência da Computação, com ênfase em \
      Sistemas de Informação, atuando principalmente nos seguintes \
      temas: Arquitetura de Computadores, Sistemas Operacionais, \
      Lógica de Programação, Arquitetura de Software, Inclusão \
      Digital, Robótica Didática, Domótica e Eficiência Energética.',
    thumb: '../public/assets/img/members/member2.jpeg',
    link: '#',
    textLink: 'Lattes',
    member_id: '2',
  },
  {
    name: 'João Victor',
    instituicao: 'Laboratório de Bioengenharia e Medicina(LABEM)',
    info:
      ' Membro do grupo de pesquisa em Bioengenharia e Medicina, desenvolvendo sistemas de \
      instrumetação eletrônica  com ênfase em aplicações médicas. Graduando Engenharia Mecatrônica \
      na Universidade Tiradentes. Técnico em Eletrônica pelo Instituto Federal de Sergipe.',
    thumb: '../public/assets/img/members/member3.jpeg',
    link: '#',
    textLink: 'Lattes',
    member_id: '3',
  },
  {
    name: 'Vandermi Silva',
    instituicao: 'Universidade Federal do Amazonas - UFAM',
    info:
      ' Doutor em Informática pela Universidade Federal do Amazonas. Tem experiência na área de \
      Engenharia da Computação, com ênfase em Desenvolvimento de sistemas para dispositivos móveis, embarcados e de automação, \
      Internet das coisas (IoT), Indústria 4.0, sistemas com banco de dados, \
      sistemas WEB e sistemas de coleta de dados \
      em dispositivos médicos com aprendizado de máquina.',
    thumb: '../public/assets/img/members/member6.jpeg',
    link: 'http://lattes.cnpq.br/1231884642541177',
    textLink: 'Lattes',
    member_id: '4',
  },
  {
    name: 'Rute Holanda',
    instituicao: 'Universidade Federal do Amazonas - UFAM',
    info:
      ' Professora Adjunto da Universidade Federal do Amazonas - UFAM/ ICET \
       (Economia Rural, Introdução à Economia e Gestão Ambiental). Coordenadora do \
       Núcleo de Economia, Tecnologia, Gestão e Inovação; Coordenadora Administrativa da Incubadora \
       do ICET - ICETech, Vice coordenadora do Curso de Engenharia de Produção, Coordenadora do COMEXI - Comitê de Extensão do ICET',
    thumb: '../public/assets/img/members/member7.gif',
    link: 'http://lattes.cnpq.br/3678444694216259',
    textLink: 'Lattes',
    member_id: '5',
  },
  {
    name: 'Alex Sandro ',
    instituicao: 'Universidade Federal de Santa Catarina',
    info:
      'Doutor em Engenharia Elétrica pela Universidade Federal de Santa Catarina, área de concentração Automação e Sistemas \
      Tem experiência na área de Ciência da Computação, com ênfase em Computação Distribuída, atuando principalmente nos \
      seguintes temas: algoritmos genéticos, agregado de computadores, balanceamento de carga, computação paralela e \
      distribuída e Redes de Sensores sem Fio.',
    thumb: '../public/assets/img/members/member8.jpeg',
    link: '#',
    textLink: 'Lattes',
    member_id: '6',
  },
  {
    name: 'Jefferson Coelho',
    instituicao: 'Universidade Federal do Amazonas - UFAM',
    info:
      'Graduado em Engenharia Mecatrônica pela Universidade do Estado do Amazonas (2009) e Mestre em engenharia Mecânica \
      pela Universidade Federal do Rio de Janeiro COPPE/UFRJ (2016). Atualmente é Professor Assistente da Universidade \
      Federal do Amazonas / Instituto de Ciências Exatas e Tecnologia - UFAM/ICET.',
    thumb: '../public/assets/img/members/member10.gif',
    link: 'http://lattes.cnpq.br/8153043119926295',
    textLink: 'Lattes',
    member_id: '7',
  },
  {
    name: 'Ednilson Albuquerque',
    instituicao: 'Universidade Federal do Amazonas - UFAM',
    info:
      ' Graduando do Curso de Engenharia de Software pela Universidade Federal do Amazonas (UFAM). Atua como desenvolvedor Full Stack \
      na empresa Mowah Tecnologia, com principal foco em desenvolvimento web e mobile. Além de realizar pesquisas nas áreas de Visão Computacional, \
      Redes Neurais e Engenharia de Requisitos para Sistemas baseados em Internet das Coisas',
    thumb: '../public/assets/img/members/member4.gif',
    link: 'http://lattes.cnpq.br/1269440339209473',
    textLink: 'Lattes',
    member_id: '8',
  },
  {
    name: 'Madson Lemos',
    instituicao: 'Universidade Federal do Amazonas - UFAM',
    info:
      'Formado no curso Técnico Integrado em Informática pelo Instituto \
      Federal de Educação , ciência e Tecnologia do Amazonas (IFAM). Granduando do curso superior de Bacharelado em Engenharia de Software \
      pela Universidade Federal do Amazonas (UFAM). \
      Possui conhecimentos nas áreas da computação: Rede de Computadores, desenvolvimento de software web, mobile e embarcado, robótica e automação. ',
    thumb: '../public/assets/img/members/member5.gif',
    link: 'http://lattes.cnpq.br/5392540667327506',
    textLink: 'Lattes',
    member_id: '9',
  },

  {
    name: 'Arthur Ferreira',
    instituicao: 'Universidade Federal do Amazonas - UFAM',
    info:
      'Graduando em Engenharia de Software pela UFAM - ICET, conhecimento em manufatura \
      aditiva com impressora 3D, Robótica e IoT, Programação Web com PHP, Java script e HTML.',
    thumb: '../public/assets/img/members/member9.jpeg',
    link: '#',
    textLink: 'Lattes',
    member_id: '10',
  },
]

members.map(member => {
  const memberClone = cardMember.cloneNode(true)
  memberClone.setAttribute('id', member.member_id)
  memberClone.querySelector('img').src = member.thumb
  memberClone.querySelector('.memberName > .instituicao').innerHTML =
    member.instituicao
  memberClone.querySelector('.memberName > p.titleMember').innerHTML =
    member.name
  memberClone.querySelector('#link').href = member.link
  memberClone.querySelector('#link').innerHTML = member.textLink
  memberClone.querySelector('.info-section > .upper > p.infoMember').innerHTML =
    member.info
  sectionMember.appendChild(memberClone)
})

cardMember.remove()
