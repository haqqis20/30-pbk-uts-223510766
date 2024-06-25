<template>
  <div>
    <h2>TodoList</h2>
    <h3>Form Pendaftaran Kegiatan</h3>
    <table>
      <tr>
        <td><label for="activityName">Nama Kegiatan:</label></td>
        <td>
          <input
            type="text"
            id="activityName"
            v-model="activityName"
            required
          />
        </td>
      </tr>
      <tr>
        <td><label for="activityDate">Tanggal Kegiatan:</label></td>
        <td>
          <input
            type="date"
            id="activityDate"
            v-model="activityDate"
            required
          />
        </td>
      </tr>
      <tr>
        <td><label for="activityTime">Jam Kegiatan:</label></td>
        <td>
          <input
            type="time"
            id="activityTime"
            v-model="activityTime"
            required
          />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button @click="submitForm">Tambah Kegiatan</button>
        </td>
      </tr>
    </table>

    <h3>Daftar Kegiatan:</h3>
    <ul>
      <li v-for="(activity, index) in filteredActivities" :key="index">
        <label>
          <input
            type="checkbox"
            v-model="activity.completed"
            @change="toggleTodoStatus(activity)"
          />
          <span :class="{ completed: activity.completed }">
            {{ activity.name }} - {{ activity.date }} {{ activity.time }}
          </span>
        </label>
        <button @click="editActivity(index)">Edit</button>
        <div v-if="activity.editing">
          <input
            type="text"
            v-model="activity.name"
            placeholder="Nama Kegiatan"
          />
          <input
            type="date"
            v-model="activity.date"
            placeholder="Tanggal Kegiatan"
          />
          <input
            type="time"
            v-model="activity.time"
            placeholder="Jam Kegiatan"
          />
          <button @click="updateActivity(index)">Update</button>
        </div>
      </li>
    </ul>
    <p v-if="filteredActivities.length === 0">
      Tidak ada kegiatan yang belum selesai.
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTodoStore } from "../stores/todos.js";

const store = useTodoStore();
const activityName = ref("");
const activityDate = ref("");
const activityTime = ref("");

const submitForm = () => {
  store.addTodo({
    name: activityName.value,
    date: activityDate.value,
    time: activityTime.value,
    completed: false,
    editing: false,
  });
  activityName.value = "";
  activityDate.value = "";
  activityTime.value = "";
};

const editActivity = (index) => {
  store.todos[index].editing = true;
};

const updateActivity = (index) => {
  store.todos[index].editing = false;
};

const toggleTodoStatus = (activity) => {
  store.toggleTodoStatus(activity);
};

const filteredActivities = computed(() => store.filteredTodos("undone"));
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
