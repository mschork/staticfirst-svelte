export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8a16bdd3022b0178e8457b',
                  title: 'Sanity Studio',
                  name: 'staticfirst-svelte-studio',
                  apiId: '26d0ddc3-f514-4d21-8a28-11f78a1e6a38'
                },
                {
                  buildHookId: '5d8a16bdd3022b0184e84573',
                  title: 'Blog Website',
                  name: 'staticfirst-svelte',
                  apiId: 'adc2c2be-e750-4357-93cc-ff157e297790'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mschork/staticfirst-svelte',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://staticfirst-svelte.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
