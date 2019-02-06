import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    user: any;
    angForm: FormGroup;
    title = 'Edit User';

    constructor(private route: ActivatedRoute, private router: Router, private service: UserService, private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.angForm = this.fb.group({
            username: ['', Validators.required],
            useremail: ['', Validators.required]
        });
    }

    updateUser(username, useremail) {
        this.route.params.subscribe(params => {
            this.service.updateUser(username, useremail, params['id']).subscribe(res => {
                this.router.navigate(['index']);
            });
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.user = this.service.editUser(params['id']).subscribe(res => {
                this.user = res;
            });
        });
    }
}
