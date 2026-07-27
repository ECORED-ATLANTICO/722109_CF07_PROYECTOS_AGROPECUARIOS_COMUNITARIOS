export default {
  global: {
    Name:
      'Gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios',
    Description:
      'El componente formativo fortalece habilidades para la concertación comunitaria, la comunicación efectiva, la negociación y la atención de riesgos en contextos rurales. Integra estrategias participativas, enfoque diferencial y gestión de la información para apoyar procesos organizativos y el desarrollo sostenible de proyectos agropecuarios comunitarios.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Gestión comunitaria con enfoque territorial y diferencial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concertación de acciones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estrategias para el desarrollo de componentes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manejo del enfoque diferencial',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Generalidades',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de negociación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Métodos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Características',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Criterios de negociación',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Escucha activa',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Canales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Componentes',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estrategias del lenguaje',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Técnicas de oratoria',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Técnicas de comunicación comunitaria',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Técnicas de divulgación y sistematización',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Tipos de entrevista',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Características didácticas de transmisión de conocimiento',
            hash: 't_3_9',
          },
          {
            numero: '3.10',
            titulo: 'Lenguaje corporal y verbal',
            hash: 't_3_10',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ruta de atención de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Indicadores de riesgo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de riesgos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Protocolo de atención',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Protocolos de seguridad',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Métodos de diligenciamiento de documentos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Registros productivos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Técnicas de elaboración de informes',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Tipos de reporte',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Generalidades y normatividad',
            hash: 't_6_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722109_CF07_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acta',
      significado:
        'Documento escrito que deja constancia formal de acuerdos, decisiones o eventos realizados en procesos comunitarios o de proyectos.',
    },
    {
      termino: 'Canales de comunicación',
      significado:
        'Medios o vías a través de los cuales se transmite la información dentro de una comunidad o proyecto.',
    },
    {
      termino: 'Comunicación',
      significado:
        'Proceso mediante el cual se intercambia información, ideas o conocimientos entre personas o grupos.',
    },
    {
      termino: 'Concertación',
      significado:
        'Proceso de acuerdo entre actores sociales para definir acciones conjuntas en un proyecto o territorio.',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'Estrategia que reconoce y respeta las características particulares de grupos poblacionales (cultura, género, edad, etnia).',
    },
    {
      termino: 'Escucha activa',
      significado:
        'Habilidad de atención plena en la comunicación que permite comprender realmente el mensaje del interlocutor.',
    },
    {
      termino: 'Gestión comunitaria',
      significado:
        'Conjunto de acciones organizadas por la comunidad para planificar, ejecutar y evaluar procesos de desarrollo territorial.',
    },
    {
      termino: 'Gestión de la información',
      significado:
        'Proceso de recolección, organización, análisis y uso de datos para la toma de decisiones en proyectos.',
    },
    {
      termino: 'Indicadores de riesgo',
      significado:
        'Señales o variables que permiten identificar la probabilidad de ocurrencia de un riesgo en un proyecto o territorio.',
    },
    {
      termino: 'Manejo de riesgos',
      significado:
        'Proceso de identificación, prevención y control de riesgos que pueden afectar el desarrollo de un proyecto.',
    },
    {
      termino: 'Negociación',
      significado:
        'Proceso de diálogo entre partes para llegar a acuerdos que beneficien a todos los actores involucrados.',
    },
    {
      termino: 'Protocolo de atención',
      significado:
        'Conjunto de pasos establecidos para responder de manera organizada ante una situación específica o de riesgo.',
    },
    {
      termino: 'Protocolo de seguridad',
      significado:
        'Normas y procedimientos orientados a prevenir accidentes o riesgos en la ejecución de actividades.',
    },
    {
      termino: 'Registro',
      significado:
        'Documento o sistema donde se consignan datos, hechos o actividades realizadas en un proyecto.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Posibilidad de que ocurra un evento que afecte negativamente los objetivos de un proyecto o comunidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asana. (2026, enero 14). <em>Project management phases: 5 steps to improve your workflow</em>.',
      link: 'https://asana.com/es/resources/project-management-phases',
    },
    {
      referencia:
        'Martínez, A. (1995). <em>El diagnóstico participativo: una herramienta de trabajo para las comunidades</em>. Bib. Orton IICA / CATIE.',
      link:
        'https://books.google.com.co/books?hl=es&lr=&id=QdkOAQAAIAAJ&oi=fnd&pg=PA10&dq=Diagn%C3%B3stico+participativo&ots=-iV_K4ng6C&sig=TQfTuQvMzTTGF4aZTj3wR-59894&redir_esc=y#v=onepage&q=Diagn%C3%B3stico%20participativo&f=false',
    },
    {
      referencia:
        'RoleCatcher. (2024). <em>Métodos de consulta</em>. RoleCatcher.',
      link:
        'https://rolecatcher.com/es/habilidades/conocimiento/negocios-administracion-y-derecho/negocios-y-administracion/metodos-de-consulta/',
    },
    {
      referencia:
        'Rus Arias, E. (2020, octubre 1). <em>Etapas de un proyecto</em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/etapas-de-un-proyecto.html',
    },
    {
      referencia:
        'Teamleader. (2025, abril 17). <em>¿Qué es y para qué sirve un diagrama de Gantt?</em>',
      link: 'https://www.teamleader.eu/es/blog/diagrama-de-gantt',
    },
    {
      referencia:
        'Tristancho, C. (2025). <em>Seguimiento de proyectos: qué es y cómo hacerlo</em>. ProjectManager.',
      link: 'https://www.projectmanager.com/es/seguimiento-de-proyectos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto Temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
