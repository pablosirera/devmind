import { shallowMount } from '@vue/test-utils'
import BaseLink from '@/components/ui/BaseLink.vue'

describe('UI Components -> BaseLink', () => {
  const build = () => {
    const wrapper = shallowMount(BaseLink)

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
