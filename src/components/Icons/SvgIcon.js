import { ReactComponent as Rect } from '../../assets/images/rect.svg'



const ICONS = {
  rect: Rect,
}


const SVGIcon = ({ name, ...rest }) => {
  const SelectIcon = ICONS[name]

  return <SelectIcon {...rest} />
}

export default SVGIcon
