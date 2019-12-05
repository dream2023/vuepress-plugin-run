<template>
  <div v-if="dynamicComponent" class="vuepress-run">
    <component v-bind="$attrs" :is="dynamicComponent"></component>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  data () {
    return {
      dynamicComponent: null,
    }
  },
  mounted () {
    import('vue-run-sfc/src/vue-run-sfc').then(module => {
      this.dynamicComponent = module.default
    })
  },
}
</script>
