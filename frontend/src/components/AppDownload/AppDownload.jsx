import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> THE MARK App</p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt='Play Store' />
            <img src={assets.app_store} alt='App Store' />
        </div>
    </div>
  )
}

export default AppDownload