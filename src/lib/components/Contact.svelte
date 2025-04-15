<script lang="ts">
  import { faGithub, faLinkedin, faTwitter, faCodepen, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
  import { faCoffee, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  
  let name = '';
  let email = '';
  let message = '';
  let submitted = false;
  let isLoading = false;
  
  const socialLinks = [
    { icon: faGithub, url: 'https://github.com/shamwwil', name: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com/in/shamwwil', name: 'LinkedIn' },
    { icon: faCoffee, url: 'https://buymeacoffee.com/shamwwil', name:'BuyMeACoffee' },
    { icon: faWhatsapp, url: 'https://wa.me/233550262563', name: 'WhatsApp' },
  ];
  
  function handleSubmit() {
    isLoading = true;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(
      `New message from ${name} (${email}):\n\n${message}`
    );
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/233550262563?text=${encodedMessage}`, '_blank');
    
    // Reset form
    setTimeout(() => {
      submitted = true;
      isLoading = false;
      name = '';
      email = '';
      message = '';
    }, 1000);
  }
</script>

<section id="contact" class="py-20 bg-gray-900 text-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
          Get In Touch
        </span>
      </h2>
      <p class="max-w-2xl mx-auto text-gray-400">
        Have a project in mind or want to collaborate? Message me directly on WhatsApp.
      </p>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-12">
      <!-- Contact Form -->
      <div class="lg:w-1/2">
        {#if !submitted}
          <form
            on:submit|preventDefault={handleSubmit}
            class="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div class="mb-6">
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                bind:value={name}
                required
                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                placeholder="Shamwwil"
              />
            </div>
            
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                bind:value={email}
                required
                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                placeholder="sham@example.com"
              />
            </div>
            
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                bind:value={message}
                rows="5"
                required
                class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-medium text-white hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center"
              disabled={isLoading}
            >
              {#if isLoading}
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Opening WhatsApp...
              {:else}
                <FontAwesomeIcon icon={faWhatsapp} class="mr-2" />
                Send via WhatsApp
              {/if}
            </button>
          </form>
        {:else}
          <div class="bg-gray-800/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-blue-900/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" class="text-blue-400" />
            </div>
            <h3 class="text-xl font-bold text-white mb-2">Message Ready!</h3>
            <p class="text-gray-400 mb-4">Your message should open in WhatsApp. If it didn't, <a href="https://wa.me/233550262563" class="text-blue-400 hover:underline">click here</a>.</p>
            <button
              on:click={() => submitted = false}
              class="px-6 py-2 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-900/30 hover:text-white transition-all duration-300"
            >
              Send Another
            </button>
          </div>
        {/if}
      </div>
      
      <!-- Contact Info -->
      <div class="lg:w-1/2">
        <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 h-full">
          <h3 class="text-xl font-bold text-white mb-6">Connect With Me</h3>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="p-3 rounded-full bg-gray-700/50 text-blue-400 mr-4">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div>
                <h4 class="font-medium text-white mb-1">WhatsApp</h4>
                <a
                  href="https://wa.me/233550262563"
                  target="_blank"
                  class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  +233 55 026 2563
                </a>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="p-3 rounded-full bg-gray-700/50 text-blue-400 mr-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h4 class="font-medium text-white mb-1">Email</h4>
                <a
                  href="mailto:shamwwil4@gmail.com"
                  class="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  shamwwil4@gmail.com
                </a>
              </div>
            </div>
            
            <div class="pt-6 border-t border-gray-700/50">
              <h4 class="font-medium text-white mb-4">Social Profiles</h4>
              <div class="flex flex-wrap gap-4">
                {#each socialLinks as link}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center px-4 py-3 bg-gray-700/50 rounded-lg hover:bg-blue-900/20 hover:border hover:border-blue-500/30 transition-all duration-300"
                    title={link.name}
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      class="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 mr-3"
                    />
                    <span class="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                {/each}
              </div>
            </div>
            
            <div class="pt-6 border-t border-gray-700/50">
              <h4 class="font-medium text-white mb-4">Current Availability</h4>
              <div class="flex items-center">
                <span class="relative flex h-3 w-3 mr-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span class="text-gray-400">Available for select projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>