import http from '../http-common'

class PackageService{
    getAll(){
        return http.get('/messages');
    }
    getAllChatsByCustomerId(id){
        return http.get(`/chats/customer/${id}`);
    }
    create(data){
        return http.post('/messages', data)
    }
}


export default new PackageService();