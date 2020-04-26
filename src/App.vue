<template>
  <div>
    <header>
      <app-header title="Vue App" />
    </header>
    <div class="body">
      <main class="content">
        <app-body />
      </main>
    </div>
    <footer>
      <app-footer />
    </footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: { AppHeader, AppBody, AppFooter },
};
</script>
