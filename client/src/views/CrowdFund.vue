<template>
  <div>
    <h1>CrowdFund Page</h1>
    <div class="card-container">
      <div class="card" v-for="crowdfund in crowdfunds" :key="crowdfund.id">
        <img :src="crowdfund.image" :alt="crowdfund.name" class="card-image" />
        <router-link
          :to="{ name: 'CrowdFundDetail', params: { id: crowdfund.id } }"
          class="card-title"
        >
          <h2>{{ crowdfund.name }}</h2>
        </router-link>
        <p><strong>Terkumpul:</strong>Rp. {{ formatNumber(crowdfund.raised) }}</p>
        <p><strong>Target:</strong>Rp. {{ formatNumber(crowdfund.goal) }}</p>
        <div class="progress-bar-container">
          <div class="progress-bar" :style="{ width: calculateProgress(crowdfund) + '%' }"></div>
        </div>
        <p>{{ calculateProgress(crowdfund).toFixed(2) }}% funded</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CrowdFund",
  data() {
    return {
      crowdfunds: [],
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:5000/crowdfunds');
      const data = await response.json();
      this.crowdfunds = data;
    } catch (error) {
      console.error('Error fetching crowdfunds:', error);
    }
  },
  methods: {
    calculateProgress(crowdfund) {
      if (crowdfund.goal > 0) {
        return (crowdfund.raised / crowdfund.goal) * 100;
      }
      return 0;
    },
    formatNumber(number) {
      return number.toLocaleString('id-ID');
  }
},
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
}

.card-image {
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 8px 8px;
}

.card-title {
  text-decoration: none;
  color: inherit;
}

.card-title h2 {
  margin-top: 0;
  font-weight: bold;
  font-size: 1.5em;
  color: #3b82f6;
  cursor: pointer;
}

.card p {
  margin: 10px 0;
}

.card p strong {
  display: block;
  margin-bottom: 5px;
}

.progress-bar-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px 0;
}

.progress-bar {
  height: 20px;
  background-color: #3b82f6;
  border-radius: 8px;
  transition: width 0.3s ease;
}
</style>