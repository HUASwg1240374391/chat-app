const defaultValue = {
  activeItem: '/'
}
export default (state = defaultValue, actions) => {
  const tem = { ...defaultValue }
  switch (actions.type) {
    case 'updateActiveNavItem':
      tem.activeItem = actions.value
      return tem
    default:
      return tem
  }
}
