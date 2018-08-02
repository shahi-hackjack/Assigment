import React, { Component } from 'react';
import Moment from 'react-moment';

import '../static/style/RepositoryListComponent.css';

class RepositoryListComponent extends Component {
  render() {
      let list=[];
      if(this.props.repository.length!==0)
      {
          list=this.props.repository.map(q=> {
            return (
                <li key={q.id}>
                <a href={q.html_url}><h2 className="repositoryName"><span>{q.name}</span></h2></a>
                <h4 className="repositoryDescription"><span>{q.description}</span></h4>
                <h6>{q.language!=null?<span className="repositoryLanguage">{q.language}</span>:null}
                {q.forks_count!=0?<span className="repositoryForks_count">{q.forks_count}</span>:null}
                {q.updated_at!=null?<span className="repositoryUpdated_at"> <Moment fromNow>{q.updated_at}</Moment></span>:null}</h6>
                </li>
              );
          })
      }
  else{
     list=<li><h4 className="repositoryDescription">UhOh!!!!! No repositories with such name .....Names are not Case Sensitive</h4>.</li>
      }
return (
            <div className="repositoryListComponent">
                 <ul className="list">
                 {list}
                 </ul>
            </div>
    )
  }
}
export default RepositoryListComponent;
