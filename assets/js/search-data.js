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
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
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
        },{id: "post-近月学习命理学有感",
      
        title: "近月学习命理学有感",
      
      description: "写于南京 -&gt; 深圳航班",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/destiny-understanding/";
        
      },
    },{id: "news-joined-deptrum-as-an-intern-working-on-face-algorithms",
          title: 'Joined Deptrum as an intern, working on face algorithms!',
          description: "",
          section: "News",},{id: "news-got-my-bachelor-degree",
          title: 'Got my bachelor degree!',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-by-iccv2021",
          title: 'Two papers accepted by ICCV2021!',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-by-acmmm22",
          title: 'Two papers accepted by ACMMM22!',
          description: "",
          section: "News",},{id: "news-awarded-a-national-gold-medal-in-china-college-students-internet-competition",
          title: 'Awarded a National Gold Medal in “China College Students’ Internet+ Competition”!',
          description: "",
          section: "News",},{id: "news-got-my-master-degree-joined-tencent",
          title: 'Got my master degree, joined Tencent!',
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
