<!-- 親コンポーネント -->
<template>
  <div class="w-full">
    <list
    :datas="datas"
    />
  </div>

</template>

<script setup lang="ts">

import axios from 'axios'
import { ref, onMounted, computed } from 'vue'

// 一覧
import List from "@@components/Samples/List.vue"

console.log('Area.vue')

const props = defineProps<{
  getUrl: string
}>()

// API取得後の値
const datas = ref([])
const success = ref(false)

const params = computed(() => ({  
}))

console.log(props.getUrl)

// 一覧をリフレッシュ
const doSearch = async () => {
  success.value = false
  try {
    await axios.get(props.getUrl, {
      // 送信パラメータ
      params: params.value
    })
    .then(res => {
      // 一覧を更新
      console.log(res)
      datas.value = res.data
    })
    success.value = true
  } catch (error) {
    alert('データの取得に失敗しました。')
    console.error(error)
  }
}

// 表示時に取得
onMounted(() => {
  doSearch()
})

</script>