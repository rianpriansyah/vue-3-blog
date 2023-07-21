<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import Loading from "@/components/Loading";
import getPosts from "../composable/getPosts";

export default {
  name: "HomeView",
  components: {
    PostList,
    Loading,
  },

  setup() {
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
};
</script>
