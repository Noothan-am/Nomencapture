export default {
  name: 'NamingSet',
  type: 'document',
  title: 'Naming Set',
  fields: [
    {
      title: 'User',
      name: 'User',
      type: 'reference',
      to: [{type: 'User'}],
    },
    {
      name: 'MainDescription',
      type: 'text',
      title: 'Main Description',
    },
    {
      name: 'Description1',
      type: 'text',
      title: '1st Description',
    },
    {
      name: 'Description2',
      type: 'text',
      title: '2nd Description',
    },
    {
      name: 'Description3',
      type: 'text',
      title: '3rd Description',
    },
    {
      name: 'Description4',
      type: 'text',
      title: '4th Description',
    },
    {
      name: 'Audio1',
      title: 'Audio File 1',
      type: 'file',
      description: 'Upload first audio file',
      options: {
        accept: 'audio/*',
      },
    },
    {
      name: 'Audio2',
      title: 'Audio File 2',
      type: 'file',
      description: 'Upload second audio file',
      options: {
        accept: 'audio/*',
      },
    },
    {
      name: 'Audio3',
      title: 'Audio File 3',
      type: 'file',
      description: 'Upload third audio file',
      options: {
        accept: 'audio/*',
      },
    },
    {
      name: 'PlayersNames',
      type: 'image',
      title: 'Players Names List',
    },
    {
      name: 'Names',
      title: 'NamesBenefits',
      type: 'object',
      fields: [
        {name: 'Name1', type: 'reference', title: 'Name 1', to: [{type: 'NameDetails'}]},
        {name: 'Name2', type: 'reference', title: 'Name 2', to: [{type: 'NameDetails'}]},
        {name: 'Name3', type: 'reference', title: 'Name 3', to: [{type: 'NameDetails'}]},
      ],
    },
  ],
}
