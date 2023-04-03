import React from 'react'
import {Link} from 'react-router-dom';

export default function ShowBlog(){
    return(
        <div>
            <Link to='/Blog1'>First Blog</Link><br/>
            <Link to='/Blog2'>Second Blog</Link><br/>
            <Link to='/Blog3'>Third Blog</Link><br/>
            <Link to='/Blog4'>Fourth Blog</Link><br/>
        </div>
    )
}