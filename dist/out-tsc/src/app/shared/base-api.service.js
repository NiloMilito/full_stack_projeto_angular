import * as tslib_1 from "tslib";
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
export class BaseApiService {
    constructor(httpClient, path) {
        this.httpClient = httpClient;
        this.url = `${environment.baseUrl}/${path}`;
        console.log(this.url);
    }
    listar() {
        console.log(this.url);
        return this.httpClient.get(this.url)
            .pipe(map(value => value));
    }
    consultar(id) {
        debugger;
        console.log(this.url);
        return this.httpClient.get(`${this.url}/${id}`)
            .pipe(map(value => value));
    }
    criar(body) {
        return this.httpClient.post(this.url, body)
            .pipe(map(value => value));
    }
    atualizar(id, body) {
        return this.httpClient.put(`${this.url}/${id}`, body)
            .pipe(map(value => value));
    }
    remover(id) {
        return this.httpClient.delete(`${this.url}/${id}`);
    }
    salvar(body) {
        const { id } = body, bodyRequest = tslib_1.__rest(body, ["id"]);
        if (id) {
            return this.atualizar(id, bodyRequest);
        }
        return this.criar(body);
    }
}
//# sourceMappingURL=base-api.service.js.map