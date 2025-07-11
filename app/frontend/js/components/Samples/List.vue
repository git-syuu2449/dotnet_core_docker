<template>
    <!-- 一覧 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        <template v-if="props.datas.length === 0">
            <p class="text-gray-500">データはありません。</p>
        </template>

      <div
        v-for="item in props.datas"
        :key="item.id"
        class="bg-white rounded-2xl shadow p-4"
      >
        <div class="text-lg font-semibold text-gray-800">
            {{ item.name }}
        </div>
      </div>

    </div>
</template>

<script setup lang="ts">

const props = defineProps<{ datas: Array<any> }>()

console.log(props.datas)

</script>