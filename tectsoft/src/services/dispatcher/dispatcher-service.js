import html from '../http-common'

class DispatcherService{
    getAll(){
        return html.get('/dispatchers')
    }

    getId(id){
        return html.get(`/dispatchers/${id}`)
    }

    getByUsernameAndPassword(username, password){
        return html.get(`/dispatchers/${username}/${password}`)
    }
}

export default new DispatcherService();
