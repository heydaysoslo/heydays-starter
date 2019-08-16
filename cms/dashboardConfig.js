export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'netlify',
      options: {
        sites: [
          {
            buildHookId: '5d55445bc3cf83a1559a0a02', // Create this under Build & deploy look for Build hooks
            title: 'Website', // Title that appears in the dashboard
            name: 'heydays-starter', // Find on netlify under General>Site details look for Site name
            apiId: '2beb0e18-90df-4575-b7af-b8b6a74d8ab5' // Find on netlify under General>Site details look for APP ID
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
