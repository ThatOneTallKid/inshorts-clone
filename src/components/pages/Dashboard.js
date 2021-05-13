import React, {useState} from 'react';
import './Dashboard.css';
import Button from '@material-ui/core/Button';
import fire from "../signup/firebase"




const Dashboard = ({ handleLogout }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedAt, setPublished] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    
  var db = fire.firestore();
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("news")
      .add({
        title: title,
        author: author,
        publishedAt: publishedAt,
        url: url,
        description: description
      })
      .then(() => {
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });
    setTitle('');
    setAuthor('');
    setPublished('');
    setUrl('');
    setDescription('');
  };
    

    


    
    return (
        <div className = "Dashboard">
            <div className="nav">
      <div className="menu">
        
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
      />


                <div className="signup" onClick={handleLogout}>
        
      <Button variant="contained" color="primary">
            log out
      </Button>
          
      
      </div>
            </div>
            <div className="form" >
                
            <div className="card" >
  <div className="card-body">
  <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" name= "title" className="form-control" value={title} onChange={(e) => setTitle(e.target.title)} id="title"   />
    </div>
  <div className="mb-3">
    <label htmlFor="author" className="form-label">Author</label>
    <input type="text" name= "author" className="form-control" value={author} onChange={(e) => setAuthor(e.target.author)} id="author" required/>
                </div>
                
    <div className="mb-3">
    <label for="publishedAt" className="form-label">PublishedAt</label>
    <input type="text" name= "publishedAt" className="form-control" value={publishedAt} onChange={(e) => setPublished(e.target.publishedAt)}  id="publishedAt" required/>
    </div>
    <div className="mb-3">
    <label htmlFor="url" className="form-label">Url</label>
    <input type="text" name= "url" className="form-control" value={url} onChange={(e) => setUrl(e.target.url)}  id="url" required/>
    </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <textarea className="form-control" name= "description" value={description} onChange={(e) => setDescription(e.target.description)} id="description"  rows="4" required></textarea>
  </div>
 
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
  </div>
                    </div>
                    
</div>
            
        </div>
    )
}
export default Dashboard;