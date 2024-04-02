<template>

    <div class="row">
        <div class="ladate">
          <input type="date" class='date' v-model="date">
        </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
        date: new Date().toISOString().substring(0, 10)
    }
  },
  watch: {
    
    date(newVal, oldVal) {
      console.log("La nouvelle date sélectionnée est: ", newVal);
      
    }
  }
}
</script>