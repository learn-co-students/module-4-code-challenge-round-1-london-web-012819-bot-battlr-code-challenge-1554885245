import React from 'react'

const SortBots = (props) => (
    <form>
        <label style={{fontSize: 18, fontWeight: 'bold'}} htmlFor="nameSort">Sort by name: </label>
        <input onClick={props.updateNameSort} type="checkbox" name="nameSort"></input>
    </form>
)

export default SortBots