<template>
  <header class="masthead" style="background-image: url('img/contact-bg.jpg')">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="page-heading">
            <h1>Create new post</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="my-5">
            <form @submit.prevent="handleSubmit">
              <div class="form-floating">
                <input class="form-control" type="text" placeholder="Title Post" v-model="title" required />
                <label>Title</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Input Body Post" rows="5" required v-model="body"></textarea>
                <label for="message">Body</label>
              </div>
              <div class="form-floating">
                <input class="form-control" type="text" placeholder="Input Tags" v-model="tag" @keydown.enter.prevent="handleKeyDown" />
                <label>Tags</label>
              </div>
              <span v-for="tag in tags" :key="tag"> #{{ tag }}</span>
              <br />
              <!-- Submit Button-->
              <button class="btn btn-primary" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";

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

      const res = await projectFirestore.collection("posts").add(post);

      router.push({
        name: "Home",
      });
    };

    return { title, body, tag, tags, handleKeyDown, handleSubmit };
  },
};
</script>

<style></style>
