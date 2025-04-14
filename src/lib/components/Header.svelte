<script lang="ts">
    import { faBars, faTimes, faHome, faUser, faCode, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      { icon: faTwitter, href: 'https://twitter.com/shamwwil' },
      { icon: faWhatsapp, href: 'https://wa.me/233550262563', },
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
      <a href="#hero" class="flex items-center group">
        <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 group-hover:bg-gradient-to-l transition-all duration-300">
          shamwwil
        </span>
        <span class="ml-2 px-2 py-1 text-xs bg-blue-900/30 text-blue-400 rounded-full border border-blue-800/50 group-hover:bg-blue-900/50 transition-all duration-300">
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
  </style>