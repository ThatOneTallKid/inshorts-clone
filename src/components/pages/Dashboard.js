import React, {Component, useState} from 'react';
import './Dashboard.css';
import Button from '@material-ui/core/Button';
import Service from './service'
import fire from '../signup/firebase';




const handleLogout = () => {
  fire.auth().signOut();
}


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onChangeHeadline = this.onChangeHeadline.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePublishedAt = this.onChangePublishedAt.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeUrltoImage = this.onChangeUrltoImage.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
    this.newDetails = this.newDetails.bind(this);
    

    this.state = {
      headline: "",
      author: "",
      publishedAt: "",
      url: "",
      urlToImage: "",
      description: "",
    };
  }
  
  onChangeHeadline(e) {
    this.setState({
        headline: e.target.value,
    });
  }

  onChangeAuthor(e) {
    this.setState({
        author: e.target.value,
    });
  }

  onChangePublishedAt(e) {
    this.setState({
      publishedAt: e.target.value,
    });
  }

  onChangeUrl(e) {
    this.setState({
        url: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
        description: e.target.value,
    });
  }

  onChangeUrltoImage(e) {
    this.setState({
      urlToImage: e.target.value,
    });
  }

  saveDetails(e) {
    e.preventDefault();
    let data = {
      headline: this.state.headline,
      author: this.state.author,
      publishedAt: this.state.publishedAt,
      url: this.state.url,
      description: this.state.description,
    };
    console.log(data);
    Service.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        alert("Successfull!");
        
        this.setState({
          submitted: true,
        });

        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newDetails() {
    this.setState({
      headline: "",
      author: "",
      publishedAt: "",
      url: "",
      urlToImage: "",
      description: "",
    });
  }

  render() {
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
      <form onSubmit={this.saveDetails}>
          
            <h2>Enter News Details</h2>
          

            <div className="mb-3">
                  <label htmlFor="headline" className="form-label" >Headline</label>
                  <input type="text" name= "headline" className="form-control" value={this.state.headline} onChange={this.onChangeHeadline} id="headline" required/>
            </div>

            <div className="mb-3">
                  <label htmlFor="author" className="form-label">Author</label>
                  <input type="text" name= "author" className="form-control" value={this.state.author} onChange={this.onChangeAuthor} id="author" required/>
            </div>
          
            <div className="mb-3">
                  <label htmlFor="publishedAt" className="form-label">Published-At</label>
                  <input type="text" name= "publishedAt" className="form-control" value={this.state.publishedAt} onChange={this.onChangePublishedAt}  id="publishedAt" required/>
            </div>
                
            <div className="mb-3">
                  <label htmlFor="url" className="form-label">Url</label>
                  <input type="text" name= "url" className="form-control" value={this.state.url} onChange={this.onChangeUrl}  id="url" required/>
            </div>
                
            <div className="mb-3">
                  <label htmlFor="url" className="form-label">ImageUrl</label>
                  <input type="text" name= "url" className="form-control" value={this.state.urlToImage} onChange={this.onChangeUrltoImage}  id="urlToImage" required/>
            </div>
                
            <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea className="form-control" name= "description" value={this.state.description} onChange={this.onChangeDescription} id="description"  rows="4" required></textarea>
            </div>

            <button type="submit"  className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
              
</div>
      
</div>
    );

  }
}