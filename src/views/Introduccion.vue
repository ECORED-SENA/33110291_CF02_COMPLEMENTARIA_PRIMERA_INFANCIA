<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pt-5
          .row.align-items-center.mb-5(data-aos="fade-right")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/intro/img2.svg', style="width: 80px" ,alt='').m-auto
            .col
              p.mb-0 Aquí comienza el estudio del componente formativo #[b “Aplicación de la Escala Abreviada de Desarrollo EAD-3”]; empiece por explorar, con suma atención, el video que se propone a continuación. #[b ¡Adelante!]
          figure(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/D5JYQ-DZm0Y" title="Aplicación de la Escala Abreviada de Desarrollo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Aplicación de la Escala Abreviada de Desarrollo (EAD-3)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
