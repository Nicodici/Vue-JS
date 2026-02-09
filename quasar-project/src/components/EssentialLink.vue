<template>
  <q-item
    clickable
    :tag="isExternalLink ? 'a' : 'div'"
    :target="isExternalLink ? '_blank' : undefined"
    :href="isExternalLink ? props.link : undefined"
    :to="!isExternalLink ? props.link : undefined"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    <q-separator color="grey-2" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: '',
  },

  link: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },
})

const isExternalLink = computed(() => {
  return props.link.startsWith('http') || props.link.startsWith('https')
})
console.log(props)
</script>
