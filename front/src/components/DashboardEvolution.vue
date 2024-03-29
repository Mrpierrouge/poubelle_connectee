<template>
	<div class="dashboard-section evolution">
		<h3>EVOLUTION PAR MOIS</h3>
		<div>
			<canvas id="myChart" width="200" height="200"></canvas>
		</div>
	</div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Septembre','Octobre','Novembre','Décembre','Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
          datasets: [{
            data: [65, 59, 80, 81, 56, 55, 40,68, 70, 75, 80],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
</script>
