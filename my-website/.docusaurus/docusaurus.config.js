export default {
  "title": "Documentations",
  "tagline": "Lettria documentation & tutorials",
  "url": "https://lettria.com",
  "baseUrl": "/documentation/",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.png",
  "organizationName": "Lettria",
  "projectName": "documentation",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/lauravavasseur/Desktop/documentation pre-prod/my-website/sidebars.js",
          "includeCurrentVersion": false
        },
        "theme": {
          "customCss": "/Users/lauravavasseur/Desktop/documentation pre-prod/my-website/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Lettria Site Logo",
        "src": "img/logo.png",
        "href": "https://lettria.com"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Documentation"
        },
        {
          "type": "docsVersionDropdown",
          "position": "left",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "logo": {
        "alt": "Facebook Open Source Logo",
        "src": "img/logo-footer.svg",
        "href": "https://lettria.com",
        "width": 80,
        "height": 80
      },
      "style": "light",
      "links": [
        {
          "title": "Solutions",
          "items": [
            {
              "label": "Use Cases",
              "to": "https://www.lettria.com/solutions?type=use_case"
            },
            {
              "label": "Success Stories",
              "to": "https://www.lettria.com/solutions?type=success_story"
            },
            {
              "label": "Industry",
              "to": "https://www.lettria.com/solutions"
            }
          ]
        },
        {
          "title": "Platform",
          "items": [
            {
              "label": "Features",
              "to": "https://www.lettria.com/platform"
            },
            {
              "label": "Pricing",
              "to": "https://www.lettria.com/pricing"
            }
          ]
        },
        {
          "title": "About",
          "items": [
            {
              "label": "Our approach",
              "to": "https://www.lettria.com/about-us"
            }
          ]
        },
        {
          "title": "Blog",
          "items": [
            {
              "label": "Publications",
              "to": "https://www.lettria.com/blog"
            }
          ]
        }
      ]
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};