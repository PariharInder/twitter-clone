import logo from '../../assets/twitter-logo.svg'

export const SearchBar = () => {
    return (
        <div className='flex'>
            <img src={logo} alt="twitter logo" className='h-10 mx-10'/>
            <input type="text" name="searchBar" id="searchBar" className='rounded-xl px-4 py-1' placeholder="Search"/>
        </div>
    )
}