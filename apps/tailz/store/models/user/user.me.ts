export class UserModel {
  username: string = ''
  dob: string = ''
  displayName: string = ''
  description: string = ''
  avatar: string = ''
  followsCount: number | undefined
  followersCount: number | undefined
  mainFeed: any
  savedFeeds: any
  notifications: any                     
  lastProfileStateUpdate = Date.now()
  lastNotifsUpdate = Date.now()
  authStatus: boolean = false


  constructor() {
    this.notifications = 0
  }

}
 