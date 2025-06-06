<template>
  <Box>
    <div class="columns">
      <div class="colum is-7">{{ tarefa.descricao || 'Tarefa sem descrição' }}</div>

      <div class="column">
        <cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"></cronometro>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from './Box.vue';

export default defineComponent({
  components: { Cronometro, Box },
  name: 'TarefaApp',
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
})
</script>