export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'netlify',
      options: {
        sites: [
          {
            buildHookId: '5d4d6b66141e0a4a7f574738',
            title: 'Website',
            name: 'sanity-gatsby-portfolio-web-u6otn9gs',
            apiId: 'dbb73654-662d-4942-a143-f13cbe0eca8d'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent projects',
        order: '_createdAt desc',
        types: ['project']
      },
      layout: { width: 'medium' }
    }
  ]
}
