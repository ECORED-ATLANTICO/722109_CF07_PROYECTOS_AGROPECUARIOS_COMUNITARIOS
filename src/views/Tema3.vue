<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comunicación

    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_1.png', class="img-fluid")
      .col-12.col-lg-10
        .tarjeta.tarjeta--fondo-img-4.py-4.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          p.mb-0 La comunicación es un proceso fundamental en el desarrollo de proyectos agropecuarios comunitarios, ya que permite intercambiar información, fortalecer la participación y promover la construcción colectiva de conocimientos y acuerdos en el territorio. Una comunicación efectiva facilita la interacción entre comunidades, organizaciones e instituciones, favoreciendo la cooperación y el trabajo en equipo.

    .row.justify-content-center.mb-5(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
            figure.mb-0
              img(src='@/assets/curso/tema2/img_4.svg', alt='').img-fluid
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                h5.mb-1 Comunicación
                p.mb-0 Lo invitamos a visitar el siguiente enlace en donde podrá apreciar una descripción general de lo que es comunicación y su importancia.
              .bloque-enlace__accion
                a.boton-enlace(href="https://www.youtube.com/watch?v=MbfA7LEGRrQ" target="_blank" rel="noopener noreferrer")
                  span.boton-enlace__texto Enlace
                  i.fas.fa-file-download.boton-enlace__icono

    p.mb-0(data-aos="zoom-in-right") Esta unidad aborda los principios, canales y componentes de la comunicación, así como estrategias del lenguaje, técnicas de oratoria, comunicación comunitaria, divulgación y sistematización de la información. Además, desarrolla elementos relacionados con las entrevistas, la transmisión del conocimiento y el lenguaje corporal y verbal, fortaleciendo las habilidades comunicativas necesarias para la gestión comunitaria y el liderazgo rural.

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1 Principios
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema3/img_3.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 La comunicación es un proceso mediante el cual las personas intercambian información, ideas, emociones, experiencias y conocimientos con el propósito de generar entendimiento y fortalecer las relaciones humanas. Este proceso es fundamental en los proyectos agropecuarios comunitarios, ya que facilita la participación, la coordinación de acciones y la construcción colectiva de soluciones dentro del territorio. Una comunicación efectiva contribuye al fortalecimiento organizativo, la convivencia comunitaria y el desarrollo de procesos participativos. Para que la comunicación cumpla adecuadamente su función, es necesario aplicar principios que orienten el intercambio de información de manera clara, respetuosa y comprensible.

    p.mb-5(data-aos="zoom-in-right") Entre los principios fundamentales de la comunicación se encuentran:

    .bloque-slider(data-aos="zoom-in-left")
      .bloque-slider__contenido
        SlyderA(tipo="a").tarjeta.tarjeta--blanca.p-4.mb-0
          .row.justify-content-center.align-items-center.mb-5
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-4 Claridad en el mensaje
              p.mb-3 Se basa en transmitir la información de forma sencilla, precisa y comprensible para evitar confusiones o interpretaciones incorrectas. Un mensaje claro facilita el entendimiento entre las personas y mejora la efectividad de la comunicación.
          .row.justify-content-center.align-items-center.mb-5
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-2 Coherencia 
              p.mb-0 Implica que las acciones, comportamientos y actitudes correspondan con el mensaje transmitido. La coherencia fortalece la credibilidad, la confianza y la transparencia en los procesos comunicativos.
          .row.justify-content-center.align-items-center.mb-5
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-2 Respeto hacia los interlocutores
              p.mb-0 Reconocer y valorar las opiniones, ideas y diferencias de las demás personas. El respeto favorece el diálogo, la convivencia y la participación dentro de los espacios comunitarios.
          .row.justify-content-center.align-items-center.mb-5
            .col-10.col-lg-10.mb-3.mb-lg-0
              h5.mb-2 Adaptación del mensaje al contexto
              p.mb-0 Consiste en ajustar el lenguaje, la forma de comunicación y los contenidos según las características culturales, sociales y educativas de las personas o comunidades a las que se dirige el mensaje. Esta adaptación facilita la comprensión y fortalece la inclusión en los procesos comunicativos.
      .bloque-slider__imagen
        figure
          img(src='@/assets/curso/tema3/img_5.png', class="img-fluid")

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Canales
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_6.png', class="img-fluid")
      .col-12.col-lg-9
        p.mb-3(data-aos="zoom-in-right") Los canales de comunicación son los medios o mecanismos utilizados para transmitir información, ideas, conocimientos y mensajes entre las personas o grupos. Estos canales permiten establecer interacción entre comunidades, organizaciones e instituciones, facilitando el intercambio de información y la participación en diferentes procesos sociales y comunitarios.
        .tarjeta.tarjeta--fondo-img-3.py-4.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          p.mb-0 En los proyectos agropecuarios comunitarios, la selección adecuada de los canales de comunicación es fundamental para garantizar que la información llegue de manera clara, oportuna y comprensible a la población. Además, los canales deben adaptarse a las características culturales, sociales y territoriales de las comunidades rurales para fortalecer la participación y el acceso a la información.

    p.mb-5(data-aos="zoom-in-right") Canales más utilizados en procesos comunitarios son: 

    .row.justify-content-center.align-items-start.mb-0
      .col-12.col-lg-8.order-2.order-lg-1.mb-3.mb-lg-0(data-aos="flip-left")
        TabsA.color-secundario.mb-3.uno
          .tarjeta.color-secundario-10.p-5(titulo="Comunicación oral")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Se desarrolla mediante conversaciones, reuniones, diálogos, exposiciones y espacios de participación donde la información se transmite de forma verbal. Este canal facilita la interacción directa, el intercambio de opiniones y la resolución inmediata de dudas.
          .tarjeta.color-secundario-10.p-5(titulo="Comunicación escrita")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Comprende documentos, cartas, informes, actas, cartillas, afiches y otros materiales escritos utilizados para transmitir información de manera organizada y permanente. Este canal permite registrar acuerdos y facilitar la consulta de información.
          .tarjeta.color-secundario-10.p-5(titulo="Medios digitales")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Incluyen herramientas tecnológicas como redes sociales, aplicaciones móviles, correos electrónicos, plataformas virtuales y mensajería instantánea. Los medios digitales facilitan la difusión rápida de información y fortalecen la comunicación entre actores ubicados en diferentes territorios.
          .tarjeta.color-secundario-10.p-5(titulo="Reuniones comunitarias")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Son espacios de encuentro y participación donde las comunidades pueden dialogar, concertar acciones, analizar problemáticas y construir acuerdos colectivos. Este canal fortalece la organización comunitaria y la toma de decisiones participativas.
          .tarjeta.color-secundario-10.p-5(titulo="Material pedagógico")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Corresponde a recursos educativos como guías, cartillas, presentaciones, videos, infografías y material didáctico utilizados para facilitar procesos de formación y transmisión de conocimientos dentro de la comunidad.
      .col-12.col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure
          img(src='@/assets/curso/tema3/img_7.png', class="img-fluid")

    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3 Componentes
    .mb-0 

    .row.justify-content-center.align-items-center.mb-4
      .col-6.col-lg-3.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_8.png', class="img-fluid")
      .col-12.col-lg-9
        .row.justify-content-center.align-items-center.mb-4
          .col-2.col-lg-1.mb-3.mb-lg-0.p-1(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema3/img_9.svg', class="img-fluid img-circulo d-none d-lg-block")
          .col-12.col-lg-11.mb-3.mb-lg-0
            p.mb-0(data-aos="zoom-in-right") El proceso comunicativo está conformado por diferentes elementos que interactúan entre sí para permitir la transmisión y comprensión de la información. Estos componentes son fundamentales para garantizar una comunicación clara, efectiva y participativa en los proyectos agropecuarios comunitarios y en los espacios de interacción social.
        p.mb-0(data-aos="zoom-in-right") La adecuada comprensión de los componentes de la comunicación facilita el intercambio de conocimientos, la construcción de acuerdos y el fortalecimiento de las relaciones entre comunidades, organizaciones e instituciones. Cuando alguno de estos elementos presenta dificultades, pueden generarse barreras, malentendidos o problemas en la transmisión del mensaje.

    p.mb-5(data-aos="zoom-in-right") Principales componentes del proceso comunicativo:

    .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
      SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-4").p-2.rounded-3
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--10.mb-4
          h5.mb-3.text-center Emisor
          p.mb-3.text-center Es la persona, grupo o entidad encargada de transmitir el mensaje. El emisor organiza la información y decide la manera en que será comunicada al receptor. 
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--11.mb-4 
          h5.mb-3.text-center Mensaje
          p.mb-3.text-center Corresponde a la información, idea, opinión, sentimiento o conocimiento que se desea comunicar. El mensaje debe ser claro, coherente y adecuado al contexto y a las características de las personas que lo reciben.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--12.mb-4 
          h5.mb-3.text-center Canal
          p.mb-3.text-center Es el medio utilizado para transmitir el mensaje desde el emisor hacia el receptor. El canal puede ser oral, escrito, visual, digital o audiovisual, dependiendo de las necesidades y condiciones del proceso comunicativo.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--13.mb-4 
          h5.mb-3.text-center Receptor
          p.mb-3.text-center Es la persona o grupo que recibe, interpreta y analiza el mensaje transmitido. La comprensión del mensaje por parte del receptor depende de factores como el lenguaje utilizado, el contexto, la cultura y la claridad de la información.
        .tarjeta--color-color-primario-5.h-100
          .tarjeta--14.mb-4 
          h5.mb-3.text-center Retroalimentación
          p.mb-3.text-center Es la respuesta o reacción del receptor frente al mensaje recibido. La retroalimentación permite verificar si la información fue comprendida correctamente y favorece el intercambio de opiniones y la mejora de la comunicación.

    Separador

    #t_3_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.4 Estrategias del lenguaje
    .mb-0 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las estrategias del lenguaje son herramientas y técnicas utilizadas para mejorar la efectividad de la comunicación y facilitar la comprensión de los mensajes en diferentes contextos sociales, educativos y comunitarios. Estas estrategias permiten adaptar la información de acuerdo con las características del público, promoviendo una comunicación más clara, participativa e incluyente.

    .row.justify-content-center.align-items-center.mb-5
      .col-2.col-lg-1.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_16.svg', class="img-fluid img-circulo d-none d-lg-block")
      .col-12.col-lg-11.mb-3.mb-lg-0
        p.mb-3(data-aos="zoom-in-right") En los proyectos agropecuarios comunitarios, las estrategias del lenguaje son fundamentales para fortalecer la interacción entre comunidades, organizaciones e instituciones, especialmente en procesos de formación, concertación, divulgación y participación comunitaria. El uso adecuado del lenguaje facilita la transmisión de conocimientos, evita malentendidos y mejora las relaciones entre los actores del territorio.
        p.mb-0(data-aos="zoom-in-right") Entre las principales estrategias del lenguaje se encuentran:

    .row.justify-content-center.mb-5
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="100" tabindex="0")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_17.png", class="img-fluid")
          .crd_hover_txt--body
            h4 Uso de lenguaje claro y sencillo
            p Consiste en transmitir la información utilizando palabras comprensibles, frases simples y mensajes organizados. Esta estrategia evita el uso excesivo de términos técnicos o complejos que puedan dificultar la comprensión por parte de la comunidad.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="200" tabindex="1")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_18.png", class="img-fluid")
          .crd_hover_txt--body
            h4 Adaptación del mensaje al público
            p Implica ajustar el lenguaje y la forma de comunicación según las características culturales, educativas, sociales y territoriales de las personas que reciben el mensaje. Adaptar la información al contexto favorece la inclusión y facilita la participación comunitaria.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="300" tabindex="3")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_19.png", class="img-fluid")
          .crd_hover_txt--body
            h4 Uso de ejemplos y analogías
            p Permite explicar ideas o conceptos mediante comparaciones con situaciones cotidianas o experiencias conocidas por la comunidad. Esta estrategia facilita el aprendizaje y la comprensión de temas técnicos o complejos.
      .col-12.col-md-6.col-lg-6.col-xl-3.mb-4
        .crd_hover_txt(data-aos="flip-left" data-aos-delay="400" tabindex="4")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/img_20.png", class="img-fluid")
          .crd_hover_txt--body
            h4 Apoyo con recursos visuales
            p Se trata de complementar la comunicación con imágenes, gráficos, carteles, mapas, videos, infografías o materiales didácticos que ayuden a reforzar el mensaje y mejorar la comprensión de la información.

    .row.justify-content-center.mb-0(data-aos="zoom-in-right")
      .col-12.col-lg-10
        .row.g-0.align-items-center
          .col-2.col-lg-1.bloque-enlace__icono-col
          .col-10.col-lg-11
            .bloque-enlace
              .bloque-enlace__contenido
                p.mb-0 #[strong Nota:] además de estas estrategias, es importante mantener una actitud respetuosa, utilizar un tono adecuado y promover espacios de diálogo y participación. En contextos comunitarios, el uso de estrategias de lenguaje adecuadas fortalece los procesos organizativos, mejora la transmisión del conocimiento y contribuye al desarrollo de proyectos agropecuarios más participativos e incluyentes.
              .bloque-enlace__accion

    Separador

    #t_3_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.5 Técnicas de oratoria
    .mb-0 

</template>

<script>
export default {
  name: 'Tema3',
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
