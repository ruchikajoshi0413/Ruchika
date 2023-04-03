import React from 'react'
import {Link} from 'react-router-dom';

const Dashboard =()=> {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to ="NewBlog">Add new blog</Link></li>
        <li><Link to = "ShowBlog">Show blog</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;