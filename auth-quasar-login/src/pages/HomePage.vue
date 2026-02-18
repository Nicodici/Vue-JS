<template>
  <q-page class="home-wrapper bg-light-blue-1
">
    <header class="hero">
      <div class="hero-content">
        <h1>Reservá tu turno fácil y rápido con <span class="highlight">TurnApp</span></h1>
        <div class="hero-btns">
          <q-btn :to="{ name: 'login' }" class="btn-primary">Comenzar ahora</q-btn>
          <q-btn :to="{ name: 'register' }" class="btn-outline">Registrate</q-btn>
        </div>
      </div>
    </header>

    <section class="features-grid">
      <div v-for="(feature, index) in features" :key="index" class="feature-card shadow-1">
        <div class="feature-icon flex flex-center">{{ feature.icon }}</div>
        <div class="text-h3 q-mb-md">{{ feature.title }}</div>
        <div class="text-body1">{{ feature.description }}</div>
      </div>
    </section>

    <div class="stats-bar bg-blue-grey-9 text-white q-pa-md">
      <div class="stat-item"><strong>+10k</strong> Usuarios</div>
      <div class="stat-item"><strong>99.9%</strong> Uptime</div>
      <div class="stat-item"><strong>Open Source</strong></div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    title: 'Rendimiento',
    description: 'Optimizado para cargas instantáneas y bajo consumo de recursos.',
    icon: '⚡',
  },
  {
    title: 'Escalabilidad',
    description: 'Arquitectura modular lista para crecer junto a tu equipo.',
    icon: '🚀',
  },
  {
    title: 'Seguridad',
    description: 'Implementación de estándares modernos de protección de datos.',
    icon: '🛡️',
  },
])
</script>

<style scoped lang="scss">
/* Contenedor Principal */
.home-wrapper {
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
  color: #1e293b;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
  background-image: url('../assets/backgroundLogin.webp');
  background-size: cover;
  background-position: center;
}

/* Hero Section */
.hero {
  padding-top: 80px;
  text-align: center;
}
.hero-content h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.1;
  color: #35495e;
  height: 30%;
}

.highlight {
  color: #42b883;
}

.hero-content p {
  font-size: 1.2rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

/* Botones */
.hero-btns {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-primary {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #3aa675;
  box-shadow: 0 8px 20px rgba(66, 184, 131, 0.3);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #35495e;
  border: 2px solid #e2e8f0;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

/* Grilla de Características */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  padding: 60px 5%;
  max-width: 1300px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #f1f5f9;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.feature-card h3 {
  margin-bottom: 12px;
  color: #35495e;
}

/* Stats Bar */
.stats-bar {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  color: white;
}

.stat-item strong {
  display: block;
  font-size: 1.5rem;
  color: #42b883;
}

@media (max-width: 768px) {
  .hero {
    padding-top: 60px;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }
}
</style>
