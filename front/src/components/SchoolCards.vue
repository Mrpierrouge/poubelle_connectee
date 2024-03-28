<template>
  <div class="card">
    <img :src="school.image" :alt="school.name" />
    <h2>{{ school.name }}</h2>
    <button>VOIR LES STATISTIQUES ></button>
  </div>
</template>

<script>
export default {
  props: {
    school: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: left;
  background-color: #fff;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.card h2 {
  margin-bottom: 10px;
}

.card button {
  background-color: rgb(50, 45, 41);
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: transform 0.3s ease;
}

.card button:hover {
  transform: scale(1.03);
}
</style>
