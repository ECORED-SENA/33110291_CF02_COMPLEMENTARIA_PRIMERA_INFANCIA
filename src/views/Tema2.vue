<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Aplicaciones del instrumento
    .row.bg-c7
      .col-12
        .px-5.pt-5
          p.mb-5(data-aos="fade-right") La aplicación del instrumento debe realizarse de acuerdo con los rangos de edad que define el instrumento mismo, este rango se establece una vez se realice el cálculo de la edad corregida o cronológica. La dimensión para iniciar la evaluación puede ser determinado por el profesional de la salud, sin embargo, aunque habitualmente se empieza la aplicación con los ítems de motricidad gruesa, esto puede variar teniendo en cuenta el nivel de disposición del niño o niña frente a las actividades que propone cada área.
          .row.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img1.png', style="width: 570px" ,alt='').m-auto
            .col-lg-7(data-aos="fade-left")
              figure.mb-4.d-none.d-lg-block
                img(src='@/assets/curso/tema2/img2.svg', style="width: 270px" ,alt='')
              p.mb-0 #[b.txt-c1 Es decir, si se observa que durante los primeros minutos de acercamiento con el niño o la niña], tiene una actividad verbal mayor a su actividad motora, se podría pensar en iniciar la aplicación por el área de Audición Lenguaje. Si por ejemplo, el niño o niña se niega a cooperar con los ítems de Audición Lenguaje (AL), Motricidad Gruesa (MG) y Motricidad Fino-adaptativa (MF), una buena opción es iniciar con la administración del área Personal Social (PS), teniendo en cuenta que algunos de sus ítems corresponden a la modalidad de preguntas dirigidas, lo que facilitaría darle al niño o la niña un mayor tiempo de adaptación al examinador y al nuevo contexto, volviendo más tarde a intentar aplicar los ítems de las áreas que han quedado incompletas, evitando dejar vacíos, ya que esto imposibilita el análisis posterior de la información.
          p.mb-5 #[b Sobre los ítems de cada área, se debe tener presente que:]
    .row.justify-content-center(data-aos="fade-down")
      .col-10.col-md-8.col-lg.m-2.bg-c3
        .p-4
          p #[b Orden]
          p.mb-0 Los ítems de cada área están ordenados de menor a mayor dificultad.
      .col-10.col-md-8.col-lg.m-2.bg-c8
        .p-4
          p #[b Administración]
          p.mb-0 Todos los ítems de cada área deben ser administrados en el orden en que aparecen en la hoja de respuestas.
      .col-10.col-md-8.col-lg.m-2.bg-c3
        .p-4
          p #[b Tiempos]
          p.mb-0 El tiempo de aplicación depende del nivel de habilidad del niño o niña, puesto que este puede comenzar la aplicación en el punto de inicio (PI) correspondiente, teniendo en cuenta su edad en meses y días o edad corregida, e ir progresando en las pruebas hasta alcanzar los niveles correspondientes a rangos de edad superiores.
    .row.justify-content-center(data-aos="fade-down")
      .col-10.col-md-8.col-lg.m-2.bg-c3
        .p-4
          p #[b Avances superiores]
          p.mb-0 Otros niños o niñas pueden tener un nivel de desarrollo más acorde con las habilidades de su edad cronológica, siendo probable que solo superen los ítems del rango equivalente a su edad.
      .col-10.col-md-8.col-lg.m-2.bg-c8
        .p-4
          p #[b Devolución a rangos anteriores]
          p.mb-0 A su vez, en otros niños o niñas, puede que el examinador, al establecer el PI, deba devolverse a un rango de edad anterior a la edad cronológica del niño o la niña y progresar hasta que alcance el punto de cierre (PC).
      .col-10.col-md-8.col-lg.m-2.bg-c3
        .p-4
          p #[b Variación de las pruebas]
          p.mb-0 En algunos casos, será necesario aplicar más ítems hasta que el niño o la niña alcance las reglas de terminación y en otros se aplicarán pocos ítems, siendo entonces la duración de la prueba variable de acuerdo con la edad, las habilidades de desarrollo y la cooperación del niño o la niña en la resolución de los ítems. Sin embargo, se puede estimar un tiempo entre 20 y 40 minutos en la administración de la EAD-3.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1. Cálculo de edad
    .row.bg-c9
      .col-12
        .px-5.pb-5
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              p El paso inicial para la aplicación del instrumento es el cálculo de edad, para establecer el rango de edad en que será evaluado el niño o la niña, la edad debe expresarse en años, meses y días. Se debe hacer especial atención a niños con nacimiento pretérmino, con el fin de corregir la edad cronológica según el nivel de prematurez.
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img3.svg', style="width: 70px" ,alt='')
                .col
                  p.mb-0 #[b Para el cálculo de edad se necesita restar a la fecha de evaluación, la fecha de nacimiento del niño o la niña, como se muestra a continuación:]
            .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width: 470px" ,alt='').m-auto
          .row.align-items-center.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img3.png', style="width: 420px" ,alt='').m-auto
            .col-lg-8(data-aos="fade-left")
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 3]. Cálculo de edad y rango.
              figure
                img(src='@/assets/curso/tema2/img5.svg', style="width: 800px" ,alt='Tabla que cruza la edad del niño o la niña, en años, meses y días con la fecha de evaluación, de nacimiento y la edad del niño o la niña.').m-auto
                figcaption.mt-3 Nota: tomado de Manual técnico de la EAD-3.
          p(data-aos="fade-right") #[b El siguiente es un ejemplo práctico de este cálculo de edad y rango.]
          p.mb-5(data-aos="fade-right") Catalina nació el 22 de marzo del 2020 y va a ser evaluada el 30 de octubre del 2022. Con esta información se procede a hacer el cruce en la tabla, así:
          .row.align-items-center(data-aos="fade-up")
            .col-lg-8.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Tabla 1]. Ejemplo de cálculo de edad
              figure.mb-4
                img(src='@/assets/curso/tema2/img6.svg', style="width: 800px" ,alt='').m-auto
              p Para este caso, Catalina tendría entonces: #[b 2 años, 7 meses y 8 días], esto quiere decir que va a ser evaluada en el rango de edad #[b 8 (24 meses y 1 día a 36 meses 0 días)].
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/img4.png', style="width: 470px" ,alt='').m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2. Establecimiento de rango
    p.mb-4(data-aos="fade-right") #[b.txt-c1 Edad corregida:] si el niño o niña nació antes de las 37 semanas de gestación y tiene hasta 2 años de edad, se debe realizar el ajuste de la edad, es decir, calcular la edad corregida. Esto debido a que el proceso de desarrollo se ve comprometido por la #[strong prematurez], por lo tanto, el ritmo de desarrollo se deberá evaluar haciendo la corrección a las semanas o días faltantes para la edad gestacional de referencia, que corresponde a la semana 40.
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img5.png', style="width: 470px" ,alt='').m-auto
      .col-lg-7(data-aos="fade-left")
        .row.mb-4
          .col-12.bg-c10
            .p-4
              p.mb-0 Este proceso solo se realiza hasta los 2 años porque para este momento ya se ha hecho el proceso de #[strong reatrapaje] en desarrollo, es decir, ya se deben tener los avances esperados en los diferentes dominios de desarrollo equiparados con las niñas y niños que no fueron prematuros, esto haciendo la aclaración que no se haya presentado una patología significativa que genere una afectación directa en el desarrollo que pueda generar una discapacidad asociada.
        .row.align-items-center
          .col-md-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img7.svg', style="width: 70px" ,alt='').m-auto
          .col
            p.mb-0 #[b El siguiente es un ejemplo de edad corregida:]
            p.mb-0 Santiago nació el 20 de abril del 2021, a sus 35 semanas de gestación y va a ser evaluado el 28 de julio del 2022. Su tabla de cálculo, entonces, será la siguiente
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Tabla 2]. Cálculo de edad caso Santiago
        figure
          img(src='@/assets/curso/tema2/img8.svg', style="width: 800px" ,alt='').m-auto
    p.text-center.mb-5(data-aos="fade-right") #[b Para poder calcular la edad corregida del niño que ha nacido pretérmino, es necesario:]
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              p.text-center #[b Obtener el número de semanas faltantes]
              p Es decir, el número de semanas que le faltaron para llegar a 40 semanas de gestación. Entonces se resta a 40 el número de semanas en el que haya nacido el niño(a), en este caso sería 40-35=5. Como son 5 semanas de gestación las que hicieron falta, se multiplican por 7, que corresponde a los 7 días que tiene cada semana, es decir, 7x5=35.
      .col-md-6.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              p.text-center #[b Obtener número de días faltantes]
              p Lo que se obtiene es el número de días que hicieron falta para completar las 40 semanas, ahora lo que se debe hacer es restar este número al número de días en la edad cronológica. Si este es mayor a la edad cronológica, debe prestar días del mes para compensar.
    .row.justify-content-center
      .col-lg-10.bg-c8(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img11.svg', style="width: 70px" ,alt='').m-auto
            .col
              p.mb-0 De acuerdo con lo anterior, Santiago tendría en realidad 1 año, 2 meses y 3 días, para ser ubicado en el rango de edad 6 (12 meses y 1 día a 18 meses y 0 días).
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3. Dimensiones de la aplicación
    p.mb-5(data-aos="fade-right") Las dimensiones corresponden a los principales dominios de desarrollo y permiten evaluar la progresión en cada uno de ellos, de acuerdo con las características descritas a continuación:
    .tarjeta.tarjeta--amarilla.mb-5(data-aos="fade-left")
      .p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Dimensión de Motricidad gruesa]
              p.mb-0 Durante los primeros años, esta área es uno de los mejores indicadores de maduración neurológica. Se incluyen aquí comportamientos que implican control de tono y postura, coordinación motriz de cabeza, tronco y miembros superiores e inferiores.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img6.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Dimensión de Motricidad Fino-adaptativa]
              p.mb-0 Se refiere más específicamente a la capacidad de dominar movimientos que implican mayor control voluntario y mayor destreza para su ejecución; implica gran coordinación intersensorial: ojo-mano, control para la solución de problemas que implican prensión fina, cálculo de distancias y seguimiento visual.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img7.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Dimensión de Audición Lenguaje]
              p.mb-0 Pretende establecer la evolución y perfeccionamiento del habla y el lenguaje; incluye específicamente indicadores relacionados con: orientación auditiva, intención comunicativa, vocalización y articulación de fonemas, formación de palabras, comprensión de vocabulario, uso de frases simples y complejas, nominación, comprensión de instrucciones, expresión espontánea.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img8.png', style="width: 450px" ,alt='').m-auto
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-lg-0
              p #[b Dimensión Personal Social]
              p.mb-0 Esta área incluye procesos relacionados con la iniciación y respuesta a la interacción social, dependencia e independencia, expresión de sentimientos y emociones, aprendizaje de pautas de comportamiento relacionadas con el autocuidado de la niña o el niño.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema2/img9.png', style="width: 450px" ,alt='').m-auto
    .row.mb-5
      .col-auto.bg-c11(data-aos="fade-down")
        .p-2
          .row.align-items-center
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema2/img12.svg', style="width: 5px" ,alt='').m-auto
            .col
              h3.mb-0 Punto de inicio PI
    p.mb-5(data-aos="fade-right") La administración de cada una de las áreas de la EAD-3, debe comenzarse en el primer ítem correspondiente al rango de edad en el cual se ubica el niño o la niña (edad cumplida en meses y días o edad corregida para el momento de la evaluación). De este modo, las primeras tareas evalúan aspectos que niños o niñas más pequeños a él o ella están adquiriendo, y las actividades siguientes valoran aspectos progresivamente más complejos.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .row.justify-content-center
          .col-lg-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img10.png', style="width: 377px" ,alt='').m-auto
          .col-md-7.col-lg.bg-c12
            .p-5
              p.mb-0.mt-4 El #[b PI] se refiere al cumplimiento de dos ítems consecutivos al iniciar la administración en el rango correspondiente a la edad del niño o niña.
    p.mb-5(data-aos="fade-right") Cuando esto no sucede y el niño o la niña no cumple uno de los dos primeros ítems del rango de edad en el que empieza la valoración, deberán observarse los ítems anteriores en orden inverso, hasta que el niño o la niña cumpla dos ítems en orden sucesivo.
    .row.mb-5(data-aos="fade-right")
      .col-auto.bg-c11
        .p-2
          .row.align-items-center
            .col-auto.pe-0
              figure
                img(src='@/assets/curso/tema2/img12.svg', style="width: 5px" ,alt='').m-auto
            .col
              h3.mb-0 Punto de cierre PC
    p.mb-5(data-aos="fade-down") Para no aplicar ítems innecesariamente y evitar el cansancio y la frustración del niño o la niña, se ha establecido un criterio de terminación de la aplicación de cada una de las áreas que facilita que el examinador detenga la administración de los ítems, cuando el niño o la niña ha alcanzado su techo en el área evaluada. Es importante tener en cuenta que no se debe detener la valoración si no se ha alcanzado notablemente el PC.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img11.png', style="width: 435px" ,alt='').m-auto
          .col-md-8.col-lg.bg-c12
            .p-5
              p.mb-0.mt-4 El #[b PC] indica el último ítem que se aplicó durante la administración de la EAD-3. Corresponde al momento de suspender la evaluación cuando el niño o niña no cumple dos ítems consecutivos en cada una de las áreas contempladas en la presente escala.
    .row.mb-5(data-aos="fade-left")
      .col-12.p-4.bg-c3
        .row.align-items-center
          .col-md-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img13.svg', style="width: 70px" ,alt='').m-auto
          .col
            p.mb-0 #[b Importante:] los criterios anteriores de inicio y suspensión deben aplicarse para todas y cada una de las áreas de la escala de forma independiente, es decir, que la evaluación de cada área siempre debe corresponder al primer ítem del rango de edad en el que se encuentra el niño o la niña y el PC debe alcanzarse en cada una de las cuatro áreas, sin importar dónde se haya establecido el PI o PC en las otras áreas.
    .row(data-aos="fade-right")
      .col-12.p-4.bg-c8
        .row.align-items-center
          .col-md-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img14.svg', style="width: 70px" ,alt='').m-auto
          .col
            p.mb-0 #[b Nota:] existen situaciones en las que puede no obtenerse punto de inicio,  como es el caso de las niñas y los niños del rango 1, que al no cumplir el primer o segundo ítem del rango 1, no existe la posibilidad de aplicar ítems inmediatamente anteriores, pues el rango 1 es el primero de la EAD-3, situación similar que puede ocurrir con el punto de cierre cuando se cumplen con todas las actividades de los ítems del último rango de evaluación que corresponde al 12, en este caso no se obtendrá PC y se terminará la aplicación al completar el ítem 36 de cada una de las dimensiones.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4. Establecimiento de Puntuación Directa
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La EAD-3 ofrece dos tipos de puntaje, puntuación directa (PD) y puntuación típica (PT), las cuales ofrecen información relevante y complementaria del nivel de desarrollo del niño o niña, en cada una de las áreas. La puntuación directa (PD) corresponde simplemente al total de ítems aprobados por el niño o niña y su valor es poco informativo sobre su nivel de desempeño. No se deben realizar interpretaciones acerca del nivel de desarrollo del niño o niña a partir de este puntaje, por este motivo es indispensable emplear algún tipo de puntuación trasformada como la puntuación típica.
    p(data-aos="fade-right") La anotación y puntuación de la EAD-3 es sencilla, se trata fundamentalmente de consignar en la hoja de respuestas, en cada uno de los ítems, si el repertorio en cuestión ha sido observado o no.

    p(data-aos="fade-left") En cada área y rango de edad, los ítems solo tienen dos opciones de puntuación: cumple (1), o no cumple (0) el criterio de puntuación. Este procedimiento deberá seguirse para todos y cada uno de los ítems, ningún ítem de los evaluados podrá quedar en blanco o vacío, ya que esto impedirá el cálculo de la puntuación final y, por tanto, el adecuado seguimiento del niño o la niña con relación a las evaluaciones posteriores.
    p.mb-5(data-aos="fade-right") #[b A continuación, se enuncian los pasos para el establecimiento de la puntuación directa (PD):]
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Sumatoria") Haga la sumatoria de todos los círculos marcados con 1 correspondientes a los ítems aplicados efectivamente al niño o la niña y cumplidos por área. Registre este valor en la parte inferior de la hoja de respuestas frente a: Número de ítems correctos.
          p.text-small(numero="2" titulo="Cálculo de puntuaciones") El cálculo de las puntuaciones directas debe hacerse teniendo en cuenta los ítems anteriores al PI de la evaluación del niño o la niña que no se han aplicado, porque se presume que, debido al nivel de desarrollo del niño o la niña, resultan sencillos. Este valor corresponde a los puntos posibles antes del PI y corresponden a las actividades de desarrollo que se esperan ya el niño o la niña han realizado cuando se estableció el PI y deben consignarse en la parte inferior de la hoja de respuestas frente a: Total acumulado al inicio.
          p.text-small(numero="3" titulo="Sumatoria total") Para el cálculo final de la PD, haga la sumatoria del total de ítems cumplidos y los puntos posibles antes del PI. Registre este valor en la parte inferior de la hoja de respuestas frente a: Total (PD).
      .col-lg-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img13.png', style="width: 535px" ,alt='').m-auto
    .row.justify-content-center
      .col-lg-10(data-aos="fade-down")
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 #[em Test] de valoración integral, del Ministerio de Salud
                  p.text-small.mb-0 Consulte el archivo Anexo - #[em Test] de valoración integral, del Ministerio de Salud, propuesto en el material complementario de este componente y familiarícese con el instrumento, hoja de respuestas, formato de registro de datos de valoración y generalidades del EAD-3.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5. Establecimiento de Puntuación Típica
    p.mb-5(data-aos="fade-right") La #[b PT] permite obtener una indicación de desarrollo del niño o niña en las áreas evaluadas en comparación con los niños y las niñas de la muestra de normalización, lo que quiere decir que permite una comparación del desempeño del niño o la niña con otros niños y niñas de su edad, es decir, obtener una interpretación normativa del resultado del nivel de desarrollo, por área evaluada del niño o niña.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .row.justify-content-center
          .col-lg-auto.px-0
            figure
              img(src='@/assets/curso/tema2/img14.png', style="width: 435px" ,alt='').m-auto
          .col-md-8.col-lg.bg-c12
            .p-5
              p.mb-0.mt-4 Una vez obtenidas las #[b PD], es necesario hallar las PT que les corresponden. Las PT de la EAD – 3 están expresadas en una escala t (Media de 50 y desviación estándar de 10).
    p.mb-5(data-aos="fade-right") #[b A continuación, se describe, en detalle, el procedimiento para obtener la PT y los pasos necesarios para completar la hoja de registro de puntuación:]
    .row.justify-content-center.mb-5
      .col-lg-10.bg-c13(data-aos="fade-left")
        .p-4
          LineaTiempoB.color-acento-contenido.mb-5(:datos="datosLineaTiempoB")
    p.mb-5 #[b La siguiente figura, presenta un ejemplo de aplicación:]
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          p.mb-0 #[b Figura 4]. Tabla de Valoración EAD-3.
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img15.png', style="width: 800px" ,alt='Imagen ejemplo de una tabla de valoración que contiene registro de una puntuación directa y marcación de resultados en hoja de respuesta donde los mismos se encuentran en la zona verde, evidenciando desarrollo, del niño o niña, acorde a su rango de edad.').m-auto
          figcaption.mt-3 Nota: tomado de del Manual técnico de la EAD-3.
    p(data-aos="fade-right") En este ejemplo, una vez registrada la puntuación directa y realizado el proceso de conversión en cada una de las tablas para las dimensiones correspondientes, se puede marcar los resultados en la hoja de respuesta, en este caso todos se encuentran en el color verde del semáforo, lo que corresponde a un desarrollo esperado para la edad.
    Separador
    #t_2_6
    .titulo-segundo.color-acento-contenido
      h2 2.6 Interpretación
    .row.bg-c14
      .col-12
        .px-5.pb-5
          .row.align-items-center.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p La EAD-3 está diseñada para valorar el desarrollo de los niños y las niñas en primera infancia en las dimensiones de motricidad gruesa, motricidad fino-adaptativa, audición y lenguaje y conducta personal social.
              p.mb-4 #[b Con ello, clasificar cada una de estas en tres categorías distintas así:]
              .row.mb-3
                .col-12.bg-c15
                  .py-2
                    p.text-center.mb-0 #[b Verde (Desarrollo esperado para la edad).]
              .row.mb-3
                .col-12.bg-c16
                  .py-2
                    p.text-center.mb-0 #[b Amarillo (Riesgo de problemas del desarrollo).]
              .row
                .col-12.bg-c17
                  .py-2
                    p.text-center.mb-0 #[b Rojo (Sospecha de problemas del desarrollo).]
            .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img16.png', style="width: 435px" ,alt='').m-auto
          .row.mb-5
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img17.png', style="width: 480px" ,alt='').m-auto
            .col-lg-7(data-aos="fade-left")
              p.mb-0 De esta forma, el resultado de la evaluación de cada dimensión puede ser verde, amarillo o rojo, independiente del resultado de las demás dimensiones. Para la valoración global del desarrollo infantil se recomienda tener en cuenta que, si un niño o una niña tiene las cuatro dimensiones mencionadas en color verde, su resultado es #[b Desarrollo esperado para la edad]; si el niño o la niña tiene al menos una dimensión en rojo (incluso si el resto de las dimensiones están en verde), su valoración global del desarrollo es de #[b Sospecha de problemas del desarrollo infantil], y si tiene al menos una dimensión en amarillo y ninguna en rojo (incluso si las demás están en verde), su valoración global será de #[b Riesgo de problemas del desarrollo].
          .row.bg-c18
            .col-12
              .px-5.pt-5
                .row.mb-5
                  .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
                    p.mb-5 #[b Adicional a la aplicación de la EAD-3, la valoración del desarrollo infantil requiere:]
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-check(style="color: #FFC202")
                        |
                        p.mb-0 La indagación de los factores de riesgo para el desarrollo.
                      li.d-flex
                        i.fas.fa-check(style="color: #FFC202")
                        |
                        p.mb-0 Los hitos del desarrollo alcanzados.
                      li.d-flex
                        i.fas.fa-check(style="color: #FFC202")
                        |
                        p.mb-0 La preocupación de los padres y/o cuidadores sobre el desarrollo del niño o la niña.
                      li.d-flex
                        i.fas.fa-check(style="color: #FFC202")
                        |
                        p.mb-0 La presencia de signos de alarma para la salud y el desarrollo.
                      li.d-flex
                        i.fas.fa-check(style="color: #FFC202")
                        |
                        p.mb-0 Los antecedentes familiares sobre problemas del desarrollo, del aprendizaje, del comportamiento o de enfermedades neurológicas o psiquiátricas.
                      li.d-flex
                        i.fas.fa-check(style="color: #FFC202")
                        |
                        p.mb-0 Los resultados del instrumento de valoración auditiva y comunicativa para niños de 0 a 12 años.
                  .col-lg-4(data-aos="fade-left")
                    figure
                      img(src='@/assets/curso/tema2/img18.png', style="width: 300px" ,alt='').m-auto
                .row.justify-content-center.mb-5.mb-lg-0
                  .col-lg-10
                    .row
                      .col-12.bg-c19(data-aos="fade-down")
                        .p-4
                          p.mb-0 En caso que un niño sea clasificado en cualquier dimensión en color amarillo o rojo, debe ser derivado a consulta por pediatría para valoración a profundidad, considerar nueva aplicación de la EAD-3, y para iniciar el proceso de diagnóstico y tratamiento del problema del desarrollo infantil.
    Separador
    #t_2_7
    .titulo-segundo.color-acento-contenido
      h2 2.7 Profundización en Ítems de aplicación por rangos de edad
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este apartado corresponde a la descripción de los 144 ítems de la EAD-3, disponible en el manual técnico de la Escala Abreviada de Desarrollo (EAD-3). El manual realiza una organización por dimensiones sin embargo para mejor la comprensión se hará la descripción por rango de edad.
    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-acento-contenido.p-3.mb-4(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img23.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Video: Salud y desarrollo infantil
                  p.text-small.mb-0 Explore, con atención, el video Salud y desarrollo infantil TAREA 3: Cómo aplicar la escala abreviada del desarrollo. En él se detalla la aplicación correcta del instrumento de valoración.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=7w6LdaFzSoU&t=359s" target="_blank")
                    span Ver video
                    i.fas.fa-file-download
        .tarjeta.color-acento-contenido.p-3.mb-4(data-aos="fade-left")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Rango 1: niñas y niños de los 0 días a 1 mes 0 días
                  p.text-small.mb-0 Consulte el archivo Rangos 1 al 4, para conocer las generalidades de los ítems de aplicación en los rangos de edad de 0 días a 9 meses.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Rango1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .tarjeta.color-acento-contenido.p-3.mb-4(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Rango 5: niñas y niños de 9 a 12 meses
                  p.text-small.mb-0 Consulte el archivo Rangos 5 al 8, para conocer las generalidades de los ítems de aplicación en los rangos de edad de 9 meses a 3 años.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Rango5.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
        .tarjeta.color-acento-contenido.p-3(data-aos="fade-left")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Rango 9: niñas y niños de 3 a 4 años
                  p.text-small.mb-0 Consulte el archivo Rangos 9 al 12, para conocer las generalidades de los ítems de aplicación en los rangos de edad de 3 años a 7 años.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Rango9.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Identificación rango de edad',
        texto:
          'Identifique el rango de edad en el que se encuentra el niño o la niña, de acuerdo con la edad cumplida en meses y días, o edad corregida para el momento de la evaluación, según corresponda.',
        icono: require('@/assets/curso/tema2/img16.svg'),
      },
      {
        titulo: 'Registro de las PD por área',
        texto:
          'Transcriba las PD por área (MG para Motricidad Gruesa; MF para Motricidad Fino adaptativa; AL para Audición Lenguaje y PS para Personal Social), en el espacio destinado a cada una de ellas en el rango de edad en el que se encuentra el niño o la niña.',
        icono: require('@/assets/curso/tema2/img17.svg'),
      },
      {
        titulo: 'Manejo y diligenciamiento del formato',
        texto:
          'En la fila superior de cada tabla aparecen los rangos de edad y en la primera columna de la izquierda, el valor de las PD. Frente a esta columna aparecen las PT correspondientes a cada una de las PD para cada uno de los rangos de edad. Usted debe encontrar en la columna de la izquierda la PD que recibió el niño o niña y deslizar el dedo hacia la derecha por esa fila hasta localizar la columna correspondiente al rango de edad en el que se encuentra el niño o niña (edad cumplida en meses y días o edad corregida para el momento de la evaluación), allí aparece la PT a la que equivale la PD obtenida.',
        icono: require('@/assets/curso/tema2/img18.svg'),
      },
      {
        titulo: 'Hoja de registro de puntuación',
        texto:
          'Para obtener y anotar las PT se hace uso de la hoja de registro de puntuación. Esta hoja permite unificar las puntuaciones transformadas de la EAD-3 en un solo documento, facilitando la interpretación de los resultados de niños y niñas, empleando información gráfica. Transcriba en el espacio indicado como PT en el rango de edad en el que se encuentra el niño o la niña el valor hallado. Repita este procedimiento para cada una de las áreas.',
        icono: require('@/assets/curso/tema2/img19.svg'),
      },
      {
        titulo: 'Puntuación típica resultante',
        texto:
          'Haga una X en el espacio en el que corresponde a la PT por área en la gráfica que se encuentra a la derecha, los colores de la gráfica indican el nivel de desarrollo del niño o la niña, así:<br><br>a) Desarrollo esperado para la edad (verde). N/A<br>b) Riesgo de problema en el desarrollo (amarillo).<br>c) Sospecha de problema en el desarrollo (rojo).',
        icono: require('@/assets/curso/tema2/img20.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
