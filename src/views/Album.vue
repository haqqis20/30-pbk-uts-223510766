<template>
  <q-page class="q-pa-md">
    <q-spinner v-if="isLoading" size="lg" color="primary" />
    <div v-else class="photo-grid">
      <q-img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.thumbnailUrl"
        :alt="photo.title"
        class="photo-item cursor-pointer"
        @click="selectPhoto(photo.id)"
      ></q-img>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const photos = ref([]);
const isLoading = ref(false);

const fetchPhotos = async (albumId = 1) => {
  try {
    isLoading.value = true;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    ); // Directly fetch filtered data
    const data = await response.json();
    photos.value = data.map((photo) => ({
      id: photo.id,
      thumbnailUrl: photo.thumbnailUrl,
      url: photo.url,
      title: photo.title,
    }));
  } catch (error) {
    console.error("Error fetching photos:", error);
  } finally {
    isLoading.value = false;
  }
};

const selectPhoto = (photoId) => {
  router.push({ path: `/photo/${photoId}` });
};

onMounted(() => {
  fetchPhotos();
});
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
}

.photo-item {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.photo-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>
