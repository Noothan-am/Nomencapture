export default {
  name: 'AuditPage',
  type: 'document',
  title: 'Audit and Understanding',
  fields: [
    {
      title: 'User',
      name: 'User',
      type: 'reference',
      to: [{type: 'User'}],
    },
    {
      name: 'Title1',
      title: '1st Question',
      type: 'object',
      fields: [
        {name: 'question', type: 'string'},
        {name: 'description', type: 'string'},
      ],
    },
    {
      name: 'Title2',
      title: '2nd Question',
      type: 'object',
      fields: [
        {name: 'question', type: 'string'},
        {name: 'description', type: 'string'},
      ],
    },
    {
      name: 'Title3',
      title: '3rd Question',
      type: 'object',
      fields: [
        {name: 'question', type: 'string'},
        {name: 'description', type: 'string'},
      ],
    },
    {
      name: 'Title4',
      title: '4th Question',
      type: 'object',
      fields: [
        {name: 'question', type: 'string'},
        {name: 'description', type: 'string'},
      ],
    },
  ],
}
