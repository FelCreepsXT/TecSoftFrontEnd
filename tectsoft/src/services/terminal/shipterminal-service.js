import http from './http-common'

class ShipTerminalsService{
    get(id){
        return http.get(`/ship-terminal/${id}`);
    }
    getAllShipTerminalByCompanyId(id){
        return http.get(`/ship-terminal/companies/id?company=${id}`)
    }


}

export default new ShipTerminalsService();
