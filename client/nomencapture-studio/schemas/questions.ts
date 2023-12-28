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
      type: 'string',
      title: '1st Question',
    },
    {
      name: 'Description1',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'Title2',
      type: 'string',
      title: '2nd Question',
    },
    {
      name: 'Description2',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'Title3',
      type: 'string',
      title: '3rd Question',
    },
    {
      name: 'Description3',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'Title4',
      type: 'string',
      title: '4th Question',
    },
    {
      name: 'Description4',
      type: 'string',
      title: 'Description',
    },
  ],
}
