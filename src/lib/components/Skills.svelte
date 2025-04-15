<script lang="ts">
  import { faPython, faJs, faSass, faReact, faVuejs, faNodeJs } from '@fortawesome/free-brands-svg-icons';
  import { faDatabase, faServer, faPalette, faChartBar } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { fade, fly } from 'svelte/transition';
  
  const skillCategories = [
    {
      name: 'Frontend',
      icon: faPalette,
      skills: [
        { name: 'Svelte/SvelteKit', level: 95 },
        { name: 'React', level: 60 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'D3.js', level: 75 },
      ],
    },
    {
      name: 'Data',
      icon: faChartBar,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Pandas', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Tableau', level: 70 },
      ],
    },
    {
      name: 'Backend',
      icon: faServer,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 90 },
        { name: 'REST APIs', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      name: 'Tools',
      icon: faDatabase,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Prisma', level: 75 },
        { name: 'Drizzle', level: 80 },
        { name: 'Jupyter', level: 90 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];
  
  const icons = {
    'Svelte/SvelteKit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
,
    'D3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Data Visualization': faChartBar,
    'Tableau': 'https://img.icons8.com/ios/452/tableau-software.png',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'REST APIs': faServer,
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    'Drizzle': 'https://avatars.githubusercontent.com/u/108468352?s=200&v=4', // Using Drizzle ORM's GitHub avatar
    'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  };
</script>

<section id="skills" class="py-20 bg-gray-900 text-white">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">
          Skills & Tools
        </span>
      </h2>
      <p class="max-w-2xl mx-auto text-gray-400">
        The technical arsenal I use to turn ideas into reality
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each skillCategories as category}
        <div
          class="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          in:fly={{ y: 50, duration: 500, delay: 200 }}
        >
          <div class="flex items-center mb-6">
            <div class="p-3 rounded-full bg-gray-700/50 text-blue-400 mr-4">
              <FontAwesomeIcon icon={category.icon} size="lg" />
            </div>
            <h3 class="text-xl font-bold text-white">{category.name}</h3>
          </div>
          
          <div class="space-y-4">
            {#each category.skills as skill}
              <div>
                <div class="flex justify-between items-center mb-1">
                  <span class="text-sm font-medium text-gray-300">{skill.name}</span>
                  <span class="text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                    style={`width: ${skill.level}%`}
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Tech Icons Cloud -->
    <div class="mt-16 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
      <h3 class="text-xl font-bold text-center mb-8 text-white">Technologies I Work With</h3>
      
      <div class="flex flex-wrap justify-center gap-6">
        {#each Object.entries(icons) as [name, icon], index}
          <div
            class="relative group flex flex-col items-center"
            in:fade={{ delay: 100 * index }}
          >
            <div class="w-16 h-16 flex items-center justify-center bg-gray-700/50 rounded-xl p-3 group-hover:bg-blue-900/20 group-hover:border group-hover:border-blue-500/30 transition-all duration-300">
              {#if typeof icon === 'string'}
                <img 
                  src={icon} 
                  alt={name} 
                  class="w-8 h-8 object-contain {name === 'Drizzle' ? 'rounded-full' : ''}" 
                />
              {:else}
                <FontAwesomeIcon 
                  icon={icon} 
                  size="2x" 
                  class="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" 
                />
              {/if}
            </div>
            <span class="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
              {name}
            </span>
            <div class="absolute -inset-1 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none"></div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>