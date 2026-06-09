<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo y la gestión ambiental

    .bloque-texto-g.color-acento-contenido-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el desarrollo de proyectos agropecuarios comunitarios, la seguridad y salud en el trabajo, junto con la gestión ambiental, constituyen pilares fundamentales para garantizar la sostenibilidad de las actividades productivas y el bienestar de las personas involucradas. Estos dos componentes permiten no solo prevenir accidentes, enfermedades laborales y riesgos ocupacionales, sino también promover prácticas responsables frente al uso de los recursos naturales y la protección del entorno.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") La seguridad y salud en el trabajo orienta a los trabajadores y comunidades en la adopción de medidas preventivas, el uso adecuado de elementos de protección personal, la implementación de pausas activas y el cumplimiento de la normatividad vigente, con el fin de generar ambientes laborales seguros y saludables.
        p.mb-0(data-aos="zoom-in-right") Por su parte, la gestión ambiental se enfoca en la planificación y aplicación de estrategias que minimicen los impactos negativos sobre el medio ambiente, promoviendo el manejo adecuado del agua, los residuos y las emisiones, así como el fortalecimiento de prácticas sostenibles que contribuyan a la conservación de los ecosistemas.
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_2.png', class="img-fluid")(data-aos="zoom-in-right") 

    .row.justify-content-center.align-items-start.mb-0
      .col-12.col-lg-10.mb-0(data-aos="flip-left")
        .cajon.color-secundario.p-4(data-aos="zoom-in-right")
          p.mb-0 En conjunto, estos dos enfoques fortalecen la cultura de prevención, responsabilidad y sostenibilidad en los proyectos agropecuarios, asegurando su viabilidad en el tiempo y su impacto positivo en las comunidades rurales.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Seguridad y salud en el trabajo
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") La seguridad y salud en el trabajo en actividades agropecuarias y comunitarias tiene como finalidad prevenir accidentes, enfermedades laborales y promover condiciones dignas y seguras para el desarrollo de las actividades productivas. En este contexto, se integran prácticas de autocuidado, prevención de riesgos y cumplimiento normativo.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 4.
      |     Prácticas de autocuidado
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-auto Tema
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-4 Principales prácticas o características
            th.col-auto.col-lg-3 Beneficios
        tbody
          tr
            td.text-start Pausas activas
            td.text-start Son descansos cortos realizados durante la jornada laboral para disminuir la fatiga física y mental.
            td.text-start 
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Ejercicios de estiramiento
                li
                  i.lista-ul__vineta 
                  span Movilidad articular
                li
                  i.lista-ul__vineta 
                  span Duración de 5 a 10 minutos
                li
                  i.lista-ul__vineta 
                  span Relajación muscular
            td.text-start 
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Mejora la circulación
                li
                  i.lista-ul__vineta 
                  span Reduce el estrés
                li
                  i.lista-ul__vineta 
                  span Previene lesiones osteomusculares
          tr
            td.text-start Higiene postural
            td.text-start Conjunto de prácticas orientadas a mantener posturas adecuadas durante las actividades laborales.
            td.text-start 
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Mantener la espalda recta.
                li
                  i.lista-ul__vineta 
                  span Flexionar rodillas al cargar objetos
                li
                  i.lista-ul__vineta 
                  span Cambiar de postura frecuentemente.
                li
                  i.lista-ul__vineta 
                  span Usar herramientas adecuadas.
            td.text-start 
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Reduce sobrecargas físicas.
                li
                  i.lista-ul__vineta 
                  span Previene dolores y lesiones musculares.
                li
                  i.lista-ul__vineta 
                  span Mejora el bienestar laboral.
          tr
            td.text-start Elementos de protección personal (EPP)
            td.text-start Dispositivos y prendas utilizados para proteger al trabajador frente a riesgos laborales.
            td.text-start 
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Guantes
                li
                  i.lista-ul__vineta 
                  span Botas de seguridad
                li
                  i.lista-ul__vineta 
                  span Gafas protectoras
                li
                  i.lista-ul__vineta 
                  span Tapabocas o mascarillas
                li
                  i.lista-ul__vineta 
                  span Protección solar
            td.text-start 
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Disminuye accidentes laborales.
                li
                  i.lista-ul__vineta 
                  span Reduce exposición a riesgos físicos, químicos y biológicos.
                li
                  i.lista-ul__vineta 
                  span Protege la salud del trabajador.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema6/img_3.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Normativa en seguridad y salud en el trabajo

    p.mb-4(data-aos="zoom-in-right") En Colombia, la seguridad y salud en el trabajo está regulada principalmente por:

    .row.justify-content-center.align-items-stretch.mb-0
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_4.svg', class="img-fluid") 
          p.mb-0.ps-3 Decreto 1072 de 2015 (Sistema de Gestión de Seguridad y Salud en el Trabajo). 
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_5.svg', class="img-fluid") 
          p.mb-0.ps-3 Resolución 0312 de 2019 (Estándares mínimos del SG-SST). 
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_6.svg', class="img-fluid") 
          p.mb-0.ps-3 Normas técnicas sectoriales aplicables a actividades agropecuarias. 

    p.mb-0(data-aos="zoom-in-right") Estas normas establecen responsabilidades del empleador, del trabajador y los mecanismos de prevención y control de riesgos.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Gestión ambiental
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") Los proyectos agropecuarios comunitarios requieren la implementación de acciones orientadas al uso responsable de los recursos naturales y al fortalecimiento de prácticas sostenibles en el territorio. La protección del suelo, el agua, la biodiversidad y las condiciones del entorno contribuyen al desarrollo productivo, al bienestar de las comunidades y a la permanencia de las actividades agropecuarias a largo plazo.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_7.png', class="img-fluid")
      .col-12.col-lg-9
        .subtitulo-destacado.mb-4
          .subtitulo-destacado__icono
            img(src='@/assets/curso/tema6/img_3.svg', aria-hidden='true').subtitulo-destacado__img
          .subtitulo-destacado__fondo
            h4.subtitulo-destacado__texto Concepto
        p.mb-3(data-aos="zoom-in-right") La gestión ambiental en proyectos agropecuarios es el conjunto de acciones, estrategias y prácticas orientadas a prevenir, controlar y reducir los impactos ambientales generados por las actividades productivas en el territorio. Su propósito es promover el uso sostenible de los recursos naturales, proteger el entorno y fortalecer el equilibrio entre la producción agropecuaria, el bienestar comunitario y la conservación ambiental.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema6/img_3.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Tipos de requerimientos ambientales

    p.mb-5(data-aos="zoom-in-right") Los proyectos agropecuarios requieren el cumplimiento de diferentes requerimientos ambientales orientados a proteger los recursos naturales y prevenir impactos negativos sobre el entorno. Estos requerimientos incluyen normas, permisos, prácticas de manejo y acciones de control relacionadas con el uso del agua, manejo de residuos, conservación del suelo, protección de la biodiversidad y aprovechamiento sostenible de los recursos naturales en las actividades productivas. Entre los requerimientos más importantes tenemos:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-secundario-10.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_8.svg', class="img-fluid") 
          p.mb-0.ps-3 #[strong Legales:] permisos ambientales, licencias y cumplimiento normativo. 
      .col-12.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-secundario-10.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_9.svg', class="img-fluid") 
          p.mb-0.ps-3 #[strong Técnicos:] manejo adecuado de residuos, agua y suelo. 
      .col-12.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-secundario-10.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_10.svg', class="img-fluid") 
          p.mb-0.ps-3 #[strong Sociales:] participación comunitaria y educación ambiental. 
      .col-12.col-lg-6.col-xl-3.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-secundario-10.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_11.svg', class="img-fluid") 
          p.mb-0.ps-3 #[strong Productivos:] implementación de prácticas sostenibles en la producción. 

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema6/img_3.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Características de la gestión ambiental
        
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") La gestión ambiental presenta características orientadas a la planificación, prevención y control de los impactos generados por las actividades humanas sobre el entorno. Se fundamenta en el uso sostenible de los recursos naturales, la participación comunitaria, el cumplimiento de normas ambientales y la implementación de prácticas responsables que favorecen la conservación del ambiente y el desarrollo sostenible de los territorios. Las características más relevantes son:
        .tarjeta.color-primario-5.py-4.p-5.rounded-3.mb-0.col-12.col-lg-8(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-10.order-2.order-lg-1.mb-3
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Preventiva más que correctiva. 
                li
                  i.lista-ul__vineta 
                  span Participativa e incluyente. 
                li
                  i.lista-ul__vineta 
                  span Basada en la sostenibilidad. 
                li
                  i.lista-ul__vineta 
                  span Enfocada en el uso eficiente de recursos. 
                li
                  i.lista-ul__vineta 
                  span Articulada con la normatividad vigente. 
            .col-4.col-lg-2.order-2.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
              figure.me-5.me-lg-0
                img(src='@/assets/curso/tema6/img_12.svg', class="img-fluid").me-5.me-lg-0
      .col-12.col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_13.png', class="img-fluid")(data-aos="zoom-in-right") 

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema6/img_3.svg', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Normativa ambiental en Colombia

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Son conjunto de leyes, decretos, resoluciones y políticas orientadas a la protección, conservación y uso sostenible de los recursos naturales. Estas disposiciones regulan las actividades productivas, incluyendo las agropecuarias, con el propósito de prevenir impactos ambientales, promover el desarrollo sostenible y garantizar el bienestar de las comunidades y del entorno natural.

    p.mb-5(data-aos="zoom-in-right") Incluye principalmente:

    .row.justify-content-center.align-items-stretch.mb-0
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_15.svg', class="img-fluid") 
          p.mb-0.ps-3 Ley 99 de 1993 (creación del Sistema Nacional Ambiental – SINA). 
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_16.svg', class="img-fluid") 
          p.mb-0.ps-3 Decreto 1076 de 2015 (sector ambiente). 
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_17.svg', class="img-fluid") 
          p.mb-0.ps-3 Normas sobre manejo de residuos sólidos y vertimientos. 
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_18.svg', class="img-fluid") 
          p.mb-0.ps-3 Reglamentaciones sobre protección de fuentes hídricas. 
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_19.svg', class="img-fluid") 
          p.mb-0.ps-3 Uso eficiente de fertilizantes y abonos orgánicos. 
      .col-12.col-lg-4.mb-4(data-aos="zoom-in-right")
        .tarjeta-numerada.tarjeta-numerada--vertical.color-acento-contenido-5.h-100
          .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema6/img_20.svg', class="img-fluid") 
          p.mb-0.ps-3  Implementación de prácticas agroecológicas. 
</template>

<script>
export default {
  name: 'Tema6',
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
