<template>
  <div>
    <form @submit.prevent="handleSubmit">
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
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, " ");

        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      await fetch("http://localhost:3000/posts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      router.push({
        name: "Home",
      });
    };

    return { title, body, tag, tags, handleKeyDown, handleSubmit };
  },
};
</script>

<style></style>
