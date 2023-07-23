<template>
  <!-- Post preview-->
  <div v-for="post in posts" :key="post.id">
    <div class="post-preview">
      <PostSingle :post="post" />
    </div>
    <!-- Divider-->
    <hr class="my-4" />
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
