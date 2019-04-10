import React from 'react'

const SearchBots = (props) => (
    <form>
        <label htmlFor="input">Search for bot name </label>
        <input onChange={props.updateSearch}type="text" name="input" value={props.searchTerm}></input>
    </form>
)

export default SearchBots