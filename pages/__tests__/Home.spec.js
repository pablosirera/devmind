import { shallowMount } from '@vue/test-utils'
import HomeView from '@/pages/index.vue'

describe('Home View', () => {
  const build = () => {
    const wrapper = shallowMount(HomeView)

    return {
      wrapper,
    }
  }

  test('should be render', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  test('should match snapshot', () => {
    const { wrapper } = build()
    expect(wrapper.element).toMatchSnapshot()
  })
})
