<template>
  <div class="container-fluid">
    <h1 class="my-5 row justify-content-center">This is an about page!</h1>
    <div class="row justify-content-center">
      <div class="col-5">
        <label for="card-element">Credit or Debit Card</label>
        <div id="card-element" class="border border-primary rounded p-2"></div>
        <div id="card-errors" role="alert"></div>
        <button @click="chargeCard" class="btn btn-primary mt-3"> Submit Payment</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'about',
  mounted: function () {
    this.stripe = window.Stripe(this.publishableKey)
    const elements = this.stripe.elements()

    const style = {
      base: {
        fontSize: '16px',
        color: '#32325d'
      }
    }

    this.card = elements.create('card', {style})
    this.card.mount('#card-element')
    this.card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors')
      if (error) {
        displayError.textContent = error.message
      } else {
        displayError.textContent = ''
      }
    })
  },
  data: function () {
    return {
      stripe: null,
      card: null
    }
  },
  methods: {
    async chargeCard () {
      if (!this.card) return

      const {token, error} = await this.stripe.createToken(this.card)
      if (error) {
        const displayError = document.getElementById('card-errors')
        displayError.textContent = error.message
      } else {
        this.stripeTokenHandler(token)
      }
    },
    stripeTokenHandler (token) {
      // console.log(token)
      axios.post('/charge_token', {
        stripeToken: token
      }).then((response) => { console.log(response) })
        .catch((error) => { console.log(error) })
    }
  }
}
</script>

<style scoped>

</style>
