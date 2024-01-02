new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
    panel: [],
    socials: [
      { name:"facebook", icon:"mdi-facebook-box", url:"https://codepen.io/jettaz" },
      { name:"twitter", icon:"mdi-twitter-box", url:"https://codepen.io/jettaz" },
      { name:"google", icon:"mdi-google", url:"https://codepen.io/jettaz" },
      { name:"linkedin", icon:"mdi-linkedin-box", url:"https://codepen.io/jettaz" },
      { name:"instagram", icon:"mdi-instagram", url:"https://codepen.io/jettaz" }
      
    ],
    items: [
      {
        name: "Product",
        tags: [
          {
            urlname: "Create Websites",
            url: "https://codepen.io/jettaz"
          },
          {
            urlname: "Secure Cloud Hosting",
            url: "https://codepen.io/jettaz"
          },
          {
            urlname: "Engage Your Audience",
            url: "https://codepen.io/jettaz"
          },
          {
            urlname: "Website Support",
            url: "https://codepen.io/jettaz"
          }
        ]
      },
      { name: "Company", 
       tags: [
         { urlname: "About", url: "https://codepen.io/jettaz" },
         { urlname: "Careers", url: "https://codepen.io/jettaz"},
         { urlname: "Support", url: "https://codepen.io/jettaz"},
         { urlname: "Pricing", url: "https://codepen.io/jettaz"},
         { urlname: "FAQ", url: "https://codepen.io/jettaz"}
       ] 
      },
      { name: "Resources", 
       tags: [
         { urlname: "Blog", url: "https://codepen.io/jettaz" },
         { urlname: "eBooks", url: "https://codepen.io/jettaz" },
         { urlname: "Whitepapers", url: "https://codepen.io/jettaz" },
         { urlname: "Comparison Guide", url: "https://codepen.io/jettaz" },
         { urlname: "Website Grader", url: "https://codepen.io/jettaz" }
       ] 
      },
      { name: "Get Help", 
       tags: [
         { urlname: "Help Center", url: "https://codepen.io/jettaz" },
         { urlname: "Contact Us", url: "https://codepen.io/jettaz" },
         { urlname: "Privacy Policy", url: "https://codepen.io/jettaz" },
         { urlname: "Terms", url: "https://codepen.io/jettaz" },
         { urlname: "Login", url: "https://codepen.io/jettaz" }
       ]
      }
    ]
  }),

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      if (window.innerWidth >= 960) {
        this.panel = [...Array(4).keys()].map((k, i) => i);
      } else {
        this.panel = [];
      }
    }
  }
});
