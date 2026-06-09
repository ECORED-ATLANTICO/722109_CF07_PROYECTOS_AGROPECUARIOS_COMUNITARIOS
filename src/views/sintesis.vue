<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.align-items-center.mb-2
      .col-12.col-lg-12
        .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
          .bloque-texto-t__img.mb-0
            img(src='@/assets/curso/sintesis/img_1.png')
          .bloque-texto-t__texto.col-12.col-md-10.col-lg-10.mb-0
            p.mb-0 El componente formativo “Gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios” aborda los fundamentos conceptuales, metodológicos y prácticos necesarios para fortalecer los procesos de participación, comunicación, concertación y gestión organizativa en contextos rurales y comunitarios. En este componente se desarrollan temas relacionados con la gestión comunitaria con enfoque territorial y diferencial, técnicas de negociación, estrategias de comunicación y participación, manejo de riesgos, protocolos de atención y seguridad, así como procesos de gestión de la información. Además, se estudian herramientas para la elaboración de informes, registros productivos y mecanismos de seguimiento de actividades comunitarias y agropecuarias.
        
    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/sintesis/img_2.png', class="img-fluid")
      .col-12.col-lg-9.mb-3.mb-lg-0
        p.mb-0(data-aos="zoom-in-right") Asimismo, el componente fortalece habilidades de liderazgo, escucha activa, resolución de conflictos, comunicación comunitaria y trabajo colaborativo, promoviendo la construcción colectiva de soluciones y la articulación entre comunidades, organizaciones e instituciones. De igual forma, se abordan elementos relacionados con la prevención de riesgos, la seguridad en las actividades comunitarias y agropecuarias, y la aplicación de protocolos orientados a proteger la integridad de las personas y garantizar el adecuado desarrollo de los proyectos. En conjunto, este componente formativo busca desarrollar competencias para gestionar procesos comunitarios, fortalecer la comunicación organizativa y promover acciones participativas, seguras y sostenibles que contribuyan al desarrollo territorial y al fortalecimiento de las comunidades rurales.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="La figura presenta la estructura del componente “Gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios”, organizado en seis temas principales:  gestión comunitaria con concertación, desarrollo de componentes y enfoque diferencial; técnicas de negociación con tipos, métodos, criterios y escucha activa; comunicación con principios, canales, oratoria, entrevistas y divulgación; ruta de atención de riesgos con indicadores, tipos de riesgos y protocolos; gestión de la información con registros, diligenciamiento de documentos e informes; y seguridad y salud en el trabajo junto con gestión ambiental, abordando prevención, protección y sostenibilidad en proyectos agropecuarios comunitarios.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
