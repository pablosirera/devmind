import ColorSwitch from '../ui/ColorSwitch.vue'

export default {
  title: 'UI/ColorSwitch',
  component: ColorSwitch,
}

const Template = () => ({
  components: { ColorSwitch },
  template: '<ColorSwitch />',
})

export const Default = Template.bind({})
