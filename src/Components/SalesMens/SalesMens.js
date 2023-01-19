import React, { useState } from 'react';
import './SalesMens.css';
import Table from './SallerTable';
import { Users } from "./User";

const SalesMens = () => {

    const [query, setQuery] = useState("");

    // search keyword for api
    const keys = ["first_name", "last_name", "email"];
    const Search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };

    return (
        <div className='salesmen-section'
            style={{
                paddingLeft: "150px"
            }}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='salesmen-heading-part'>
                            <h3 className='salesmen-heading-txt'>Sales Men</h3>
                        </div>
                        <div className='salestable-containt'>
                            <div className='search-header-part'>
                                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                <input
                                    className="sales-input-search"
                                    placeholder="Search..."
                                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                                />
                            </div>
                                <button className='salesmen-serch-btn'>Search</button>
                        </div>
                        {<Table data={Search(Users)} />}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SalesMens;
