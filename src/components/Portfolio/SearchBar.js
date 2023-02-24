import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ projects, setSearchResults }) => {
  const handleSubmit = (e) => e.prevent.default()

  const handleSearchChange = (e)  => {
    console.log(e.target.value);
    if(!e.target.value) return setSearchResults(projects)


    const resultsArray = projects.filter(projet => {
      let skillList = projet.skills
      return skillList.some(skill =>
        skill.toUpperCase().includes(e.target.value.toUpperCase())
        )
    })
    setSearchResults(resultsArray)
    console.log('changing');
  }



  return (
<form style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", maxWidth: "60%", margin: "0 auto", height: "5%", marginBottom: "20px", borderRadius: "10px"}} className='search' onSubmit={handleSubmit}>
  <input style={{ flex: 0.5, height: "90%", borderRadius: "5px", borderColor: "#BB9F06", borderWidth: "2px", borderStyle: "solid" }} className='search_input' type='text' id="search" onChange={handleSearchChange} placeholder="Enter a stack eg: React "/>
  <button style={{ height: "100%", borderRadius: "5px", borderColor: "#BB9F06", borderWidth: "2px", borderStyle: "solid", marginLeft: "10px" }} className='search_button'>
    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#BB9F06" }}/>
  </button>
</form>

  )
}

export default SearchBar
