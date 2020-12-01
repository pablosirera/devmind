export class UserModel {
  constructor(userData) {
    this.name = userData.displayName
    this.email = userData.email
    this.photo = userData.photoURL
    this.id = userData.uid
  }
}
