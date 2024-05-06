import React from 'react'
import BrandSwithcer from './BrandSwithcer'
import SearchBar from './SearchBar'
import NavigationDropdown from './NavigationDropdown'

const Navbar = () => {
  return (
    <div>
        <BrandSwithcer/>
        <SearchBar/>
        <NavigationDropdown/>
    </div>
  )
}

export default Navbar