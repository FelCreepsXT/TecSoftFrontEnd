import html from '../http-common'

class TerminalService{
    getAll(){
        return html.get('/terminals');
    }
    createTerminal(data){
        return html.post('/terminals',data);
    }
}

export default new TerminalService();
