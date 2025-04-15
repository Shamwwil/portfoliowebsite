<script lang="ts">
  import { faDatabase, faChartLine, faCode, faPalette, faRobot } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { fade, fly, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  
  let activeIndex = 0;
  let isHovering = false;
  let scrollProgress = 0;
  let isMobile = false;
  
  const timeline = [
            {
        year: '2018–2020',
        title: 'Data Analyst',
        description: 'Dove into the world of data—analyzing trends, building dashboards, and discovering the power of clear, visual storytelling.',
        longDescription: 'During this period, I explored data analytics through internships and hands-on projects. I used tools like SQL, Tableau, and Python to clean data, uncover insights, and present findings through clear, interactive dashboards. I also built automated reports that saved time and helped guide decision-making. This was where I first saw how powerful well-communicated data could be.',
        icon: faDatabase,
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/10',
        borderColor: 'border-blue-400/30',
        skills: ['SQL', 'Tableau', 'Python', 'Data Visualization', 'ETL']
        }
,
{
  year: '2021',
  title: 'Python Developer',
  description: 'Expanded into backend development — building APIs, processing data, and automating workflows to support analytics.',
  longDescription: 'To strengthen my data analytics work, I deepened my skills in Python development through hands-on projects. I built RESTful APIs using Flask and FastAPI, developed custom data pipelines, and automated reporting tasks. One highlight was contributing to a master’s research paper at UCC, where I supported data processing and backend workflows. These experiences gave me a strong foundation in backend engineering and practical software architecture.',
  icon: faCode,
  color: 'text-yellow-400',
  bgColor: 'bg-yellow-400/10',
  borderColor: 'border-yellow-400/30',
  skills: ['Python', 'Flask', 'FastAPI', 'Data Pipelines', 'APIs']
},
      
{
  year: '2021–2023',
  title: 'Full-Stack Shift',
  description: 'Bridged backend logic and frontend design — building responsive, intuitive interfaces with a focus on user experience.',
  longDescription: 'During this phase, I explored full-stack development more deeply — starting with React, experimenting with Vue, and eventually gravitating toward SvelteKit for its simplicity and performance. I built dynamic UIs, handled real-time data updates, and refined the user experience across projects. This shift helped me blend logic with design and sharpened my eye for detail and usability.',
  icon: faPalette,
  color: 'text-purple-400',
  bgColor: 'bg-purple-400/10',
  borderColor: 'border-purple-400/30',
  skills: ['JavaScript', 'React', 'Svelte/SvelteKit', 'UI/UX']
}
,
{
  year: '2023–Present',
  title: 'Web Game Developer',
  description: 'Building immersive text-based RPGs — blending data, design, and interactivity using modern tools like SvelteKit.',
  longDescription: "I've been channeling my full-stack skills into building full-featured browser-based RPGs inspired by games like Torn. I started with a project called Modern Warfare, then shifted focus to a new game — CyberOps — a cyberpunk-themed RPG set to launch by the end of 2025. I'm using SvelteKit for the core framework and drawing on my background in data, design, and UX to create deep mechanics, interactive systems, and rich player experiences. This project is a blend of everything I've learned so far, and I'm excited to see where it goes.",
  icon: faChartLine,
  color: 'text-blue-400',
  bgColor: 'bg-blue-400/10',
  borderColor: 'border-blue-400/30',
  skills: ['SvelteKit', 'Game Design', 'System Architecture', 'UI/UX', 'Data-Driven Mechanics']
}

  ];
  
  const setActive = (index: number) => {
      activeIndex = index;
      isHovering = true;
  };
  
  const resetHover = () => {
      isHovering = false;
  };
  
  onMount(() => {
      // Check if mobile
      isMobile = window.innerWidth < 1024;
      
      const handleResize = () => {
          isMobile = window.innerWidth < 1024;
      };
      
      const handleScroll = () => {
          const scrollY = window.scrollY;
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
              const { top, height } = aboutSection.getBoundingClientRect();
              const sectionTop = top + scrollY;
              const sectionBottom = sectionTop + height;
              const viewportHeight = window.innerHeight;
              const triggerPoint = viewportHeight * 0.2;
              
              if (scrollY > sectionTop - triggerPoint && scrollY < sectionBottom - triggerPoint) {
                  scrollProgress = (scrollY - (sectionTop - triggerPoint)) / (height - triggerPoint);
              }
          }
      };
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll);
      };
  });
  const impacts = [
    'Reduced reporting time by 70% through automation',
    'Improved API response times by 40% through optimization',
    'Increased user engagement by 25% with UI improvements',
    'Created interactive experiences with 90%+ satisfaction ratings'
  ];
</script>

<section id="about" class="relative py-16 lg:py-28 bg-gray-900 text-white overflow-hidden">
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden opacity-20">
      {#each Array(20) as _, i}
          <div 
              class="absolute rounded-full bg-blue-400/30"
              style={`
                  width: ${Math.random() * 10 + 5}px;
                  height: ${Math.random() * 10 + 5}px;
                  top: ${Math.random() * 100}%;
                  left: ${Math.random() * 100}%;
                  animation: float-${i} ${Math.random() * 20 + 10}s linear infinite;
                  transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
              `}
          />
          <style>
              @keyframes float-{i} {
                  0% { transform: translate({Math.random() * 100 - 50}px, {Math.random() * 100 - 50}px); }
                  50% { transform: translate({Math.random() * 100 - 50}px, {Math.random() * 100 - 50}px); }
                  100% { transform: translate({Math.random() * 100 - 50}px, {Math.random() * 100 - 50}px); }
              }
          </style>
      {/each}
  </div>
  
  <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="text-center mb-12 lg:mb-20" in:fly={{ y: 50, duration: 600 }}>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-blue-500 animate-gradient-x">
                  My Journey
              </span>
          </h2>
          <p class="max-w-2xl mx-auto text-gray-400 text-base lg:text-lg">
            A look at how I went from analyzing data to designing and building modern websites.
          </p>
      </div>
      
      <!-- Mobile timeline (stacked) -->
      {#if isMobile}
          <div class="space-y-8">
              {#each timeline as item, index}
                  <div 
                      class="w-full p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg"
                      in:fly={{ y: 50, duration: 500, delay: index * 100 }}
                  >
                      <div class="flex items-center mb-4">
                          <div class={`p-3 rounded-full bg-gray-700/50 ${item.color} mr-4`}>
                              <FontAwesomeIcon icon={item.icon} size="lg" />
                          </div>
                          <div>
                              <h3 class="text-xl font-bold text-white">{item.title}</h3>
                              <p class="text-sm text-gray-400">{item.year}</p>
                          </div>
                      </div>
                      <p class="text-gray-300 mb-4">{item.description}</p>
                      <p class="text-gray-400 text-sm mb-4">{item.longDescription}</p>
                      
                      <div class="mb-4">
                          <h4 class="text-xs uppercase tracking-wider text-gray-400 mb-2">Key Skills</h4>
                          <div class="flex flex-wrap gap-2">
                              {#each item.skills as skill}
                                  <span class={`px-2 py-1 rounded-full text-xs ${item.bgColor} ${item.color} border ${item.borderColor}`}>
                                      {skill}
                                  </span>
                              {/each}
                          </div>
                      </div>
                  </div>
              {/each}
          </div>
      
      <!-- Desktop timeline (split panel) -->
      {:else}
          <div class="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <!-- Left panel - Timeline navigation -->
              <div class="lg:w-2/5 flex flex-col space-y-4" in:fly={{ x: -50, duration: 600, delay: 200 }}>
                  {#each timeline as item, index}
                      <button
                          on:click={() => setActive(index)}
                          on:mouseenter={() => setActive(index)}
                          on:mouseleave={resetHover}
                          class={`flex-1 min-h-[150px] w-full text-left p-6 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.8,0,0.2,1)] border-2 ${item.borderColor} ${activeIndex === index ? `${item.bgColor} scale-[1.02] shadow-lg ${item.color} border-opacity-100` : 'bg-gray-800/30 border-opacity-20 hover:bg-gray-800/50'}`}
                          in:flip
                      >
                          <div class="flex items-center">
                              <div class={`p-3 rounded-full ${item.bgColor} ${item.color} mr-4 transition-colors duration-300`}>
                                  <FontAwesomeIcon icon={item.icon} size="lg" />
                              </div>
                              <div>
                                  <h3 class="text-xl font-bold">{item.title}</h3>
                                  <p class="text-sm text-gray-400">{item.year}</p>
                              </div>
                              <div class="ml-auto text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                                  →
                              </div>
                          </div>
                          <p class="mt-3 text-gray-300">{item.description}</p>
                      </button>
                  {/each}
              </div>
              
              <!-- Right panel - Detailed view -->
              <div class="lg:w-3/5 relative min-h-[600px]">
                  <div class="sticky top-24 h-full">
                      {#each timeline as item, index (item.year)}
                          <div 
                              class={`absolute inset-0 p-6 lg:p-8 rounded-2xl backdrop-blur-lg border ${item.borderColor} transition-all duration-700 ease-[cubic-bezier(0.8,0,0.2,1)] ${activeIndex === index ? 'opacity-100 scale-100 z-10 shadow-2xl bg-gray-800/70' : 'opacity-0 scale-95 z-0'}`}
                          >
                              <div class="h-full flex flex-col">
                                  <div class="flex justify-between items-start mb-6">
                                      <div>
                                          <span class={`text-sm font-mono ${item.color}`}>{item.year}</span>
                                          <h3 class="text-2xl lg:text-3xl font-bold mt-1">{item.title}</h3>
                                      </div>
                                      <div class={`p-3 lg:p-4 rounded-full ${item.bgColor} ${item.color}`}>
                                          <FontAwesomeIcon icon={item.icon} size="xl" />
                                      </div>
                                  </div>
                                  
                                  <div class="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                                      <p class="text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">{item.longDescription}</p>
                                      
                                      <div class="mb-6 lg:mb-8">
                                          <h4 class="text-xs lg:text-sm uppercase tracking-wider text-gray-400 mb-2 lg:mb-3">Key Skills Developed</h4>
                                          <div class="flex flex-wrap gap-2">
                                              {#each item.skills as skill}
                                                  <span class={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm ${item.bgColor} ${item.color} border ${item.borderColor}`}>
                                                      {skill}
                                                  </span>
                                              {/each}
                                          </div>
                                      </div>
                                      
                                      <div class="bg-gray-700/30 rounded-xl p-3 lg:p-4 border border-gray-600/30">
                                        <h4 class="text-xs lg:text-sm uppercase tracking-wider text-gray-400 mb-1 lg:mb-2">Impact</h4>
                                        <p class="text-gray-300 text-sm lg:text-base">
                                          {impacts[index] || ''}
                                        </p>
                                      </div>
                                  </div>
                                  
                                  <div class="pt-3 lg:pt-4 mt-auto border-t border-gray-700/50 flex justify-between items-center">
                                      <div class="text-xs lg:text-sm text-gray-400">
                                          {index + 1} of {timeline.length}
                                      </div>
                                      <div class="flex space-x-2">
                                          {#each timeline as _, i}
                                              <button 
                                                  on:click={() => setActive(i)}
                                                  class={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all ${activeIndex === i ? `${item.color} bg-current w-4 lg:w-6` : 'bg-gray-600'}`}
                                              />
                                          {/each}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      {/each}
                  </div>
              </div>
          </div>
      {/if}
      
      <!-- Current Focus with CyberOps -->
      <div 
          class="mt-12 lg:mt-24 bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl lg:rounded-2xl p-6 lg:p-8 max-w-5xl mx-auto overflow-hidden"
          in:fly={{ y: 50, duration: 600, delay: 400 }}
      >
          <div class="relative">
              <div class="absolute -right-20 -top-20 w-40 lg:w-64 h-40 lg:h-64 rounded-full bg-blue-500/10 blur-xl lg:blur-3xl animate-pulse"></div>
              <div class="absolute -left-20 -bottom-20 w-40 lg:w-64 h-40 lg:h-64 rounded-full bg-purple-500/10 blur-xl lg:blur-3xl animate-pulse delay-1000"></div>
              
              <div class="relative z-10 flex flex-col md:flex-row items-center">
                  <div class="md:w-2/5 mb-6 md:mb-0 flex justify-center">
                      <div class="relative w-36 lg:w-48 h-36 lg:h-48">
                          <div class="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 blur-md lg:blur-lg opacity-30 animate-pulse"></div>
                          <div class="absolute inset-0.5 rounded-lg lg:rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center">
                              <div class="text-center p-4 lg:p-6">
                                  <FontAwesomeIcon icon={faRobot} class="text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400" />
                                  <p class="mt-2 text-xs lg:text-sm text-gray-400 uppercase tracking-widest">CyberOps</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="md:w-3/5 md:pl-6 lg:pl-8">
                      <h3 class="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Current Project: CyberOps</h3>
                      <p class="text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base leading-relaxed">
                          I'm currently developing <span class="font-semibold text-purple-300">CyberOps</span>, a cyberpunk-themed text-based MMORPG that pushes the boundaries of AI-driven gameplay. The game features NPCs powered by smart AI models that make dynamic decisions and engage in meaningful interactions with players.
                      </p>
                      <p class="text-gray-400 leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">
                          CyberOps combines my passion for game design with cutting-edge AI technology. The game world evolves based on player actions, with NPCs that remember interactions and adapt their behavior. I'm building it using SvelteKit for the frontend and Python with LLMs for the AI backend.
                      </p>
                      <div class="mt-4 lg:mt-6 flex flex-wrap gap-2 lg:gap-3">
                          <span class="px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm bg-blue-400/10 text-blue-400 border border-blue-400/30">
                              AI Integration
                          </span>
                          <span class="px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm bg-purple-400/10 text-purple-400 border border-purple-400/30">
                              Game Design
                          </span>
                          <span class="px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm bg-green-400/10 text-green-400 border border-green-400/30">
                              LLMs
                          </span>
                          <span class="px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                              SvelteKit
                          </span>
                          <span class="px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm bg-red-400/10 text-red-400 border border-red-400/30">
                              Cyberpunk
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>

<style>
  .animate-gradient-x {
      background-size: 300% 300%;
      animation: gradient-x 6s ease infinite;
  }
  
  @keyframes gradient-x {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
  }
  
  .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(96, 165, 250, 0.3);
      border-radius: 2px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(96, 165, 250, 0.5);
  }
  
  .ease-smooth {
      transition-timing-function: cubic-bezier(0.8,0,0.2,1);
  }
</style>