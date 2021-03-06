<template>
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>

export default {
  name: "BarChart",
  props: ['propsData'],
  mounted() {
    new this.$_Chart(this.$refs.barChart, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsData
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
</script>

<style scoped>

</style>