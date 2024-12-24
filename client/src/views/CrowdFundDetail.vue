<template>
    <div>
      <h1>{{ crowdfund.name }}</h1>
      <p>{{ crowdfund.description }}</p>
      <p><strong>Goal:</strong> {{ crowdfund.goal }}</p>
      <p><strong>Raised:</strong> {{ crowdfund.raised }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "CFDetail",
    props: ['id'],
    data() {
      return {
        crowdfund: {},
      };
    },
    async created() {
      try {
        const response = await fetch(`http://localhost:5000/crowdfunds/${this.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.crowdfund = data;
      } catch (error) {
        console.error('Error fetching crowdfund:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>