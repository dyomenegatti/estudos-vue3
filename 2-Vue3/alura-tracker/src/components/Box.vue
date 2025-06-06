<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BoxApp',
})
</script>

<style scoped>
.box {
  background: #1f1f1f;
}
</style>