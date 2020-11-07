import SocialLoginButton from '@/components/auth/SocialLoginButton.vue'
import { mount } from '@vue/test-utils'

describe('Auth Components -> SocialLoginButton', () => {
  test('should be render', () => {
    const wrapper = mount(SocialLoginButton, {
      propsData: {
        text: 'asd',
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
