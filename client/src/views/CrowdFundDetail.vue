<template>
  <div class="crowdfund-detail-container">
    <div class="crowdfund-detail">
      <img :src="crowdfund.image" :alt="crowdfund.name" class="crowdfund-image" />
      <div class="crowdfund-content">
        <h1>{{ crowdfund.name }}</h1><br>
        <p>{{ crowdfund.description }}</p><br>
        
        <div class="target" style="display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: bold;">
          <p>Terkumpul: Rp. {{ formatNumber(crowdfund.raised) }}</p>
          <p>Target: Rp. {{ formatNumber(crowdfund.goal) }}</p>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <p class="progress-text">{{ progressPercentage.toFixed(2) }}% funded</p>

        <!-- Kontainer untuk Tombol -->
        <div class="button-container">
          <button class="donatebutt" @click="openDonationModal">Donasi</button>
          <button class="favbutt" @click="addToFavorites">Favorit</button>
        </div>

        <!-- Form Komentar -->
        <h2>Comment</h2>
        <form @submit.prevent="submitComment" class="comment-form">
          <div>
            <label for="message">Message:</label>
            <textarea v-model="comment.message" id="message" class="comment-textarea"></textarea>
          </div>
          <button type="submit" class="comment-submit">Submit</button>
        </form>

        <!-- Daftar Donasi -->
        <h2>Daftar Donasi</h2>
        <ul>
          <li v-for="donation in donations" :key="donation._id">
            {{ donation.paymentMethod }} - Rp. {{ formatNumber(donation.amount) }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Modal Donasi -->
    <div v-if="isDonationModalOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeDonationModal">&times;</span>
        <h2>Donasi Sekarang</h2>
        <form @submit.prevent="submitDonation">
          <div>
            <label for="paymentMethod">Metode Pembayaran:</label>
            <select v-model="donation.paymentMethod" id="paymentMethod">
              <option value="select">Pick an option</option>
              <option value="QRIS">QRIS</option>
              <option value="Transfer">Transfer</option>
            </select>
          </div>
          <div v-if="donation.paymentMethod === 'Transfer'">
            <label for="bankName">Nama Bank:</label>
            <input type="text" v-model="donation.bankName" id="bankName" />
          </div>
          <div>
            <label for="amount">Nominal Donasi:</label>
            <input type="number" v-model="donation.amount" id="amount" />
          </div>
          <div v-if="donation.paymentMethod !== 'select' && donation.amount > 0">
            <div v-if="donation.paymentMethod === 'QRIS'">
              <img src="/img/kris.png" alt="QRIS" class="qris-image" />
            </div>
            <div v-if="donation.paymentMethod === 'Transfer'">
              <p>Daftar Rekening Donasi:</p>
              <ul>
                <li>Bank A - 1234567890</li>
                <li>Bank B - 0987654321</li>
                <!-- Tambahkan daftar rekening lainnya di sini -->
              </ul>
            </div>
          </div>
          <div>
            <label for="proof">Upload Bukti Transaksi:</label>
            <input type="file" @change="handleFileUpload" id="proof" />
          </div>
          <button class="subm-form" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CrowdFundDetail",
  props: ['id'],
  data() {
    return {
      crowdfund: {},
      progressPercentage: 0,
      isDonationModalOpen: false,
      donation: {
        paymentMethod: 'select',
        bankName: '',
        amount: 0,
        proof: null,
      },
      comment: {
        message: '',
      },
      donations: [],
      comments: [], // Add this line
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
      this.calculateProgress();
      this.fetchDonations();
      this.fetchComments(); // Add this line
    } catch (error) {
      console.error('Error fetching crowdfund:', error);
    }
  },
  methods: {
    calculateProgress() {
      if (this.crowdfund.goal > 0) {
        this.progressPercentage = (this.crowdfund.raised / this.crowdfund.goal) * 100;
      }
    },
    formatNumber(number) {
      return number ? number.toLocaleString('id-ID') : '0';
    },
    openDonationModal() {
      this.isDonationModalOpen = true;
    },
    closeDonationModal() {
      this.isDonationModalOpen = false;
    },
    handleFileUpload(event) {
      this.donation.proof = event.target.files[0];
    },
    async submitDonation() {
      const formData = new FormData();
      formData.append('paymentMethod', this.donation.paymentMethod);
      formData.append('bankName', this.donation.bankName);
      formData.append('amount', this.donation.amount);
      formData.append('proof', this.donation.proof);

      try {
        const response = await fetch('http://localhost:5000/donations', {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Donation submitted:', data);
        this.closeDonationModal();
        this.fetchDonations(); // Refresh the list of donations
      } catch (error) {
        console.error('Error submitting donation:', error);
      }
    },
    async fetchDonations() {
      try {
        const response = await fetch('http://localhost:5000/donations');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.donations = data;
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    },
    addToFavorites() {
      console.log('Added to favorites:', this.crowdfund.id);
    },
    submitComment() {
      console.log('Comment submitted:', this.comment.message);
    }
  }
};
</script>

<style scoped>
.crowdfund-detail-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.crowdfund-detail {
  display: flex;
  max-width: 800px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.crowdfund-image {
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 8px 0 0 8px;
}

.crowdfund-content {
  padding: 20px;
  flex: 1;
  h1{
    font-weight: bold;
    text-align: center;
    font-size: 20px;
  }
  p{
    font-size: 18px;
  }
}

.target {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.progress-bar-container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px 0;
}

.progress-bar {
  height: 20px;
  background-color: #3b82f6;
  border-radius: 8px;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  margin-top: 10px;
  color:#3b82f6;
  font-weight: bold;
}

/* Gaya untuk Kontainer Tombol */
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
.donatebutt{
  background-color: #4CAF50; 
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 8px;
}
.favbutt{
  background-color: #3b82f6; 
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 8px;
}



/* Modal Styles */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h2{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.qris-image,.bank-image {
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
}

.subm-form{
  background-color: #3b82f6; 
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    margin-left: 170px;
    margin-top: 50px;
}

.comment-form {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 20px;
}

.comment-textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 10px;
}

.comment-submit {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
}

.comment-submit:hover {
  background-color: #45a049;
}
</style>