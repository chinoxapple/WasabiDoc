module.exports = {
  title: "Wasabi Documentation",
  description: "Wasabi is an open-source, non-custodial, privacy focused Bitcoin wallet for desktop.",
  base: "/WasabiDoc/",
  themeConfig: {
    displayAllHeaders: false,
    sidebarDepth: 0,
    repo: "zkSNACKs/WasabiDoc",
    docsDir: "docs",
    editLinks: true,
    sidebar: {
      "/why-wasabi/": [
        {
          title: "",
          collapsable: false,
          children: [
            "/why-wasabi/"
          ]
        },
        {
          title: "Section 1",
          collapsable: false,
          children: [
            "/why-wasabi/WhyPrivacyImportant.md"
          ]
        },
        {
          title: "Section 2",
          collapsable: false,
          children: [
            "/why-wasabi/10Commandments.md"
          ]
        }
      ],
      "/use-wasabi/": [
        {
          title: "",
          collapsable: false,
          children: [
            "/use-wasabi/"
          ]
        },
        {
          title: "Section 1",
          collapsable: false,
          children: [
            "/use-wasabi/GettingStarted.md"
          ]
        },
        {
          title: "Section 2",
          collapsable: false,
          children: [
            "/use-wasabi/BackendDeployment.md"
          ]
        }
      ],
      "/develop-wasabi/": [
        {
          title: "",
          collapsable: false,
          children: [
            "/develop-wasabi/"
          ]
        },
        {
          title: "Section 1",
          collapsable: false,
          children: [
            "/develop-wasabi/Dojo.md"
          ]
        }
      ],
      "/FAQ/": [
        {
          title: "",
          collapsable: false,
          children: [
            "/FAQ/",
            "/FAQ/FAQ-Introduction.md",
            "/FAQ/FAQ-Installation.md",
            "/FAQ/FAQ-UseWasabi.md",
            "/FAQ/FAQ-GeneralBitcoinPrivacy.md",
            "/FAQ/FAQ-Contribution.md"
          ]
        }
      ]
    },
    nav: [
      {
        text: "Why Wasabi",
        link: "/why-wasabi/"
      },
      {
        text: "Using Wasabi",
        link: "/use-wasabi/"
      },
      {
        text: "Developing Wasabi",
        link: "/develop-wasabi/"
      },
      {
        text: "FAQ",
        link: "/FAQ/"
      },
      {
        text: "Website",
        link: "https://wasabiwallet.io/"
      }
    ]
  }
}