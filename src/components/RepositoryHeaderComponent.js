import React, { Component } from 'react';
import '../static/style/RepositoryHeaderComponent.css';

class RepositoryHeaderComponent extends Component {

    constructor(props) {
           super(props);
           this.state = {activeClasses: [true, false, false,false,false]};
           this.addActiveClass= this.addActiveClass.bind(this);
          this.createSelectTypeItems=this.createSelectTypeItems.bind(this);
          this.createSelectLangaugeItems=this.createSelectLangaugeItems.bind(this);
          this.onDropdownTypeSelected=this.onDropdownTypeSelected.bind(this);
          this.onDropdownLanguageSelected=this.onDropdownLanguageSelected.bind(this);
          this.inputSearchQuery=this.inputSearchQuery.bind(this);
           }

   addActiveClass(index) {
         if(this.state.activeClasses[index]!=true)
            {
                const activeClasses = this.state.activeClasses;
                activeClasses.fill(false,0);
                activeClasses[index]=!activeClasses[index];
                this.setState({activeClasses});
        }
     }

 createSelectTypeItems() {
     let items = [];
     items.push(<option default key={-1} value={"All"}>Type:All</option>)
     for (let i = 0; i <this.props.repositoryTypes.length; i++) {
          items.push(<option key={i} value={this.props.repositoryTypes[i]}>{this.props.repositoryTypes[i]}</option>);
     }
     return items;
 }

  createSelectLangaugeItems() {
      let items = [];
      items.push(<option default key={-1} value={"All"}>Language:All</option>)
      for (let i = 0; i <this.props.repositoryLanguages.length; i++) {
           items.push(<option key={i} value={this.props.repositoryLanguages[i]}>{this.props.repositoryLanguages[i]}</option>);
      }
      return items;
  }

onDropdownTypeSelected(e) {
    this.props.handleFilterByType(e.target.value);
}

onDropdownLanguageSelected(e) {
    this.props.handleFilterByLanguage(e.target.value);
}

inputSearchQuery(e){
    this.props.handleFilterByName(e.target.value);
}

  render() {
    return (
            <div className="repositoryHeaderComponent">
                  <div className="repositoryButtons">
                           <a href="#"  className={this.state.activeClasses[0]? "active repositoryButton ":"repositoryButton"} onClick={() => this.addActiveClass(0)}>Overview</a>
                           <a href="#"  className={this.state.activeClasses[1]? "active repositoryButton" :"repositoryButton"} onClick={() => this.addActiveClass(1)}>Repositories</a>
                           <a href="#"  className={this.state.activeClasses[2]? "active repositoryButton" :"repositoryButton"} onClick={() => this.addActiveClass(2)}>Stars</a>
                           <a href="#" className= {this.state.activeClasses[3]? "active repositoryButton" :"repositoryButton"} onClick={() => this.addActiveClass(3)}>Followers</a>
                           <a href="#" className= {this.state.activeClasses[4]? "active repositoryButton" :"repositoryButton"} onClick={() => this.addActiveClass(4)}>Following</a>
                  </div>
                <div className="repositoryFilters">
                         <input type="text" onChange={this.inputSearchQuery} id="fname" name="firstname" placeholder="Search Repositories....." />
                        <select onChange={this.onDropdownTypeSelected}  >
                                {this.createSelectTypeItems()}
                         </select>
                        <select onChange={this.onDropdownLanguageSelected}  >
                                {this.createSelectLangaugeItems()}
                         </select>
                        <button className="button2">New</button>
                 </div>
            </div>
        )
    }
}

export default RepositoryHeaderComponent;
