<script lang="ts">
    import { faGithub, faLinkedin, faTwitter, faCodepen, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { faHeart, faCoffee } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

const socialLinks = [
  { icon: faGithub, url: 'https://github.com/shamwwil' },
  { icon: faLinkedin, url: 'https://linkedin.com/in/shamwwil' },
  { icon: faTwitter, url: 'https://twitter.com/shamwwil' },
  { icon: faWhatsapp, url: 'https://wa.me/233550262563' },
  { icon: faCoffee, url: 'https://buymeacoffee.com/shamwwil' }
];

  </script>
  
  <footer class="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 text-gray-400 py-12">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0">
          <a href="#hero" class="flex items-center group">
            <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-indigo-600 group-hover:via-blue-500 group-hover:to-cyan-400 transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] tracking-tighter">
              shamwwil
            </span>
            
            <span class="badge-glow ml-2 px-2.5 py-1 text-xs font-mono font-semibold bg-gradient-to-br from-blue-900/80 to-indigo-900/80 text-blue-100 rounded-full border border-blue-700/50 group-hover:border-blue-400/60 group-hover:text-cyan-100 group-hover:from-blue-800 group-hover:to-indigo-800 group-hover:shadow-[0_0_8px_-2px_rgba(96,165,250,0.5)] transition-all duration-300 shadow-sm backdrop-blur-sm">
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

  <style>
    @keyframes pulse-glow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.group:hover .badge-glow {
  animation: pulse-glow 1.5s ease-in-out infinite;
}
  </style>