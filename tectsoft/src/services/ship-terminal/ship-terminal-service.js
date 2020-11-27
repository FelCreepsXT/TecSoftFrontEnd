import html from '../http-common'

class ShipTerminalService{
    getAll(){
        return html.get('/shipTerminals');
    }
    postShipTerminal(data){
        return html.post('/shipTerminals',data);
    }
}

export default new ShipTerminalService();
