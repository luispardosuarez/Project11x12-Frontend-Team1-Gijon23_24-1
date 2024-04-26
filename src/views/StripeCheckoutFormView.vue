<script setup>
import { useStripeStore } from "@/stores/stripeStore";
import { loadStripe } from "@stripe/stripe-js";
import { onMounted, reactive, ref } from "vue";

const stripeStore = useStripeStore()

const isLoading = ref(false);
const messages = ref([]);

let stripe;
let elements;
let appearance;

const total = reactive({
      totalPrice:0
});
//const total = ref(null);

onMounted(async () => {
  total.totalPrice=stripeStore.total*100;
  console.log(total.totalPrice)
  const publishableKey = import.meta.env.VITE_API_ENDPOINT_STRIPE_PK;
  stripe = await loadStripe(publishableKey);

  const clientSecret = (await stripeStore.post(total)).clientSecret;
  console.log(clientSecret)

  appearance = {
    theme: "flat",
    variables: {
      fontFamily: '"Gill Sans", sans-serif',
      fontLineHeight: "1.5",
      borderRadius: "10px",
      colorBackground: "#F6F8FA",
      accessibleColorOnColorPrimary: "#262626",
    },
    rules: {
      '.Block': {
        backgroundColor: 'var(--colorBackground)',
        boxShadow: 'none',
        padding: '12px'
      },
      '.Input': {
        padding: '12px'
      },
      '.Input:disabled, .Input--invalid:disabled': {
        color: 'lightgray'
      },
      '.Tab': {
        padding: '10px 12px 8px 12px',
        border: 'none'
      },
      '.Tab:hover': {
        border: 'none',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
      },
      '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
        border: 'none',
        backgroundColor: '#fff',
        boxShadow: '0 0 0 1.5px var(--colorPrimaryText), 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 7px rgba(18, 42, 66, 0.04)'
      },
      '.Label': {
        fontWeight: '500',
      }
    }
  }

  elements = stripe.elements({ clientSecret, appearance });
  const paymentElement = elements.create("payment");
  paymentElement.mount("#payment-element");
  const linkAuthenticationElement = elements.create("linkAuthentication");
  linkAuthenticationElement.mount("#link-authentication-element");
  isLoading.value = false;
});

const handleSubmit = async () => {
  if (isLoading.value) {
    return;
  }

  isLoading.value = true;

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/return`,
    },
  });

  if (error.type === "card_error" || error.type === "validation_error") {
    messages.value.push(error.message);
  } else {
    messages.value.push("An unexpected error occured.");
  }

  isLoading.value = false;
};
</script>

<template>
  <main>
    <div class="container">
    <h1>Payment</h1>

    <form
      id="payment-form"
      @submit.prevent="handleSubmit"
    >
      <div id="link-authentication-element" />
      <div id="payment-element" />
      <button
        id="submit"
        :disabled="isLoading"
      >
        Pay now
      </button>
      <StripeMessages :messages="messages" />
    </form>
  </div>
  </main>
</template>

<style lang="scss" scoped>
.container{
  border: 1px solid $gray;
  margin:2rem;
  box-shadow: 3px;
  margin-left: 4rem;
h1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  padding: 2%;
}
main {
  background-color: white;
  min-height: 100vh;
}

#payment-element, #link-authentication-element {
  width: 60%;
  margin: auto;
 
}

button {
  background-color: #D0003E;
    padding: 0.5rem;
    width: 5rem;
    border: none;
    margin-left: 45%;
    margin-top: 2%;
    color: white;
    margin-bottom: 2rem;
}}
</style>












































































































































