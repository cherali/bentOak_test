import styled from 'styled-components';


const ICONS = {
  avatar: '/assets/icons/avatar.png',
  edit: '/assets/icons/edit.png',
  hide: '/assets/icons/hide.png',
  inbox: '/assets/icons/inbox.png',
  logo: '/assets/icons/logo.png',
  smallLogo: '/assets/icons/logo_large.png',
  largeLogo: '/assets/icons/logo_small.png',
  menu: '/assets/icons/menu.png',
  trash: '/assets/icons/trash.png',
  worm: '/assets/icons/worm.png',
}


const Icon = styled.img.attrs(({ name }) => ({
  src: ICONS[name], alt: ICONS[name]
}))`
  cursor: ${props => props.cursor || 'default'};
`

export default Icon;