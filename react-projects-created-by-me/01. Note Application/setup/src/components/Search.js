import { MdSearch } from "react-icons/md";

function Search({ setSearchNote }) {
  return (
    <div className="search">
      {/* we add the search icon */}
      <MdSearch className="search-icon" size="1.4em" />
      {/* Here, when there is a change in input, there is change in state */}
      <input
        type="text"
        placeholder="Search for your notes..."
        onChange={(e) => setSearchNote(e.target.value)}
      />
    </div>
  );
}

export default Search;
