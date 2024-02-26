export default {
  name: 'NameDetails',
  type: 'document',
  title: 'Naming Details',
  fields: [
    {
      title: 'User',
      name: 'User',
      type: 'reference',
      to: [{type: 'User'}],
    },
    {
      name: 'Name',
      type: 'string',
      title: 'Brand Name',
    },
    {
      name: 'MultilingualNames',
      title: 'Multilingual Names',
      type: 'object',
      fields: [
        {name: 'Language1', type: 'string', title: 'Language 1'},
        {name: 'Language2', type: 'string', title: 'Language 2'},
        {name: 'Language3', type: 'string', title: 'Language 3'},
      ],
    },
    {
      name: 'Related',
      type: 'string',
      title: 'Related',
    },
    {
      name: 'Dropdown',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Descriptive', value: 'Descriptive'},
          {title: 'Suggestive', value: 'Suggestive'},
          {title: 'Abstract', value: 'Abstract'},
        ],
      },
    },
    {
      name: 'Syllable',
      type: 'number',
      title: 'Syllable',
    },
    {
      name: 'DomainExtensions',
      title: 'Domain Extensions Avaliable',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        list: [
          {title: '.com', value: '.com'},
          {title: '.in', value: '.in'},
        ],
      },
    },
    {
      name: 'NameDescription',
      type: 'text',
      title: 'Name Description',
    },
    {
      name: 'NameBenefits',
      title: 'Name Benefits',
      type: 'object',
      fields: [
        {name: 'Benefit1', type: 'string', title: 'Benefit 1'},
        {name: 'Benefit2', type: 'string', title: 'Benefit 2'},
        {name: 'Benefit3', type: 'string', title: 'Benefit 3'},
      ],
    },
    {
      name: 'ChatDescription',
      title: 'Chat Description',
      type: 'object',
      fields: [
        {name: 'Chatbox1', type: 'text', title: 'Chatbox 1'},
        {name: 'Chatbox2', type: 'text', title: 'Chatbox 2'},
        {name: 'Chatbox3', type: 'text', title: 'Chatbox 3'},
      ],
    },
    {
      name: 'Domains',
      title: 'Domains',
      type: 'object',
      fields: [
        {name: 'Domain1', type: 'string', title: 'Domain 1'},
        {name: 'Domain2', type: 'string', title: 'Domain 2'},
      ],
    },
    {
      name: 'LLPNameAvailability',
      title: 'LLP Name Availability',
      type: 'string',
    },
    {
      name: 'Trademarkability',
      title: 'Trademarkability',
      type: 'string',
    },
    {
      name: 'GraphImage',
      title: 'Graph Image',
      type: 'image',
    },
    {
      name: 'SamplesImage',
      title: 'Samples Image',
      type: 'image',
    },
    {
      name: 'PhonemicSymbol',
      type: 'string',
      title: 'Phonemic Symbol',
    },
    {
      name: 'NameAudioFile',
      title: 'Name Audio File',
      type: 'file',
      description: 'Upload name audio file',
      options: {
        accept: 'audio/*',
      },
    },
    {
      name: 'ShortDescription',
      type: 'text',
      title: 'ShortDescription',
    },
    {
      name: 'Captured',
      type: 'string',
      title: 'Captured',
    },
  ],
}
