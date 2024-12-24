<template>
  <div>
    <h1>CrowdFund Page</h1>
    <div class="card-container">
      <div class="card" v-for="crowdfund in crowdfunds" :key="crowdfund.id">
        <router-link
          :to="{ name: 'CrowdFundDetail', params: { id: crowdfund.id } }"
          class="card-title"
        >
          <h2>{{ crowdfund.name }}</h2>
        </router-link>
        <p>{{ crowdfund.description }}</p>
        <p><strong>Goal:</strong> {{ crowdfund.goal }}</p>
        <p><strong>Raised:</strong> {{ crowdfund.raised }}</p>
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

.card h2 {
  margin-top: 0;
  font-size: 1.5em;
}

.card p {
  margin: 10px 0;
}

.card p strong {
  display: block;
  margin-bottom: 5px;
}
</style>