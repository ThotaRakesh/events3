import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <>
      <li>
        <img src={imageUrl} alt={`${imageAltText}`} />
      </li>
    </>
  )
}

export default LanguageItem
