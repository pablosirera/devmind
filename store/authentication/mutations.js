import { UserModel } from '~/models'

export default {
  setUser(state, payload) {
    state.user = new UserModel(payload)
  },
}
