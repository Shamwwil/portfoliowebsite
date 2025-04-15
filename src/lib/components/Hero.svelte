<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let words = [
    'Full-Stack Developer.',
    'Data Analyst.',
    'UI/UX Designer.'
  ];

  let displayText = '';
  let isDeleting = false;
  let typingSpeed = 150;
  let loopNum = 0;
  let showImage = false;

  onMount(() => {
    // Start image fade-in after 1 second delay
    setTimeout(() => showImage = true, 1000);

    // Typewriter effect
    const type = () => {
      const i = loopNum % words.length;
      const fullText = words[i];
      
      if (isDeleting) {
        displayText = fullText.substring(0, displayText.length - 1);
        typingSpeed = 75;
      } else {
        displayText = fullText.substring(0, displayText.length + 1);
        typingSpeed = 150;
      }
      
      if (!isDeleting && displayText === fullText) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && displayText === '') {
        isDeleting = false;
        loopNum++;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };

    type();
  });
</script>

<section 
  id="hero" 
  class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white pt-20 lg:pt-0"
>
  <!-- Gradient Mesh Background -->
  <div 
    class="absolute inset-0 opacity-30"
    style="background:
      radial-gradient(circle at 20% 30%, rgba(0, 145, 255, 0.15) 0%, transparent 30%),
      radial-gradient(circle at 80% 70%, rgba(0, 145, 255, 0.15) 0%, transparent 30%),
      linear-gradient(to bottom right, #1E293B, #0F172A);"
  ></div>

  <!-- Grid Overlay -->
  <div 
    class="absolute inset-0 opacity-5"
    style="background-image: 
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 40px 40px;"
  ></div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
      <!-- Text Content -->
      <div 
        class="flex-1 text-center lg:text-left"
        in:fly={{ y: 50, duration: 800 }}
      >
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          <span class="text-gray-300">Hi, I'm</span>
          <span 
            class="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 mt-2 animate-text-shimmer"
            style="background-size: 200% auto;"
          >
            Shamwwil Jaffar
          </span>
        </h1>
        
        <!-- Mobile Image - Shows only on small screens -->
        <div class="lg:hidden flex justify-center my-6">
          {#if showImage}
            <div class="relative w-48 h-48">
              <!-- Glow Effect -->
              <div 
                class="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse"
                style="animation-duration: 3s;"
              ></div>
              <!-- Profile Photo -->
              <img 
                src="/shamwwil.png" 
                alt="Shamwwil Jaffar" 
                class="w-full h-full object-contain drop-shadow-2xl rounded-full"
              />
            </div>
          {/if}
        </div>
        
        <h2 class="text-2xl md:text-4xl font-medium mb-6 text-gray-300">
          <span class="inline-block min-w-[250px] h-[48px] md:h-[56px]">
            A <span class="text-blue-400">{displayText}</span>
            <span class="animate-pulse">|</span>
          </span>
        </h2>
        
        <p 
          class="text-lg md:text-xl max-w-2xl mb-8 text-gray-400 leading-relaxed"
          in:fade={{ delay: 300 }}
        >
          I started out in data analytics, but I've always been drawn to design and building things people actually enjoy using. 
          Now I'm a full-stack developer who cares just as much about how things look and feel as how they work.
        </p>
        
        <div 
          class="flex flex-col sm:flex-row gap-4"
          in:fade={{ delay: 500 }}
        >
          <a
            href="#projects"
            class="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-medium text-white shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group"
          >
            <span class="group-hover:translate-x-1 transition-transform duration-300">
              View My Work
            </span>
            <svg class="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          
          <a
            href="#contact"
            class="px-8 py-3 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-900/30 hover:text-white transition-all duration-300 flex items-center justify-center group"
          >
            <span class="group-hover:translate-x-1 transition-transform duration-300">
              Get In Touch
            </span>
            <svg class="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Desktop Image - Shows only on larger screens -->
      {#if showImage}
        <div 
          class="hidden lg:flex flex-1 items-center justify-end relative"
          in:fade={{ duration: 1000 }}
        >
          <div class="relative w-full h-[80vh] max-w-2xl">
            <!-- Glow Effect -->
            <div 
              class="absolute inset-0 rounded-full bg-blue-500/20 blur-xl animate-pulse"
              style="animation-duration: 3s;"
            ></div>
            
            <!-- Profile Photo -->
            <img 
              src="/shamwwil.png" 
              alt="Shamwwil Jaffar" 
              class="w-full h-full object-contain drop-shadow-2xl transition-all duration-500 hover:scale-105 hover:brightness-110 hover:rotate-1"
            />
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <!-- Scroll Indicator -->
<a
  href="#about"
  class="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
  in:fade={{ delay: 1000 }}
>
  <div class="animate-bounce flex flex-col items-center">
    <span class="text-sm mb-1">More</span>
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</a>

</section>

<style>
  @keyframes animate-text-shimmer {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }

  .hover\:shadow-blue-500\/30:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 145, 255, 0.3), 0 4px 6px -2px rgba(0, 145, 255, 0.1);
  }
</style>