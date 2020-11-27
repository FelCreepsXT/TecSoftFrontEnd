import http from '../http-common'

class ShipTerminalService{
    getall(){
        return http.get('shipTerminals');
    }
}

export default new ShipTerminalService();