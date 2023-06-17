import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { allAction } from '../../store/store';

export default function SearchBar() {
  const [searchedItem, setSearchedItem] = useState('');
  const searchDispatch = useDispatch();

  const searchChangeHandler = (e) => {
    setSearchedItem(() => e.target.value);
    searchDispatch(allAction.search(e.target.value));
  };
  return (
    <div className="search_container">
      <input
        type="serach"
        placeholder="Seach for the item"
        onChange={searchChangeHandler}
        value={searchedItem}
      />
    </div>
  );
}
