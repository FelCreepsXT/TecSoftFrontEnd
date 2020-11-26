import http from "./http-common"

class TerminalsService{
    get(id){
        return http.get(`/terminals/${id}`)
    }
    create(data) {
        return http.post("/terminals", data);
    }
}

export default new TerminalsService();
