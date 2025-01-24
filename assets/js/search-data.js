// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "It&#39;s still under construction. Now I list some of my projects in recent years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-recevied-my-bacholor-degree",
          title: 'Recevied my bacholor degree!',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-by-iccv2021",
          title: 'Two papers accepted by ICCV2021!',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-by-acmmm22",
          title: 'Two papers accepted by ACMMM22!',
          description: "",
          section: "News",},{id: "news-we-are-awarded-the-national-gold-medal-in-the-8th-china-international-college-students-internet-innovation-and-entrepreneurship-competition-互联网",
          title: 'We are awarded the national gold medal in The 8th China International College...',
          description: "",
          section: "News",},{id: "news-recevied-my-master-degree-joined-tencent",
          title: 'Recevied my master degree, joined Tencent!',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-by-tscvt",
          title: 'One paper accepted by TSCVT!',
          description: "",
          section: "News",},{id: "projects-arcsim-for-smpl",
          title: 'ARCSim-for-SMPL',
          description: "I made ARCSim(a cloth simulation engine) compatibile with SMPL, supporting SMPL shape / pose interpolation, cloth &amp; SMPL body physics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/arcsim_for_smpl/";
            },},{id: "projects-metacube",
          title: 'MetaCube',
          description: "MetaAvatar/MetaSJTU, an online version of SJTU, powered with a series of algorithms like stylized face parameters / mocap / basic game features.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/metacube/";
            },},{id: "projects-trellis-for-blender",
          title: 'TreLLIS for Blender',
          description: "Blender Plugin for TreLLIS (SOTA 3DAIGC model). Currently supports image-to-3d generation and image-conditioned variation in blender.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trellis_for_blender/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%72%65%61%6D%62%6F%79@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/FishWoWater", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lkjG-IAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
