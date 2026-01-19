import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
return (
<div className="search-container">
<input
type="text"
className="search-input"
placeholder="Enter Project Title"
value={searchTerm}
onChange={(e) => onSearchChange(e.target.value)}
/>
</div>
);
}

export default SearchBar;