<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import ColorPick from './components/ColorPick.vue'
  import Colors from './types/Colors'

  export default defineComponent({
    components: {
      ColorPick
    },
    setup(){
      const colors = ref<Colors[]>([
        {
          id: 0,
          name: "",
          color_code: "",
          hex_code: "",
          application_types: null,
          sublimination_only: 0,
          active: 0,
          order: 0,
          update_history: [
            {info: '', date_time: '', user_id: ''}
          ],
          master_color_id: 0,
          brand: '',
          alias: '',
          color_code_alias: ''
        }
      ])

      return {colors}
    },
    created(){
      this.getColors()
    },
    methods:{
      getColors(){
        fetch('https://api.prolook.com/api/colors/prolook')
          .then((response) => {
            return response.json()
          })
          .then((data) => this.colors = data.colors)
          .catch((error) => {
            console.log(error)
          })
      }
    }
  })
</script>

<template>
  <div>
    <ColorPick :colorsArr="colors"/>
  </div>
</template>
