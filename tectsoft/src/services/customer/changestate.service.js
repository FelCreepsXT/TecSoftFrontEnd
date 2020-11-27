import http from '../http-common'

class ChangestateService{
    getallChangesData(){
        return http.get(`changestates`);
    }
    getPackageChanges(id){
        return http.get(`changestates/package/${id}`)
    }
    getChangeState(id,initState,finalState){
        return http.get(`changestates/package/${id}/state/${initState}/state/${finalState}`);
    }
}

export default new ChangestateService();