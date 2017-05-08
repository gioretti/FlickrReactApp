import React from 'react';

function SearchComponent(props) {

        return(
            <div className="form-inline searchComponent">
                <div className="input-group">
                    <label className="sr-only" htmlFor="keywords">Search: </label>
                    <input type="text"
                            id="keywords"
                            className="form-control"
                            onChange={(event) => props.onKeywordsChange(event.target.value)}
                            placeholder="keywords" />

                 <span className="input-group-btn">
                    <button className="btn btn-primary"
                            onClick={() => props.onClick()}> Search
                    </button>
                 </span>
                 </div>
            </div>
        );
}

export default SearchComponent;
