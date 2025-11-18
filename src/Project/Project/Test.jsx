import React, { useEffect, useState,useContext } from "react";
import { ThemeContext } from "./Themeprovider";
const API_URL = "https://dummyjson.com/users";

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("All");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const formattedData = data.users.map((emp) => ({
          id: emp.id,
          name: `${emp.firstName} ${emp.lastName}`,
          age: emp.age,
          gender: emp.gender,
          company: emp.company?.name || "N/A",
        }));

        setEmployees(formattedData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEmployees();
  }, []);

 
  const filteredEmployees = employees
    .filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((emp) =>
      genderFilter === "All" ? true : emp.gender === genderFilter
    )
    .filter((emp) => {
     
      if (minAge !== "" && emp.age < Number(minAge)) return false;

     
      if (maxAge !== "" && emp.age > Number(maxAge)) return false;

      return true;
    })
    .sort((a, b) => {
      if (!sortField) return 0;

      let valA = a[sortField];
      let valB = b[sortField];

      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };
 const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      {/* Gender Filter */}
      <select
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
        style={{ marginRight: "10px" }}
      >
        <option value="All">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Age Filters */}
      <input
        type="number"
        placeholder="Min Age"
        value={minAge}
        onChange={(e) => setMinAge(e.target.value)}
        style={{ width: "90px", marginRight: "10px" }}
      />

      <input
        type="number"
        placeholder="Max Age"
        value={maxAge}
        onChange={(e) => setMaxAge(e.target.value)}
        style={{ width: "90px", marginRight: "10px" }}
      />
        <button onClick={toggleTheme}>
        dark
      </button>

      <table border={1} cellPadding="8" className="border border-collapse w-100">
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
              Name {sortField === "name" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>

            <th onClick={() => handleSort("age")} style={{ cursor: "pointer" }}>
              Age {sortField === "age" ? (sortOrder === "asc" ? "▲" : "▼") : ""}
            </th>

            <th>Gender</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.gender}</td>
              <td>{emp.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}

export default EmployeeTable;
