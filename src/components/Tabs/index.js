import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickTabItem}>
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
