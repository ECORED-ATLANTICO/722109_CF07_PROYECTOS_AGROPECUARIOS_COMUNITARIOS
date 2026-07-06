<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-acento-contenido-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente formativo Gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios se orienta al fortalecimiento de competencias sociales, organizativas y comunicativas necesarias para la interacción con comunidades rurales y la articulación de acciones participativas en el territorio. En el marco del programa “Proyectos Agropecuarios Comunitarios”, este componente busca preparar al aprendiz para apoyar procesos de concertación, prevención de riesgos, comunicación comunitaria y gestión de información, promoviendo la participación y el desarrollo sostenible de las comunidades rurales.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") La gestión comunitaria constituye un eje fundamental para el fortalecimiento organizativo y la construcción colectiva de soluciones en el sector agropecuario. En este sentido, el componente aborda conceptos y herramientas relacionadas con la identificación y manejo de riesgos, las técnicas de negociación, la comunicación efectiva, la divulgación de información y el manejo del enfoque diferencial. Asimismo, integra elementos asociados con la gestión documental, la sistematización de información, los protocolos de atención y las estrategias de interacción comunitaria.
        .tarjeta.tarjeta--fondo-img-1.py-4.p-5.rounded-3.mb-0(data-aos="zoom-in-right")
          p.mb-0 El desarrollo de procesos comunitarios en contextos rurales exige una visión integral que reconozca las dinámicas socioculturales del territorio, la diversidad de actores y las necesidades de las comunidades campesinas. Por ello, este componente promueve la escucha activa, el diálogo, la concertación y la comunicación participativa como mecanismos para fortalecer la convivencia, la inclusión y la gobernanza territorial.
      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_3.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-0
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_4.svg', class="img-fluid img-circulo d-none d-lg-block")
      .col-12.col-lg-11
        p.mb-3(data-aos="zoom-in-right") Desde una perspectiva pedagógica, el componente se fundamenta en el aprendizaje significativo y el enfoque por competencias, articulando conocimientos teóricos y prácticos mediante ejercicios de comunicación, análisis de situaciones comunitarias, construcción de rutas de atención y aplicación de estrategias participativas. De esta manera, se busca que el aprendiz desarrolle capacidades para facilitar procesos comunitarios, apoyar la gestión territorial y contribuir al fortalecimiento social y organizativo de iniciativas agropecuarias comunitarias.
</template>

<script>
export default {
  name: 'Introduccion',
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
