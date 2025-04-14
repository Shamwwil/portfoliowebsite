<script lang="ts">
  import { faExternalLinkAlt, faCodeBranch, faLightbulb } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { fade } from 'svelte/transition';
  
  let activeFilter = 'all'; // Default filter value
  
  const projects = [
      {
          title: 'Tanea Hotel',
          description: 'Responsive website for a rural hotel, built from scratch to boost local visibility and bookings. Clean UI, fast load times, and a modern brand identity.',
          tags: ['SvelteKit', 'Tailwind', 'Responsive Design'],
          category: 'frontend',
          link: 'https://taneahotel.com',
          github: 'https://github.com/Shamwwil/taneahotel',
          image: '/project-tanea.jpg',
          isConcept: false
      },
      {
          title: 'Googo Writes',
          description: 'A lightweight portfolio for a poet and novelist. Designed with minimalism in mind to highlight written works and keep performance tight.',
          tags: ['SvelteKit', 'Tailwind', 'Content Management'],
          category: 'frontend',
          link: 'https://googowrites.vercel.app',
          github: 'https://github.com/Shamwwil/googowrites',
          image: '/project-googo.jpg',
          isConcept: false
      },
      {
          title: 'Car Sales Dashboard',
          description: 'Exploratory data dashboard analyzing trends in car sales across regions. Built with Python and Plotly for crisp, interactive visuals.',
          tags: ['Python', 'Pandas', 'Plotly', 'Svelte'],
          category: 'data',
          link: '',
          github: 'https://github.com/Shamwwil/Car-Sales-Analysis-',
          image: '/project-carsales.jpg',
          isConcept: false
      },
      {
          title: 'DataDash',
          description: 'Concept for a real-time analytics dashboard with D3.js visualizations and tight Svelte integration. Aimed at high-performance data storytelling.',
          tags: ['Svelte', 'D3.js', 'Python', 'Tailwind'],
          category: 'fullstack',
          link: '',
          github: '',
          image: '/project-datadash.jpg',
          isConcept: true
      },
      {
          title: 'PyVisual',
          description: 'Idea for a plug-and-play Python library for creating clean, customizable charts without the boilerplate. Lightweight and beginner-friendly.',
          tags: ['Python', 'Matplotlib', 'Pandas'],
          category: 'data',
          link: '',
          github: '',
          image: '/project-pyvisual.jpg',
          isConcept: true
      },
      {
          title: 'UI Craft',
          description: 'Component kit centered around motion — fluid transitions, micro-interactions, and animation-first UI thinking. Built for SvelteKit.',
          tags: ['SvelteKit', 'Tailwind', 'GSAP'],
          category: 'frontend',
          link: '',
          github: '',
          image: '/project-uicraft.jpg',
          isConcept: true
      },
      {
          title: 'FlowMetrics',
          description: 'Speculative tool for visualizing user flows through product funnels. Inspired by Mixpanel but with a dev-first UI and flexible stack.',
          tags: ['Svelte', 'Node.js', 'MongoDB'],
          category: 'fullstack',
          link: '',
          github: '',
          image: '/project-flowmetrics.jpg',
          isConcept: true
      },
  ];

  const filters = [
      { name: 'All', value: 'all' },
      { name: 'Frontend', value: 'frontend' },
      { name: 'Data', value: 'data' },
      { name: 'Full Stack', value: 'fullstack' },
      { name: 'Concepts', value: 'concept' },
  ];

  // Filter projects based on active filter
  $: filteredProjects = projects.filter(project => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'concept') return project.isConcept;
      return project.category === activeFilter;
  });
</script>

<section id="projects" class="py-20 bg-gray-900 text-white">
  <div class="container mx-auto px-6">
      <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
                  Featured Work
              </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-400">
              Selected projects that showcase my blend of analytical thinking and design sensibility
          </p>
      </div>
      
      <!-- Project Filters -->
      <div class="flex justify-center mb-12">
          <div class="inline-flex flex-wrap justify-center gap-2">
              {#each filters as filter}
                  <button
                      class={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeFilter === filter.value ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-md shadow-blue-500/10' : 'text-gray-400 hover:text-white bg-gray-800/30 border border-gray-700/50'}`}
                      on:click={() => activeFilter = filter.value}
                  >
                      {filter.name}
                      {#if filter.value === 'concept'}
                          <span class="ml-1.5 px-1.5 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-300">New</span>
                      {/if}
                  </button>
              {/each}
          </div>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each filteredProjects as project}
              <div
                  class="relative group overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10"
                  in:fade={{ delay: 200 }}
              >
                  <!-- Project Image -->
                  <div class="h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                      <div class="w-full h-full bg-gray-700/50 flex items-center justify-center text-gray-500">
                          <span class="text-sm">Project Image</span>
                      </div>
                      
                      <!-- Concept Badge -->
                      {#if project.isConcept}
                          <div class="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs font-medium">
                              <FontAwesomeIcon icon={faLightbulb} class="w-3 h-3" />
                              Planned Concept
                          </div>
                      {/if}
                  </div>
                  
                  <!-- Project Content -->
                  <div class="p-6">
                      <h3 class="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                      </h3>
                      <p class="text-gray-400 mb-4 sm:h-25">{project.description}</p>
                      
                      <!-- Tags -->
                      <div class="flex flex-wrap gap-2 mb-4">
                          {#each project.tags as tag}
                              <span class="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full">
                                  {tag}
                              </span>
                          {/each}
                      </div>
                      
                      <!-- Links -->
                      <div class="flex space-x-4">
                          {#if project.link}
                              <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center text-sm"
                              >
                                  <FontAwesomeIcon icon={faExternalLinkAlt} class="mr-2 w-3 h-3" />
                                  Live Demo
                              </a>
                          {:else if project.isConcept}
                              <span class="text-gray-500 flex items-center text-sm">
                                  <FontAwesomeIcon icon={faExternalLinkAlt} class="mr-2 w-3 h-3" />
                                  Coming Soon
                              </span>
                          {/if}
                          
                          {#if project.github}
                              <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  class="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center text-sm"
                              >
                                  <FontAwesomeIcon icon={faCodeBranch} class="mr-2 w-3 h-3" />
                                  Code
                              </a>
                          {:else if project.isConcept}
                              <span class="text-gray-500 flex items-center text-sm">
                                  <FontAwesomeIcon icon={faCodeBranch} class="mr-2 w-3 h-3" />
                                  Concept
                              </span>
                          {/if}
                      </div>
                  </div>
                  
                  <!-- Hover Effect -->
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
          {/each}
      </div>
      
      <!-- View More -->
      <div class="text-center mt-12">
          <a
              href="#"
              class="inline-flex items-center px-6 py-3 border border-blue-500/50 text-blue-400 rounded-lg font-medium hover:bg-blue-900/30 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
          >
              View All Projects
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
          </a>
      </div>
  </div>
</section>