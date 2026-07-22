<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo  

    .bloque-texto-g.color-acento-contenido-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el desarrollo de proyectos agropecuarios comunitarios, la seguridad y salud en el trabajo, constituye un pilar fundamental para garantizar la sostenibilidad de las actividades productivas y el bienestar de las personas involucradas.

    .row.justify-content-center.align-items-center.mb-5
      .col-12
        p.mb-3(data-aos="zoom-in-right") La seguridad y salud en el trabajo orienta a los trabajadores y comunidades en la adopción de medidas preventivas, el uso adecuado de elementos de protección personal, la implementación de pausas activas y el cumplimiento de la normatividad vigente, con el fin de generar ambientes laborales seguros y saludables.      

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Generalidades y normatividad
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
                  span Ejercicios de estiramiento.
                li
                  i.lista-ul__vineta 
                  span Movilidad articular.
                li
                  i.lista-ul__vineta 
                  span Duración de 5 a 10 minutos.
                li
                  i.lista-ul__vineta 
                  span Relajación muscular.
            td.text-start 
              ul.lista-ul.mb-0
                li
                  i.lista-ul__vineta 
                  span Mejora la circulación.
                li
                  i.lista-ul__vineta 
                  span Reduce el estrés.
                li
                  i.lista-ul__vineta 
                  span Previene lesiones osteomusculares.
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
                  span Flexionar rodillas al cargar objetos.
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
                  span Guantes.
                li
                  i.lista-ul__vineta 
                  span Botas de seguridad.
                li
                  i.lista-ul__vineta 
                  span Gafas protectoras.
                li
                  i.lista-ul__vineta 
                  span Tapabocas o mascarillas.
                li
                  i.lista-ul__vineta 
                  span Protección solar.
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
    p.mb-3(data-aos="zoom-in-right") El conocimiento y la aplicación de la normativa vigente permiten desarrollar las actividades agropecuarias de manera segura, fomentando una cultura de autocuidado, gestión del riesgo y cumplimiento de las disposiciones legales que garantizan ambientes de trabajo saludables y sostenibles.
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
