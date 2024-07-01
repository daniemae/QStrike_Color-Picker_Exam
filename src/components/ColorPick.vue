<template>
      <div class="grid grid-cols-2 gap-1 ml-5">
            <div class="max-h-screen overflow-y-auto">
                  <h1 class="text-4xl">Colors:</h1>
                  <table class="w-full">
                        <tbody class="divide-y divide-black-500">
                              <tr v-for="colorData in colorsArr" :key="colorData.id" class="border-black-500 border-b2">
                                    <td class="flex items-center justify-between p-2">
                                          <div class="text-xl">{{ colorData.name }}</div>
                                          <div class="ml-auto">
                                          <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" @click="getData(colorData)">
                                                Preview
                                          </button>
                                          </div>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </div>
            <div :style="`background-color:#${colorObj.hex_code}`">
                  <div class="flex items-center justify-center h-screen" :style="`color:${this.colorCaption}`">
                        <div class="text-xl">
                              name: {{ colorObj.name }}
                              <br>
                              hex: {{ colorObj.hex_code }}
                              <br>
                              color code: {{ colorObj.color_code }}
                        </div>
                  </div>
            </div>
      </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Colors from '../types/Colors';

export default defineComponent({
      props:{
            colorsArr:{
                  required: true,
                  type: Array as PropType<Colors[]>
            }
      },
      data:() => ({
            colorObj:{},
            colorCaption : ''
      }),
      watch:{
            colorObj:{
                  handler(newValue){
                        const bigint = parseInt(newValue.hex_code, 16); //Convert hex to RGB
                        const r = (bigint >> 16) & 255;
                        const g = (bigint >> 8) & 255;
                        const b = bigint & 255;
                        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                        this.colorCaption = brightness > 128 ? 'black' : 'white' //check if the color is light based on brightness
                  }, deep: true
            }
      },
      methods:{
            getData(color: Object){
                  this.colorObj = color
            },
      }
})
</script>