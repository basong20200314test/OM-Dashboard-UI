const getters = {
  device: state => state.app.device,
  theme: state => state.app.theme,
  color: state => state.app.color,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.name,
  welcome: state => state.user.welcome,
  roles: state => state.user.roles,
  perms: state => state.user.perms,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  multiTab: state => state.app.multiTab,
  lang: state => state.i18n.lang,
  searchApp: state => state.publisher.searchApp,
  updateList: state => state.publisher.updateList,
  searchPlacement: state => state.publisher.searchPlacement,
  searchPlacementName: state => state.publisher.searchPlacementName,
  searchPlacementType: state => state.publisher.searchPlacementType,
  currentOrgId: state => state.publisher.currentOrgId

}

export default getters
