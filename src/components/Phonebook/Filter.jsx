import { useDispatch, useSelector } from "react-redux";
import {setStatusFilter } from '../../redux/filtersSlice'
import PropTypes from 'prop-types';

export function Filter(){
  const filters = useSelector(state => state.filters);
  
  const dispatch = useDispatch();
  
  function hendleFilter(event) {
    const { value } = event.target
    dispatch(setStatusFilter(value))      
  }
  
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={filters}
        onChange={hendleFilter}
      />
    </label>
  )
}

Filter.prototype = {
  value:PropTypes.string.isRequired
}