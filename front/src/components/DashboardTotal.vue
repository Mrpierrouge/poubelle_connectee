<template>
  <div class="dashboard-section total-month">
    <h3>TOTAL DU MOIS: {{ totalMonth }}G</h3>
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
      <p>S-1 : {{ stat1 }}%</p>
      <img
        src="../assets/fleche_bas.png"
        alt="Flèche vers le bas"
        class="arrow-down"
      />
    </div>
    <div class="stat-box">
      <p>M-1 : {{ stat2 }}%</p>
      <img
        src="../assets/fleche_haut.png"
        alt="Flèche vers le haut"
        class="arrow-up"
      />
    </div>
    <div class="stat-box">
      <p>TOTAL DU JOUR : {{ totalDay }} G</p>
    </div>
  </div>
  <div class="dashboard-section">
    <h3>EVOLUTION</h3>
    <div class="evolution">
      <canvas class="chart" ref="myChart" width="200" height="200"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

Date.prototype.getWeek = function () {
  let d = new Date(
    Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
  );
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
};

export default {
  data() {
    return {
      stat1: 0,
      stat2: 0,
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
      let total = 0;
      const Jour = this.pesee.filter((poids) =>
        this.isSameDay(poids.date, this.today)
      );
      Jour.forEach((poids) => {
        total += poids.poids;
      });
      return total;
    },
    totalWeek() {
      let total = 0;
      const Week = this.pesee.filter((poids) =>
        this.isSameWeek(poids.date, this.today)
      );
      Week.forEach((poids) => {
        total += poids.poids;
      });
      return total;
    },
    totalMonth() {
      return this.getTotalMonth(this.today);
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
    getTotalWeek(weekchecker) {},
    isSameMonth(date1, date2) {
      const parsedDate1 = new Date(date1);
      const parsedDate2 = new Date(date2);
      return parsedDate1.getMonth() === parsedDate2.getMonth();
    },
    isSameWeek(date1, date2) {
      const parsedDate1 = new Date(date1);
      const parsedDate2 = new Date(date2);
      return (
        parsedDate1.getWeek() === parsedDate2.getWeek() &&
        this.isSameMonth(date1, date2)
      );
    },
    isSameDay(date1, date2) {
      const parsedDate1 = new Date(date1);
      const parsedDate2 = new Date(date2);
      return (
        parsedDate1.getDate() === parsedDate2.getDate() &&
        this.isSameWeek(date1, date2)
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
            this.daysOfWeek[(this.today.getDay() - 7 + 6) % 7],
            this.daysOfWeek[(this.today.getDay() - 6 + 6) % 7],
            this.daysOfWeek[(this.today.getDay() - 5 + 6) % 7],
            this.daysOfWeek[(this.today.getDay() - 4 + 6) % 7],
            this.daysOfWeek[(this.today.getDay() - 3 + 6) % 7],
            this.daysOfWeek[(this.today.getDay() - 2 + 6) % 7],
            this.daysOfWeek[(this.today.getDay() - 1 + 6) % 7],
            this.daysOfWeek[(this.today.getDay() + 6) % 7],
          ],
          datasets: [
            {
              label: "Evolution des 7 derniers jours",
              data: [
                this.getTotalDay(this.getDayOffset(this.today, 7)), // Jour 1 de la semaine précédente
                this.getTotalDay(this.getDayOffset(this.today, 6)), // Jour 1 de la semaine précédente
                this.getTotalDay(this.getDayOffset(this.today, 5)), // Jour 2 de la semaine précédente
                this.getTotalDay(this.getDayOffset(this.today, 4)), // Jour 3 de la semaine précédente
                this.getTotalDay(this.getDayOffset(this.today, 3)), // Jour 4 de la semaine précédente
                this.getTotalDay(this.getDayOffset(this.today, 2)), // Jour 5 de la semaine précédente
                this.getTotalDay(this.getDayOffset(this.today, 1)), // Jour 6 de la semaine précédente
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
      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Semaine 1", "Semaine 2", "Semaine 3", "Semaine 4"],
          datasets: [
            {
              label: "Evolution du mois",
              data: [65, 59, 80, 81],
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
                this.getTotalMonth(new Date(2023, 9)),
                this.getTotalMonth(new Date(2023, 10)),
                this.getTotalMonth(new Date(2023, 11)),
                this.getTotalMonth(new Date(2023, 12)),
                this.getTotalMonth(new Date(2024, 1)),
                this.getTotalMonth(new Date(2024, 2)),
                this.getTotalMonth(new Date(2024, 3)),
                this.getTotalMonth(new Date(2024, 4)),
                this.getTotalMonth(new Date(2024, 5)),
                this.getTotalMonth(new Date(2024, 6)),
                this.getTotalMonth(new Date(2024, 7)),
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
  max-width: 400px;
  max-height: 300px;
  background-color: #fff;
  filter: drop-shadow(1px 2px 3px #b2b2b2);
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
</style>
