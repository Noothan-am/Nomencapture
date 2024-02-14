export default {
  name: 'Greetings',
  type: 'document',
  title: 'Greetings',
  fields: [
    {
      title: 'User',
      name: 'User',
      type: 'reference',
      to: [{type: 'User'}],
    },
    {
      name: 'Intro',
      type: 'text',
      title: 'Intro',
    },
    {
      name: 'FirstPoint',
      type: 'text',
      title: 'First Point',
    },
    {
      name: 'SecondPoint',
      type: 'text',
      title: 'Second Point',
    },
    {
      name: 'Outro',
      type: 'text',
      title: 'Outro',
    },
  ],
}
