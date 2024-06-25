<template>
  <q-page class="q-pa-md">
    <q-spinner v-if="isLoading" size="lg" color="primary" />
    <q-card v-else-if="photo" class="q-pa-md q-card-style">
      <q-img :src="photo.url" class="q-mb-md photo-img" :alt="photo.title" />
      <div class="photo-title">{{ photo.title }}</div>
      <q-btn @click="goBack" color="primary" class="q-mt-md"
        >Back to Gallery</q-btn
      >
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const photo = ref(null);
const isLoading = ref(false);

const fetchPhoto = async (id) => {
  try {
    isLoading.value = true;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    photo.value = await response.json();
  } catch (error) {
    console.error("Error fetching photo:", error);
  } finally {
    isLoading.value = false;
  }
};

const goBack = () => {
  router.push("/album");
};

onMounted(() => {
  fetchPhoto(route.params.photoId);
});
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.q-card-style {
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.photo-img {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #eee;
}

.photo-title {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
}
</style>
