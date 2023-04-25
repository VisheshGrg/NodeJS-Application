import React from "react";
import "./App.css"

function App(){
  const [users1, setUsers1] = React.useState([]);
  const [users2, setUsers2] = React.useState([]);
  const [users3, setUsers3] = React.useState([]);
  const [users4, setUsers4] = React.useState([]);
  const [users5, setUsers5] = React.useState([]);

  React.useEffect(() => {
    fetch('/query1') 
      .then((response) => response.json())
      .then((data) => setUsers1(data));

    fetch('/query2') 
      .then((response) => response.json())
      .then((data) => setUsers2(data));

    fetch('/query3') 
      .then((response) => response.json())
      .then((data) => setUsers3(data));

    fetch('/query4') 
      .then((response) => response.json())
      .then((data) => setUsers4(data));

    fetch('/query5') 
      .then((response) => response.json())
      .then((data) => setUsers5(data));
  }, []);

  return (
    <div>
      <h1>Query1 Results</h1>
      <h4>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {users1.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.quote}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Query2 Results</h1>
      <h4>Male Users which have phone price greater than 10,000.</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {users2.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.quote}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Query3 Results</h1>
      <h4>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {users3.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.quote}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Query4 Results</h1>
      <h4>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {users4.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.quote}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Query5 Results</h1>
      <h4>Show the data of top 10 cities which have the highest number of users and their average income.</h4>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Number of Users</th>
            <th>Average Income</th>
          </tr>
        </thead>
        <tbody>
          {users5.map((user) => (
            <tr key={user.city}>
              <td>{user.city}</td>
              <td>{user.count}</td>
              <td>{user.avgIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;