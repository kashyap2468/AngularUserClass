import {Injectable} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    result: any;

    constructor(private http: HttpClient) {
    }

    addUser(username, useremail) {
        const uri = 'http://localhost:4000/users/add';
        const obj = {
            username: username,
            useremail: useremail
        };
        return this.http.post(uri, obj).map(res => console.log('Done'));
    }

    getUser() {
        const uri = 'http://localhost:4000/users';
        return this
            .http
            .get(uri)
            .map(res => {
                return res;
            });
    }

    editUser(id) {
        const uri = 'http://localhost:4000/users/edit/' + id;
        return this
            .http
            .get(uri)
            .map(res => {
                return res;
            });
    }

    updateUser(username, useremail, id) {
        const uri = 'http://localhost:4000/users/update/' + id;

        const obj = {
            username: username,
            useremail: useremail
        };
        return this.http.post(uri, obj).map(res => console.log('Done'));
    }

    deleteUser(id) {
        const uri = 'http://localhost:4000/users/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
                return res;
            });
    }
}
