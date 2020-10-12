<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="border-bottom">
    <b-navbar-brand href="#"><b>Campo</b>Trader</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Início</b-nav-item>
        <b-nav-item href="#">Portofólio</b-nav-item>
        <b-nav-item href="/stocks">Ações</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item href="#">Finalizar Dia</b-nav-item>
        <b-nav-item-dropdown text="Salvar e carregar" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Saldo: R$1000</b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {}
</script>