<template>
  <div class="error-page">
    <div class="error-overlay"></div>
    <div class="error-content">
      <div class="error-code">404</div>
      <h1 class="error-title">Страница не найдена</h1>
      <p class="error-description">
        К сожалению, запрашиваемая страница не существует или была перемещена.
      </p>
      <NuxtLink to="/" class="btn">
        Вернуться на главную
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

useHead({
  title: '404 - Страница не найдена | Pirole'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap');

.error-page {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url('/images/3.png') center center / cover no-repeat;
  font-family: 'Open Sans', sans-serif;
}

.error-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 26, 0.95) 0%,
    rgba(26, 26, 26, 0.85) 50%,
    rgba(26, 26, 26, 0.95) 100%
  );
}

.error-content {
  position: relative;
  text-align: center;
  padding: 40px 20px;
  max-width: 600px;
}

.error-code {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(8rem, 25vw, 15rem);
  font-weight: 700;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 2px #c9a227;
  text-shadow:
    0 0 40px rgba(201, 162, 39, 0.3),
    0 0 80px rgba(201, 162, 39, 0.1);
  margin-bottom: 20px;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.error-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #e8e8e8;
  margin-bottom: 20px;
}

.error-description {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #999999;
  margin-bottom: 40px;
  line-height: 1.7;
}

.btn {
  display: inline-block;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 40px;
  background: #c9a227;
  color: #1a1a1a;
  text-decoration: none;
  border: 2px solid #c9a227;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn:hover {
  background: transparent;
  color: #c9a227;
}

.btn:active {
  transform: scale(0.98);
}

@media (max-width: 600px) {
  .error-code {
    -webkit-text-stroke-width: 1.5px;
  }

  .error-title {
    letter-spacing: 3px;
  }

  .btn {
    padding: 12px 30px;
    font-size: 0.9rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .error-code {
    animation: none;
  }
}
</style>
