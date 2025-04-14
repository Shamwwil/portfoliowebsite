<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import About from '$lib/components/About.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Contact from '$lib/components/Contact.svelte';
    import Footer from '$lib/components/Footer.svelte';
    
    import { fade, fly } from 'svelte/transition';
  </script>
  
  <svelte:head>
    <title>Shamwwil Jaffar | Developer & Designer</title>
    <meta name="description" content="Data analyst turned full-stack developer with an obsession for crafting beautiful, functional interfaces." />
  </svelte:head>
  
  <div class="min-h-screen bg-gray-900 text-white">
    <Header />
    
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    
    <Footer />
  </div>
  
  <style global>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');
    
    :root {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: #111827;
      color: #f3f4f6;
      overflow-x: hidden;
    }
    
    code {
      font-family: 'Fira Code', monospace;
    }
    
    ::selection {
      background-color: rgba(0, 145, 255, 0.3);
      color: #ffffff;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #1f2937;
    }
    
    ::-webkit-scrollbar-thumb {
      background: #3b82f6;
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #2563eb;
    }
  </style>