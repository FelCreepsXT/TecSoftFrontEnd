import html from '../http-common'

class CompanyService{
    getId(id){
        return html.get(`/companies/${id}`)
    }

    getByUsernameAndPassword(username, password){
        return html.get(`/companies/${username}/${password}`)
    }

}

export default new CompanyService();
