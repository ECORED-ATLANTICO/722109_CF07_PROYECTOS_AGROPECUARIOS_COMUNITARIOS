<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Prueba de conocimientos de la gestión comunitaria, comunicación y prevención de riesgos en proyectos agropecuarios.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar los conocimientos adquiridos por los aprendices sobre gestión comunitaria, técnicas de negociación, comunicación comunitaria, manejo de riesgos, gestión de la información, seguridad y salud en el trabajo y gestión ambiental, aplicados a proyectos agropecuarios con enfoque territorial y diferencial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'La gestión comunitaria con enfoque territorial busca principalmente:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer procesos participativos según las características del territorio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aplicar modelos estandarizados para todas las comunidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente la producción agropecuaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centralizar las decisiones institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 2,
          texto: 'El enfoque diferencial en proyectos comunitarios permite:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar estrategias iguales para toda la población.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconocer características sociales, culturales y poblacionales específicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Clasificar comunidades según su productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la participación de algunos grupos sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 3,
          texto: 'La concertación de acciones en una comunidad facilita:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La toma de decisiones sin consulta previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La asignación exclusiva de responsabilidades institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La reducción de espacios de participación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La construcción de acuerdos entre los actores involucrados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 4,
          texto: 'Una característica importante de la escucha activa es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formular respuestas inmediatas sin análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener atención e interés durante la comunicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dirigir la conversación hacia otros temas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar la participación del interlocutor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 5,
          texto: 'La negociación colaborativa se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Buscar beneficios equilibrados para las partes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Priorizar únicamente los intereses individuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener posiciones rígidas durante el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el intercambio de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 6,
          texto:
            'En los procesos comunitarios, la comunicación efectiva contribuye a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la dependencia institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la circulación de información técnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la comprensión y participación colectiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mantener información restringida a líderes comunitarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 7,
          texto:
            'Dentro de los componentes de la comunicación, el canal corresponde a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La intención del mensaje.', esCorrecta: false },
            {
              id: 'b',
              texto: 'El medio utilizado para transmitir información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La interpretación final del receptor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El contenido técnico del mensaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 8,
          texto: 'Las técnicas de oratoria permiten:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la capacidad de expresión y argumentación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir el trabajo escrito en los proyectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la interacción con el público.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso del lenguaje corporal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 9,
          texto: 'Una estrategia de comunicación comunitaria es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uso de espacios participativos y medios locales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La difusión exclusiva mediante documentos técnicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La transmisión de información sin retroalimentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El manejo reservado de la información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 10,
          texto: 'El lenguaje corporal influye en la comunicación porque:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplaza completamente la comunicación oral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reduce la claridad del mensaje técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Complementa y refuerza el mensaje verbal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Limita la interacción entre las personas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 11,
          texto: 'Un indicador de riesgo se utiliza para:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar condiciones que pueden generar afectaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Clasificar únicamente pérdidas económicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir los protocolos de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar procedimientos preventivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 12,
          texto: 'Los protocolos de atención de riesgos tienen como propósito:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los controles administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la participación del personal operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer acciones organizadas frente a emergencias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Delegar responsabilidades únicamente al coordinador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 13,
          texto:
            'Entre los riesgos presentes en proyectos agropecuarios se encuentran:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgos únicamente financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgos asociados solo al transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Riesgos limitados a maquinaria pesada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riesgos ambientales, climáticos y biológicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 14,
          texto:
            'La gestión de la información en proyectos agropecuarios permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar los procesos de planeación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuir el seguimiento de actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar y respaldar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar la elaboración de informes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 15,
          texto: 'Los registros productivos son importantes porque:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permiten documentar actividades y resultados del proceso productivo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituyen los mecanismos de evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se utilizan únicamente para procesos contables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitan el análisis técnico de la producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 16,
          texto: 'Una característica fundamental de un informe técnico es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contener exclusivamente gráficos y tablas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar información clara y organizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Emplear lenguaje informal para facilitar su lectura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Excluir resultados y recomendaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 17,
          texto: 'Una práctica adecuada de seguridad y salud en el trabajo es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Priorizar únicamente el cumplimiento de metas productivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Realizar actividades sin identificación de riesgos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar las pausas activas durante la jornada laboral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar medidas preventivas y utilizar elementos de protección personal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 18,
          texto: 'La gestión ambiental en proyectos agropecuarios busca:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover el uso responsable de los recursos naturales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar la explotación intensiva del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir las normas ambientales existentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los procesos de seguimiento ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 19,
          texto: 'Las técnicas de divulgación y sistematización permiten:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Centralizar la información en una sola persona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir los espacios de aprendizaje colectivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar y compartir experiencias y resultados del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar la participación de la comunidad en los procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
        {
          id: 20,
          texto:
            'La ruta de atención de riesgos en proyectos comunitarios permite:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituir los procesos de capacitación comunitaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuir el seguimiento de incidentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Limitar la comunicación entre los actores del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Coordinar acciones de prevención y respuesta ante situaciones de riesgo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la gestión comunitaria, comunicación y manejo de riesgos en proyectos agropecuarios.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
