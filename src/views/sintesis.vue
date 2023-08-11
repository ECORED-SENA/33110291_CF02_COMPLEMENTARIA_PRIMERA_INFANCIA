<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Aquí finaliza el estudio del componente formativo “Aplicación de la Escala Abreviada de Desarrollo EAD-3”. En este punto, inspeccione el esquema se me muestra a continuación y haga su propia síntesis de los contenidos desarrollados. ¡Adelante!
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de este componente formativo, que enuncia las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados. Tema central: aplicación de la Escala Abreviada del Desarrollo EAD-3. Y sus temas integradores: Generalidades, Aplicación y Profundización en aplicación del instrumento.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
