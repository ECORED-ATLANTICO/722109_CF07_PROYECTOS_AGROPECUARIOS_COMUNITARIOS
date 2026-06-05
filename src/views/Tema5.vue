<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gestión de la información

    .bloque-texto-t.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema5/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0  La gestión de la información es un proceso fundamental en los proyectos agropecuarios comunitarios, ya que permite organizar, registrar, analizar y comunicar datos relacionados con las actividades, recursos y resultados del proyecto. Una adecuada gestión de la información facilita la toma de decisiones, el seguimiento de procesos y la evaluación de los avances alcanzados.

    .row.justify-content-center.align-items-center.mb-0
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_2.svg', class="img-fluid img-circulo d-none d-lg-block")
      .col-12.col-lg-9.mb-3.mb-lg-0
        p.mb-0(data-aos="zoom-in-right") Esta unidad aborda el concepto de gestión de la información, los métodos de diligenciamiento de documentos, los registros productivos, las técnicas de elaboración de informes y los diferentes tipos de reporte utilizados en los procesos comunitarios y agropecuarios, fortaleciendo las capacidades administrativas y organizativas de los aprendices.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Concepto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        p.mb-4(data-aos="zoom-in-right") La gestión de la información es el proceso mediante el cual se recopilan, organizan, registran, analizan, almacenan y utilizan datos relacionados con un proyecto o una actividad, con el propósito de facilitar la toma de decisiones, mejorar la planificación y fortalecer el seguimiento de los procesos desarrollados. Este proceso permite transformar los datos en información útil para orientar acciones y evaluar resultados dentro de los proyectos comunitarios y agropecuarios.
        .tarjeta.tarjeta--fondo-img-1.py-4.p-5.rounded-3.mb-0(data-aos="zoom-in-right")
          p.mb-0 En los proyectos agropecuarios comunitarios, la gestión de la información cumple un papel fundamental porque facilita el control de actividades, el registro de avances, la organización documental y la evaluación de resultados productivos, sociales y administrativos. Además, contribuye a garantizar la transparencia, la participación y la adecuada administración de los recursos utilizados en las iniciativas comunitarias.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_3.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_4.svg', class="img-fluid img-circulo d-none d-lg-block")
      .col-12.col-lg-11.mb-3.mb-lg-0
        p.mb-3(data-aos="zoom-in-right") La gestión de la información permite documentar procesos, conservar registros y generar evidencia sobre las acciones ejecutadas en el territorio. Esto facilita el seguimiento de las actividades, la identificación de dificultades y la formulación de estrategias de mejora para fortalecer la sostenibilidad de los proyectos.
        p.mb-0(data-aos="zoom-in-right") Entre las principales funciones de la gestión de la información se encuentran:

    .tarjeta.tarjeta--fondo-img-2.py-5.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
      .tarjeta.tarjeta--blanca.py-5.p-4.mb-0
        LineaTiempoC.color-acento-botones(text-small).mb-0
          .row.justify-content-center.align-items-center(titulo="Recopilación de datos")
            .col-10.mb-0
              p.mb-0 consiste en obtener información relacionada con actividades productivas, recursos, participación comunitaria, resultados y demás aspectos del proyecto.
          .row.justify-content-center.align-items-center(titulo="Organización y almacenamiento")
            .col-10.mb-0
              p.mb-0 implica clasificar y conservar la información en formatos físicos o digitales que permitan su consulta y actualización de manera ordenada.
          .row.justify-content-center.align-items-center(titulo="Análisis de información")
            .col-10.mb-0
              p.mb-0 permite interpretar los datos recopilados para identificar avances, problemáticas, necesidades y oportunidades de mejora en el desarrollo del proyecto.
          .row.justify-content-center.align-items-center(titulo="Comunicación y divulgación")
            .col-10.mb-0
              p.mb-0 facilita compartir información con la comunidad, organizaciones e instituciones mediante informes, reportes y otros mecanismos de socialización.
          .row.justify-content-center.align-items-center(titulo="Apoyo a la toma de decisiones")
            .col-10.mb-0
              p.mb-0 la información organizada y actualizada permite tomar decisiones más acertadas y oportunas para el desarrollo de las actividades comunitarias y productivas.

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.2 Métodos de diligenciamiento de documentos
    .mb-0 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diligenciamiento adecuado de documentos es una actividad fundamental en la gestión de proyectos agropecuarios comunitarios, ya que permite mantener registros claros, organizados y confiables sobre las actividades desarrolladas, los recursos utilizados y los resultados obtenidos. La correcta elaboración y conservación de documentos facilita el seguimiento de los procesos, fortalece la transparencia y contribuye a la toma de decisiones dentro de la comunidad y las organizaciones. Los documentos constituyen evidencias importantes para demostrar el cumplimiento de actividades, la participación comunitaria y la ejecución de recursos. Además, son herramientas necesarias para procesos de evaluación, supervisión, control administrativo y auditoría por parte de entidades, organizaciones o instituciones vinculadas al proyecto.

    p.mb-4(data-aos="zoom-in-right") El diligenciamiento de documentos debe realizarse de manera organizada, clara y precisa, evitando errores, omisiones o información incompleta. También es importante garantizar que los registros sean oportunos, legibles y accesibles para facilitar su consulta y verificación.
    p.mb-5(data-aos="zoom-in-right") Entre los métodos de diligenciamiento de documentos más utilizados se encuentran:

    .row.justify-content-center.align-items-start.mb-0
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema5/img_6.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0(data-aos="flip-left")
        TabsA.color-secundario.mb-3.dos
          .tarjeta.color-secundario-10.p-5(titulo="Formatos de registro de actividades")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Son documentos utilizados para registrar las acciones desarrolladas durante la ejecución del proyecto, incluyendo fechas, responsables, actividades realizadas y resultados obtenidos. Estos formatos permiten hacer seguimiento al avance de las actividades programadas.
          .tarjeta.color-secundario-10.p-5(titulo="Listas de asistencia")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Se emplean para registrar la participación de las personas en reuniones, capacitaciones, talleres, jornadas comunitarias y otras actividades. Las listas de asistencia permiten evidenciar la participación comunitaria y verificar la presencia de los asistentes.
          .tarjeta.color-secundario-10.p-5(titulo="Actas de reunión")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Corresponden a documentos donde se registran los temas tratados, acuerdos, decisiones y compromisos establecidos durante reuniones o espacios de concertación. Las actas facilitan el seguimiento de compromisos y fortalecen la organización comunitaria.
          .tarjeta.color-secundario-10.p-5(titulo="Formularios de seguimiento")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Son instrumentos utilizados para recopilar información relacionada con el cumplimiento de metas, indicadores, actividades y resultados del proyecto. Estos formularios facilitan el monitoreo y la evaluación de los procesos desarrollados.
          .tarjeta.color-secundario-10.p-5(titulo="Registros fotográficos")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Son imágenes o evidencias visuales que documentan actividades, avances, procesos productivos y resultados del proyecto. Los registros fotográficos complementan la información escrita y sirven como soporte para informes y procesos de verificación.

    Separador

    #t_5_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.3 Registros productivos
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") Los registros productivos son documentos, formatos o herramientas utilizadas para llevar el control y seguimiento de las actividades relacionadas con la producción agrícola, pecuaria, forestal o agroindustrial dentro de un proyecto comunitario. Estos registros permiten recopilar información sobre los procesos productivos, el uso de recursos, los resultados obtenidos y las actividades desarrolladas en las unidades productivas.
        .tarjeta.tarjeta--fondo-img-1.py-4.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          p.mb-0 En los proyectos agropecuarios comunitarios, los registros productivos son fundamentales porque facilitan la organización de la información, el análisis de resultados y la toma de decisiones técnicas, administrativas y económicas. Además, permiten evaluar el desempeño de las actividades productivas y fortalecer la planificación de futuras acciones en el territorio.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_7.png', class="img-fluid")

    p.mb-5(data-aos="zoom-in-right") Entre los principales registros productivos se encuentran:

    .row.justify-content-center.mb-0
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="100" tabindex="0")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_8.png", class="img-fluid")
          .crd_hover_txt--body
            h4 Registro de siembras y cosechas
            p Permite documentar información relacionada con fechas de siembra, áreas cultivadas, variedades utilizadas, cantidad de producción obtenida y periodos de cosecha. Este registro facilita la planificación de ciclos productivos y el análisis del rendimiento agrícola.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="200" tabindex="1")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_9.png", class="img-fluid")
          .crd_hover_txt--body
            h4 Control de insumos utilizados
            p Comprende el registro de fertilizantes, semillas, alimentos para animales, medicamentos veterinarios, herramientas y otros recursos utilizados durante el proceso productivo. Este control permite evaluar costos, consumo de insumos y eficiencia en el manejo de recursos.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="300" tabindex="3")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_10.png", class="img-fluid")
          .crd_hover_txt--body
            h4 Registro de producción obtenida
            p Se trata de documentar las cantidades producidas en las actividades agrícolas, pecuarias o agroindustriales. Este registro facilita el análisis de productividad y permite comparar resultados entre diferentes periodos o sistemas de producción.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="400" tabindex="4")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img_11.png", class="img-fluid")
          .crd_hover_txt--body
            h4 Control de ventas o comercialización
            p Permite registrar información relacionada con la venta de productos, ingresos obtenidos, clientes, precios de comercialización y canales de distribución. Este control contribuye al seguimiento financiero y a la evaluación de la rentabilidad del proyecto.

    Separador

    #t_5_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.4 Técnicas de elaboración de informes
    .mb-0 

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_12.png', class="img-fluid")
      .col-12.col-lg-9
        p.mb-3(data-aos="zoom-in-right") La elaboración de informes es una actividad fundamental dentro de los proyectos agropecuarios comunitarios, ya que permite comunicar de manera organizada los avances, resultados, dificultades y logros alcanzados durante el desarrollo de las actividades. Los informes constituyen herramientas de seguimiento, control y evaluación que facilitan la toma de decisiones y fortalecen la transparencia en la gestión de los proyectos.
        p.mb-0(data-aos="zoom-in-right") A través de los informes se puede presentar información técnica, administrativa, financiera y comunitaria relacionada con la ejecución del proyecto, permitiendo informar a comunidades, organizaciones, entidades financiadoras e instituciones sobre el estado y cumplimiento de las acciones desarrolladas.

    p.mb-4(data-aos="zoom-in-right") La elaboración de informes requiere aplicar técnicas que permitan organizar la información de manera clara, precisa y comprensible. Un informe bien estructurado facilita la interpretación de los datos y mejora la comunicación entre los diferentes actores involucrados en el proyecto.
    p.mb-5(data-aos="zoom-in-right") Entre las principales técnicas de elaboración de informes se encuentran:

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4").p-2.rounded-3
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--20.mb-4
          p.mb-3.text-center #[strong Organización clara de la información:] consiste en estructurar el contenido de manera ordenada, utilizando títulos, subtítulos, introducción, desarrollo y conclusiones. La información debe presentarse de forma lógica para facilitar su comprensión y análisis.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--21.mb-4
          p.mb-3.text-center #[strong Uso de tablas y gráficos:] permite representar datos, resultados e indicadores de manera visual y resumida. Las tablas, gráficos y diagramas facilitan la interpretación de la información y ayudan a comparar resultados o identificar tendencias dentro del proyecto.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--22.mb-4
          p.mb-3.text-center #[strong Redacción objetiva y precisa:] implica utilizar un lenguaje claro, formal y comprensible, evitando opiniones o información innecesaria. La redacción debe centrarse en hechos verificables y en la descripción concreta de las actividades y resultados obtenidos.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--23.mb-4
          p.mb-3.text-center #[strong Presentación de evidencias documentales:] radica en incluir soportes que respalden la información presentada, como fotografías, listas de asistencia, actas, registros productivos, formularios y otros documentos relacionados con el proyecto.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--24.mb-4
          p.mb-3.text-center #[strong Análisis de resultados y recomendaciones:] corresponde a la interpretación de la información recopilada para identificar logros, dificultades, fortalezas y oportunidades de mejora. Además, permite formular recomendaciones que contribuyan al fortalecimiento y continuidad del proyecto.

   
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10 
        .bloque-enlace-1
          .bloque-enlace-1__contenido
                p.mb-0 Los informes pueden elaborarse con diferentes propósitos, como seguimiento de actividades, rendición de cuentas, evaluación de resultados, control financiero o presentación de avances ante entidades e instituciones. Por esta razón, es importante adaptar el contenido y el lenguaje según el público al que se dirige el informe.
          
    Separador

    #t_5_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.5 Tipos de reporte
    .mb-0 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la gestión de proyectos agropecuarios comunitarios se elaboran diferentes tipos de reportes con el propósito de registrar, comunicar y evaluar la información relacionada con las actividades, recursos, avances y resultados obtenidos durante la ejecución del proyecto. Los reportes son herramientas fundamentales para el seguimiento, control y toma de decisiones, ya que permiten presentar información organizada y verificable a las comunidades, organizaciones e instituciones involucradas.

    p.mb-4(data-aos="zoom-in-right") La elaboración de reportes facilita la transparencia en el manejo de los recursos, fortalece la rendición de cuentas y contribuye al mejoramiento continuo de los procesos comunitarios y productivos. Además, los reportes permiten identificar dificultades, analizar resultados y formular acciones de mejora para garantizar la sostenibilidad de las iniciativas desarrolladas en el territorio.
    p.mb-5(data-aos="zoom-in-right") Dependiendo de la finalidad y del tipo de información que se desea presentar, existen diferentes tipos de reportes, entre los cuales se destacan:

    .row.justify-content-center.align-items-stretch.mb-0
      .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema5/img_19.svg', class="img-fluid") 
          h5.mb-1 Reporte de avance
          p.mb-0 Presenta el estado de ejecución del proyecto mediante actividades realizadas, porcentaje de avance, logros, participación comunitaria y tareas pendientes. Facilita el seguimiento, identifica dificultades y apoya la toma de decisiones para cumplir metas y cronogramas establecidos.
      .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema5/img_20.svg', class="img-fluid") 
          h5.mb-1 Reporte financiero
          p.mb-0 Describe el manejo de los recursos económicos del proyecto, incluyendo ingresos, gastos e inversiones. Garantiza transparencia, control administrativo y adecuada ejecución presupuestal, facilitando la rendición de cuentas ante comunidades, organizaciones financiadoras y entidades de control.
      .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema5/img_21.svg', class="img-fluid") 
          h5.mb-1 Reporte técnico
          p.mb-0 Contiene información sobre resultados productivos, asistencia técnica, tecnologías utilizadas e indicadores del proyecto. Permite evaluar el desempeño de las actividades, identificar dificultades y fortalecer los procesos productivos y comunitarios desarrollados en el territorio.
      .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema5/img_22.svg', class="img-fluid") 
          h5.mb-1 Reporte final
          p.mb-0 Resume los resultados, logros, dificultades y aprendizajes obtenidos durante el proyecto. Permite evaluar el cumplimiento de objetivos e incluye conclusiones, recomendaciones, evidencias y propuestas para fortalecer o dar continuidad a las acciones implementadas.
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
