<template>
  <b-card-group deck>
    <b-card
      v-for="stock in stocks"
      :key="stock.id"
      header-tag="header"
      header-bg-variant="success"
    >
      <template v-slot:header>
        <span class="mb-0 text-light">{{ stock.name }} (Preço: R$ {{stock.price}})</span>
      </template>
    <b-card-body class="p-0">
      <b-card-text>
        <b-form-group
          class="mb-0"
          label="Quantidade:"
          :label-for="'input-quantity-' + stock.id"
        >
          <b-form-input
            :id="'input-quantity-' + stock.id"
            v-model="stock.quantity"
          ></b-form-input>
        </b-form-group>
      </b-card-text>
    </b-card-body>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  data: () => ({
    stocks: [
      {
        id: 0,
        name: "Monsanto",
        price: 100,
        quantity: 0
      },
      {
        id: 1,
        name: "Bayer",
        price: 100,
        quantity: 0
      },
      {
        id: 2,
        name: "Monsanto",
        price: 100,
        quantity: 0
      },
      {
        id: 3,
        name: "Monsanto",
        price: 100,
        quantity: 0
      },
      {
        id: 4,
        name: "Monsanto",
        price: 100,
        quantity: 0
      },
      {
        id: 5,
        name: "Monsanto",
        price: 100,
        quantity: 0
      },
    ],
  })
}
</script>