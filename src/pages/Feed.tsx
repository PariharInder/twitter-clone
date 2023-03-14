import { NavBar } from "./components/navBar"
import { NewsFeed } from "./components/newsFeed"
import { SearchBar } from "./components/searchBar"

export const Feed = () => {
    return (
        <div className='h-screen dark:bg-neutral-900'>
            <div className='flex justify-evenly py-10'>
            <SearchBar />
            <NavBar />
            </div>
            <NewsFeed />
        </div>
    )
}