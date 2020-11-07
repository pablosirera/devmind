import { shallowMount } from '@vue/test-utils'
import LoginView from '@/pages/auth/login.vue'

describe('Auth -> Login View', () => {
  const build = () => {
    const wrapper = shallowMount(LoginView)

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

  test('should click on social login button', () => {
    const { wrapper } = build()
    const socialButton = wrapper.findComponent({ name: 'SocialLoginButton' })
    socialButton.trigger('click')
  })
})
