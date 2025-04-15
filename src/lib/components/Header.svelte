<script lang="ts">
    import { faBars, faTimes, faHome, faUser, faCode, faProjectDiagram, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons';
    import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    
    let scrolled = false;
    let mobileMenuOpen = false;
    
    const navItems = [
      { name: 'Home', icon: faHome, href: '#hero' },
      { name: 'About', icon: faUser, href: '#about' },
      { name: 'Skills', icon: faCode, href: '#skills' },
      { name: 'Projects', icon: faProjectDiagram, href: '#projects' },
      { name: 'Contact', icon: faEnvelope, href: '#contact' },
    ];
    
    const socialItems = [
      { icon: faGithub, href: 'https://github.com/shamwwil' },
      { icon: faLinkedin, href: 'https://linkedin.com/in/shamwwil' },
      { icon: faWhatsapp, href: 'https://wa.me/233550262563', },
      { icon: faCoffee, href: 'https://buymeacoffee.com/shamwwil' },
    ];
    
    function handleScroll() {
      scrolled = window.scrollY > 50;
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
  </script>
  
  <header
    class={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 bg-gray-900/80 backdrop-blur-md shadow-xl' : 'py-4 bg-transparent'}`}
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <a href="#hero" class="flex items-center group relative">
        <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 group-hover:from-indigo-600 group-hover:via-blue-500 group-hover:to-cyan-400 transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] tracking-tighter">
          shamwwil
          <span class="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/70 to-indigo-600/70 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </span>
        <span class="badge-glow ml-2 px-2.5 py-1 text-xs font-mono font-semibold bg-gradient-to-br from-blue-900/80 to-indigo-900/80 text-blue-100 rounded-full border border-blue-700/50 group-hover:border-blue-400/60 group-hover:text-cyan-100 group-hover:from-blue-800 group-hover:to-indigo-800 group-hover:shadow-[0_0_8px_-2px_rgba(96,165,250,0.5)] transition-all duration-300 shadow-sm backdrop-blur-sm">
          dev
        </span>
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="relative text-gray-300 hover:text-white group transition-colors duration-300"
          >
            <FontAwesomeIcon icon={item.icon} class="mr-2" />
            {item.name}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        {/each}
        
        <div class="flex space-x-4 ml-6">
          {#each socialItems as item}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </a>
          {/each}
        </div>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none transition-colors duration-300"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
      >
        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
      </button>
    </div>
    
    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg shadow-xl">
        <div class="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {#each navItems as item}
            <a
              href={item.href}
              class="text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 flex items-center"
              on:click={() => mobileMenuOpen = false}
            >
              <FontAwesomeIcon icon={item.icon} class="mr-3" />
              {item.name}
            </a>
          {/each}
          
          <div class="flex justify-center space-x-6 pt-4">
            {#each socialItems as item}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </header>
  
  <style>
    header {
      border-bottom: 1px solid rgba(99, 102, 241, 0.1);
    }
    @keyframes pulse-glow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.group:hover .badge-glow {
  animation: pulse-glow 1.5s ease-in-out infinite;
}
  </style>