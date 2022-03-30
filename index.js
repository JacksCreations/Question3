import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const axios = require('axios').default;
/* 
Looping Exercise

OBJECTIVES:
1) Replace the <option> tags for the dropdown with your own list.

*/

function List() {
  const [users, setUsers] = useState([]);
  console.log(
    users.map(function (user) {
      return user.id;
    })
  );

  //Get using AXIOS
  useEffect(async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/users');

    setUsers(result.data);
  }, []);

  console.log(users);

  return (
    <div className="container">
      <div className="row">
        <h3>User Dropdown</h3>
        <select className="form-select" mb-3 option={users}>
          <option value="1">Sam Smith</option>
          <option value="2">Fawkes Phoenix</option>
          <option value="3">Jack Lohmar</option>
        </select>
      </div>
    </div>
  );
}

render(<List />, document.getElementById('my-app'));
