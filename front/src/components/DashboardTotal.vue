<template>
  <div class="dashboard-section total-month">
    <h3>TOTAL DU JOUR : {{ totalDay }} G</h3>
    <div class="time-selector">
      <div
        class="toggle-button"
        :class="{ active: selectedOption === 'Semaine' }"
        @click="loadChart1('Semaine')"
      >
        Semaine
      </div>
      <div
        class="toggle-button"
        :class="{ active: selectedOption === 'Mois' }"
        @click="loadChart2('Mois')"
      >
        Mois
      </div>
      <div
        class="toggle-button"
        :class="{ active: selectedOption === 'Année' }"
        @click="loadChart3('Année')"
      >
        Année
      </div>
    </div>
  </div>
  <div class="dashboard-stats">
    <div class="stat-box">
      <p>S-1 : {{ totalPrecedentWeek }} G</p>
    </div>
    <div class="stat-box">
      <p>M-1 : {{ totalPrecedentMonth }} G</p>
    </div>
    <div class="stat-box">
      <p>TOTAL DU MOIS: {{ totalMonth }}G</p>
    </div>
  </div>
  <div class="dashboard-section">
    <h3>EVOLUTION</h3>
    <div class="evolution">
      <canvas class="chart" ref="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      selectedOption: "",
      chartInstance: null,
      daysOfWeek: [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
      ],
    };
  },
  props: {
    pesee: {
      type: Array,
      required: true,
    },
    today: {
      type: Date,
      required: true,
    },
  },
  computed: {
    totalDay() {
      return this.getTotalDay(this.today);
    },
    totalMonth() {
      return this.getTotalMonth(this.today);
    },
    totalPrecedentMonth() {
      return this.getTotalMonth(
        new Date(this.today.getFullYear(), this.today.getMonth() - 1)
      );
    },
    totalPrecedentWeek() {
      let total = 0;
      for (let i = 8; i < 16; i++) {
        total += this.getTotalDay(this.getDayOffset(this.today, i));
      }
      return total;
    },
  },
  methods: {
    getDayOffset(date, offset) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - offset);
      return newDate;
    },
    getTotalMonth(monthchecker) {
      let total = 0;
      const Month = this.pesee.filter((poids) =>
        this.isSameMonth(poids.date, monthchecker)
      );
      Month.forEach((poids) => {
        total += poids.poids;
      });
      return total;
    },
    getTotalDay(daychecker) {
      let total = 0;
      const Day = this.pesee.filter((poids) =>
        this.isSameDay(poids.date, daychecker)
      );
      Day.forEach((poids) => {
        total += poids.poids;
      });
      return total;
    },
    isSameMonth(date1, date2) {
      const parsedDate1 = new Date(date1);
      const parsedDate2 = new Date(date2);
      return parsedDate1.getMonth() === parsedDate2.getMonth();
    },
    isSameDay(date1, date2) {
      const parsedDate1 = new Date(date1);
      const parsedDate2 = new Date(date2);
      return (
        parsedDate1.getDate() === parsedDate2.getDate() &&
        this.isSameMonth(date1, date2)
      );
    },
    loadChart1(option) {
      this.selectedOption = option;
      if (this.chartInstance) this.chartInstance.destroy();
      let ctx = this.$refs.myChart.getContext("2d");
      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            this.daysOfWeek[this.today.getDay() % 7],
            this.daysOfWeek[(this.today.getDay() + 1) % 7],
            this.daysOfWeek[(this.today.getDay() + 2) % 7],
            this.daysOfWeek[(this.today.getDay() + 3) % 7],
            this.daysOfWeek[(this.today.getDay() + 4) % 7],
            this.daysOfWeek[(this.today.getDay() + 5) % 7],
            this.daysOfWeek[(this.today.getDay() + 6) % 7],
            this.daysOfWeek[(this.today.getDay() + 7) % 7],
          ],
          datasets: [
            {
              label: "Evolution des 7 derniers jours",
              data: [
                this.getTotalDay(this.getDayOffset(this.today, 7)),
                this.getTotalDay(this.getDayOffset(this.today, 6)),
                this.getTotalDay(this.getDayOffset(this.today, 5)),
                this.getTotalDay(this.getDayOffset(this.today, 4)),
                this.getTotalDay(this.getDayOffset(this.today, 3)),
                this.getTotalDay(this.getDayOffset(this.today, 2)),
                this.getTotalDay(this.getDayOffset(this.today, 1)),
                this.getTotalDay(this.today),
              ],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    loadChart2(option) {
      this.selectedOption = option;
      if (this.chartInstance) this.chartInstance.destroy();
      let ctx = this.$refs.myChart.getContext("2d");

      let dateToAdd = new Date(
        this.today.getFullYear(),
        this.today.getMonth(),
        1
      );
      const labels = [];
      const data = [];

      while (dateToAdd.getMonth() === this.today.getMonth()) {
        labels.push(dateToAdd.getDate());
        data.push(this.getTotalDay(dateToAdd));
        dateToAdd.setDate(dateToAdd.getDate() + 1);
      }

      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Evolution du mois",
              data: data,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },

    loadChart3(option) {
      this.selectedOption = option;
      if (this.chartInstance) this.chartInstance.destroy();
      let ctx = this.$refs.myChart.getContext("2d");
      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre",
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
          ],
          datasets: [
            {
              label: "Evolution de l'année",
              data: [
                this.getTotalMonth(new Date(2023, 8)),
                this.getTotalMonth(new Date(2023, 9)),
                this.getTotalMonth(new Date(2023, 10)),
                this.getTotalMonth(new Date(2023, 11)),
                this.getTotalMonth(new Date(2024, 0)),
                this.getTotalMonth(new Date(2024, 1)),
                this.getTotalMonth(new Date(2024, 2)),
                this.getTotalMonth(new Date(2024, 3)),
                this.getTotalMonth(new Date(2024, 4)),
                this.getTotalMonth(new Date(2024, 5)),
                this.getTotalMonth(new Date(2024, 6)),
              ],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.evolution {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0px 15px;
  background-color: #fff;
  filter: drop-shadow(1px 2px 3px #b2b2b2);
  max-height: 500px;
}

.total-month {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time-selector {
  border-radius: 30px;
  padding: 0px 5px;
  gap: 10px;
  width: fit-content;
  background-color: #fff;
  filter: drop-shadow(1px 2px 3px #b2b2b2);
}

.toggle-button {
  display: inline-block;
  cursor: pointer;
  user-select: none;
  border-radius: 30px;
  padding: 2px 5px;
  margin-right: 5px;
}

.active {
  background-color: #b2b2b2;
  padding: 0px 5px;
  color: #fff;
}

.dashboard-stats {
  display: flex;
  gap: 20px;
}

.stat-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 0px 15px;
  width: fit-content;
  background-color: #fff;
  filter: drop-shadow(1px 2px 3px #b2b2b2);
}

.arrow-down,
.arrow-up {
  width: 20px;
  height: 20px;
  margin-top: 10px;
}
@media (max-width: 550px) {
  .dashboard-stats {
    flex-direction: column;
    gap: 20px;
  }
}
.chart {
  width: 100%;
  height: 100%;
}
</style>
