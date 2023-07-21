<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <PostSingle :post="post" />
    </div>
  </div>
</template>
<script>
import {} from "vue";
import PostSingle from "./PostSingle";
export default {
  props: ["posts"],
  components: {
    PostSingle,
  },

  setup(props) {},
};
</script>

<style></style>
