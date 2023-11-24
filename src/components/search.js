import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const onSearch = async (e) => {
        console.log(search, e)

        navigate(`/search/${search}`);
    }
    return (
        <>
            <input type="search" name="search" placeholder="Search" onChange={(e) => {
                setSearch(e.target.value)
            }} />
            <button onClick={onSearch} >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {/* <button
                    data-bs-toggle="modal"
                    data-bs-target="#search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button> */}

            {/* <div className="modal fade" id="search" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                            {
                                content?.search?.length > 0 ? content.search.map((cont, index) => (
                                    <p>{cont.title}</p>
                                ))
                                    : "No Content"}
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    );
};
export default Search;
