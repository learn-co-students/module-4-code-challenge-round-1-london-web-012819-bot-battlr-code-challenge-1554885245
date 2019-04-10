import React from 'react'

const SearchBots = (props) => (
    <form>
        <label style={{fontSize: 18, fontWeight: 'bold'}} htmlFor="input">Search for bot by name </label>
        <input onChange={props.updateSearch}type="text" name="input" value={props.searchTerm}></input>
    </form>
)

export default SearchBots