import { Profile } from './profile'
import settings from '../../assets/settings.svg'

export const NavBar = () => {
    return (
        <div className='flex text-white font-bold text-2xl'>
            <Profile />
            <img src={settings} alt="settings logo" />
        </div>
    )
}