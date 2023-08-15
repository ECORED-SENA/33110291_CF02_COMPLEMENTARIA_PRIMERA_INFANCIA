export default {
  global: {
    componenteFormativo:
      'Aplicación de la Escala Abreviada de Desarrollo EAD-3',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves de la aplicación e interpretación del instrumento EAD-3. Con su estudio responsable, estará en capacidad de establecer un plan de cuidado en el marco de la valoración integral en salud (para el caso de primera infancia, es fundamental recordar que el proceso de desarrollo se caracteriza por ser altamente sensible y moldeable en esta etapa).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        titulo: 'Generalidades de la Escala Abreviada Desarrollo – EAD-3',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Actualización a la versión EAD-3',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Condiciones para la aplicación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Características y materiales para la aplicación de la EAD-3',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aplicaciones del instrumento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cálculo de edad',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Establecimiento de rango',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Dimensiones de la aplicación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Establecimiento de Puntuación Directa',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Establecimiento de Puntuación Típica',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Interpretación',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Profundización en Ítems de aplicación por rangos de edad',
            hash: 't_2_7',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33110291_CF02_DU.zip',
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
      tema: 'Generalidades de la Escala Abreviada de Desarrollo - EAD-3',
      referencia:
        'Gobierno de Colombia. (2016). <em>Escala Abreviada de Desarrollo - 3</em>',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/Escala-abreviada-de-desarrollo-3.pdf',
    },
    {
      tema: 'Generalidades de la Escala Abreviada de Desarrollo - EAD-3',
      referencia:
        'NeuroGym Centro terapéutico. (2020). <em>Escala abreviada de desarrollo 3</em> [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mQMeRF5dW-c',
    },
    {
      tema: 'Aplicaciones del Instrumento',
      referencia:
        'Ministerio de Salud. (s.f.). <em>Anexos - Test de valoración integral.</em>',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/anexo-instrumentos-valoracion-ruta-promocion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado:
        'servicios recibidos por los individuos o las poblaciones para promover, mantener la salud.',
    },
    {
      termino: 'AIEPI',
      significado:
        'enfoque integrado de la salud infantil que se centra en el bienestar general del niño. Su finalidad es reducir la mortalidad, la morbilidad y la discapacidad en los niños menores de cinco años, así como promover su mejor crecimiento y desarrollo.',
    },
    {
      termino: 'Alimentación complementaria',
      significado:
        'son los nutrientes que recibe el niño en el primer año de vida y que no son productos lácteos.',
    },
    {
      termino: 'Crecimiento',
      significado:
        'incremento de talla en un determinado periodo de tiempo y tiene variaciones significativas según edad, sexo y estaciones de año.',
    },
    {
      termino: 'Derecho',
      significado:
        'es el conjunto de normas que imponen deberes y normas a todos los miembros de la sociedad de los mínimos de seguridad, certeza, igualdad, libertad y justicia.',
    },
    {
      termino: 'Desarrollo',
      significado:
        'adquisición progresiva de las capacidades motoras y cognoscitivas durante la infancia.',
    },
    {
      termino: 'Infancia',
      significado:
        'etapa de la vida del hombre comprendida desde el nacimiento hasta la pubertad.',
    },
    {
      termino: 'Normativa',
      significado:
        'conjunto de normas y reglas que tienen como finalidad, regular y asegurar las cantidades y características en la reproducción o servicio de los bienes de consumo entre personas físicas y/o jurídicas.',
    },
    {
      termino: 'Pediatría',
      significado: 'estudia al niño y sus enfermedades.',
    },
    {
      termino: 'Puericultura',
      significado:
        'disciplina médica y actividad que se ocupa de prestar cuidados a los niños para su mejor desarrollo.',
    },
    {
      termino: 'RIAS',
      significado:
        'rutas integrales de atención en salud –definen las condiciones necesarias para asegurar la integridad en la atención por parte de los agentes del sistema de salud (territorio, asegurador, prestador) y de otros sectores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fondo de las Naciones Unidas para la Infancia (1991). <em>Escala Abreviada de Desarrollo.</em>',
      link:
        'https://docenciaeinvestigacionmanuelsanchezserrano.files.wordpress.com/2014/08/escala-abreviada-de-desarrollo-unicef-colombia.pdf',
    },
    {
      referencia:
        'Gobierno de Colombia (2016). <em>Escala Abreviada de Desarrollo.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/Escala-abreviada-de-desarrollo-3.pdf',
    },
    {
      referencia:
        'Gobierno de Colombia (2013). <em>Estrategia de Atención Integral a la Primera Infancia. Fundamentos Políticos Técnicos y de Gestión.</em>',
      link:
        'http://www.deceroasiempre.gov.co/QuienesSomos/Documents/Fundamientos-politicos-tecnicos-gestion-de-cero-a-siempre.pdf',
    },
    {
      referencia:
        'Hormiga, C., Camargo, D. & Orozco, L. (2008). Reproducibilidad y validez convergente de la Escala Abreviada del Desarrollo y una traducción al español del instrumento Neurosensory Motor Development Assessment. Biomédica, 28(3), p. 327-346',
      link: 'https://revistabiomedica.org/index.php/biomedica/article/view/73',
    },
    {
      referencia:
        'Ley 1804 de 2016. Por la cual se establece la política de Estado para el desarrollo integral de la Primera Infancia de Cero a Siempre y se dictan otras disposiciones. Agosto 02 de 2016.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2014). <em>Guía de práctica clínica para la promoción del crecimiento, la detección temprana y el enfoque inicial de alteraciones del crecimiento en niños menores de 10 años en Colombia y la promoción del desarrollo, detección temprana y enfoque inicial de las alteraciones del desarrollo en niños menores de 5 años.</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/gpc-completa-alteraciones-crecimiento-ninos-menores-10-anos.pdf',
    },
    {
      referencia:
        'Torrado, Bedregal, Pedraza, Bedregal, Corredor. (2014). <em>Informe Final del Estudio Piloto de Valoración del Desarrollo Infantil en Diversos Grupos Poblacionales de Colombia.</em>',
      link:
        'https://vdocumento.com/informe-final-del-estudio-piloto-de-valoracin-del-informe-final-del-estudio.html?page=1',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Efraín Gómez Matamoros',
          cargo: 'Experto Temático',
          centro:
            'Centro de Formación de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Metodólogo para formación virtual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
