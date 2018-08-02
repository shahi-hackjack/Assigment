import React, { Component } from 'react';
import RepositoryListComponent from './RepositoryListComponent';
import RepositoryHeaderComponent from './RepositoryHeaderComponent';

import {fetchRepositoriesAction} from '../actions'
import { connect } from 'react-redux';

import '../static/style/RepositoryContainer.css';

class RepositoryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: [],
            filterRepositories: [],
            repositoryTypes: [],
            repositoryLanguages: []
            };
        this.handleFilterByName = this.handleFilterByName.bind(this);
        this.handleFilterByType = this.handleFilterByType.bind(this);
        this.handleFilterByLanguage = this.handleFilterByLanguage.bind(this);
        this.sliceUniqueRepoType = this.sliceUniqueRepoType.bind(this);
        this.sliceUniqueRepoLanguage = this.sliceUniqueRepoLanguage.bind(this);
}

handleFilterByName = (nameValue) => {

    let filterRepositories = this.state.repositories.filter((repository) => {
        return repository.name.toLowerCase().startsWith(nameValue.toLowerCase())
    });
    this.setState({
            filterRepositories
        }
    );
}

handleFilterByLanguage = (languageValue) => {
    if (languageValue !== 'All') {
        let filterRepositories = this.state.repositories.filter((repository) => {
            return repository.language === languageValue
        });
        this.setState({
            filterRepositories
        })
     }
    else {
        this.setState({
            filterRepositories: this.state.repositories
        })
    }
}

handleFilterByType = (typeValue) => {
    if (typeValue !== 'All') {
        let filterRepositories = this.state.repositories.filter((repository) => {
            return repository["owner"].type === typeValue
        });

        this.setState({
            filterRepositories
        })
    } else {
        this.setState({
            filterRepositories: this.state.repositories
        })
    }}

sliceUniqueRepoType = (repositories) => {
    let lookup = {};
    let items = repositories;
    let result = [];
    for (let item, i = 0; item = items[i++];) {
        let name = item["owner"].type;
        if (name !== null) {
            if (!(name in lookup)) {
                lookup[name] = 1;
                result.push(name);
            }
        }
    }
    return {    repositoryTypes: result    }
}

sliceUniqueRepoLanguage = (repositories) => {
    let lookup = {};
    let items = repositories;
    let result = [];
    for (let item, i = 0; item = items[i++];) {
        let name = item.language;
        if (name !== null) {
            if (!(name in lookup)) {
                lookup[name] = 1;
                result.push(name);
            }
        }
    }
    return { repositoryLanguages: result }
}

componentWillMount() {
    this.props.fetchRepositories();
}

componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.repositories) !== JSON.stringify(nextProps.repositories)) {
        this.setState({
                repositories: nextProps.repositories,
                filterRepositories: nextProps.repositories,
                ...this.sliceUniqueRepoType(nextProps.repositories),
                ...this.sliceUniqueRepoLanguage(nextProps.repositories)
        })
    }
}

  render() {
    return (
        <div className="repositoryContainer" >
              <RepositoryHeaderComponent  repositoryTypes={this.state.repositoryTypes} repositoryLanguages={this.state.repositoryLanguages}  handleFilterByName={this.handleFilterByName} handleFilterByLanguage={this.handleFilterByLanguage} handleFilterByType={this.handleFilterByType}  />
              <RepositoryListComponent repository={this.state.filterRepositories}  />
         </div>
    )
  }
}

const mapStateToProps = (state) => {
    return ({
        repositories: state.repositoriesDataResponse.data
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepositories: () => dispatch(fetchRepositoriesAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryContainer);
