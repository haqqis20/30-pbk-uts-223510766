<template>
  <div>
    <h2>Post</h2>
    <h3>Select User:</h3>
    <select v-model="selectedUser" @change="loadPosts">
      <option value="" disabled>Select User</option>
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
    <div v-if="selectedUser">
      <h3>
        Posts by {{ users.find((user) => user.id === selectedUser).name }}:
      </h3>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h4>{{ post.title }}</h4>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);
const selectedUser = ref(null);
const posts = ref([]);

// Fungsi untuk memuat data pengguna dari JSONPlaceholder
const loadUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  users.value = data;
};

// Fungsi untuk memuat data postingan sesuai dengan pengguna yang dipilih dari JSONPlaceholder
const loadPosts = async () => {
  if (selectedUser.value) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`
    );
    const data = await response.json();
    posts.value = data;
  }
};

onMounted(loadUsers);
</script>

<style scoped>
/* Styles specific to the Post component */
</style>
