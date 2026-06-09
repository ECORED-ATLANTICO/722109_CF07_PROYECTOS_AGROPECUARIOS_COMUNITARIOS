<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ruta de atención de riesgos

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema4/img_1.png', class="img-fluid")
      .col-12.col-lg-9
        p.mb-3(data-aos="zoom-in-right") La ruta de atención de riesgos comprende el conjunto de acciones, procedimientos y medidas orientadas a identificar, prevenir y atender situaciones que puedan afectar el desarrollo de los proyectos agropecuarios comunitarios y el bienestar de las comunidades. Su aplicación permite actuar de manera organizada frente a posibles amenazas, fortaleciendo la protección de las personas, los recursos y el territorio.
        .tarjeta.tarjeta--fondo-img-3.py-4.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          p.mb-0 Esta unidad aborda los indicadores y tipos de riesgos, así como los protocolos de atención y seguridad necesarios para prevenir situaciones de peligro y responder de manera adecuada ante emergencias o problemáticas presentes en los contextos comunitarios y rurales.

    Separador

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.1 Indicadores de riesgo
    .mb-0 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los indicadores de riesgo son herramientas utilizadas para identificar, evaluar y monitorear posibles amenazas o situaciones que puedan afectar el desarrollo de un proyecto comunitario. Estos indicadores permiten analizar condiciones del entorno, detectar señales de alerta y tomar decisiones oportunas para prevenir, controlar o mitigar riesgos que puedan comprometer la seguridad de las personas, los recursos, las actividades productivas o el cumplimiento de los objetivos del proyecto.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema4/img_3.svg', class="img-fluid img-circulo d-none d-lg-block")
      .col-12.col-lg-11.mb-3.mb-lg-0
        p.mb-0(data-aos="zoom-in-right") En los proyectos agropecuarios comunitarios, los indicadores de riesgo cumplen una función fundamental dentro de los procesos de planificación, seguimiento y evaluación, ya que facilitan el análisis de factores que pueden generar dificultades en el territorio. Su aplicación contribuye a fortalecer la capacidad de respuesta de las comunidades y mejorar la sostenibilidad de las iniciativas rurales.
    
    p.mb-4(data-aos="zoom-in-right") En contextos rurales, los indicadores de riesgo pueden estar asociados a factores sociales, ambientales, económicos, productivos o institucionales. Por ejemplo, fenómenos climáticos extremos, conflictos comunitarios, disminución de recursos financieros, problemas sanitarios en cultivos o animales, dificultades de acceso a mercados o limitaciones en la gestión institucional.
    p.mb-4(data-aos="zoom-in-right") Entre los indicadores de riesgo más utilizados se encuentran:

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4").p-2.rounded-3
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--15.mb-4
          p.mb-3.text-center #[strong Frecuencia de incidentes o accidentes:] permite identificar situaciones recurrentes que afectan la seguridad de las personas, las actividades productivas o la infraestructura del proyecto.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--16.mb-4 
          p.mb-3.text-center #[strong Nivel de participación comunitaria:] evalúa el grado de involucramiento de la comunidad en las actividades, procesos de decisión y acciones del proyecto. Una baja participación puede representar riesgos para la sostenibilidad y apropiación comunitaria.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--17.mb-4
          p.mb-3.text-center #[strong Cumplimiento del cronograma del proyecto:] analiza el avance de las actividades programadas y permite detectar retrasos o dificultades que puedan afectar el cumplimiento de las metas establecidas.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--18.mb-4 
          p.mb-3.text-center #[strong Disponibilidad de recursos financieros:] verifica la capacidad económica para ejecutar las actividades previstas, cubrir costos y garantizar la continuidad del proyecto.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--19.mb-4 
          p.mb-3.text-center #[strong Condiciones climáticas y ambientales:] monitorea factores como lluvias, sequías, temperaturas extremas, erosión, inundaciones o afectaciones ambientales que puedan impactar los sistemas productivos y la seguridad alimentaria.

    Separador

    #t_4_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.2 Tipos de riesgos
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema4/img_9.png', class="img-fluid")
      .col-12.col-lg-9
        p.mb-3(data-aos="zoom-in-right") Los proyectos agropecuarios comunitarios pueden enfrentar diferentes tipos de riesgos que afectan el desarrollo de las actividades, el cumplimiento de los objetivos y el bienestar de las comunidades. Estos riesgos pueden originarse por factores sociales, ambientales, económicos, técnicos o institucionales presentes en el territorio.
        p.mb-3(data-aos="zoom-in-right") La identificación y clasificación de los riesgos permite comprender sus posibles causas, analizar sus impactos y establecer estrategias de prevención, mitigación y respuesta. Una adecuada gestión de riesgos fortalece la capacidad organizativa de las comunidades y contribuye a garantizar la sostenibilidad de los proyectos rurales.
        p.mb-0(data-aos="zoom-in-right") Entre los principales tipos de riesgos se encuentran:

    .bloque-slider(data-aos="zoom-in-left")
      .bloque-slider__contenido
        SlyderA(tipo="a").tarjeta.tarjeta--blanca.p-4.mb-0
          .row.justify-content-center.align-items-center.mb-0
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-4 Riesgos sociales
              p.mb-3 Los riesgos sociales afectan la convivencia, la participación y las relaciones comunitarias debido a conflictos, baja participación, problemas de liderazgo o comunicación. Estos riesgos pueden generar desorganización y retrasos, por lo que es necesario fortalecer el diálogo y la organización comunitaria.
          .row.justify-content-center.align-items-center.mb-0
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-4 Riesgos ambientales
              p.mb-3 Los riesgos ambientales incluyen fenómenos naturales y situaciones que afectan los recursos naturales, como sequías, inundaciones y contaminación. Estos riesgos impactan la producción agropecuaria y la seguridad alimentaria, por lo que requieren prácticas sostenibles y medidas de prevención ambiental.
          .row.justify-content-center.align-items-center.mb-0
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-4 Riesgos económicos
              p.mb-3 Los riesgos económicos afectan la sostenibilidad de los proyectos debido a problemas financieros, aumento de costos o dificultades de comercialización. Para reducirlos, es fundamental realizar planificación financiera, gestionar adecuadamente los recursos y fortalecer la diversificación productiva comunitaria.
          .row.justify-content-center.align-items-center.mb-0
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-4 Riesgos técnicos
              p.mb-3 Afectan la ejecución de proyectos por fallas en tecnologías, infraestructura o prácticas agropecuarias. Para prevenirlos, es necesario fortalecer la capacitación, la asistencia técnica y las capacidades comunitarias en los procesos productivos y organizativos.
          .row.justify-content-center.align-items-center.mb-0
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-4 Riesgos institucionales
              p.mb-3 Se relacionan con factores administrativos, normativos o de gestión que pueden afectar el desarrollo de los proyectos. Entre ellos se encuentran cambios en políticas públicas, falta de apoyo institucional, incumplimiento de acuerdos o limitada articulación entre entidades y organizaciones.
      .bloque-slider__imagen.me-5
        figure
          img(src='@/assets/curso/tema4/img_10.png', class="img-fluid").pb-4.pe-4

    Separador

    #t_4_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.3 Protocolo de atención
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema4/img_11.png')
      .bloque-texto-t__texto.col-12.col-md-10.col-lg-10.mb-0
        p.mb-0 El protocolo de atención de riesgos es un conjunto de procedimientos, acciones y medidas organizadas que permiten responder de manera adecuada frente a situaciones que puedan afectar el desarrollo de un proyecto agropecuario comunitario, la seguridad de las personas o los recursos del territorio. Su finalidad es orientar la actuación de los participantes ante posibles emergencias, amenazas o situaciones de riesgo, garantizando respuestas oportunas, coordinadas y efectivas. En los proyectos comunitarios, los protocolos de atención son herramientas fundamentales para prevenir daños, reducir impactos negativos y fortalecer la capacidad de respuesta de las comunidades frente a diferentes tipos de riesgos sociales, ambientales, económicos o técnicos. Además, contribuyen a proteger la integridad de las personas y asegurar la continuidad de las actividades del proyecto.

    p.mb-4(data-aos="zoom-in-right") Un protocolo de atención generalmente incluye las siguientes etapas:
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 2.
      |    Etapas del protocolo de atención de riesgos
    figure(data-aos="flip-left").mb-0
      figcaption Nota. SENA, (2026).
      img(src='@/assets/curso/tema4/img_12.svg', class="img-fluid d-none d-lg-block", alt="La figura describe las etapas del protocolo deAtención de riesgos, la cual está compuestapor cinco módulos conectados:  identificación del riesgo, la evaluación del riesgo, la notificación, la implementación de medidas de respuesta y por último el seguimiento y evaluación. La secuencia indica el proceso continuo de reconocer riesgos, analizarlos, comunicar la situación, aplicar medidas de control y realizar seguimiento para mejorar la gestión del riesgo.").mb-3
      img(src='@/assets/curso/tema4/img_13.svg', class="img-fluid d-block d-lg-none", alt="La figura describe las etapas del protocolo deAtención de riesgos, la cual está compuestapor cinco módulos conectados:  identificación del riesgo, la evaluación del riesgo, la notificación, la implementación de medidas de respuesta y por último el seguimiento y evaluación. La secuencia indica el proceso continuo de reconocer riesgos, analizarlos, comunicar la situación, aplicar medidas de control y realizar seguimiento para mejorar la gestión del riesgo.").mb-3
      figcaption Nota. SENA, (2026).

    Separador

    #t_4_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 4.4 Protocolos de seguridad
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") Los protocolos de seguridad son un conjunto de normas, procedimientos y medidas preventivas diseñadas para proteger la integridad física de las personas, así como los bienes, herramientas, equipos y recursos utilizados en los proyectos agropecuarios comunitarios. Su propósito es prevenir accidentes, reducir riesgos y garantizar condiciones seguras durante el desarrollo de las actividades comunitarias y productivas.
        p.mb-0(data-aos="zoom-in-right") En los contextos rurales y agropecuarios, las actividades pueden implicar exposición a diferentes factores de riesgo relacionados con el manejo de herramientas, maquinaria, productos químicos, condiciones climáticas y trabajo en campo. Por esta razón, la implementación de protocolos de seguridad es fundamental para promover ambientes de trabajo seguros y fortalecer la cultura de prevención dentro de la comunidad.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema4/img_14.png', class="img-fluid")

    .tarjeta.tarjeta--fondo-img-1.py-4.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
      p.mb-0.mx-4 Los protocolos de seguridad permiten establecer procedimientos claros sobre la forma adecuada de actuar antes, durante y después de una situación de riesgo o emergencia. Además, contribuyen a mejorar la organización, la capacidad de respuesta y la protección de las personas involucradas en el proyecto.

    p.mb-5(data-aos="zoom-in-right") Entre los principales aspectos que pueden incluir los protocolos de seguridad se encuentran:

    .row.justify-content-center.align-items-start.mb-0
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema4/img_15.png', class="img-fluid")
      .col-12.col-lg-9.mb-0(data-aos="zoom-in-right")
        AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-sistema-h")
          div(titulo="Uso obligatorio de EPP")
            p.mb-0 Comprende la utilización de equipos como guantes, botas, gafas, tapabocas, cascos, protectores auditivos y ropa adecuada según el tipo de actividad desarrollada. Estos elementos ayudan a prevenir lesiones y proteger la salud de los trabajadores y participantes.
          div(titulo="Normas de seguridad")
            p.mb-0 Las normas de seguridad en el manejo de herramientas y maquinaria Incluyen procedimientos para el uso correcto, mantenimiento y almacenamiento de herramientas, equipos y maquinaria agropecuaria. Estas normas buscan prevenir accidentes y garantizar un manejo seguro de los recursos tecnológicos.
          div(titulo="Procedimientos de evacuación")
            p.mb-0 En el caso de emergencias establecen las acciones que deben seguirse ante situaciones de peligro como incendios, inundaciones, deslizamientos, accidentes o emergencias naturales. Estos procedimientos permiten actuar de manera rápida y organizada para proteger la vida de las personas.
          div(titulo="Planes de contingencia")
            p.mb-0 Ante desastres, son las estrategias y acciones preparadas para responder frente a fenómenos naturales que puedan afectar a la comunidad o al proyecto. Estos incluyen medidas de prevención, atención y recuperación ante eventos como sequías, tormentas, inundaciones o movimientos de tierra.
          div(titulo="Reporte de incidentes o accidentes")
            p.mb-0 Consiste en documentar situaciones de riesgo, accidentes o eventos ocurridos durante las actividades del proyecto. El registro permite analizar causas, implementar acciones correctivas y fortalecer las medidas de prevención.

    p.mb-4(data-aos="zoom-in-right") Todo el contenido relacionado con la ruta de atención de riesgos, los protocolos de atención y los protocolos de seguridad tiene relación directa con el Sistema de Gestión de Seguridad y Salud en el Trabajo, especialmente en lo relacionado con la prevención de riesgos, promoción de condiciones seguras de trabajo y atención de emergencias.
    p.mb-5(data-aos="zoom-in-right") En proyectos agropecuarios comunitarios, estos temas se articulan con el SG-SST porque buscan:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-6.mb-3.mb-lg-0
        .tarjeta.color-primario-5.py-4.p-5.rounded-3.mb-0.h-100(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-9.order-2.order-lg-1.mb-0
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Identificar peligros y evaluar riesgos presentes en las actividades comunitarias y productivas.
                li
                  i.lista-ul__vineta 
                  span Implementar medidas de prevención y control.
                li
                  i.lista-ul__vineta 
                  span Proteger la salud e integridad física de las personas.
            .col-6.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema4/img_16.svg', class="img-fluid")
      .col-12.col-lg-6.mb-3.mb-lg-0
        .tarjeta.color-primario-5.py-4.p-5.rounded-3.mb-0.h-100(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-9.order-2.order-lg-1.mb-0
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Establecer protocolos de actuación ante emergencias.
                li
                  i.lista-ul__vineta 
                  span Promover ambientes de trabajo seguros.
                li
                  i.lista-ul__vineta 
                  span Registrar y reportar incidentes o accidentes.
                li
                  i.lista-ul__vineta 
                  span Fortalecer la cultura de prevención y autocuidado.
            .col-6.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema4/img_17.svg', class="img-fluid")

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 3.
      |  Ejemplo relación de tema con el SG-SST
    .tabla-a.mb-0(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-auto Tema desarrollado
            th.col-auto.col-lg-auto Relación con el SG-SST
        tbody
          tr
            td.text-start Indicadores de riesgo
            td.text-start Permiten identificar y monitorear peligros y condiciones inseguras.
          tr
            td.text-start Tipos de riesgos
            td.text-start Corresponden a riesgos laborales, ambientales y comunitarios que deben gestionarse.
          tr
            td.text-start Protocolo de atención
            td.text-start Hace parte de los procedimientos de respuesta ante incidentes y emergencias.
          tr
            td.text-start Protocolos de seguridad
            td.text-start Incluyen normas preventivas y medidas de protección para los trabajadores y la comunidad.
          tr
            td.text-start Uso de elementos de protección personal
            td.text-start Es una medida básica de control en seguridad y salud en el trabajo.
          tr
            td.text-start Planes de contingencia
            td.text-start Forman parte de la preparación y respuesta ante emergencias del SG-SST.
</template>

<script>
export default {
  name: 'Tema4',
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
