import React, { useState, useEffect} from "react";


function NewBlog() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [createdby, setCreatedby] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [index, setIndex] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Desc: ${desc}`);
    console.log(`Createdby: ${createdby}`);
    // console.log(localStorage.setItem('Name', name));
    // console.log(localStorage.setItem('Desc', desc));
    // console.log(localStorage.setItem('Createdby', createdby));

          
    const newBlog = {name: name , desc: desc, createdby: createdby}

    const newBlogs = [...blogs];
    if (index === -1) {
      newBlogs.push(newBlog);
    } else {
      newBlogs[index] = newBlog;
      setIndex(-1);
    }
      setBlogs(newBlogs);
      localStorage.setItem("item", JSON.stringify(newBlogs));
      setName("")
      setDesc("")
      setCreatedby("")
  };

  const handleEditBlog = (index) => {
    const blog = blogs[index];
    setName(blog.name);
    setDesc(blog.desc);
    setCreatedby(blog.createdby);
    setIndex(index);
  };

  React.useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("item"));
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);

  console.log(localStorage.getItem('Name'));
  console.log(localStorage.getItem('Desc'));
  console.log(localStorage.getItem('Createdby'));
  
  const handleRemoveBlog =(index) => {
    const newBlogs = [...blogs];
    newBlogs.splice(index, 1);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
  };  

  return (
    <div >
    <form onSubmit={handleSubmit} style={{backgroundColor: "lightgray", padding: "20px", margin: "10px"}} >
      <label>Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label><br />
      <label>Desc:
        <textarea value={desc} onChange={(event) => setDesc(event.target.value)} />
      </label><br />
      <label>createdby
        <input type="text" value={createdby} onChange={(event) => setCreatedby(event.target.value)} />
      </label><br /><br/>
      <button type="submit" >Submit</button>
    </form>
    <hr/>
    <div>
        {blogs.map((blog,index)=>(
          <div key={index}>
            <h2>Blog!!!!!!</h2>
            <p>{blog.name}</p>
            <p>{blog.desc}</p>
            <p>{blog.createdby}</p>
            <button onClick={() => handleEditBlog(index)}>Edit</button>
            <button onClick={() => handleRemoveBlog(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>

 
  );
}
export default NewBlog;