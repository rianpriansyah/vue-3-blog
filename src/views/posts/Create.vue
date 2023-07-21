<template>
  <div>
    <form>
      <div>
        <label for="">Title</label>
        <input type="text" v-model="title" />
      </div>
      <div>
        <label for="">Body</label>
        <textarea cols="30" rows="10" v-model="body"></textarea>
      </div>
      <div>
        <label for="">Tags</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="handleKeyDown" />
      </div>
      <button type="submit">Create</button>
    </form>
    <div v-for="tag in tags" :key="tag">#{{ tag }}</div>
    {{ title }}
    {{ body }}
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, "");

        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    return { title, body, tag, tags, handleKeyDown };
  },
};
</script>

<style></style>
