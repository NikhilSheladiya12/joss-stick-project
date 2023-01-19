import React from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useState } from "react";
import { useEffect } from "react";
import '../../Users/Users.css';
import { Link } from "react-router-dom";

// this table for user select your name in order page 

const Usertable = () => {
  const [countries, setCountries] = useState([]);
  const [search, setsearch] = useState("");
  const [filtercountries, setFiltercountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setFiltercountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => <td>{row.name}</td>,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
      sortable: true,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Numericcode",
      selector: (row) => row.numericCode,
    },
    {
        name: "Select",
        cell: (row) => <Link to="/orderform" className='btn btn-sm btn-primary '>Select</Link>
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });

    setFiltercountries(result);
  }, [search]);

  // const keys = ["first_name", "last_name", "email"];
  // const Search = (data) => {
  //     return data.filter((item) =>
  //         keys.some((key) => item[key].toLowerCase().includes(query))
  //     );
  // };

  return (
    <div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 border border-secondary"> */}
            <DataTable
              columns={columns}
              data={filtercountries}
              pagination
              fixedHeader
            //   fixedHeaderScrollHeight='500px'
            //   selectableRows
              // selectableRowsHighlight
            //   highlightOnHover
              // actions={<button className='btn btn-info'>Export</button>}
              subHeader
              subHeaderComponent={
                <div className="d-flex w-100">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                  <input
                    type="text"
                    placeholder="Search here"
                    className="form-control w-85 me-3"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                  />
                  <button className="btn btn-secondary">Search</button>
                </div>
              }
            />
          {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default Usertable;