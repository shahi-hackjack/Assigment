import superagent from 'superagent';
//Api End Point
export function* fetchProfileAPI() {
    let response = yield superagent.get('https://api.github.com/users/supreetsingh247')
    return response.body
}

export function* fetchRepositoriesAPI() {
    let response = yield superagent.get('https://api.github.com/users/supreetsingh247/repos')
    return response.body
}
