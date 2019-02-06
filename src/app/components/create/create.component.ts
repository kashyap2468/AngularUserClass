import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    title = 'Add User';
    angForm: FormGroup;

    constructor(private http: HttpClient, private service: UserService, private fb: FormBuilder, private router: Router) {
        this.createForm();
    }

    createForm() {
        this.angForm = this.fb.group({
            username: ['', Validators.required],
            useremail: ['', Validators.required]
        });
    }

    addUser(username, useremail) {
        this.service.addUser(username, useremail).subscribe(res => {
            console.log(res);
            this.router.navigate(['index']);
        });
    }

    ngOnInit() {
    }
}
