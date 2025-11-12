<script setup lang="ts">
interface Props {
  collection: string
  path: string
}

const props = defineProps<Props>()

const { data: content } = await useAsyncData(
  () => `embed-${props.collection}-${props.path}`,
  () =>
    queryCollection(props.collection as any)
      .where('stem', '=', props.path)
      .first()
)

const { data: availableContent } = await useAsyncData(
  () => `available-${props.collection}`,
  () => queryCollection(props.collection as any).all()
)
</script>

<template>
  <div v-if="content">
    <ContentRenderer :value="content" />
  </div>
  <div v-else class="border border-red-200 rounded-lg p-4 bg-red-50 text-red-800">
    <p class="font-semibold mb-2">Content "{{ path }}" not found in collection "{{ collection }}"</p>
    <p class="text-sm mb-2">Available content in this collection:</p>
    <ul class="list-disc list-inside text-sm space-y-1">
      <li v-for="item in availableContent" :key="item.stem" class="font-mono">
        {{ item.stem }}
      </li>
    </ul>
    <p v-if="!availableContent?.length" class="text-sm italic">
      No content found in collection "{{ collection }}"
    </p>
  </div>
</template>
