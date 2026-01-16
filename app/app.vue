<template>
  <div class="site">
    <!-- Header -->
    <header class="header">
      <div class="container header-inner">
        <a href="#hero" class="logo">
          <img src="/images/logo-horizontal.svg" alt="Pirole" />
        </a>
        <nav class="nav">
          <a href="#about" class="nav-link">О нас</a>
          <a href="#gallery" class="nav-link">Работы</a>
          <a href="#contacts" class="nav-link">Контакты</a>
        </nav>
        <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Меню">
          <span :class="{ active: mobileMenuOpen }"></span>
          <span :class="{ active: mobileMenuOpen }"></span>
          <span :class="{ active: mobileMenuOpen }"></span>
        </button>
      </div>
      <!-- Mobile menu -->
      <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
        <a href="#about" class="nav-link" @click="mobileMenuOpen = false">О нас</a>
        <a href="#gallery" class="nav-link" @click="mobileMenuOpen = false">Работы</a>
        <a href="#contacts" class="nav-link" @click="mobileMenuOpen = false">Контакты</a>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <img src="/images/logo.svg" alt="Pirole" class="hero-logo" />
        <p class="hero-subtitle">Кастомная мебель для баров и ресторанов</p>
        <p class="hero-description">Создаём уникальную мебель в индустриальном стиле из металла и дерева</p>
        <a href="#contacts" class="btn">Связаться с нами</a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">О нас</h2>
        <div class="about-content">
          <div class="about-text">
            <p>
              <strong>Pirole</strong> — это мастерская по производству кастомизированной мебели
              для баров, ресторанов и других заведений.
            </p>
            <p>
              Мы специализируемся на создании уникальных предметов интерьера в индустриальном
              и лофт стиле. Каждое изделие — это сочетание грубого металла и натурального дерева,
              создающее неповторимую атмосферу.
            </p>
            <p>
              Наша команда воплощает в жизнь самые смелые идеи: от барных стоек и столов
              до светильников и декоративных элементов. Мы работаем с каждым заказом индивидуально,
              учитывая все пожелания клиента.
            </p>
          </div>
          <div class="about-image">
            <img src="/images/2.png" alt="Мастерская Pirole" />
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="gallery">
      <div class="container">
        <h2 class="section-title">Наши проекты</h2>
        <div class="gallery-carousel">
          <button class="carousel-btn carousel-prev" @click="prevSlide" aria-label="Предыдущий">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <div class="carousel-track">
            <div
              class="carousel-slide"
              v-for="(image, index) in galleryImages"
              :key="index"
              :class="{
                'active': index === activeSlide,
                'prev': index === getPrevIndex(activeSlide),
                'next': index === getNextIndex(activeSlide)
              }"
              @click="index === activeSlide ? openLightbox(index) : goToSlide(index)"
            >
              <img :src="image.src" :alt="image.alt" loading="lazy" />
            </div>
          </div>
          <button class="carousel-btn carousel-next" @click="nextSlide" aria-label="Следующий">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        class="lightbox"
        :class="{ open: lightboxOpen }"
        @click="closeLightbox"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <button class="lightbox-close" @click="closeLightbox" aria-label="Закрыть">&times;</button>
        <button class="lightbox-prev" @click.stop="prevImage" aria-label="Предыдущее">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <div class="lightbox-content" @click.stop>
          <img
            :src="galleryImages[currentImage]?.src"
            :alt="galleryImages[currentImage]?.alt"
          />
          <div class="lightbox-counter">{{ currentImage + 1 }} / {{ galleryImages.length }}</div>
        </div>
        <button class="lightbox-next" @click.stop="nextImage" aria-label="Следующее">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </Teleport>

    <!-- Contacts Section -->
    <section id="contacts" class="contacts">
      <div class="container">
        <h2 class="section-title">Контакты</h2>
        <div class="contacts-content">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="contact-text">
                <span class="contact-label">Телефон</span>
                <a href="tel:+79168673550" class="contact-value">+7 (916) 867-35-50</a>
              </div>
            </div>
          </div>
          <div class="contact-cta">
            <p>Свяжитесь с нами для обсуждения вашего проекта</p>
            <a href="tel:+79168673550" class="btn">Позвонить</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p class="footer-text">&copy; {{ new Date().getFullYear() }} Pirole. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const lightboxOpen = ref(false)
const currentImage = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)
const activeSlide = ref(0)

const galleryImages = [
  { src: '/images/1.png', alt: 'Обеденная группа - стол и стулья' },
  { src: '/images/2.png', alt: 'Светильник в индустриальном стиле' },
  { src: '/images/3.png', alt: 'Интерьер в стиле лофт' },
  { src: '/images/4.png', alt: 'Гостиная зона' },
  { src: '/images/5.png', alt: 'Мебель для хранения' }
]

const openLightbox = (index) => {
  currentImage.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % galleryImages.length
}

const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + galleryImages.length) % galleryImages.length
}

// Carousel navigation
const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % galleryImages.length
}

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + galleryImages.length) % galleryImages.length
}

const goToSlide = (index) => {
  activeSlide.value = index
}

const getPrevIndex = (current) => {
  return (current - 1 + galleryImages.length) % galleryImages.length
}

const getNextIndex = (current) => {
  return (current + 1) % galleryImages.length
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!lightboxOpen.value) return

  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

// Touch swipe for mobile
const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diff = touchStartX.value - touchEndX.value

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextImage()
    } else {
      prevImage()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap');

:root {
  --color-bg: #1a1a1a;
  --color-bg-light: #2a2a2a;
  --color-bg-section: #222222;
  --color-primary: #c9a227;
  --color-primary-dark: #a8871f;
  --color-text: #e8e8e8;
  --color-text-muted: #999999;
  --color-accent: #8b4513;
  --color-border: #3a3a3a;
  --font-heading: 'Oswald', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid var(--color-border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px;
  width: auto;
  filter: invert(1);
  display: block;
}

.nav {
  display: flex;
  gap: 40px;
}

.nav-link {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--color-primary);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.mobile-menu-btn span {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-text);
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn span.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn span.active:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn span.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 20px;
  background: var(--color-bg-light);
  border-top: 1px solid var(--color-border);
}

.mobile-menu.open {
  display: flex;
}

.mobile-menu .nav-link {
  padding: 15px 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 1.1rem;
}

.mobile-menu .nav-link::after {
  display: none;
}

/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/images/3.png') center center / cover no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 26, 26, 0.8) 0%,
    rgba(26, 26, 26, 0.6) 50%,
    rgba(26, 26, 26, 0.85) 100%
  );
}

.hero-content {
  position: relative;
  text-align: center;
  padding: 100px 20px;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  letter-spacing: 10px;
  margin-bottom: 20px;
  color: var(--color-text);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-family: var(--font-heading);
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.hero-description {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto 40px;
  padding: 0 10px;
}

.hero-logo {
  height: clamp(120px, 25vw, 200px);
  width: auto;
  margin-bottom: 20px;
  filter: invert(1);
}

.btn {
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 40px;
  background: var(--color-primary);
  color: var(--color-bg);
  text-decoration: none;
  border: 2px solid var(--color-primary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn:hover {
  background: transparent;
  color: var(--color-primary);
}

.btn:active {
  transform: scale(0.98);
}

/* Sections */
.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: var(--color-primary);
  margin: 20px auto 0;
}

/* About */
.about {
  padding: 100px 0;
  background: var(--color-bg-section);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text p {
  margin-bottom: 20px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: var(--color-text-muted);
}

.about-text strong {
  color: var(--color-primary);
}

.about-image img {
  width: 100%;
  height: auto;
  border: 3px solid var(--color-border);
}

/* Gallery */
.gallery {
  padding: 100px 0 60px;
  background: var(--color-bg);
  overflow: hidden;
}

.gallery .section-title {
  margin-bottom: 30px;
}

.gallery-carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.carousel-track {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 420px;
  width: 100%;
  max-width: 1100px;
}

.carousel-slide {
  position: absolute;
  width: 520px;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: scale(0.7);
  filter: blur(3px);
  z-index: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-slide.prev {
  opacity: 1;
  transform: translateX(-540px) scale(0.85);
  filter: blur(3px);
  z-index: 2;
}

.carousel-slide.next {
  opacity: 1;
  transform: translateX(540px) scale(0.85);
  filter: blur(3px);
  z-index: 2;
}

.carousel-slide.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  filter: blur(0);
  z-index: 3;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.carousel-slide.active:hover {
  transform: scale(1.02);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-bg-light);
  border: 2px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-btn:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-bg);
}

.carousel-btn svg {
  width: 24px;
  height: 24px;
}

.carousel-prev {
  left: 0;
}

.carousel-next {
  right: 0;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.lightbox.open {
  opacity: 1;
  visibility: visible;
}

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
}

.lightbox-counter {
  margin-top: 15px;
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--color-text-muted);
  letter-spacing: 2px;
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
  color: var(--color-text);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  z-index: 2001;
  line-height: 1;
  padding: 10px;
}

.lightbox-close:hover {
  color: var(--color-primary);
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 50%;
}

.lightbox-prev svg,
.lightbox-next svg {
  width: 30px;
  height: 30px;
  display: block;
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}

.lightbox-prev:hover,
.lightbox-next:hover {
  background: var(--color-primary);
  color: var(--color-bg);
}

/* Contacts */
.contacts {
  padding: 100px 0;
  background: var(--color-bg-section);
}

.contacts-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

.contact-info {
  display: flex;
  justify-content: center;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon svg {
  width: 28px;
  height: 28px;
  color: var(--color-bg);
}

.contact-label {
  display: block;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.contact-value {
  font-family: var(--font-heading);
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s;
}

.contact-value:hover {
  color: var(--color-primary);
}

.contact-cta {
  text-align: center;
}

.contact-cta p {
  margin-bottom: 20px;
  color: var(--color-text-muted);
}

/* Footer */
.footer {
  padding: 20px 0;
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
}

.footer-text {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  text-align: center;
}

/* Responsive - Tablets */
@media (max-width: 1024px) {
  .gallery {
    padding: 80px 0 50px;
  }

  .carousel-track {
    height: 340px;
  }

  .carousel-slide {
    width: 400px;
  }

  .carousel-slide.prev {
    transform: translateX(-420px) scale(0.85);
  }

  .carousel-slide.next {
    transform: translateX(420px) scale(0.85);
  }

  .about-content {
    gap: 40px;
  }
}

/* Responsive - Large phones / Small tablets */
@media (max-width: 900px) {
  .nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-image {
    order: -1;
  }
}

/* Responsive - Phones */
@media (max-width: 600px) {
  .header-inner {
    height: 70px;
  }

  .logo img {
    height: 50px;
  }

  .hero-content {
    padding: 80px 15px;
  }

  .hero-title {
    letter-spacing: 5px;
  }

  .hero-subtitle {
    letter-spacing: 2px;
  }

  .section-title {
    margin-bottom: 40px;
    letter-spacing: 3px;
  }

  .about,
  .contacts {
    padding: 60px 0;
  }

  .gallery {
    padding: 60px 0 40px;
  }

  .carousel-track {
    height: 260px;
  }

  .carousel-slide {
    width: 300px;
  }

  .carousel-slide.prev {
    transform: translateX(-260px) scale(0.8);
  }

  .carousel-slide.next {
    transform: translateX(260px) scale(0.8);
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }

  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }

  .contact-value {
    font-size: 1.1rem;
  }

  .contact-item {
    gap: 15px;
  }

  .contact-icon {
    width: 50px;
    height: 50px;
  }

  .contact-icon svg {
    width: 24px;
    height: 24px;
  }

  .btn {
    padding: 12px 30px;
    font-size: 0.9rem;
  }

  .lightbox-prev,
  .lightbox-next {
    padding: 10px;
  }

  .lightbox-prev svg,
  .lightbox-next svg {
    width: 24px;
    height: 24px;
  }

  .lightbox-prev {
    left: 10px;
  }

  .lightbox-next {
    right: 10px;
  }

  .lightbox-close {
    top: 10px;
    right: 10px;
    font-size: 35px;
  }
}

/* Responsive - Very small phones */
@media (max-width: 380px) {
  .hero-title {
    font-size: 2rem;
    letter-spacing: 3px;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .container {
    padding: 0 15px;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }
}

/* Safe area for notched phones */
@supports (padding: env(safe-area-inset-bottom)) {
  .footer {
    padding-bottom: calc(20px + env(safe-area-inset-bottom));
  }

  .lightbox {
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }
}
</style>
