export default {
  '/auth/': [
    {
      text: 'Feathers Auth',
      collapsible: false,
      items: [
        {
          text: 'Overview',
          link: '/auth/index.md',
        },
        {
          text: 'Pricing',
          link: '/auth/pricing.md',
        },
        {
          text: 'Client',
          link: '/auth/client/index.md',
          items: [{
            text: 'React',
            link: '/auth/client/react.md',
          }, {
            text: 'Vue',
            link: '/auth/client/vue.md',
          }, {
            text: 'Svelte',
            link: '/auth/client/svelte.md',
          }],
        },
        {
          text: 'Platforms',
          link: '/auth/platforms/index.md',
          items: [{
            text: 'Node',
            link: '/auth/platforms/nodejs.md',
          }, {
            text: 'Deno',
            link: '/auth/platforms/deno.md',
          }, {
            text: 'Bun',
            link: '/auth/platforms/bun.md',
          }, {
            text: 'Cloudflare',
            link: '/auth/platforms/cloudflare.md',
          }],
        },
        {
          text: 'API',
          link: '/auth/api.md',
        },
      ],
    },
  ],
  '/pinion/': [
    {
      text: 'Pinion',
      collapsible: false,
      items: [
        {
          text: 'Quick Start',
          link: '/pinion/index.md',
        },
        {
          text: 'Why Pinion?',
          link: '/pinion/why.md',
        },
        {
          text: 'Generators and Tasks',
          link: '/pinion/generators.md',
        },
        {
          text: 'Templates and Files',
          link: '/pinion/templates.md',
        },
        {
          text: 'User Input',
          link: '/pinion/user-input.md',
        },
        {
          text: 'Composability',
          link: '/pinion/composability.md',
        },
        {
          text: 'API',
          link: '/pinion/api.md',
        },
      ],
    },
  ],
}
