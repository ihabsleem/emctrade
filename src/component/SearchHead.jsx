import { FiSearch } from "react-icons/fi";

const SearchHead = () => {
    return (
        <div className="search-head">
            <div>
                <input type='text' placeholder='type to search'></input>

                <div className="icon"><FiSearch/></div>
            </div>
        </div>
    );
}

export default SearchHead;
