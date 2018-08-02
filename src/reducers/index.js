import { combineReducers } from 'redux'
import profileDataResponse from './fetchedProfileReducer'
import repositoriesDataResponse from './fetchedRepositoriesReducer'

    const rootReducer=combineReducers({
                    profileDataResponse ,// Fetched  Profile Data
                    repositoriesDataResponse // Fetched Repositories Data
    });

export default rootReducer;
