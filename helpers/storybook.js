export const getOptionsArgTypes = (options) => ({
  description: '**options:**',
  table: {
    type: { summary: options.map((option) => `'${option}'`).join('|') },
  },
  control: { type: 'select', options },
})
