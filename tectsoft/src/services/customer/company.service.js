import http from '../http-common'

class CompanyService{
    getCompanybyId(id){
        return http.get(`companies/${id}`);
    }
}

export default new CompanyService();