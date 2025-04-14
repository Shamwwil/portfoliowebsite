<script lang="ts">
    import { faGithub, faLinkedin, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons';
    import { faHeart } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    
    const socialLinks = [
      { icon: faGithub, url: 'https://github.com/shamwwil' },
      { icon: faLinkedin, url: 'https://linkedin.com/in/shamwwil' },
      { icon: faTwitter, url: 'https://twitter.com/shamwwil' },
      { icon: faCodepen, url: 'https://codepen.io/shamwwil' },
    ];
  </script>
  
  <footer class="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 text-gray-400 py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <a href="#hero" class="flex items-center group">
            <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 group-hover:bg-gradient-to-l transition-all duration-300">
              shamwwil
            </span>
            <span class="ml-2 px-2 py-1 text-xs bg-blue-900/30 text-blue-400 rounded-full border border-blue-800/50 group-hover:bg-blue-900/50 transition-all duration-300">
              dev
            </span>
          </a>
        </div>
        
        <div class="flex flex-col items-center md:items-end space-y-2">
          <div class="flex space-x-6">
            {#each socialLinks as link}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-blue-400 transition-colors duration-300 transform hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={link.icon} size="lg" />
              </a>
            {/each}
          </div>
          
          <p class="text-sm mt-4 text-gray-600">
            © {new Date().getFullYear()} Shamwwil Jaffar. All rights reserved.
          </p>
          
          <p class="text-xs text-gray-700 flex items-center">
            Built with SvelteKit + Tailwind, crafted with
            <FontAwesomeIcon icon={faHeart} class="mx-1 text-red-500" />
            by shamwwil
          </p>
        </div>
      </div>
    </div>
  </footer>