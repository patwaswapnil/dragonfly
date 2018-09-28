webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manage_profile_manage_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(_navCtrl, _navParams, _shared, _api, _auth, _callNumber) {
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._shared = _shared;
        this._api = _api;
        this._auth = _auth;
        this._callNumber = _callNumber;
        this.user = {};
        this.userData = [];
        this.user_id = null;
        this.page = null;
        this.iconPath = '../../assets/icon/';
        this.user_id = this._navParams.get("user_id");
        this.page = this._navParams.get("page");
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        this.loggedInUser = this._auth.user.id;
        this.getUserDetail();
        console.log("ionViewDidEnter");
    };
    ProfilePage.prototype.getUserDetail = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getUserDetail({ user_id: this.user_id }).subscribe(function (response) {
            _this.user = response[1];
            _this.userData = response.data;
            console.info(_this.user);
            _this._shared.Loader.hide();
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    ProfilePage.prototype.ManageProfile = function () {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__manage_profile_manage_profile__["a" /* ManageProfilePage */]);
    };
    ProfilePage.prototype.callNumber = function (number) {
        this._callNumber.callNumber(number, true);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <button ion-button menuToggle auto-hide="false">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{page == \'profile\' ? this._auth.translateData(\'profile\') : this._auth.translateData(\'Participant Details\')}}</ion-title>\n\n    <ion-buttons end *ngIf="page == \'profile\'" (click)="ManageProfile()">\n\n      <button ion-button icon-only>\n\n        <ion-icon name="md-create"></ion-icon> \n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding *ngIf="user">\n\n  <div class="wrapper">\n\n    <ion-item class="profile-header">\n\n      <ion-avatar item-start>\n\n        <img *ngIf="!user.profile_image" src="../assets/icon/ic_user.svg">\n\n      </ion-avatar>\n\n      <h2 class="user-name">{{user.full_name}}</h2>\n\n    </ion-item>\n\n    <p>{{user.about}}</p>\n\n  </div>\n\n  <ion-list>\n\n  <ion-item class="item-input">\n\n      <img class="profile-icon" src="../../assets/icon/ic_user.svg" item-start>\n\n      <p class="app-label">{{"Nick Name" | translate}}</p>\n\n      <p class="space-normal">{{user.nick_name ? user.nick_name  : \'- - -\'}}</p>\n\n    </ion-item>\n\n    <ion-item class="item-input" (tap)="loggedInUser != user.id ?  callNumber(user.mobile) : \'return false\'">\n\n      <ion-icon name="ios-call" item-start></ion-icon>\n\n      <p class="app-label">{{"Contact Number" | translate}} </p>\n\n      <p class="space-normal">{{user.mobile}}</p>\n\n    </ion-item>\n\n    <ion-item class="item-input">\n\n      <ion-icon name="md-globe" item-start></ion-icon>\n\n      <p class="app-label">{{"City" | translate}}</p>\n\n      <p class="space-normal">{{user.city ? user.city : \'- - -\' }}</p>\n\n    </ion-item>\n\n    <ion-item class="item-input">\n\n      <img class="profile-icon" src="../../assets/icon/ic_dob.svg" item-start>\n\n      <p class="app-label">{{"Date Of Birth" | translate}}</p>\n\n      <p class="space-normal">{{user.dob ? user.dob  : \'- - -\'}}</p>\n\n    </ion-item>\n\n    <div *ngIf="userData">\n\n      <ion-item class="item-input" *ngFor="let data of userData">\n\n        <img class="profile-icon" [src]="iconPath+data.icon" item-start>\n\n        <p class="app-label">{{data.lable | translate}}</p>\n\n        <p class="space-normal">{{data.value ? data.value : \'- - -\'}}</p>\n\n      </ion-item>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_preview_task_preview__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_users_search_users__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api_provider__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageTaskPage = /** @class */ (function () {
    function ManageTaskPage(_shared, _api, navCtrl, navParams, _modalCtrl, _alert) {
        this._shared = _shared;
        this._api = _api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._modalCtrl = _modalCtrl;
        this._alert = _alert;
        this.section = 1;
        this.taskDetail = { attachment_required: [], attachment_optional: [], attachment_notrequired: [], task_attachments: {}, is_public: 1, frequency: 2, assign_to: 2 };
        this.id = null;
        this.errorMsg = null;
        this.access = [
            { 'icon': 'image', id: 1, 'name': 'Add Image', 'status': 0 },
            { 'icon': 'mic', id: 2, 'name': 'Add Audio', 'status': 0 },
            { 'icon': 'videocam', id: 3, 'name': 'Add Video', 'status': 0 },
            { 'icon': 'pin', id: 4, 'name': 'Add Location', 'status': 0 },
            { 'icon': 'document', id: 5, 'name': 'Add File', 'status': 0 }
        ];
        this.today = new Date().toJSON().split('T')[0];
        this.selectedUsers = [];
        this.submitted = false;
        this.id = this.navParams.get('id');
        this._type = this.navParams.get('type');
    }
    ManageTaskPage.prototype.ionViewDidLoad = function () {
        if (!this.id) {
            this.getUnitRespondets();
        }
        // setTimeout(() => {
        //   this.taskDetail.start_date = this.today;
        //   console.log(this.today);
        // }, 1000);
        if (this.id) {
            this.getTaskDetail();
        }
    };
    ManageTaskPage.prototype.getTaskDetail = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getTask(this.id).subscribe(function (data) {
            _this.prepareTask(data.task);
            delete _this.taskDetail.start_date;
            delete _this.taskDetail.start_time;
            _this._shared.Loader.hide();
        }, function (err) {
            _this._shared.Loader.hide();
            alert('Oops! something went wrong.');
            _this.navCtrl.pop();
        });
    };
    ManageTaskPage.prototype.next = function () {
        this.submitted = false;
        if (!this.form.valid) {
            this.submitted = true;
            return false;
        }
        if (this.section < 6) {
            if (this.section == 4) {
                if (this.taskDetail.expiry_time < this.taskDetail.due_time) {
                    this._shared.Toast.show('Expiry hours should not be less than due hours.');
                    return;
                }
            }
            this.section += 1;
        }
        else {
            return;
        }
    };
    ManageTaskPage.prototype.back = function () {
        if (this.section != 1) {
            this.section -= 1;
        }
    };
    ManageTaskPage.prototype.changeStatus = function (index) {
        if (this.access[index].status == 0 || this.access[index].status == 1) {
            this.access[index].status += 1;
        }
        else if (this.access[index].status == 2) {
            this.access[index].status = 0;
        }
        else {
            return;
        }
    };
    ManageTaskPage.prototype.getClass = function (status) {
        if (status == 0) {
            return 'action-box red hydrated';
        }
        else if (status == 1) {
            return 'action-box yellow hydrated';
        }
        else {
            return 'action-box green hydrated';
        }
    };
    ManageTaskPage.prototype.selectRespondent = function () {
        var _this = this;
        var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__search_users_search_users__["a" /* SearchUsersPage */], { source: 'manage-task' });
        modal.onDidDismiss(function (data) {
            try {
                if (data) {
                    _this.selectedUsers = data.users;
                    console.log(_this.selectedUsers);
                }
            }
            catch (e) {
                console.error(e);
            }
        });
        modal.present();
    };
    ManageTaskPage.prototype.removeUser = function (index) {
        this.selectedUsers.splice(index, 1);
    };
    ManageTaskPage.prototype.updateAccess = function (element, value) {
        var index = this.access.findIndex(function (x) { return x.id == element; });
        if (index > -1) {
            this.access[index].status = value;
        }
    };
    ManageTaskPage.prototype.prepareTask = function (task) {
        var _this = this;
        task.user_id = [];
        task.assign_to = 2;
        task.task_attachments = []; //Remove later 
        var dateTime = task.sdatetime.split(' ');
        task.start_time = dateTime[1];
        if (task.attachment_notrequired instanceof Array) {
            task.attachment_notrequired.forEach(function (element) {
                _this.updateAccess(element, 0);
            });
        }
        else {
            task.attachment_notrequired = [];
        }
        if (task.attachment_optional instanceof Array) {
            task.attachment_optional.forEach(function (element) {
                _this.updateAccess(element, 1);
            });
        }
        else {
            task.attachment_optional = [];
        }
        if (task.attachment_required instanceof Array) {
            task.attachment_required.forEach(function (element) {
                _this.updateAccess(element, 2);
            });
        }
        else {
            task.attachment_required = [];
        }
        if (this._type == 'copy') {
            delete task.id;
        }
        this.taskDetail = task;
    };
    ManageTaskPage.prototype.preview = function () {
        var _this = this;
        var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__task_preview_task_preview__["a" /* TaskPreviewPage */], { data: { taskDetail: this.taskDetail, access: this.access, users: this.selectedUsers } });
        modal.onDidDismiss(function (data) {
            try {
                console.log(data);
                if (data.page) {
                    _this.section = 1;
                }
                ;
                if (data.taskAdded == true) {
                    _this.navCtrl.popToRoot();
                }
            }
            catch (e) {
                console.info(e);
            }
        });
        modal.present();
    };
    ManageTaskPage.prototype.getUnitRespondets = function () {
        var _this = this;
        this._api.getUnitUsers().subscribe(function (data) {
            if (data.getUnitUser.length == 0) {
                _this.errorMsg = 'This unit doesn\'t have any respondents';
                _this.showErrorMsg();
            }
        }, function (err) {
            _this.errorMsg = 'Oops! something went wrong.';
            _this.showErrorMsg();
        });
    };
    ;
    ManageTaskPage.prototype.showErrorMsg = function () {
        var _this = this;
        var alert = this._alert.create({
            title: 'Message',
            message: this.errorMsg,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('taskForm'),
        __metadata("design:type", Object)
    ], ManageTaskPage.prototype, "form", void 0);
    ManageTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-manage-task',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\manage-task\manage-task.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>New Task</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="steps" text-center *ngIf="section <= 5">\n\n        <h3>Step {{section}} of 5</h3>\n\n        <div class="ssteps" [ngClass]="section >= 1 ? \'filled\' : \'\'"></div>\n\n        <div class="ssteps" [ngClass]="section >= 2 ? \'filled\' : \'\'"></div>\n\n        <div class="ssteps" [ngClass]="section >= 3 ? \'filled\' : \'\'"></div>\n\n        <div class="ssteps" [ngClass]="section >= 4 ? \'filled\' : \'\'"></div>\n\n        <div class="ssteps" [ngClass]="section >= 5 ? \'filled\' : \'\'"></div>\n\n    </div>\n\n    <div class="steps-content">\n\n        <form #taskForm="ngForm" novalidate>\n\n            <section *ngIf="section == 1" padding>\n\n                <ion-list class="form-content">\n\n                    <ion-item class="p0">\n\n                        <ion-label text-uppercase stacked>Task Title</ion-label>\n\n                        <ion-input type="text" required name="title" [(ngModel)]="taskDetail.task_name" #title="ngModel"></ion-input>\n\n                    </ion-item>\n\n                    <p [hidden]="title.valid || submitted == false" ion-text color="danger" class="requiredError">\n\n                        Task Title is required\n\n                    </p>\n\n                    <ion-item class="p0">\n\n                        <ion-label text-uppercase stacked>Notes</ion-label>\n\n                        <ion-input type="text"  name="note" [(ngModel)]="taskDetail.note" #note="ngModel"></ion-input>\n\n                    </ion-item>\n\n                  <ion-item class="p0">\n\n                        <ion-label text-uppercase stacked>Description</ion-label>\n\n                        <ion-textarea type="text" required name="description" [(ngModel)]="taskDetail.description"\n\n                            #description="ngModel" rows="4"></ion-textarea>\n\n                    </ion-item>\n\n                    <p [hidden]="description.valid || submitted == false" ion-text color="danger" class="requiredError">\n\n                        Description is required\n\n                    </p>\n\n                </ion-list>\n\n            </section>\n\n            <section *ngIf="section == 2" class="attachment">\n\n                <div class="add-file border-bottom" padding>\n\n                    <h5 class="app-label fz14">Attach</h5>\n\n                    <ion-row class="box">\n\n                        <ion-col col-3>\n\n                            <div class="action-box">\n\n                                <ion-icon name="image"></ion-icon>\n\n                                <span class="txt">Add Image</span>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div class="action-box">\n\n                                <ion-icon name="custom-audio"></ion-icon>\n\n                                <span class="txt">Add Audio</span>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div class="action-box">\n\n                                <ion-icon name="custom-video"></ion-icon>\n\n                                <span class="txt">Add Video</span>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div class="action-box">\n\n                                <ion-icon name="pin"></ion-icon>\n\n                                <span class="txt">Add Location</span>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-3>\n\n                            <div class="action-box">\n\n                                <ion-icon name="document"></ion-icon>\n\n                                <span class="txt">Add File</span>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <p>0 Photos, 0 Audio, 0 Video and 0 Location </p>\n\n                </div>\n\n                <div class="add-file border-bottom" padding>\n\n                    <h5 class="fz14 uppercase">PHOTOS (0)</h5>\n\n                    <!-- <ion-row class="box tiles-wrapper">\n\n                        <ion-col col-3>\n\n                            <div class="attachment-preview">\n\n                                <img src="../../assets/images/images/1.jpg" alt="">\n\n                            </div>\n\n                        </ion-col> \n\n                    </ion-row> -->\n\n                    <div class="no-data">No photos added</div>\n\n                </div>\n\n                <div class="add-file border-bottom" padding>\n\n                    <h5 class="fz14 uppercase">Audio (0)</h5>\n\n                    <!-- <ion-row class="box tiles-wrapper">\n\n                        <ion-col col-3>\n\n                            <div class="attachment-preview">\n\n                                <img src="../../assets/images/images/1.jpg" alt="">\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row> -->\n\n                    <div class="no-data">No audio added</div>\n\n                </div>\n\n                <div class="add-file border-bottom" padding>\n\n                    <h5 class="fz14 uppercase">Video (0)</h5>\n\n                    <!-- <ion-row class="box tiles-wrapper">\n\n                        <ion-col col-3>\n\n                            <div class="attachment-preview">\n\n                                <img src="../../assets/images/images/1.jpg" alt="">\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row> -->\n\n                    <div class="no-data">No video added</div>\n\n                </div>\n\n            </section>\n\n            <section *ngIf="section == 3">\n\n                <div class="response label-container-gender user-preference" padding>\n\n                    <h5 class="app-label fz14">Response privacy</h5>\n\n                    <ion-list>\n\n                        <ion-list radio-group required #privacy name="privacy" class="privacy-wrapper" [(ngModel)]="taskDetail.is_public">\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item class="p0">\n\n                                        <ion-label class="labelContainer">\n\n                                            <span class="textLabel one-liner">\n\n                                                <ion-icon class="mr5" name="eye"></ion-icon> Public\n\n                                            </span>\n\n                                            <ion-radio value="1"></ion-radio>\n\n                                        </ion-label>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item class="p0">\n\n                                        <ion-label class="labelContainer">\n\n                                            <span class="textLabel one-liner">\n\n                                                <ion-icon class="mr5" name="eye-off"></ion-icon> Private\n\n                                            </span>\n\n                                            <ion-radio value="2"></ion-radio>\n\n                                        </ion-label>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-list>\n\n                    </ion-list>\n\n                    <h5 class="app-label fz14">Allow attachments in response</h5>\n\n                    <h5 class="app-sublabel fz14">Tap an item to change the access</h5>\n\n                    <div class="color-code">\n\n                        <div class="ssteps green"></div>\n\n                        <span>Mandatory</span>\n\n                        <div class="ssteps yellow"></div>\n\n                        <span>Optional</span>\n\n                        <div class="ssteps red"></div>\n\n                        <span>Not Allowed</span>\n\n                    </div>\n\n                    <ion-row class="box">\n\n                        <ion-col col-3 no-margin *ngFor="let data of access; let index = index" (click)="changeStatus(index)">\n\n                            <div [class]="getClass(data.status)">\n\n                                <ion-icon [name]="data.icon"></ion-icon>\n\n                                <span class="txt">{{data.name}}</span>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </div>\n\n            </section>\n\n            <section *ngIf="section == 4">\n\n                <div class="response label-container-gender user-preference" padding-left padding-right>\n\n                    <h5 class="app-label fz14"> Frequency</h5>\n\n                    <ion-list radio-group required #frequency name="frequency" [(ngModel)]="taskDetail.frequency" class="freq-wrapper">\n\n                        <ion-row>\n\n                            <ion-col col-6>\n\n                                <ion-item class="p0">\n\n                                    <ion-label class="labelContainer">\n\n                                        <span class="textLabel one-liner">\n\n                                            <ion-icon class="mr5" name="custom-one"></ion-icon> Once\n\n                                        </span>\n\n                                        <ion-radio value="2"></ion-radio>\n\n                                    </ion-label>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                <ion-item class="p0">\n\n                                    <ion-label class="labelContainer">\n\n                                        <span class="textLabel one-liner">\n\n                                            <ion-icon class="mr5" name="custom-repeatTask"></ion-icon> Recurring\n\n                                        </span>\n\n                                        <ion-radio value="1"></ion-radio>\n\n                                    </ion-label>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-list>\n\n                </div>\n\n                <div padding-left padding-right>\n\n                    <ion-list class="date-wrapper">\n\n                        <ion-row>\n\n                            <ion-col col-6>\n\n                                <div class="alert-input-group custom-item">\n\n                                    <div class="alert-input-wrapper">\n\n                                        <ion-label stacked>Start Date </ion-label>\n\n                                        <input required class="alert-input custom-datetime" [min]="today" #startDate="ngModel"\n\n                                            [(ngModel)]="taskDetail.start_date" [value]="taskDetail.start_date" name="start_date" type="date">\n\n                                    </div>\n\n                                </div> \n\n                                <p [hidden]="startDate.valid || submitted == false" ion-text color="danger" class="requiredError">\n\n                                    Start Date is required\n\n                                </p>\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                <div class="alert-input-group custom-item">\n\n                                    <div class="alert-input-wrapper">\n\n                                        <ion-label stacked>Start Time</ion-label>\n\n                                        <input required class="alert-input custom-datetime" #startTime="ngModel"\n\n                                            [(ngModel)]="taskDetail.start_time" step="1" name="start_time" type="time">\n\n                                    </div>\n\n                                </div>\n\n                                <p [hidden]="startTime.valid || submitted == false" ion-text color="danger" class="requiredError">\n\n                                    Start time is required\n\n                                </p>\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                <ion-item class="p0 m0">\n\n                                    <ion-label class="uppercase" stacked>Due Time (in hours)</ion-label>\n\n                                    <ion-input required #dueTime="ngModel" [(ngModel)]="taskDetail.due_time" name="due_time"\n\n                                        type="number"></ion-input>\n\n                                </ion-item>\n\n                                <p [hidden]="dueTime.valid || submitted == false" ion-text color="danger" class="requiredError">\n\n                                    Due Time is required\n\n                                </p>\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                <ion-item class="p0 m0">\n\n                                    <ion-label class="uppercase" stacked>Expiry Time From Start (in hours)</ion-label>\n\n                                    <ion-input required #expiryTime="ngModel" [(ngModel)]="taskDetail.expiry_time" name="expiry_time"\n\n                                        type="number"></ion-input>\n\n                                </ion-item>\n\n                                <p [hidden]="expiryTime.valid || submitted == false" ion-text color="danger" class="requiredError">\n\n                                    Expiry time is required\n\n                                </p>\n\n                            </ion-col>\n\n                            <ion-col col-6 *ngIf="taskDetail.frequency == 1">\n\n                                <ion-item class="p0 m0">\n\n                                    <ion-label class="uppercase" stacked>Repeat (in days)</ion-label>\n\n                                    <ion-input required #repeat="ngModel" [(ngModel)]="taskDetail.days" name="repeatdays"\n\n                                        type="number"></ion-input>\n\n                                </ion-item>\n\n                                <p [hidden]="repeat.valid || submitted == false" ion-text color="danger" class="requiredError">\n\n                                    Repeat days is required\n\n                                </p>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-list>\n\n                </div>\n\n            </section>\n\n            <section *ngIf="section == 5">\n\n                <div class="response label-container-gender  assign-preference" padding-left padding-right>\n\n                    <h5 class="app-label fz14"> Assign To</h5>\n\n                    <ion-list radio-group required #assign name="assign" [(ngModel)]="taskDetail.assign_to" class="freq-wrapper">\n\n                        <ion-item class="p0">\n\n                            <ion-label class="labelContainer">\n\n                                <span class="textLabel one-liner">\n\n                                    <ion-icon class="mr5" name="people"></ion-icon> Everyone\n\n                                </span>\n\n                                <ion-radio value="2"></ion-radio>\n\n                            </ion-label>\n\n                        </ion-item>\n\n                        <ion-item class="p0">\n\n                            <ion-label class="labelContainer">\n\n                                <span class="textLabel one-liner">\n\n                                    <ion-icon class="mr5" name="person-add"></ion-icon> Selected\n\n                                </span>\n\n                                <ion-radio value="1"></ion-radio>\n\n                            </ion-label>\n\n                        </ion-item>\n\n                        <div *ngIf="taskDetail?.assign_to == 1">\n\n                            <h6 class="sub-title" text-left>{{selectedUsers?.length}} Respondents</h6>\n\n                            <ion-row>\n\n                                <button ion-button block class="select-res" (click)="selectRespondent()">\n\n                                    <p text-uppercase>Choose respondents</p>\n\n                                </button>\n\n                            </ion-row>\n\n                            <div class="profile-slider" text-center>\n\n                                <ion-scroll scrollX="true">\n\n                                    <ion-row nowrap class="headerChip">\n\n                                        <ion-col col-3 *ngFor="let user of selectedUsers; let index = index">\n\n                                            <img src="../assets/icon/ic_user.svg" alt=" ">\n\n                                            <ion-icon name="close" (click)="removeUser(index)"></ion-icon>\n\n                                            <div class="user-name one-liner"> {{user?.full_name}} </div>\n\n                                        </ion-col>\n\n                                    </ion-row>\n\n                                </ion-scroll>\n\n                            </div>\n\n                        </div>\n\n                    </ion-list>\n\n                </div>\n\n            </section>\n\n        </form>\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar class="arrow-button">\n\n        <button ion-button color="primary" *ngIf="section > 1" clear float-left (click)="back()">\n\n            <ion-icon name="ios-arrow-back" class="back-arrow"></ion-icon>Back\n\n        </button>\n\n        <button ion-button color="primary" *ngIf="section < 5" clear float-right (click)="next()">Next <ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n        <button ion-button color="primary" *ngIf="section == 5" clear float-right (click)="preview()">Preview</button>\n\n\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\manage-task\manage-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], ManageTaskPage);
    return ManageTaskPage;
}());

//# sourceMappingURL=manage-task.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_spinner_dialog__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedProvider = /** @class */ (function () {
    function SharedProvider(_spinnerDialog, _toastCtrl, _storage, _alert) {
        var _this = this;
        this._spinnerDialog = _spinnerDialog;
        this._toastCtrl = _toastCtrl;
        this._storage = _storage;
        this._alert = _alert;
        this.Loader = {
            show: function (template, showBackdrop) {
                _this._spinnerDialog.show(null, null, showBackdrop || true);
            },
            hide: function () {
                setTimeout(function () {
                    _this._spinnerDialog.hide();
                }, 100);
            }
        };
        // activeLister() { 
        //   let interval; 
        //   interval = setInterval(() => {
        //     console.log('removed by interval');
        //     this.Loader.hide();
        //     clearInterval(interval);
        //   }, 3000);
        // }
        this.Toast = {
            show: function (text, duration, position, closeButton, btnText) {
                _this._toastMsg = _this._toastCtrl.create({
                    message: text,
                    duration: duration || closeButton ? null : 3000,
                    position: position || 'top',
                    showCloseButton: closeButton || false,
                    closeButtonText: btnText || 'OK'
                });
                _this._toastMsg.present();
            },
            hide: function () {
                this._toastMsg.dismiss();
            }
        };
        this.LS = {
            get: function (key) {
                return _this._storage.get(key);
            },
            set: function (key, value) {
                return _this._storage.set(key, value);
            },
            remove: function (key) {
                return _this._storage.remove(key);
            }
        };
        this.Alert = {
            confirm: function (msg, title, okLabel, cancelLabel) {
                return new Promise(function (resolve, reject) {
                    var alert = _this._alert.create({
                        title: title || 'Confirm',
                        message: msg || 'Do you want continue?',
                        buttons: [
                            {
                                text: cancelLabel || 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    reject(false);
                                }
                            },
                            {
                                text: okLabel || 'Ok',
                                handler: function () {
                                    resolve(true);
                                }
                            }
                        ]
                    });
                    alert.present();
                });
            },
            alert: function (msg, title) {
                var alert = _this._alert.create({
                    title: title || 'Alert',
                    subTitle: msg,
                    buttons: ['Dismiss']
                });
                alert.present();
            }
        };
    }
    SharedProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_spinner_dialog__["a" /* SpinnerDialog */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SharedProvider);
    return SharedProvider;
}());

//# sourceMappingURL=shared.provider.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(_shared) {
        this._shared = _shared;
        this.token = null;
        this.user = {};
        this.unitName = null;
        this.userUnitRole = null;
        this.language = 'English';
        this.translation = {};
    }
    AuthenticationProvider.prototype.cacheUserData = function (data) {
        this.user = data;
    };
    AuthenticationProvider.prototype.cacheToken = function (token) {
        this.token = token;
    };
    AuthenticationProvider.prototype.cacheUnitId = function (unitId) {
        this.unitId = unitId;
    };
    AuthenticationProvider.prototype.cacheUnitName = function (unitName, userUnitRole) {
        this.unitName = unitName;
        this.userUnitRole = userUnitRole;
    };
    AuthenticationProvider.prototype.cacheProfileCompletedState = function (value) {
        this.profileCompleted = value;
    };
    AuthenticationProvider.prototype.cacheLanguage = function (selectedLanguage) {
        this.language = selectedLanguage;
    };
    AuthenticationProvider.prototype.cacheTranslation = function (data) {
        this.translation = data;
    };
    AuthenticationProvider.prototype.translateData = function (value) {
        value = value.trim();
        var key = value.toLowerCase().split(' ').join('_');
        if (Object.keys(this.translation).length > 0 && this.language) {
            if (typeof this.translation[this.language][key] == 'undefined') {
                return value;
            }
            else {
                return this.translation[this.language][key];
            }
        }
        else {
            return value;
        }
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_shared_provider__["a" /* SharedProvider */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchUsersPage = /** @class */ (function () {
    function SearchUsersPage(_viewCtrl, _shared, _api, _navParams) {
        this._viewCtrl = _viewCtrl;
        this._shared = _shared;
        this._api = _api;
        this._navParams = _navParams;
        this.loadingData = false;
        this.autocomplete = {};
        this.source = null;
        this.selectedUsers = [];
        this.source = this._navParams.get("source");
        if (this.source == 'task-detail') {
            this.users = this._navParams.get("users");
        }
    }
    SearchUsersPage.prototype.ionViewDidLoad = function () {
        if (this.source == 'manage-task') {
            this.getUsers();
        }
    };
    SearchUsersPage.prototype.getUsers = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getUnitUsers().subscribe(function (data) {
            _this.users = data.getUnitUser;
            _this._shared.Loader.hide();
        }, function (err) {
            console.error(err);
            _this._shared.Loader.hide();
        });
    };
    SearchUsersPage.prototype.selectUser = function (user) {
        this.selectedUsers.push(user);
    };
    SearchUsersPage.prototype.done = function () {
        this.source == 'manage-task' ? this._viewCtrl.dismiss({ users: this.selectedUsers }) : this._viewCtrl.dismiss();
    };
    SearchUsersPage.prototype.dismiss = function () {
        this._viewCtrl.dismiss();
    };
    SearchUsersPage.prototype.updateSearch = function () {
    };
    SearchUsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-search-users',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\search-users\search-users.html"*/'<ion-header>\n\n  <!-- <ion-toolbar>\n\n    <ion-buttons class="ionbtn" left>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-searchbar [(ngModel)]="autocomplete.query" #search (ionInput)="updateSearch()" (ionCancel)="dismiss()"\n\n      placeholder="Search for respondents">\n\n    </ion-searchbar>\n\n    <ion-spinner class="filterSpinner" *ngIf="loadingData" color="primary" icon="android"></ion-spinner>\n\n  </ion-toolbar> -->\n\n  <ion-toolbar>\n\n    <button ion-button menuToggle="false" icon-only (click)="dismiss()">\n\n      <ion-icon name="ios-arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>{{source == \'manage-task\' ? \'Select Respondent(s)\' : \'All Participants\'}}</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let user of users">\n\n      <ion-avatar item-start>\n\n          <img src="../assets/icon/ic_user.svg" alt=" ">\n\n      </ion-avatar> \n\n      <ion-label class="user-name">{{user?.full_name}}</ion-label>\n\n      <ion-checkbox *ngIf="source != \'task-detail\'" item-end (ionChange)="selectUser(user)"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar class="arrow-button">\n\n      \n\n        <button ion-button color="primary" *ngIf="users?.length" clear float-right (click)="done()">Done</button>\n\n\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\search-users\search-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["x" /* ViewController */], __WEBPACK_IMPORTED_MODULE_0__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */]])
    ], SearchUsersPage);
    return SearchUsersPage;
}());

//# sourceMappingURL=search-users.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespondentChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RespondentChatPage = /** @class */ (function () {
    function RespondentChatPage(navCtrl, socket, navParams, _api, shared, _auth, _viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.socket = socket;
        this.navParams = navParams;
        this._api = _api;
        this.shared = shared;
        this._auth = _auth;
        this._viewCtrl = _viewCtrl;
        this.messages = [];
        // console.log('respondent id');
        this.fromId = this.navParams.get('id');
        //console.log(this.navParams.get('id'));
        this.unitId = this._auth.unitId;
        this.userId = this._auth.user.id;
        this.fullName = this._auth.user.full_name;
        this.roleId = this._auth.userUnitRole;
        if (this.roleId == 4) {
            this.room = this.unitId + "_" + this.userId;
            this.toId = 0;
        }
        else {
            this.toId = this.fromId;
            this.room = this.unitId + "_" + this.toId;
        }
        console.log('room');
        console.log(this.room);
        console.log('room');
        this.getMessages().subscribe(function (message) {
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2');
            console.log(message);
            console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2');
            _this.messages.push(message);
            // this.content.scrollBottom();
        });
    }
    RespondentChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RespondentChatPage');
    };
    RespondentChatPage.prototype.sendMessage = function () {
        console.log('inside send');
        var currentdate = new Date();
        var datetime = currentdate;
        this.socket.emit('add-message', { msg: this.message, room: this.room, unit_id: this.unitId, from_id: this.userId, to_id: this.toId, created_at: datetime, full_name: this.fullName });
        var data = { msg: this.message, room: this.room, unit_id: this.unitId, from_id: this.userId, to_id: this.toId, created_at: datetime, full_name: this.fullName };
        this._api.sendChat(data)
            .subscribe(function (res) {
            if (res['status'] == 'success') {
                console.log('in sucess');
            }
        }, function (err) {
            console.log(err);
        });
        this.message = '';
        //  this.content.scrollBottom();
        this.scrollToBottom();
        //this.message
    };
    RespondentChatPage.prototype.getMessages = function () {
        // if (this.message) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                console.log('obserable');
                console.log(data);
                console.log('obserable');
                // if(data.room == this.room){
                observer.next(data);
                // }
            });
        });
        return observable;
        //}
        // this.scrollToBottom();
    };
    RespondentChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    RespondentChatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.connect();
        var data = { from_id: this.userId, to_id: this.toId, unit_id: this.unitId };
        console.log(data);
        this._api.getRespondentChat(data)
            .subscribe(function (res) {
            if (res['status'] == 'success') {
                _this.messages = res.chat;
                _this.userName = res.username;
            }
            _this.shared.Loader.hide();
        }, function (err) {
            _this.shared.Loader.hide();
        });
        this.scrollToBottom();
    };
    RespondentChatPage.prototype.ionViewWillLeave = function () {
        this.socket.disconnect();
    };
    RespondentChatPage.prototype.dismiss = function () {
        this._viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], RespondentChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RespondentChatPage.prototype, "messageInput", void 0);
    RespondentChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-respondent-chat',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\respondent-chat\respondent-chat.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <button ion-button menuToggle="false" icon-only (click)="dismiss()">\n\n      <ion-icon name="ios-arrow-back"></ion-icon>\n\n    </button>\n\n    <ion-title>{{userName}}</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="message-wrap">\n\n    <div *ngFor="let msg of messages" class="message" [class.left]=" msg.from_id != this.userId" [class.right]=" msg.from_id=== this.userId">\n\n      <div>\n\n\n\n        <!-- <img class="user-img" [src]="msg.userAvatar" alt="" src=""> -->\n\n        <!-- <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner> -->\n\n        <!-- \n\n        <div class="msg-detail">\n\n          <div class="msg-info" style="text-align: right; text-transform: capitalize;">\n\n            <p>\n\n              {{msg?.full_name}}</p>\n\n\n\n          </div>\n\n          <div class="msg-content">\n\n            <span class="triangle"></span>\n\n            <p class="line-breaker ">{{msg.msg}}</p>\n\n          </div>\n\n          <div class="msg-info content-info" style="text-align: right; text-transform: capitalize; float: right; position: relative; clear: both;">\n\n \n\n            <p>\n\n              {{msg.created_at | relativeTime}}</p>\n\n\n\n          </div>\n\n         \n\n        </div> -->\n\n\n\n        <div class="msg-detail" *ngIf="msg.room == this.room">\n\n\n\n          <img class="user-img" *ngIf="msg.from_id != this.userId" src="../../assets/user.jpg" alt="">\n\n          <img class="user-img" *ngIf="msg.from_id=== this.userId" src="../../assets/to-user.jpg" alt="">\n\n          <div class="msg-info">\n\n            <p>\n\n              {{msg?.full_name}}&nbsp;&nbsp;&nbsp;{{msg.created_at |date:\'MM/dd/yyyy @ h:mma\'}}</p>\n\n          </div>\n\n          <div class="msg-content">\n\n            <span class="triangle"></span>\n\n            <p *ngIf=" msg.from_id != this.userId" class="bold capitalized"> {{ msg.full_name+" :"}}</p>\n\n            <p class="">{{msg.msg}}</p>\n\n          </div>\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n  <div class="input-wrap">\n\n    <textarea #chat_input placeholder="Enter your message" [(ngModel)]="message" (keyup.enter)="sendMessage()">\n\n\n\n      </textarea>\n\n\n\n    <button ion-button clear icon-only item-right (click)="sendMessage()" [disabled]="message === \'\'">\n\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n    </button>\n\n  </div>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\respondent-chat\respondent-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], RespondentChatPage);
    return RespondentChatPage;
}());

//# sourceMappingURL=respondent-chat.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmIdentityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__units_units__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_profile_manage_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfirmIdentityPage = /** @class */ (function () {
    function ConfirmIdentityPage(_navCtrl, navParams, _auth, _shared) {
        this._navCtrl = _navCtrl;
        this.navParams = navParams;
        this._auth = _auth;
        this._shared = _shared;
        this.userData = {};
        this.submitted = false;
    }
    ConfirmIdentityPage.prototype.ionViewDidLoad = function () {
        this.full_name = this._auth.user.full_name;
        this.maskName(this.full_name);
    };
    ConfirmIdentityPage.prototype.create = function () {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__manage_profile_manage_profile__["a" /* ManageProfilePage */]);
    };
    ConfirmIdentityPage.prototype.confirm = function (data) {
        var _this = this;
        this.submitted = true;
        if (!data.valid) {
            this._shared.Toast.show(this._auth.translateData('Please fill all mandatory fields'));
            return;
        }
        else {
            if (this.userData.dob == this._auth.user.dob && this.userData.gender == this._auth.user.gender) {
                this._shared.LS.get('appState').then(function (data) {
                    data.profileCompleted = true;
                    _this._shared.LS.set('appState', data);
                    _this._auth.cacheProfileCompletedState(true);
                });
                this._navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__units_units__["a" /* UnitsPage */]);
            }
            else {
                this._shared.Toast.show('Provided information did not match with the existing information.', null, null, true);
            }
        }
    };
    ConfirmIdentityPage.prototype.maskName = function (name) {
        var fullName = '';
        var splitNameArr = name.split(' ');
        for (var j = 0; j < splitNameArr.length; j++) {
            var length_1 = splitNameArr[j].length;
            var nameArr = [];
            for (var i = 0; i < length_1; i++) {
                if (i > 0) {
                    nameArr[i] = splitNameArr[j][i].replace(/./g, "*");
                }
                else {
                    nameArr[i] = splitNameArr[j][i];
                }
            }
            var maskedName = "";
            for (var i = 0; i < length_1; i++) {
                maskedName += nameArr[i];
            }
            fullName = fullName + ' ' + maskedName;
        }
        this.full_name = fullName;
    };
    ConfirmIdentityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-confirm-identity',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\confirm-identity\confirm-identity.html"*/'<ion-content padding>\n\n  <div padding>\n\n    <div class="heading">\n\n      <img class="feature-img" src="../assets/icon/ic_user.svg">\n\n      <p class="feature-title">{{"Confirm Identity" | translate}}</p>\n\n    </div>\n\n  </div>\n\n  <form #userForm="ngForm" novalidate>\n\n    <ion-list class="input-icon">\n\n      <ion-item class="item-input">\n\n        <ion-icon name="md-globe" item-start></ion-icon>\n\n        <ion-label stacked> {{"Full Name" | translate}}\n\n          <span class="asterisk">*</span>\n\n        </ion-label>\n\n        <ion-input type="text" disabled="true" name="full_name" [(ngModel)]="full_name" #name="ngModel"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="item-input">\n\n        <ion-icon name="ios-calendar" item-start color="primary"></ion-icon>\n\n        <ion-label stacked>{{"Date of birth" | translate}}\n\n          <span class="asterisk">*</span>\n\n        </ion-label>\n\n        <ion-datetime required name="dob" [(ngModel)]="userData.dob" #dob="ngModel"></ion-datetime>\n\n      </ion-item>\n\n      <p [hidden]="dob.valid || submitted == false" ion-text class="validationErr">\n\n        {{\'Date of birth\' | translate}} {{\'is required\' | translate}}\n\n      </p>\n\n    </ion-list>\n\n    <div class="gender-wrapper">\n\n      <ion-label class="custom-label">{{"Choose your gender" | translate}}*\n\n      </ion-label>\n\n      <ion-list radio-group [(ngModel)]="userData.gender" name="gender" #gender="ngModel" class="label-container-gender" required>\n\n        <ion-row>\n\n          <ion-item class="p0 width100">\n\n            <ion-label>\n\n              <ion-icon name="md-home"></ion-icon>\n\n              <span class="textLabel">{{"Male" | translate }}</span>\n\n            </ion-label>\n\n            <ion-radio value="1"></ion-radio>\n\n          </ion-item>\n\n          <ion-item class="p0 width100">\n\n            <ion-label>\n\n              <ion-icon name="md-people"></ion-icon>\n\n              <span class="textLabel">{{"Female" | translate}}</span>\n\n            </ion-label>\n\n            <ion-radio value="2"></ion-radio>\n\n          </ion-item>\n\n        </ion-row>\n\n        <p [hidden]="gender.valid || submitted == false" ion-text class="required">\n\n          {{\'Gender\' | translate}} {{\'is required\' | translate}}\n\n        </p>\n\n      </ion-list>\n\n\n\n    </div>\n\n  </form>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="arrow-button">\n\n    <button ion-button color="primary" clear float-left (click)="create()">{{"Create New Profile" | translate}}</button>\n\n    <button ion-button color="primary" clear float-right (click)="confirm(userForm)">{{"Confirm" | translate}}\n\n      <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\confirm-identity\confirm-identity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared_provider__["a" /* SharedProvider */]])
    ], ConfirmIdentityPage);
    return ConfirmIdentityPage;
}());

//# sourceMappingURL=confirm-identity.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_task_manage_task__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__units_units__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_detail_task_detail__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TasksPage = /** @class */ (function () {
    function TasksPage(_navCtrl, _shared, _api, _auth, _alertCtrl, _actionSheetCtrl, _config) {
        this._navCtrl = _navCtrl;
        this._shared = _shared;
        this._api = _api;
        this._auth = _auth;
        this._alertCtrl = _alertCtrl;
        this._actionSheetCtrl = _actionSheetCtrl;
        this._config = _config;
        this.tasks = [];
        this.selectedUnit = null;
        this.listState = { sortBy: 'ddatetime', page: 1, filter: { status: [1] } };
        this.sorting = [{ label: 'Status', value: 'status' }, { label: 'Due Date', value: 'ddatetime' }, { label: 'Expiry Date', value: 'edatetime' }];
        this.filter = [{ label: 'Open', value: 1 }, { label: 'Schedule', value: 2 }, { label: 'Closed', value: 3 }, { label: 'Completed', value: 4 }, { label: 'Cancelled', value: 5 }, { label: 'Expired', value: 6 }];
        this.pagingEnabled = true;
    }
    TasksPage.prototype.ionViewDidLoad = function () {
        this.userRole = this._auth.userUnitRole;
        this.selectedUnit = this._auth.unitName;
        this.getTasks();
    };
    TasksPage.prototype.ionViewWillEnter = function () {
        console.log(this._config.isTaskAdded);
        if (this._config.isTaskAdded) {
            this.addNewTask(this._config.isTaskAdded);
            this._config.toggleTaskAdded(null);
        }
    };
    TasksPage.prototype.addNewTask = function (id) {
        var _this = this;
        this._shared.Loader.show();
        this._api.getTaskDetails({ task_id: id, role_id: this._auth.userUnitRole }).subscribe(function (response) {
            if (response.status == 1) {
                response.tasks[0]['isNew'] = true;
                response.tasks[0]['status_name'] = 'New';
                _this.tasks.unshift(response.tasks[0]);
                console.log(_this.tasks);
                _this._scrollToTop();
            }
            _this._shared.Loader.hide();
        }, function (err) {
            console.error(err);
            _this._shared.Loader.hide();
        });
    };
    TasksPage.prototype._scrollToTop = function () {
        this.content.scrollToTop();
    };
    TasksPage.prototype.getTasks = function (refresher, sort) {
        var _this = this;
        if (!refresher) {
            this._shared.Loader.show();
        }
        if (sort) {
            this.listState.sortBy = sort;
            this._scrollToTop();
        }
        this._api.getTaskList(this.listState).subscribe(function (response) {
            if (response) {
                _this.tasks = response.tasks;
            }
            else {
                console.log(response.msg);
            }
            _this._shared.Loader.hide();
            if (refresher) {
                refresher.complete();
            }
        }, function (err) {
            console.log(err);
            _this._shared.Loader.hide();
            if (refresher) {
                refresher.complete();
            }
        });
    };
    TasksPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.listState.page = this.listState.page + 1;
        this._api.getTaskList(this.listState).subscribe(function (data) {
            if (data.tasks.length) {
                data.tasks.forEach(function (element) {
                    _this.tasks.push(element);
                });
            }
            else {
                _this.pagingEnabled = false;
            }
            infiniteScroll.complete();
        }, function (err) {
            console.error(err.status);
            _this._shared.Toast.show('Oops! something went wrong');
        });
    };
    TasksPage.prototype.refreshTask = function (refresher) {
        this.listState.page = 1;
        this.getTasks(refresher);
    };
    TasksPage.prototype.switchUnit = function () {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__units_units__["a" /* UnitsPage */]);
    };
    TasksPage.prototype.getRespondents = function (value) {
        if (value.length > 0) {
            if (value.length > 4) {
                return value[0].full_name + "," + value[1].full_name + "," + value[2].full_name + ", " + value[3].full_name + " and " + (value.length - 4) + " more";
            }
            else {
                return value.map(function (e) { return e.full_name; }).join(", ");
            }
        }
        else {
            return ' ';
        }
    };
    TasksPage.prototype.task = function (segment, fab) {
        if (segment == 'create') {
            this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__manage_task_manage_task__["a" /* ManageTaskPage */], { id: null, type: 'add' });
        }
        else if (segment == 'copy') {
            this._copyUnit();
        }
        fab.close();
    };
    TasksPage.prototype.taskDetail = function (task) {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__task_detail_task_detail__["a" /* TaskDetailPage */], { task_id: task.id, repeatDays: task.getTaskTime });
    };
    TasksPage.prototype.showNote = function (note) {
        var alert = this._alertCtrl.create({
            title: 'Note',
            subTitle: note,
            buttons: ['OK']
        });
        alert.present();
    };
    TasksPage.prototype._copyUnit = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getAllTaskList().subscribe(function (data) {
            var alert = _this._alertCtrl.create();
            data.tasks.forEach(function (task) {
                alert.addInput({
                    type: 'radio',
                    label: "" + task.task_name,
                    value: task.id
                });
            });
            alert.setTitle('Select Task');
            alert.addButton('Cancel');
            _this._shared.Loader.hide();
            alert.addButton({
                text: 'Copy',
                handler: function (data) {
                    if (data) {
                        _this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__manage_task_manage_task__["a" /* ManageTaskPage */], { id: data, type: 'copy' });
                    }
                }
            });
            alert.present();
        }, function (err) {
            _this._shared.Loader.hide();
            _this._shared.Toast.show('Problem in fetching task list');
        });
    };
    TasksPage.prototype.sortTasks = function () {
        var _this = this;
        console.log(this.sorting);
        var alert = this._alertCtrl.create();
        this.sorting.forEach(function (sort) {
            alert.addInput({
                type: 'radio',
                label: "" + sort.label,
                value: "" + sort.value,
                checked: _this.listState.sortBy == "" + sort.value
            });
        });
        alert.setTitle('Sort Tasks');
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                if (data) {
                    _this.listState.page = 1;
                    _this.listState.sortBy = data;
                    _this.getTasks('', data);
                }
            }
        });
        alert.present();
    };
    TasksPage.prototype.filterTasks = function () {
        var _this = this;
        var alert = this._alertCtrl.create();
        this.filter.forEach(function (sort) {
            alert.addInput({
                type: 'checkbox',
                label: "" + sort.label,
                value: "" + sort.value,
                checked: _this.listState.filter.status.indexOf(sort.value) == -1 ? false : true
            });
        });
        alert.setTitle('Filter Tasks');
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                if (data) {
                    _this._scrollToTop();
                    _this.listState.page = 1;
                    _this.listState.filter.status = data.map(Number);
                    _this.getTasks('');
                }
            }
        });
        alert.present();
    };
    TasksPage.prototype.getSelectedFilters = function () {
        if (this.listState.filter.status.length == 1) {
            var index = this.filter.map(function (o) { return o.value; }).indexOf(this.listState.filter.status[0]);
            return this.filter[index].label;
        }
        else if (this.listState.filter.status.length == 0) {
            return 'No Filter';
        }
        else {
            return 'Multiple';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Content */]) === "function" && _a || Object)
    ], TasksPage.prototype, "content", void 0);
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-tasks',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\tasks\tasks.html"*/'<ion-header no-shadow>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title (click)="switchUnit()">\n\n      <span class="first-line block">{{"Switch Unit" | translate}}</span>\n\n      <span class="second-line primary">\n\n        <!-- <ion-icon name="ios-arrow-down"></ion-icon>  -->\n\n        <ion-icon class="detail-arrow" name="ios-arrow-down"></ion-icon> {{selectedUnit}}\n\n      </span>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="refreshTask($event)">\n\n    <ion-refresher-content pullingText="Pull to refresh task"></ion-refresher-content>\n\n  </ion-refresher>\n\n  <div *ngIf="!tasks.length" padding text-center no-data>{{"No tasks found" | translate}}</div>\n\n  <ion-list *ngIf="tasks.length > 0">\n\n    <ion-card *ngFor="let task of tasks" [ngClass]="{\'new-task\' : task.isNew == true}">\n\n      <ion-card-header class="fz16 bold">\n\n        <span (tap)="taskDetail(task)">\n\n          {{task.task_name}}\n\n        </span> \n\n        <ion-icon color="primary" *ngIf="task.note" (click)="showNote(task.note)" name="md-information-circle" item-start></ion-icon>\n\n        <ion-badge color="secondary" [ngClass]="task.status_name.toLowerCase()" float-right>{{task.status_name | translate}}</ion-badge>\n\n      </ion-card-header>\n\n      <ion-card-content (tap)="taskDetail(task)">\n\n        <ul class="task-content">\n\n          <li><span>{{"Start" | translate}} -</span> {{task.sdatetime | date: \'EEE, MMM d, h:mm a\' }} <ion-badge\n\n              color="danger" float-right>0</ion-badge>\n\n          </li>\n\n          <li *ngIf="task.days == 1"><span>{{"Due" | translate}} - </span> {{task.ddatetime  | date: \'EEE, MMM d, h:mm a\'}}</li>\n\n          <li><span>{{"Expiry" | translate}} - </span>{{task.edatetime  | date: \'EEE, MMM d, h:mm a\' }}</li>\n\n\n\n          <li *ngIf="task.days > 1">\n\n            <span>\n\n              <ion-icon name="md-repeat" item-start class="repeat-icon"></ion-icon>\n\n            </span> {{task.days}} Days\n\n          </li>\n\n          <span *ngIf="task.days == 1">\n\n            <li *ngIf="task?.userResponse?.length">\n\n              <div class="circle green"></div> {{getRespondents(task.userResponse)}}\n\n            </li>\n\n            <li *ngIf="task?.nonRespondedUser?.length">\n\n              <div class="circle red"></div> {{getRespondents(task.nonRespondedUser)}}\n\n            </li>\n\n            <li *ngIf="task?.respondedUserAfterDue?.length">\n\n              <div class="circle yellow"></div> {{getRespondents(task.respondedUserAfterDue)}}\n\n            </li>\n\n          </span>\n\n        </ul>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <ion-fab bottom right #fab small *ngIf="userRole == 2">\n\n    <button color="primary" ion-fab mini>\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="top">\n\n      <button color="primary" ion-fab (click)="task(\'create\', fab)">\n\n        <ion-icon name="create"></ion-icon>\n\n        <ion-label>{{"Add Task" | translate }}</ion-label>\n\n      </button>\n\n      <button color="primary" ion-fab (click)="task(\'copy\', fab)">\n\n        <ion-icon name="copy"></ion-icon>\n\n        <ion-label>{{"Copy Task" | translate}}</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content  loadingText="Loading your tasks..." *ngIf="pagingEnabled">Loading Task</ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="filters-wrapper">\n\n    <ion-row>\n\n      <ion-col class="sort" (tap)="sortTasks()">\n\n        <div class="dflex mr15">\n\n          <img class="filter-icon mr15" src="../assets/icon/sort.svg">\n\n          <ion-title float-right>\n\n            <span class="filter-title block" text-right>{{"Sort" | translate}}</span>\n\n            <span class="filter-sub-title block" text-right>\n\n              <!-- {{"Due Date" | translate}} -->\n\n              {{listState.sortBy == \'status\' ? \'Status\' : (listState.sortBy == \'ddatetime\' ? \'Due Date\' : (listState.sortBy == \'edatetime\' ? \'Expiry Date\' :  listState.sortBy))}}\n\n            </span>\n\n          </ion-title>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col (tap)="filterTasks()">\n\n        <div class="dflex ml15">\n\n          <img class="filter-icon mr15" src="../assets/icon/filter.svg">\n\n          <ion-title float-right>\n\n            <span class="filter-title block" text-right>{{"Filter" | translate}}</span>\n\n            <span class="filter-sub-title block" text-right>\n\n              <!-- {{"Open tasks" | translate}} -->\n\n              {{getSelectedFilters()}}\n\n            </span>\n\n          </ion-title>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\tasks\tasks.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared_provider__["a" /* SharedProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared_provider__["a" /* SharedProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__providers_api_api_provider__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_api_api_provider__["a" /* ApiProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__providers_config__["a" /* TokenProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_config__["a" /* TokenProvider */]) === "function" && _h || Object])
    ], TasksPage);
    return TasksPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_registration__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var TermsPage = /** @class */ (function () {
    function TermsPage(_navParam, _platform, _navCtrl, _shared, _api, _auth) {
        this._navParam = _navParam;
        this._platform = _platform;
        this._navCtrl = _navCtrl;
        this._shared = _shared;
        this._api = _api;
        this._auth = _auth;
        this.source = this._navParam.get('source');
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        this.getTerms();
    };
    TermsPage.prototype.getTerms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._shared.Loader.show();
                this._api.getTerms({ languageId: this._auth.language }).subscribe(function (response) {
                    _this.terms = response['tc'][_this._auth.language];
                    _this._shared.Loader.hide();
                }, function (err) {
                    console.error(err);
                    _this._shared.Loader.hide();
                });
                return [2 /*return*/];
            });
        });
    };
    TermsPage.prototype.disagree = function () {
        this._platform.exitApp();
    };
    TermsPage.prototype.agree = function () {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__registration_registration__["a" /* RegistrationPage */]);
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-terms',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\terms\terms.html"*/'<ion-header *ngIf="source == \'sidemenu\'"> \n\n  <ion-navbar>\n\n    <ion-title>{{\'Terms and Conditions\' | translate}}</ion-title>\n\n  </ion-navbar> \n\n</ion-header> \n\n<ion-content padding>\n\n  <div padding>\n\n    <div class="heading" *ngIf="source != \'sidemenu\'">\n\n      <img class="feature-img" src="../assets/icon/ic_terms.svg">\n\n      <p class="feature-title bold">{{\'Terms and Conditions\' | translate}}</p>\n\n    </div>\n\n    <div class="content-wrapper">\n\n      {{ terms }}\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer  *ngIf="source != \'sidemenu\'">\n\n  <ion-toolbar class="arrow-button">\n\n    <button ion-button color="primary" clear float-left (click)="disagree()">{{\'Disagree\' | translate}}</button>\n\n    <button ion-button color="primary" clear float-right (click)="agree()">{{\'Agree\' | translate}} <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\terms\terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_authentication__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, token, _auth) {
        this.http = http;
        this.token = token;
        this._auth = _auth;
    }
    ApiProvider.prototype.getLanguages = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/get-language", { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getTerms = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/terms-conditions", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getCountries = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/get-country", { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getUnitList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/get-units", { userId: this._auth.user.id }, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.registerDevice = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/register-device", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getParticipants = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/get-unit-participant", { unitId: this._auth.unitId }, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.saveRegistration = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/login", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.checkOtp = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/check-otp", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getProfileData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/profile-info", { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.resendOtp = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/resend-otp", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.saveProfileData = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/save-profile", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getUserDetail = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/view-profile", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getChatList = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */]);
        var data = { unit_id: this._auth.unitId };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/get-msg-groups", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.updateNotificationStatus = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/is-notify", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getGroupChatDetail = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/get-group-chat", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getTaskList = function (state) {
        // , filter: state.filter
        var data = { unit_id: this._auth.unitId, role_id: this._auth.userUnitRole, sort: state.sortBy, page: state.page };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/get-tasks", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getAllTaskList = function () {
        var data = { unit_id: this._auth.unitId, role_id: this._auth.userUnitRole, page: 0 };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/get-tasks", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getTranslation = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/get-translation", { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.sendChat = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/add-msg", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.insertTask = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/add-edit", data, { headers: headers }).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.insertReaction = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/task-reaction", data, { headers: headers }).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.insertResponse = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/task-response", data, { headers: headers }).map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.sendNotification = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/send-notification", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getUnitUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/get-unit-user", { unit_id: this._auth.unitId }, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getRespondentChat = function (data) {
        //let data = { unitId: this._auth.unitId };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/get-moderator-resp-chat", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getTaskDetails = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/get-task-details", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.getTask = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/get-single-task", { task_id: id }, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.deleteResponseReactions = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'token': this._auth.token });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* baseURL */] + "/task/delete-response-reaction", data, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ApiProvider.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Server error');
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* TokenProvider */], __WEBPACK_IMPORTED_MODULE_5__authentication_authentication__["a" /* AuthenticationProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.provider.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manage_task_manage_task__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__response_response__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_users_search_users__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authentication_authentication__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaskDetailPage = /** @class */ (function () {
    function TaskDetailPage(ngZone, _navCtrl, _navParams, _actionSheetCtrl, _shared, _api, _auth, _alertCtrl, _modalCtrl, _zone) {
        this.ngZone = ngZone;
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._actionSheetCtrl = _actionSheetCtrl;
        this._shared = _shared;
        this._api = _api;
        this._auth = _auth;
        this._alertCtrl = _alertCtrl;
        this._modalCtrl = _modalCtrl;
        this._zone = _zone;
        this.task_id = null;
        this.task = {};
        this.isRespondedStatusSet = false;
        this.selectedDay = { status: null, id: null };
        this.task_id = this._navParams.get("task_id");
        this.repeatDays = this._navParams.get('repeatDays');
        console.log(this.repeatDays);
    }
    TaskDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.repeatDays.length > 1) {
            this.repeatDays.every(function (element) {
                console.log(element);
                if (element.status == 1) {
                    _this.selectedDay = Object.assign({}, element);
                    return false;
                }
            });
        }
        if (!this.selectedDay.id) {
            this.selectedDay = Object.assign({}, this.repeatDays[0]);
        }
        console.log(this.selectedDay);
        this.getTaskDetails();
    };
    TaskDetailPage.prototype.getTaskDetails = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getTaskDetails({ task_id: this.task_id, role_id: this._auth.userUnitRole, task_date_id: this.selectedDay.id }).subscribe(function (response) {
            console.log(response);
            if (response.status == 1) {
                _this.task = response.tasks[0];
                if (_this.task.userResponse.length > 0) {
                    _this.task.userResponse.map(function (e) {
                        e.limitTo = 1;
                        e.show = 'true';
                    });
                    _this.getUserRespondedStatus();
                    console.log(_this.task.userResponse);
                }
            }
            else {
                console.log(response.msg);
            }
            _this._shared.Loader.hide();
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    TaskDetailPage.prototype.getRespondents = function (value) {
        if (value.length > 0) {
            if (value.length > 4) {
                return value[0].full_name + "," + value[1].full_name + "," + value[2].full_name + ", " + value[3].full_name + " and " + (value.length - 4) + " more";
            }
            else {
                return value.map(function (e) { return e.full_name; }).join(", ");
            }
        }
        else {
            return ' ';
        }
    };
    TaskDetailPage.prototype.showNote = function (note) {
        var alert = this._alertCtrl.create({
            title: 'Note',
            subTitle: note,
            buttons: ['OK']
        });
        alert.present();
    };
    TaskDetailPage.prototype.deleteResponseReactionAlert = function (id, segment) {
        var _this = this;
        var actionSheet = this._actionSheetCtrl.create({
            title: 'Action',
            buttons: [
                {
                    text: 'Delete',
                    handler: function () {
                        _this._shared.Alert.confirm('', 'Delete ' + segment + '').then(function () {
                            _this.deleteResponseReactions({ has_response_id: id });
                        }, function () {
                            console.warn('User cancelled action.');
                        });
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TaskDetailPage.prototype.taskAlert = function () {
        var _this = this;
        var actionSheet = this._actionSheetCtrl.create({
            title: 'Action',
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        _this._shared.Alert.confirm('This task will be marked as Cancelled and a copy of this task will be available with modified information. Do you want to continue?', 'Confirmation', 'Yes').then(function () {
                            _this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__manage_task_manage_task__["a" /* ManageTaskPage */], { id: _this.task.id, type: 'edit' });
                        }, function () {
                            console.warn('User cancelled.');
                        });
                    }
                },
                {
                    text: 'Copy',
                    handler: function () {
                        _this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__manage_task_manage_task__["a" /* ManageTaskPage */], { id: _this.task.id, type: 'copy' });
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    TaskDetailPage.prototype.addResponse = function () {
        var _this = this;
        var data = { task_id: this.task.id, role_id: this._auth.userUnitRole, task_date_id: this.task.getTaskTime[0].id, has_response_id: 0, task_user_id: this._auth.user.id }; //fix
        var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__response_response__["a" /* ResponsePage */], { segment: 'response', data: data });
        modal.onDidDismiss(function (data) {
            if (data.refresh) {
                _this.getTaskDetails();
            }
            console.info(data);
        });
        modal.present();
    };
    TaskDetailPage.prototype.addReaction = function (id) {
        var _this = this;
        var data = { task_id: this.task.id, role_id: this._auth.userUnitRole, task_date_id: this.task.getTaskTime[0].id, has_response_id: id }; //fix
        var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__response_response__["a" /* ResponsePage */], { segment: 'react', data: data }, { cssClass: "react-modal" });
        modal.onDidDismiss(function (data) {
            if (data.refresh) {
                _this.getTaskDetails();
            }
            console.info(data);
        });
        modal.present();
    };
    TaskDetailPage.prototype.allParticipants = function () {
        var data = this.task.respondedUser.concat(this.task.nonRespondedUser);
        var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_users_search_users__["a" /* SearchUsersPage */], { source: 'task-detail', users: data });
        modal.present();
    };
    TaskDetailPage.prototype.showAllReactions = function (action, i) {
        if (action == 'show') {
            var arrayLength = this.task.userResponse[i].reaction.length;
            this.task.userResponse[i].limitTo = arrayLength - 1;
            this.task.userResponse[i].show = 'true';
        }
        else {
            this.task.userResponse[i].limitTo = 1;
            this.task.userResponse[i].show = 'false';
        }
    };
    TaskDetailPage.prototype.getUserRespondedStatus = function () {
        var _this = this;
        if (!this.isRespondedStatusSet) {
            this.task.userResponse.map(function (e) {
                if (e.task_user_id == _this._auth.user.id) {
                    _this.isRespondedStatusSet = true;
                }
            });
        }
    };
    TaskDetailPage.prototype.deleteResponseReactions = function (data) {
        var _this = this;
        this._shared.Loader.show();
        this._api.deleteResponseReactions(data).subscribe(function (response) {
            if (response.status == 0) {
                _this.isRespondedStatusSet = false;
                response.has_response_id == 0 ? _this._shared.Toast.show('Response has been deleted successfully.') : _this._shared.Toast.show('Reaction has been deleted successfully.');
                _this.getTaskDetails();
            }
            else {
                _this._shared.Toast.show('Something went wrong. Please try again.');
            }
            _this._shared.Loader.hide();
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    TaskDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-task-detail',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\task-detail\task-detail.html"*/'<ion-header no-shadow>\n\n  <ion-navbar color="header">\n\n    <ion-title>{{\'Task Detail\' | translate}}</ion-title>\n\n    <ion-buttons end *ngIf="task_id">\n\n      <button ion-button icon-only *ngIf="selectedDay.status == 1" [disabled]="isRespondedStatusSet" (tap)="addResponse()">\n\n        <ion-icon name="ios-undo"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (tap)="taskAlert()">\n\n        <ion-icon name="md-more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar class="segment-toolbar" *ngIf="this.repeatDays.length > 1">\n\n    <ion-segment [(ngModel)]="selectedDay.id" (ionChange)="getTaskDetails()">\n\n      <ion-segment-button *ngFor="let day of repeatDays; let index = index" [value]="day.id">\n\n          Task {{index+1}} \n\n        </ion-segment-button>  \n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <section>\n\n    <div class="content">\n\n      <div class="task-title fz16 bold">\n\n        {{task.task_name}}\n\n        <ion-icon *ngIf="task.note" (click)="showNote(task.note)" name="md-information-circle" item-start></ion-icon>\n\n        <ion-badge  color="secondary" [ngClass]="task?.status_name?.toLowerCase()"  float-right>{{ task.status_name}}</ion-badge>\n\n      </div>\n\n      <ul class="task-content">\n\n        <li><span>{{"Start" | translate}} -</span> {{task.sdatetime | date: \'EEEE, MMM d, y, h:mm a\' }} <ion-badge\n\n            color="danger" float-right>{{task.notification_status || 0}}</ion-badge>\n\n        </li>\n\n        <li><span>{{"Due" | translate}} - </span> {{task.due_time}} Hours</li>\n\n        <li><span>{{"Expiry" | translate}} - </span>{{task.expiry_time}} Hours</li>\n\n        <li *ngIf="task.days > 1">\n\n          <span>\n\n            <ion-icon name="md-repeat" item-start class="repeat-icon"></ion-icon>\n\n          </span> {{task.days}} Days</li>\n\n      </ul>\n\n    </div>\n\n    <div class="content">\n\n      <p class="app-label uppercase fz12">{{"Description" | translate }}</p>\n\n      <p class="space-normal">{{task.description}}</p>\n\n    </div>\n\n    <div class="content">\n\n      <ion-item no-padding>\n\n        <p class="app-label uppercase fz12">{{"Attachments" | translate}} (2)</p>\n\n        <!-- <button class="see-all" ion-button item-end clear no-margin>{{"See All" | translate}}\n\n          <ion-icon name="ios-arrow-forward"></ion-icon>\n\n        </button> //fix -->\n\n      </ion-item>\n\n      <ion-row class="box tiles-wrapper">\n\n        <ion-col col-3>\n\n          <div class="attachment-preview">\n\n            <img src="../../assets/images/images/1.jpg" alt="" imageViewer>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <div class="attachment-preview">\n\n            <img src="../../assets/images/images/thali.jpg" alt="" imageViewer>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n      <div class="mtb10" *ngIf="task?.respondedUser?.length">\n\n        <div class="circle green"></div> {{getRespondents(task.respondedUser)}}\n\n      </div>\n\n      <div class="mtb10" *ngIf="task?.nonRespondedUser?.length">\n\n        <div class="circle red"></div> {{getRespondents(task.nonRespondedUser)}}\n\n      </div>\n\n      <p class="light-color" (click)="allParticipants()">{{"View All Participants" | translate}}</p>\n\n    </div>\n\n  </section>\n\n  <section class="response-bg">\n\n    <div class="content">\n\n      <p text-left class="app-label uppercase fz12">{{"Responses" | translate}} ({{task?.userResponse?.length}})</p>\n\n      <div *ngIf="task.userResponse?.length > 0">\n\n        <div class="response-wrapper" *ngFor="let response of task.userResponse; let i = index">\n\n\n\n          <div class="responses">\n\n            <ion-item no-padding transparent >\n\n              <span class="name">{{response.full_name}}</span> - {{response.created_at | date: \'EEEE, MMM d, y, h:mm a\'\n\n              }}\n\n              <!-- <ion-icon class="info-icon" name="md-information-circle"></ion-icon> -->\n\n              <button ion-button item-end clear no-margin *ngIf="selectedDay.status == 1" (tap)="deleteResponseReactionAlert(response.id,\'Response\')">\n\n                <ion-icon name="md-more"></ion-icon>\n\n              </button>\n\n            </ion-item>\n\n            <p class="space-normal">{{response.description}}</p>\n\n            <!-- <ion-row class="box tiles-wrapper">\n\n              <ion-col col-3>\n\n                <div class="attachment-preview">\n\n                  <img src="../../assets/images/images/1.jpg" alt="">\n\n                </div>\n\n              </ion-col>\n\n              <ion-col col-3>\n\n                <div class="attachment-preview">\n\n                  <img src="../../assets/images/images/1.jpg" alt="">\n\n                </div>\n\n              </ion-col>\n\n            </ion-row> -->\n\n          </div>\n\n          <div class="reactions">\n\n            <button ion-button clear (tap)="addReaction(response.id)">\n\n              <ion-icon name="ios-undo"></ion-icon>{{\'React\' | translate}}\n\n            </button>\n\n            <button ion-button *ngIf="response?.reaction.length > 0" clear (click)="showAllReactions(\'show\',i)">\n\n              <ion-icon name="ios-arrow-down"></ion-icon>{{\'Show All Reactions\' | translate}}\n\n              ({{response.reaction.length}})\n\n            </button>\n\n          </div>\n\n          <span class="divider-full"></span>\n\n          <div class="comments  react-bg" padding-bottom *ngIf="response?.show == \'true\'">\n\n            <div *ngFor="let userRection of response?.reaction; let i = index">\n\n              <ion-item *ngIf="i <= response.limitTo"> \n\n                <span class="name">{{userRection.full_name}}</span> - {{userRection.created_at | date: \'EEEE, MMM d, y,\n\n                h:mm a\' }}\n\n                <button *ngIf="selectedDay.status == 1" ion-button item-end clear no-margin (tap)="deleteResponseReactionAlert(userRection.id,\'Reaction\')">\n\n                  <ion-icon name="md-more"></ion-icon>\n\n                </button>\n\n                <p class="desc">{{userRection.description}}</p>\n\n              </ion-item>\n\n            </div>\n\n            <div class="reactions" *ngIf="response?.reaction.length > 0" >\n\n              <button class="hide-reaction" no-padding ion-button clear (click)="showAllReactions(\'hide\',i)">\n\n                <ion-icon name="ios-arrow-up"></ion-icon>{{\'Hide Reactions\' | translate}}\n\n              </button>\n\n            </div>\n\n          </div>\n\n          <span class="divider-full" *ngIf="response?.reaction.length > 0" ></span>\n\n        </div>\n\n      </div>\n\n      <div text-center *ngIf="task.userResponse?.length == 0">No responses found.</div>\n\n    </div>\n\n  </section>\n\n\n\n</ion-content>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\task-detail\task-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["r" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["s" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["s" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_shared_shared_provider__["a" /* SharedProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_shared_shared_provider__["a" /* SharedProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_api_api_provider__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_api_api_provider__["a" /* ApiProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* ModalController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_core__["NgZone"]) === "function" && _k || Object])
    ], TaskDetailPage);
    return TaskDetailPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=task-detail.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api_provider__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskPreviewPage = /** @class */ (function () {
    // public task: any = dummyTask;
    function TaskPreviewPage(_shared, _api, _auth, _navCtrl, _navParams, _viewCtrl, _config) {
        this._shared = _shared;
        this._api = _api;
        this._auth = _auth;
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._viewCtrl = _viewCtrl;
        this._config = _config;
        this.task = { access: [], taskDetail: {}, users: [] };
        this.task = this._navParams.get('data');
        console.log(JSON.stringify(this.task));
    }
    TaskPreviewPage.prototype.ionViewDidLoad = function () {
    };
    TaskPreviewPage.prototype.prepareTask = function () {
        var taskDetail = this.task.taskDetail;
        this.task.access.forEach(function (element) {
            if (element.status == 0) {
                taskDetail.attachment_notrequired.push(element.id);
            }
            else if (element.status == 1) {
                taskDetail.attachment_optional.push(element.id);
            }
            else {
                taskDetail.attachment_required.push(element.id);
            }
        });
        if (taskDetail.assign_to == 1) {
            taskDetail['user_id'] = [];
            this.task.users.forEach(function (user) {
                taskDetail.user_id.push(user.id);
            });
        }
        taskDetail.unit_id = this._auth.unitId;
        taskDetail.role_id = this._auth.userUnitRole;
        delete taskDetail.task_attachments; //Remove later
        console.log(taskDetail);
        this.saveTask(taskDetail);
    };
    TaskPreviewPage.prototype.saveTask = function (taskDetail) {
        var _this = this;
        this._shared.Loader.show();
        this._api.insertTask(taskDetail).subscribe(function (response) {
            _this._shared.Loader.hide();
            if (response.task.id) {
                _this._shared.Toast.show('Your task has been created successfully.');
                _this._config.toggleTaskAdded(response.task.id);
                _this._viewCtrl.dismiss({ taskAdded: true });
            }
        }, function (err) {
            _this._shared.Loader.hide();
            console.error(err);
            _this._shared.Toast.show('Oops! something went wrong.');
        });
    };
    TaskPreviewPage.prototype.getClass = function (status) {
        if (status == 0) {
            return 'action-box red hydrated';
        }
        else if (status == 1) {
            return 'action-box yellow hydrated';
        }
        else {
            return 'action-box green hydrated';
        }
    };
    TaskPreviewPage.prototype.edit = function () {
        this._viewCtrl.dismiss({ page: 1, taskAdded: false });
    };
    TaskPreviewPage.prototype.dismiss = function () {
        this._viewCtrl.dismiss({ taskAdded: false });
    };
    TaskPreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-task-preview',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\task-preview\task-preview.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle="false" icon-only (click)="dismiss()">\n      <ion-icon name="ios-arrow-back"></ion-icon>\n    </button>\n    <ion-title>Task Preview</ion-title>\n    <ion-buttons end>\n      <button  ion-button icon-only (click)="edit()">\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list class="preview-content" no-lines>\n    <section padding class="pb0">\n      <ion-item class="item-input">\n        <p class="app-label uppercase fz12">Title</p>\n        <p class="space-normal">{{task.taskDetail.task_name}} </p>\n      </ion-item>\n      <ion-item class="item-input">\n        <p class="app-label uppercase fz12">Note</p>\n        <p class="space-normal">{{task.taskDetail.note}} </p>\n      </ion-item>\n      <ion-item class="item-input">\n        <p class="app-label uppercase fz12">Description</p>\n        <p class="space-normal">{{task.taskDetail.description}} </p>\n      </ion-item>\n    </section>\n    <section padding class="">\n      <div class="add-file">\n        <p class="app-label uppercase fz12">Attachments (0)</p>\n        <!-- <ion-row class="box tiles-wrapper">\n          <ion-col col-3>\n            <div class="attachment-preview">\n              <img src="../../assets/images/images/1.jpg" alt="">\n            </div>\n          </ion-col> \n        </ion-row> -->\n        <div class="no-data">No attachments</div>\n      </div>\n    </section>\n    <section padding class="pb0">\n      <ion-item class="item-input">\n        <p class="app-label uppercase fz12">Response privacy</p>\n        <p class="space-normal">{{task.is_public == 1 ? \'Public\' : \'Private\'}} </p>\n      </ion-item>\n    </section>\n    <section padding class="pb0">\n      <p class="app-label uppercase fz12">Allow attachments in response</p>\n      <div class="color-code" padding-top padding-bottom>\n        <div class="ssteps fz12 green"></div>\n        <span>Mandatory</span>\n        <div class="ssteps fz12 yellow"></div>\n        <span>Optional</span>\n        <div class="ssteps fz12 red"></div>\n        <span>Not Allowed</span>\n      </div>\n      <ion-row class="box">\n        <ion-col col-3 *ngFor="let data of task.access">\n          <div [class]="getClass(data.status)">\n            <ion-icon [name]="data.icon"></ion-icon>\n            <span class="txt">{{data.name}}</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </section>\n    <section padding class="pb0">\n      <ion-item class="item-input">\n        <p class="app-label uppercase fz12">Date and time</p>\n        <p class="space-normal"><span class="bold">Start - </span> {{task.taskDetail.start_date}},\n          {{task.taskDetail.start_time}}</p>\n        <p class="space-normal"><span class="bold">Due (in hours) - </span> {{task.taskDetail.due_time}}</p>\n        <p class="space-normal"><span class="bold">Expiry (in hours) - </span> {{task.taskDetail.expiry_time}}</p>\n        <p class="space-normal"> <span class="bold">Repeat (in Days) - </span> {{task.taskDetail.frequency == 1 ?\n          task.taskDetail.days : \'No repeating\'}}</p>\n      </ion-item>\n    </section>\n    <section padding class="pb0">\n      <ion-item class="item-input">\n        <p class="app-label uppercase fz12"> Assigned to</p>\n        <p class="space-normal"> {{task.taskDetail.assign_to == 1 ? task?.users?.length +\n          \' Respondents\' : \'Everyone\'}} </p>\n      </ion-item>\n      <div class="profile-slider" text-center *ngIf="task.taskDetail.assign_to == 1">\n        <ion-scroll scrollX="true">\n          <ion-row nowrap class="headerChip">\n            <ion-col col-3 *ngFor="let user of task.users">\n              <img src="../assets/icon/ic_user.svg" alt="">\n              <div class="user-name one-liner"> {{user.full_name}} </div>\n            </ion-col>\n          </ion-row>\n        </ion-scroll>\n      </div>\n    </section>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <button ion-button color="primary" (click)="prepareTask()" block class="create-button">Create Task</button>\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\task-preview\task-preview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_config__["a" /* TokenProvider */]])
    ], TaskPreviewPage);
    return TaskPreviewPage;
}());

//# sourceMappingURL=task-preview.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponsePage = /** @class */ (function () {
    function ResponsePage(_shared, _api, _navCtrl, _navParams, _viewCtrl) {
        this._shared = _shared;
        this._api = _api;
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._viewCtrl = _viewCtrl;
        this.response = {};
        this.submitted = false;
        this.segment = this._navParams.get('segment');
        this.response = this._navParams.get('data');
    }
    ResponsePage.prototype.ionViewDidLoad = function () {
    };
    ResponsePage.prototype.dismiss = function () {
        this._viewCtrl.dismiss({ refresh: false });
    };
    ResponsePage.prototype.submit = function () {
        if (!this.response.description) {
            this._shared.Toast.show('Please enter your comment.');
            return false;
        }
        if (this.segment == 'response') {
            this.addResponse();
        }
        else {
            this.addReaction();
        }
    };
    ResponsePage.prototype.addResponse = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.insertResponse(this.response).subscribe(function (response) {
            _this._shared.Loader.hide();
            if (response.id) {
                _this._shared.Toast.show('Your response has been added successfully.');
                _this._viewCtrl.dismiss({ refresh: true });
            }
            else {
                _this._shared.Toast.show('Something went wrong. Please try again.');
            }
        }, function (err) {
            _this._shared.Loader.hide();
            console.error(err);
        });
    };
    ResponsePage.prototype.addReaction = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.insertReaction(this.response).subscribe(function (response) {
            _this._shared.Loader.hide();
            if (response.id) {
                _this._shared.Toast.show('Your reaction has been added successfully.');
                _this._viewCtrl.dismiss({ refresh: true });
            }
            else {
                _this._shared.Toast.show('Something went wrong. Please try again.');
            }
        }, function (err) {
            _this._shared.Loader.hide();
            console.error(err);
        });
    };
    ResponsePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-response',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\response\response.html"*/'<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle="false" icon-only (click)="dismiss()">\n      <ion-icon name="ios-arrow-back"></ion-icon>\n    </button>\n    <ion-title>Add {{segment == \'response\' ? \'Response\' : \'Reaction\' }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <section padding class="pb0">\n    <form #responseForm="ngForm" name="response-form" novalidate>\n      <ion-list class="form-content">\n        <ion-item class="p0">\n          <ion-label text-uppercase stacked>Comment</ion-label>\n          <ion-textarea type="text" required name="comment" [(ngModel)]="response.description" #comment="ngModel" rows="5"></ion-textarea>\n        </ion-item>\n        <p [hidden]="comment.valid || submitted == false" ion-text color="danger" class="requiredError">\n          Comment is required\n        </p>\n      </ion-list>\n    </form>\n  </section>\n  <section *ngIf="segment == \'response\'">\n    <section padding-left padding-right>\n      <div class="response label-container-gender user-preference">\n        <ion-label class="app-label" text-uppercase stacked>Attachments</ion-label>\n        <div class="color-code">\n          <div class="ssteps green"></div>\n          <span>Mandatory</span>\n          <div class="ssteps yellow"></div>\n          <span>Optional</span>\n          <div class="ssteps red"></div>\n          <span>Not Allowed</span>\n        </div>\n        <section class="attachment pb0">\n          <div class="add-file">\n            <ion-row class="box">\n              <ion-col col-3>\n                <div class="action-box">\n                  <ion-icon name="image"></ion-icon>\n                  <span class="txt">Add Image</span>\n                </div>\n              </ion-col>\n              <ion-col col-3>\n                <div class="action-box">\n                  <ion-icon name="custom-audio"></ion-icon>\n                  <span class="txt">Add Audio</span>\n                </div>\n              </ion-col>\n              <ion-col col-3>\n                <div class="action-box">\n                  <ion-icon name="custom-video"></ion-icon>\n                  <span class="txt">Add Video</span>\n                </div>\n              </ion-col>\n              <ion-col col-3>\n                <div class="action-box">\n                  <ion-icon name="pin"></ion-icon>\n                  <span class="txt">Add Location</span>\n                </div>\n              </ion-col>\n              <ion-col col-3>\n                <div class="action-box">\n                  <ion-icon name="document"></ion-icon>\n                  <span class="txt">Add File</span>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n        </section>\n        <div class="add-file">\n          <ion-label text-uppercase stacked>Added Attachments(0)</ion-label>\n          <div class="no-data" padding-top text-center>No attachments added</div>\n        </div>\n      </div>\n    </section>\n  </section>\n</ion-content>\n<ion-footer>\n  <button ion-button color="primary" (tap)="submit()" block class="create-button">Submit</button>\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\response\response.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], ResponsePage);
    return ResponsePage;
}());

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatService = /** @class */ (function () {
    function ChatService(http, events) {
        this.http = http;
        this.events = events;
    }
    ChatService.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Hancock',
            userAvatar: './assets/to-user.jpg',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success'
        };
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatService.prototype.getMsgList = function () {
        var msgListUrl = './assets/mock/msg-list.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    ChatService.prototype.sendMsg = function (msg) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(msg); }, Math.random() * 1000); })
            .then(function () { return _this.mockNewMsg(msg); });
    };
    ChatService.prototype.getUserInfo = function () {
        var userInfo = {
            id: '140000198202211138',
            name: 'Luff',
            avatar: './assets/user.jpg'
        };
        return new Promise(function (resolve) { return resolve(userInfo); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_chat_service__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GroupChatPage = /** @class */ (function () {
    function GroupChatPage(chatService, socket, navCtrl, shared, _auth, _api, navParams, events, _viewCtrl) {
        var _this = this;
        this.chatService = chatService;
        this.socket = socket;
        this.navCtrl = navCtrl;
        this.shared = shared;
        this._auth = _auth;
        this._api = _api;
        this.navParams = navParams;
        this.events = events;
        this._viewCtrl = _viewCtrl;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        this.msgGroup = [];
        // public content:any;
        this.messages = [];
        // Get the navParams toUserId parameter
        this.msgGrpId = this.navParams.get('id');
        console.log('inside group chat detail in constructor');
        //this.msgGrpId= 1; 
        this.userId = this._auth.user.id;
        this.fromId = this._auth.user.id;
        this._unitId = this._auth.unitId;
        this.fullName = this._auth.user.full_name;
        this.room = this._unitId + "_" + this.msgGrpId;
        console.log('unitid---' + this._unitId);
        console.log('room=========ghfgh========');
        console.log(this.room);
        console.log('room=========fghfgh========');
        this.getMessages().subscribe(function (message) {
            console.log(message);
            _this.messages.push(message);
            //this.content.scrollBottom();
        });
    }
    GroupChatPage.prototype.ionViewDidLoad = function () {
    };
    GroupChatPage.prototype.sendMessage = function () {
        console.log('inside send');
        var currentdate = new Date();
        var datetime = currentdate;
        this.socket.emit('add-message', { msg: this.message, room: this.room, unit_id: this._unitId, from_id: this.fromId, to_id: this.toId, msg_group_id: this.msgGrpId, created_at: datetime, full_name: this.fullName });
        var data = { msg: this.message, unit_id: this._unitId, room: this.room, from_id: this.fromId, to_id: this.toId, msg_group_id: this.msgGrpId, created_at: datetime, full_name: this.fullName };
        this.notifyTitle = 'from respondent';
        this._api.sendChat(data)
            .subscribe(function (res) {
            if (res['status'] == 'success') {
            }
        }, function (err) {
            console.log(err);
        });
        this.message = '';
        //  this.content.scrollBottom();
        this.scrollToBottom();
        //this.message
    };
    GroupChatPage.prototype.getMessages = function () {
        var _this = this;
        // if (this.message) {
        var observable = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                console.log(data);
                observer.next(data);
            });
        });
        return observable;
        //}
        // this.scrollToBottom();
    };
    GroupChatPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('inside ng init');
        this.socket.connect();
        var data = { unit_id: this._unitId, msg_group_id: this.msgGrpId };
        console.log(data);
        this._api.getGroupChatDetail(data)
            .subscribe(function (res) {
            if (res['status'] == 'success') {
                _this.title = res.title;
                _this.messages = res.groupchat;
                _this.scrollToBottom();
            }
            _this.shared.Loader.hide();
        }, function (err) {
            _this.shared.Loader.hide();
        });
    };
    GroupChatPage.prototype.ionViewWillLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
        this.socket.disconnect();
    };
    GroupChatPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        //this.scrollToBottom();
    };
    GroupChatPage.prototype.getMsg = function () {
        var _this = this;
        // Get mock message list
        return this.chatService
            .getMsgList()
            .subscribe(function (res) {
            _this.msgList = res;
            //   this.scrollToBottom();
        });
    };
    GroupChatPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    GroupChatPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    GroupChatPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    GroupChatPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    GroupChatPage.prototype.dismiss = function () {
        this._viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], GroupChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], GroupChatPage.prototype, "messageInput", void 0);
    GroupChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-group-chat',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\group-chat\group-chat.html"*/'<ion-header> \n\n   <ion-toolbar>\n\n        <button ion-button menuToggle="false" icon-only (click)="dismiss()">\n\n          <ion-icon name="ios-arrow-back"></ion-icon>\n\n        </button>\n\n        <ion-title>{{title}}</ion-title>\n\n       </ion-toolbar>\n\n  </ion-header> \n\n  <ion-content>\n\n  \n\n    <div class="message-wrap"> \n\n       <div *ngFor="let msg of messages" class="message"\n\n       [class.left]=" msg.from_id != this.userId"\n\n       [class.right]=" msg.from_id=== this.userId">\n\n       \n\n       <div *ngIf="msg.room == this.room">\n\n\n\n\n\n            <img class="user-img"  *ngIf="msg.from_id != this.userId" src="../../assets/user.jpg" alt="">\n\n             <img class="user-img"  *ngIf="msg.from_id=== this.userId" src="../../assets/to-user.jpg" alt="">\n\n        <!-- <img class="user-img" [src]="msg.userAvatar" alt="" src=""> -->\n\n        <!-- <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner> -->\n\n        <div class="msg-detail">\n\n          <div class="msg-info">\n\n            <p>\n\n              {{msg?.full_name}}&nbsp;&nbsp;&nbsp;{{msg.created_at | date:\'MM/dd/yyyy @ h:mma\'}}</p>\n\n          </div>\n\n          <div class="msg-content">\n\n            <span class="triangle"></span>\n\n            <p class="line-breaker ">{{msg.msg}}</p>\n\n          </div>\n\n        </div>\n\n      </div>\n\n      </div>\n\n  \n\n    </div> \n\n  \n\n  </ion-content>\n\n  \n\n  <ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n    <div class="input-wrap"> \n\n      <textarea #chat_input\n\n                placeholder="Enter your message"\n\n                [(ngModel)]="message"\n\n                (keyup.enter)="sendMessage()"\n\n                (focusin)="onFocus()">\n\n      </textarea>\n\n     \n\n     \n\n      <button ion-button clear icon-only item-right (click)="sendMessage()" [disabled]="message === \'\'">\n\n        <ion-icon name="ios-send" ios="ios-send" md="md-send" ></ion-icon>\n\n      </button>\n\n    </div> \n\n  </ion-footer>\n\n  '/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\group-chat\group-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* ViewController */]])
    ], GroupChatPage);
    return GroupChatPage;
}());

//# sourceMappingURL=group-chat.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_chat_group_chat__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__respondent_chat_respondent_chat__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagesPage = /** @class */ (function () {
    function MessagesPage(_navCtrl, _navParams, _shared, modalCtrl, _api, _auth) {
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this._shared = _shared;
        this.modalCtrl = modalCtrl;
        this._api = _api;
        this._auth = _auth;
        this.list = {};
        this.userId = this._auth.user.id;
        this.roleId = this._auth.userUnitRole;
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        this.getChatList();
    };
    MessagesPage.prototype.getChatList = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getChatList().subscribe(function (response) {
            if (response['status'] == 'success') {
                _this.list = response.res;
                console.log(_this.list);
            }
            _this._shared.Loader.hide();
        }, function (err) {
            console.error(err);
            _this._shared.Loader.hide();
        });
    };
    MessagesPage.prototype.openChat = function (id) {
        var _this = this;
        // this._navCtrl.push(GroupChatPage, { id: id });
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__group_chat_group_chat__["a" /* GroupChatPage */], { id: id });
        modal.onDidDismiss(function () {
            _this.getChatList();
        });
        modal.present();
    };
    MessagesPage.prototype.openRespChat = function (id) {
        var _this = this;
        // this._navCtrl.push(RespondentChatPage, { id: id});
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__respondent_chat_respondent_chat__["a" /* RespondentChatPage */], { id: id });
        modal.onDidDismiss(function () {
            _this.getChatList();
        });
        modal.present();
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-messages',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\messages\messages.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Messages</ion-title> \n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header class="mb0 primary">\n\n      Groups\n\n    </ion-list-header>\n\n    <ion-item *ngFor="let group of list.msg_groups" (click)="openChat(group.id)">\n\n      <!-- <ion-thumbnail item-start>\n\n        <img src="../assets/icon/ic_user.svg">\n\n      </ion-thumbnail> -->\n\n      <h2  class="capitalize">{{group.title}}</h2>\n\n      <p>{{group.lastChatMsg.msg}}</p>\n\n      <ion-badge color="danger" item-end>{{group.chatcount }}</ion-badge>\n\n    </ion-item>\n\n    <ion-item *ngIf="!list?.msg_groups?.length" class="no-data" text-center>No data found.</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="list.respondents?.length > 0">\n\n    <ion-list-header class="mb0 primary">\n\n      Respondents\n\n    </ion-list-header>\n\n    <ion-item *ngFor="let respondent of list.respondents" (click)="openRespChat(respondent.id)">\n\n      <!-- <ion-thumbnail item-start>\n\n        <img src="../assets/icon/ic_user.svg">\n\n      </ion-thumbnail> -->\n\n      <h2 class="capitalize">{{respondent.full_name}}</h2>\n\n      <p>{{respondent.lastChatMsg?.msg}}</p>\n\n      <ion-badge color="danger" item-end>{{respondent.respcount}}</ion-badge>\n\n    </ion-item>\n\n    <ion-item *ngIf="!list?.respondents?.length" class="no-data" text-center>No data found.</ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar class="filters-wrapper">\n\n      <ion-row>\n\n        <ion-col text-left>\n\n            <img class="filter-icon mr15" src="../assets/icon/sort.svg"> Sort by\n\n        </ion-col>\n\n        <ion-col text-right>\n\n          Latest on top <img class="filter-icon ml15" src="../assets/icon/arrow-up.svg">\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_terms__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LanguageSelectionPage = /** @class */ (function () {
    function LanguageSelectionPage(_navCtrl, _shared, _api, _alert, _authentication) {
        this._navCtrl = _navCtrl;
        this._shared = _shared;
        this._api = _api;
        this._alert = _alert;
        this._authentication = _authentication;
        this.languages = [];
        this.appState = {};
        this.translatedData = {};
    }
    LanguageSelectionPage.prototype.ionViewDidLoad = function () {
        this.translatedData = __webpack_require__(399);
        this.getLanguage();
    };
    LanguageSelectionPage.prototype.getLanguage = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getLanguages().subscribe(function (response) {
            _this.languages = response['language'];
            _this.selectedLanguage = response['language'][0].name;
            _this._shared.Loader.hide();
        }, function (err) {
            console.log(err);
            _this._shared.Loader.hide();
        });
    };
    LanguageSelectionPage.prototype.confirm = function () {
        var _this = this;
        if (!this.selectedLanguage) {
            this._shared.Toast.show('Please select a language');
            return false;
        }
        this._shared.Alert.confirm(this.translateData(this.selectedLanguage.toLowerCase() + '_language_selected'), '' + this._authentication.translation[this.selectedLanguage]['language'] + '', '' + this._authentication.translation[this.selectedLanguage]['yes'] + '', '' + this._authentication.translation[this.selectedLanguage]['change'] + '').then(function () {
            _this._shared.LS.get('appState').then(function (data) {
                if (data) {
                    data.language = _this.selectedLanguage;
                    _this._shared.LS.set('appState', data);
                    _this._authentication.cacheLanguage(_this.selectedLanguage);
                }
                else {
                    _this.appState.language = _this.selectedLanguage;
                    _this._shared.LS.set('appState', _this.appState);
                    _this._authentication.cacheLanguage(_this.selectedLanguage);
                }
                _this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terms_terms__["a" /* TermsPage */]);
            });
        }, function () {
            console.warn('User cancelled language.');
        });
    };
    LanguageSelectionPage.prototype.translateData = function (value) {
        var key = value.toLowerCase().split(' ').join('_');
        if (this.translatedData) {
            if (typeof this.translatedData[this.selectedLanguage][key] == 'undefined') {
                return value;
            }
            else {
                return this.translatedData[this.selectedLanguage][key];
            }
        }
        else {
            return value;
        }
    };
    LanguageSelectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-language-selection',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\language-selection\language-selection.html"*/'<ion-content padding>\n\n  <div padding>\n\n    <div class="heading">\n\n      <img class="feature-img" src="../assets/icon/ic_language.svg">\n\n      <p class="feature-title bold">Choose your language</p>\n\n      </div>\n\n    <ion-list radio-group [(ngModel)]="selectedLanguage">\n\n      <ion-item *ngFor="let language of languages" class="pl0 custom-radio">\n\n        <ion-label><span class="radio-icon" [ngClass]="{\'hindi\' : language.name == \'Hindi\'}">{{language.srno}}</span> {{language.title}}</ion-label>\n\n        <ion-radio [value]="language.name"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div> \n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="arrow-button">\n\n    <button ion-button color="primary" clear float-right (click)="confirm()">Confirm <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\language-selection\language-selection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], LanguageSelectionPage);
    return LanguageSelectionPage;
}());

//# sourceMappingURL=language-selection.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_active_unit_not_active_unit__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__otp_otp__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, _shared, _api, _auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._shared = _shared;
        this._api = _api;
        this._auth = _auth;
        this.countries = [];
        this.registrationForm = { country: '91' };
        this.submitted = false;
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        this.getCountries();
        console.log(this._auth.language);
    };
    RegistrationPage.prototype.getCountries = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getCountries().subscribe(function (response) {
            _this.countries = response;
            _this._shared.Loader.hide();
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    RegistrationPage.prototype.sendOtp = function (data) {
        var _this = this;
        this.submitted = true;
        if (!data.valid) {
            this._shared.Toast.show(this._auth.translateData('Please fill all mandatory fields'));
            return;
        }
        else {
            this._shared.Loader.show();
            this._api.saveRegistration(this.registrationForm)
                .subscribe(function (response) {
                _this._shared.Loader.hide();
                if (response['status'] == 1) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__otp_otp__["a" /* OtpPage */], { id: response.user.id, otp: response.otp, mobile: _this.registrationForm.mobile });
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__not_active_unit_not_active_unit__["a" /* NotActiveUnitPage */]);
                }
            }, function (err) {
                console.info(err);
                _this._shared.Loader.hide();
            });
        }
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-registration',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\registration\registration.html"*/'<ion-content padding>\n\n  <div padding>\n\n    <div class="heading">\n\n          <img class="feature-img" src="../assets/icon/mobile-phone.svg">\n\n          <p class="feature-title">{{\'Registration\' | translate}}</p>\n\n        </div>\n\n    </div>\n\n    <form #registration="ngForm" novalidate>\n\n        <ion-list>\n\n        <ion-item class="item-input" >\n\n          <ion-icon name="md-globe" item-start></ion-icon>\n\n          <ion-label stacked>{{\'Pick your country\' | translate}} <span class="asterisk">*</span></ion-label>\n\n          <ion-select  interface="popover" [(ngModel)]="registrationForm.country" name="country"  required #country="ngModel">\n\n              <ion-option *ngFor="let country of countries"  [value]="country.phonecode">+{{country.phonecode}}\n\n                  - {{country.name}}</ion-option>\n\n             </ion-select>\n\n             <p [hidden]="country.valid || submitted == false" ion-text  class="validationErr">\n\n                {{\'Country\' | translate}} {{\'is required\' | translate}}\n\n             </p>\n\n         </ion-item>\n\n         <ion-item  class="input-with-icon">\n\n            <ion-icon name="ios-call" item-start></ion-icon>\n\n            <ion-label stacked>{{\'Mobile Number\' | translate}}<span class="asterisk">*</span></ion-label>\n\n            <ion-input type="number" required name="mobile" [(ngModel)]="registrationForm.mobile" #mobile="ngModel"></ion-input>\n\n           </ion-item>\n\n           <p [hidden]="mobile.valid || submitted == false" ion-text  class="validationErr">\n\n               {{\'Mobile Number\' | translate}} {{\'is required\' | translate}}\n\n           </p>\n\n         </ion-list>\n\n         </form>\n\n         <div class="msg">\n\n         <p>{{\'otp will be send\' | appLevelTranslation}}.</p>\n\n         </div>\n\n     \n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar class="arrow-button">\n\n      <button ion-button color="primary" clear float-right  (click)="sendOtp(registration)" >{{\'Send OTP\' | translate}} <ion-icon name="ios-arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotActiveUnitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotActiveUnitPage = /** @class */ (function () {
    function NotActiveUnitPage(_navCtrl) {
        this._navCtrl = _navCtrl;
    }
    NotActiveUnitPage.prototype.ionViewDidLoad = function () {
    };
    NotActiveUnitPage.prototype.close = function () {
        this._navCtrl.pop();
    };
    NotActiveUnitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-not-active-unit',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\not-active-unit\not-active-unit.html"*/'<ion-content padding>\n\n    <div padding>\n\n        <div class="heading">\n\n              <img class="feature-img" src="../assets/icon/alert.svg">\n\n              <p class="feature-title">{{"uh oh" | translate}}!</p>\n\n          </div>\n\n         <div margin-top>\n\n            <p [innerHTML]="\'not active unit\' | appLevelTranslation"></p>\n\n         </div>\n\n       </div>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar text-center>\n\n      <button ion-button color="primary" clear   (click)="close()" >{{"Close" | translate}}</button>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\not-active-unit\not-active-unit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */]])
    ], NotActiveUnitPage);
    return NotActiveUnitPage;
}());

//# sourceMappingURL=not-active-unit.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__identity_found_identity_found__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_profile_manage_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OtpPage = /** @class */ (function () {
    function OtpPage(_platform, _oneSignal, _navCtrl, storage, _navParams, _shared, _api, _authentication) {
        this._platform = _platform;
        this._oneSignal = _oneSignal;
        this._navCtrl = _navCtrl;
        this.storage = storage;
        this._navParams = _navParams;
        this._shared = _shared;
        this._api = _api;
        this._authentication = _authentication;
        this.submitted = false;
        this.otpForm = {};
        this.invalidOtp = false;
        this.appState = {};
        this._oneSingleIds = { pushToken: null, deviceId: null };
        this.otpForm.mobile = this._navParams.get("mobile");
        this.otpForm.uid = this._navParams.get("id");
        this.otpForm.validotp = this._navParams.get("otp");
        this.initDeviceToken();
    }
    OtpPage.prototype.initDeviceToken = function () {
        var _this = this;
        this._platform.ready().then(function () {
            if (_this._platform.is('cordova')) {
                _this._oneSignal.getIds().then(function (identity) {
                    _this._oneSingleIds.pushToken = identity.pushToken;
                    _this._oneSingleIds.deviceId = identity.userId;
                    _this.storage.set('pushToken', identity.pushToken);
                    _this.storage.set('deviceId', identity.userId);
                });
            }
        });
    };
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log(this.otpForm);
    };
    OtpPage.prototype.back = function () {
        this._navCtrl.pop();
    };
    OtpPage.prototype.submit = function (data) {
        var _this = this;
        this.submitted = true;
        if (!data.valid) {
            this._shared.Toast.show(this._authentication.translateData('Please fill all mandatory fields'));
            return;
        }
        else {
            this.submitted = false;
            this._shared.Loader.show();
            this._api.checkOtp(this.otpForm)
                .subscribe(function (response) {
                _this._shared.Loader.hide();
                if (response.status == 0) {
                    _this.invalidOtp = true;
                    _this._shared.Toast.show(response.msg);
                }
                else {
                    _this.appState.user = response.user;
                    _this._shared.LS.get('appState').then(function (data) {
                        if (data) {
                            data.user = response.user;
                            _this._shared.LS.set('appState', data);
                            if (_this._oneSingleIds.deviceId) {
                                var data1 = { 'deviceId': _this._oneSingleIds.deviceId, 'pushToken': _this._oneSingleIds.pushToken, 'userId': data.user.id };
                                _this._api.registerDevice(data1)
                                    .subscribe(function (res) {
                                    console.log(res);
                                }, function (err) {
                                    console.error(err);
                                });
                            }
                        }
                        else {
                            _this.appState.user = response.user;
                            _this._shared.LS.set('appState', _this.appState);
                        }
                        _this._authentication.cacheToken(response.user.token);
                        _this._authentication.cacheUserData(response.user);
                        if (response.user.dob) {
                            _this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__identity_found_identity_found__["a" /* IdentityFoundPage */]);
                        }
                        else {
                            _this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__manage_profile_manage_profile__["a" /* ManageProfilePage */]);
                        }
                    });
                }
            }, function (err) {
                console.info(err);
                _this._shared.Loader.hide();
            });
        }
    };
    OtpPage.prototype.resendOtp = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.resendOtp({ mobile: this.otpForm.mobile })
            .subscribe(function (response) {
            _this._shared.Loader.hide();
            console.log(response);
            if (response.status == 'success') {
                _this.otpForm.validotp = response.otp;
                _this._shared.Toast.show(_this._authentication.translateData('OTP Resent successfully'));
            }
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-otp',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\otp\otp.html"*/'<ion-content padding>\n\n  <div padding>\n\n    <div class="heading">\n\n      <img class="feature-img" src="../assets/icon/mobile-phone.svg">\n\n      <p class="feature-title bold"> {{\'Registration\' | translate}}</p>\n\n    </div>\n\n    <form #otp="ngForm" novalidate>\n\n      <ion-row>\n\n        <ion-col class="p0">\n\n          <ion-item no-padding>\n\n            <ion-label text-uppercase stacked>{{\'Enter the otp\' | translate }} <span class="asterisk">*</span></ion-label>\n\n            <ion-input required name="inputotp" type="number" [(ngModel)]="otpForm.inputotp" #inputotp="ngModel"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <p [hidden]="inputotp.valid || submitted == false" ion-text color="danger" class="validationErr">\n\n          {{\'OTP\' | translate}} {{\'is required\' | translate}}\n\n      </p>\n\n      <p *ngIf="invalidOtp" ion-text color="danger" class="validationErr">{{\'Invalid OTP\' | translate }}</p>\n\n    </form>\n\n    <div class="light-color info">\n\n      <p padding-top>{{\'OTP sent to\' | translate }} {{otpForm.mobile}}.</p>\n\n      <p>{{\'Check your SMS inbox for the OTP and enter it above\' | translate}}.</p>\n\n      <p padding-top>{{\'Did not receive the OTP\' | translate}}?</p>\n\n      <p class="resend" (click)="resendOtp()">{{\'Click here to resend OTP\'  | translate }}.</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="arrow-button">\n\n    <button ion-button color="primary" clear float-left (click)="back()">{{\'Back\' | translate}}</button>\n\n    <button ion-button color="primary" clear float-right (click)="submit(otp)">{{\'submit\' | translate}} <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\otp\otp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentityFoundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm_identity_confirm_identity__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdentityFoundPage = /** @class */ (function () {
    function IdentityFoundPage(_navCtrl, _navParams) {
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
    }
    IdentityFoundPage.prototype.ionViewDidLoad = function () {
    };
    IdentityFoundPage.prototype.next = function () {
        this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__confirm_identity_confirm_identity__["a" /* ConfirmIdentityPage */]);
    };
    IdentityFoundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-identity-found',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\identity-found\identity-found.html"*/'<ion-content padding>\n\n  <div padding>\n\n    <div class="heading">\n\n      <img class="feature-img" src="../assets/icon/ic_user.svg">\n\n      <p class="feature-title">{{\'Identity found\' | translate}}!</p>\n\n    </div>\n\n\n\n    <div class="light-color info">\n\n        <p [innerHTML]="\'identity found\' | appLevelTranslation"></p>\n\n      <!-- <p>The number has been already registered before.</p>\n\n      <p>You will be asked to confirm your identity in the next section. If it is not you, you can create a new\n\n        profile.</p> -->\n\n    </div>\n\n  </div>  \n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="arrow-button">\n\n    <button ion-button color="primary" clear float-right (click)="next()">{{\'Next\' | translate}} <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\identity-found\identity-found.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
    ], IdentityFoundPage);
    return IdentityFoundPage;
}());

//# sourceMappingURL=identity-found.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = {"Hindi":{"otp_will_be_send":"पंजीकरण अनुवाद को पूरा करने के लिए एक बार पासवर्ड के साथ एक बार पासवर्ड (ओटीपी) आपके फोन पर भेजा जाएगा","not_active_unit":"आप वर्तमान में किसी भी इकाई का हिस्सा नहीं हैं.<br>हम आपको जल्द ही एक और इकाई के हिस्से के रूप में देखने की उम्मीद करते हैं.","identity_found":"मोबाइल नंबर पहले ही पंजीकृत हो चुका है. <br>आपको अगले खंड में अपनी पहचान की पुष्टि करने के लिए कहा जाएगा। यदि यह आप नहीं है, तो आप एक नया बना सकते हैं.","hindi_language_selected":"आपने हिंदी को अपनी प्राथमिक भाषा के रूप में चुना है। क्या आपको यकीन है?"},"English":{"otp_will_be_send":"A one time password (OTP) will be send to your phone via an SMS to complete the registration translate","not_active_unit":"You are currently not part of any unit.<br>We hope to see you soon as a part of another unit.","identity_found":"The number has been already registered before.<br>You will be asked to confirm your identity in the next section. If it is not you, you can create a new profile.","english_language_selected":"You have chosen English as your primary Language. Are you sure?"}}

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api_provider__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParticipantsPage = /** @class */ (function () {
    function ParticipantsPage(_navCtrl, _shared, _api, _authentication) {
        this._navCtrl = _navCtrl;
        this._shared = _shared;
        this._api = _api;
        this._authentication = _authentication;
        this.userRole = this._authentication.userUnitRole;
    }
    ParticipantsPage.prototype.ionViewDidLoad = function () {
        this.getParticipants();
    };
    ParticipantsPage.prototype.getParticipants = function () {
        var _this = this;
        console.log("DSff");
        this._shared.Loader.show();
        this._api.getParticipants().subscribe(function (response) {
            _this._shared.Loader.hide();
            if (response.status == 1) {
                _this.participants = response.getUnitParticipants;
                console.log(_this.participants);
                console.log("data");
            }
            else {
                _this._shared.Toast.show(response.msg);
            }
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    ParticipantsPage.prototype.updateNotification = function (user_id, is_notify, index) {
        var _this = this;
        this._shared.Loader.show();
        this._api.updateNotificationStatus({ user_id: user_id, is_notify: is_notify, unit_id: this._authentication.unitId })
            .subscribe(function (response) {
            _this._shared.Loader.hide();
            if (response.status == 1) {
                _this.participants[index].is_notify = response.notifyStatus;
            }
            else {
                _this._shared.Toast.show(response.msg);
            }
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    ParticipantsPage.prototype.viewProfile = function (user_id) {
        if (this._authentication.userUnitRole == 2) {
            this._navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* ProfilePage */], { user_id: user_id, page: 'participant' });
        }
    };
    ParticipantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-participants',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\participants\participants.html"*/'<ion-header no-shadow>\n\n  <ion-navbar color="header">\n\n    <ion-title>{{\'Participants\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-card *ngFor="let participant of participants; let i = index">\n\n      <ion-card-header>\n\n        <ion-item (tap)="viewProfile(participant.unit_user_id)">\n\n          <ion-thumbnail item-start>\n\n            <img src="../assets/user.jpg">\n\n          </ion-thumbnail>\n\n          <h2 class="capitalize">{{participant.full_name}}<ion-icon *ngIf="userRole == 2" class="detail-arrow" name="ios-arrow-forward"></ion-icon>\n\n          </h2>\n\n          <p class="role">{{participant.role_name}}</p>\n\n          <!-- userRole != participant.role_id -->\n\n          <button ion-button item-end clear icon-only color="dark" (click)="updateNotification(participant.unit_user_id,participant.is_notify, i)">\n\n            <ion-icon [name]="participant.is_notify==1 ? \'ios-notifications\':\'ios-notifications-off\'"></ion-icon>\n\n          </button>\n\n        </ion-item>\n\n      </ion-card-header>\n\n      <ion-card-content class="fz12">\n\n        {{participant.about}}\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar class="filters-wrapper">\n\n    <ion-row>\n\n      <ion-col text-left>\n\n        <img class="filter-icon mr15" src="../assets/icon/sort.svg"> {{"Sort by" | translate}}\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        {{"Category" | translate}} <img class="filter-icon ml15" src="../assets/icon/arrow-up.svg">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\participants\participants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], ParticipantsPage);
    return ParticipantsPage;
}());

//# sourceMappingURL=participants.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(410);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_task_detail_task_detail__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_search_users_search_users__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_group_chat_group_chat__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_respondent_chat_respondent_chat__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_confirm_identity_confirm_identity__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_spinner_dialog__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_language_selection_language_selection__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_otp_otp__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_manage_profile_manage_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_units_units__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tasks_tasks__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_not_active_unit_not_active_unit__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_participants_participants__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_component__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_identity_found_identity_found__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_relative_time__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common_http__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng_socket_io__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_translate__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_manage_task_manage_task__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pipes_app_level_translation__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_task_preview_task_preview__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ionic_img_viewer__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_onesignal__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_response_response__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var config = { url: 'http://dragonflychat.infini.work/', options: {} };


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_20__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_language_selection_language_selection__["a" /* LanguageSelectionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_manage_profile_manage_profile__["a" /* ManageProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_units_units__["a" /* UnitsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_not_active_unit_not_active_unit__["a" /* NotActiveUnitPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_identity_found_identity_found__["a" /* IdentityFoundPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_confirm_identity_confirm_identity__["a" /* ConfirmIdentityPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_respondent_chat_respondent_chat__["a" /* RespondentChatPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_group_chat_group_chat__["a" /* GroupChatPage */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_relative_time__["a" /* RelativeTime */],
                __WEBPACK_IMPORTED_MODULE_35__pipes_translate__["a" /* Translate */],
                __WEBPACK_IMPORTED_MODULE_24__pages_participants_participants__["a" /* ParticipantsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_manage_task_manage_task__["a" /* ManageTaskPage */],
                __WEBPACK_IMPORTED_MODULE_37__pipes_app_level_translation__["a" /* AppLevelTranslation */],
                __WEBPACK_IMPORTED_MODULE_1__pages_search_users_search_users__["a" /* SearchUsersPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_task_preview_task_preview__["a" /* TaskPreviewPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_task_detail_task_detail__["a" /* TaskDetailPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_response_response__["a" /* ResponsePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */], { backButtonIcon: 'ios-arrow-back', scrollAssist: false, autoFocusAssist: false }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_29__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_34_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_39_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_21_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_language_selection_language_selection__["a" /* LanguageSelectionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_manage_profile_manage_profile__["a" /* ManageProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_units_units__["a" /* UnitsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_not_active_unit_not_active_unit__["a" /* NotActiveUnitPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_identity_found_identity_found__["a" /* IdentityFoundPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_confirm_identity_confirm_identity__["a" /* ConfirmIdentityPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_group_chat_group_chat__["a" /* GroupChatPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_participants_participants__["a" /* ParticipantsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_manage_task_manage_task__["a" /* ManageTaskPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_respondent_chat_respondent_chat__["a" /* RespondentChatPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_search_users_search_users__["a" /* SearchUsersPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_task_preview_task_preview__["a" /* TaskPreviewPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_task_detail_task_detail__["a" /* TaskDetailPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_response_response__["a" /* ResponsePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__providers_api_api_provider__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_config__["a" /* TokenProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_shared_shared_provider__["a" /* SharedProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_spinner_dialog__["a" /* SpinnerDialog */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_onesignal__["a" /* OneSignal */],
                { provide: __WEBPACK_IMPORTED_MODULE_20__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_21_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_authentication_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasks_tasks__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var UnitsPage = /** @class */ (function () {
    function UnitsPage(_shared, _api, _authentication, _navCtrl, _navParams) {
        this._shared = _shared;
        this._api = _api;
        this._authentication = _authentication;
        this._navCtrl = _navCtrl;
        this._navParams = _navParams;
        this.units = [];
        this.selectedUnitId = null;
    }
    UnitsPage.prototype.ionViewDidLoad = function () {
        this.selectedUnitId = this._authentication.unitId;
        this.getUnits();
    };
    UnitsPage.prototype.getUnits = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getUnitList().subscribe(function (response) {
            _this._shared.Loader.hide();
            if (response['status'] == 1) {
                _this.units = response['units'];
            }
        }, function (err) {
            console.log(err);
            _this._shared.Loader.hide();
        });
    };
    UnitsPage.prototype.getTasks = function (unitId, i) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._shared.LS.get('appState')];
                    case 1:
                        data = _a.sent();
                        data.unitId = unitId;
                        data.unitName = this.units[i].unit_name;
                        data.userUnitRole = this.units[i].role_id;
                        this._shared.LS.set('appState', data);
                        this._authentication.cacheUnitId(unitId);
                        this._authentication.cacheUnitName(this.units[i].unit_name, this.units[i].role_id);
                        this._navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tasks_tasks__["a" /* TasksPage */], { unitId: unitId });
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-units',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\units\units.html"*/'<ion-header>\n\n  <ion-navbar color="header">\n\n    <ion-title>{{"Switch Unit" | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item *ngFor="let unit of units; let i = index" class="p0" (click)="getTasks(unit.id, i)">\n\n    <span class="tick" *ngIf="selectedUnitId && selectedUnitId == unit.id"></span> {{unit.unit_name}}\n\n    <ion-badge color="danger" item-end>10</ion-badge>\n\n  </ion-item>\n\n  <div text-center *ngIf="!units?.length">No units found.</div>\n\n</ion-content>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\units\units.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */]])
    ], UnitsPage);
    return UnitsPage;
}());

//# sourceMappingURL=units.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__units_units__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManageProfilePage = /** @class */ (function () {
    function ManageProfilePage(_navCtrl, navParams, _shared, _api, _auth, _zone) {
        this._navCtrl = _navCtrl;
        this.navParams = navParams;
        this._shared = _shared;
        this._api = _api;
        this._auth = _auth;
        this._zone = _zone;
        this.section = 1;
        this.profile = {};
        this.submitted = false;
        this.iconPath = '../../assets/icon/';
        this.lastImage = null;
        this.appState = {};
        this.profileCompletedStatus = false;
    }
    ManageProfilePage.prototype.ionViewDidLoad = function () {
        this.getProfileData();
        if (this._auth.profileCompleted) {
            this.profile = this._auth.user;
            this.profileCompletedStatus = true;
            this.getUserDetail();
        }
    };
    ManageProfilePage.prototype.getUserDetail = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getUserDetail({ user_id: this._auth.user.id }).subscribe(function (response) {
            _this.profile = response[1];
            console.log(_this.profile);
            _this._shared.Loader.hide();
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    ManageProfilePage.prototype.next = function (data) {
        if (this.section == 1 || this.section == 2) {
            this.submitted = true;
            if (!data.valid) {
                this._shared.Toast.show(this._auth.translateData('Please fill all mandatory fields'));
                return;
            }
            else {
                this.submitted = false;
                this.section += 1;
            }
        }
        else {
            this.section += 1;
        }
    };
    ManageProfilePage.prototype.saveSingleItem = function (id, keyName) {
        if (typeof this.profile[keyName] == 'undefined') {
            this.profile[keyName] = [];
            this.profile[keyName].push(id);
        }
        else {
            this.profile[keyName] = [];
            this.profile[keyName].push(id);
        }
    };
    ManageProfilePage.prototype.back = function () {
        this.section -= 1;
    };
    ManageProfilePage.prototype.getProfileData = function () {
        var _this = this;
        this._shared.Loader.show();
        this._api.getProfileData().subscribe(function (response) {
            _this.profileData = response;
            console.log("adf");
            console.log(_this.profileData);
            _this._shared.Loader.hide();
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    ManageProfilePage.prototype.getCheckedStatus = function (id, keyName) {
        if (this.profile[keyName] != null) {
            if (typeof this.profile[keyName] != 'undefined') {
                return this.profile[keyName].indexOf(id) == -1 ? 'false' : 'true';
            }
        }
        else {
            return false;
        }
    };
    ManageProfilePage.prototype.datachanged = function (e, keyName, id) {
        if (typeof this.profile[keyName] == 'undefined' || this.profile[keyName] == null) {
            this.profile[keyName] = [];
        }
        if (e.checked == true) {
            this.profile[keyName].push(id);
        }
        else {
            var index = this.profile[keyName].indexOf(id);
            if (index > -1) {
                this.profile[keyName].splice(index, 1);
            }
        }
    };
    ManageProfilePage.prototype.saveData = function () {
        var _this = this;
        this.profile.user_id = this._auth.user.id;
        this._shared.Loader.show();
        this._api.saveProfileData(this.profile)
            .subscribe(function (response) {
            _this._shared.Loader.hide();
            if (response.status == 1) {
                var userData_1 = response.user;
                userData_1.token = _this._auth.token;
                _this.appState.user = userData_1;
                _this.appState.profileCompleted = true;
                _this._shared.LS.get('appState').then(function (data) {
                    if (data) {
                        data.user = userData_1;
                        data.profileCompleted = true;
                        _this._shared.LS.set('appState', data);
                    }
                    else {
                        _this.appState.user = response.user;
                        _this._shared.LS.set('appState', _this.appState);
                    }
                    _this._auth.cacheProfileCompletedState(true);
                });
                _this._auth.cacheUserData(userData_1);
                if (_this.profileCompletedStatus) {
                    _this._zone.run(function () {
                        _this._navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* ProfilePage */]);
                    });
                }
                else {
                    _this._navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__units_units__["a" /* UnitsPage */]);
                }
            }
            else {
                _this._shared.Toast.show(response['msg']);
            }
        }, function (err) {
            console.info(err);
            _this._shared.Loader.hide();
        });
    };
    ManageProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-manage-profile',template:/*ion-inline-start:"c:\ionic2\dragonfly\src\pages\manage-profile\manage-profile.html"*/'<ion-content padding>\n\n  <div padding>\n\n    <div class="heading">\n\n      <img class="feature-img" src="../assets/icon/ic_user.svg">\n\n      <!-- <p class="feature-title">{{ section == 1 ? this._auth.translateData(\'New Identity\')  : (section == 2 ? this._auth.translateData(\'profile\') this._auth.translateData(\'public\')) : this._auth.translateData(\'profile\') this._auth.translateData(\'Confidential\') }}</p> -->\n\n\n\n      <p class="feature-title">{{ section == 1 ? this._auth.translateData(\'New Identity\') : (section == 2 ? this._auth.translateData(\'Profile (public)\') : this._auth.translateData(\'Profile (Confidential)\')) }}</p>\n\n    \n\n    </div>\n\n  </div>\n\n  <form #profileForm="ngForm" novalidate>\n\n    <div *ngIf="section == 1">\n\n      <ion-list class="input-icon">\n\n        <ion-item class="item-input">\n\n          <ion-icon name="md-globe" item-start></ion-icon>\n\n          <ion-label stacked> {{"Full Name" | translate}}\n\n            <span class="asterisk">*</span>\n\n          </ion-label>\n\n          <ion-input type="text" required name="full_name" [(ngModel)]="profile.full_name" #full_name="ngModel"></ion-input>\n\n        </ion-item>\n\n        <p [hidden]="full_name.valid || submitted == false" ion-text class="validationErr">\n\n          {{"Full name" | translate }} {{"is required" | translate}}\n\n        </p>\n\n        <ion-item class="item-input">\n\n          <ion-icon name="ios-calendar" item-start></ion-icon>\n\n          <ion-label stacked color="primary">{{"Date of birth" | translate}}\n\n            <span class="asterisk">*</span>\n\n          </ion-label>\n\n          <!-- <ion-input type="date" required name="dob" [(ngModel)]="profile.dob" #dob="ngModel"></ion-input> -->\n\n          <ion-datetime required name="dob" [(ngModel)]="profile.dob" #dob="ngModel"></ion-datetime>\n\n        </ion-item>\n\n        <p [hidden]="dob.valid || submitted == false" ion-text class="validationErr">\n\n          {{"Date of birth" | translate }} {{"is required" | translate}}\n\n        </p>\n\n      </ion-list>\n\n      <div class="gender-wrapper">\n\n        <ion-label class="custom-label">{{"Choose your gender" | translate}}*</ion-label>\n\n        <ion-list radio-group required [(ngModel)]="profile.gender" name="gender" #gender="ngModel" class="label-container-gender">\n\n          <ion-row>\n\n            <ion-item class="p0 width100">\n\n              <ion-label>\n\n                <ion-icon name="md-home"></ion-icon>\n\n                <span class="textLabel one-liner">{{"Male" | translate}}</span>\n\n              </ion-label>\n\n              <ion-radio value="1"></ion-radio>\n\n            </ion-item>\n\n            <ion-item class="p0 width100">\n\n              <ion-label>\n\n                <ion-icon name="md-people"></ion-icon>\n\n                <span class="textLabel one-liner">{{"Female" | translate}}</span>\n\n              </ion-label>\n\n              <ion-radio value="2"></ion-radio>\n\n            </ion-item>\n\n            <p [hidden]="gender.valid || submitted == false" ion-text class="required">\n\n              {{"Gender" | translate}} {{"is required" | translate}}\n\n            </p>\n\n          </ion-row>\n\n\n\n        </ion-list>\n\n      </div>\n\n\n\n\n\n    </div>\n\n    <div *ngIf="section == 2" padding>\n\n      <div text-center>\n\n        <h6 class="app-label ">{{"PROFILE PICTURE" | translate}}</h6>\n\n        <img *ngIf="!lastImage" (click)="getImage()" class="profile-edit" src="../../assets/icon/ic_user_edit.svg">\n\n        <img class="profile-pic" [src]="lastImage" (click)="getImage()" *ngIf="lastImage">\n\n      </div>\n\n      <ion-list class="form-content">\n\n        <ion-item no-padding>\n\n          <ion-label text-uppercase stacked>{{"Nick Name" | translate}}\n\n            <span class="asterisk">*</span>\n\n          </ion-label>\n\n          <ion-input [(ngModel)]="profile.nick_name" required name="nick_name" #nick_name="ngModel"></ion-input>\n\n        </ion-item>\n\n        <p [hidden]="nick_name.valid || submitted == false" ion-text class="required">\n\n          {{"Nick Name" | translate}} {{"is required" | translate}}\n\n        </p>\n\n        <ion-item no-padding>\n\n          <ion-label text-uppercase stacked>{{"About You" | translate}}</ion-label>\n\n          <ion-textarea [(ngModel)]="profile.about" name="about" #about="ngModel"></ion-textarea>\n\n        </ion-item>\n\n\n\n        <ion-item no-padding>\n\n          <ion-label text-uppercase stacked>{{"City" | translate}}</ion-label>\n\n          <ion-input [(ngModel)]="profile.city" name="city" #city="ngModel"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div *ngFor="let data of profileData">\n\n\n\n      <div padding *ngIf="section == data.id + 2 ">\n\n        <div text-center class="heading-icon">\n\n          <img class="profile-icon" [src]="iconPath+data.icon">\n\n          <h6 class="app-label">{{data.lable | translate}}</h6>\n\n        </div>\n\n        <div *ngIf="data.type == \'single\'" class="label-container-gender user-preference">\n\n          <ion-list radio-group>\n\n            <ion-row>\n\n              <ion-col col-6 *ngFor="let group of data.option">\n\n                <ion-item>\n\n                  <ion-label class="labelContainer">\n\n                    <span class="textLabel one-liner">{{group.name | translate}} </span>\n\n                    <ion-radio [value]="group.id" [checked]="getCheckedStatus(group.id,data.keyName)" (ionSelect)="saveSingleItem(group.id, data.keyName)"></ion-radio>\n\n                  </ion-label>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-list>\n\n        </div>\n\n        <div *ngIf="data.type == \'multiple\'" class="label-container-gender user-preference">\n\n          <ion-list radio-group [(ngModel)]="profile[data.keyName]" [name]="data.keyName">\n\n            <ion-row>\n\n              <ion-col col-6 *ngFor="let group of data.option">\n\n                <ion-item>\n\n                  <ion-label class="labelContainer">\n\n                    <span class="textLabel one-liner">{{group.name | translate}} </span>\n\n                    <ion-checkbox [checked]="getCheckedStatus(group.id,data.keyName)" (ionChange)="datachanged($event,data.keyName,group.id)"></ion-checkbox>\n\n                  </ion-label>\n\n                </ion-item>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-list>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n<ion-footer *ngIf="profileData">\n\n  <ion-toolbar class="arrow-button">\n\n    <button ion-button color="primary" *ngIf="section > 1" clear float-left (click)="back()">{{"Back" | translate}}</button>\n\n    <button *ngIf="section < profileData.length + 2" ion-button color="primary" clear float-right (click)="next(profileForm)">{{"Next" | translate}}\n\n      <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n    <button *ngIf="section == profileData.length + 2" ion-button color="primary" clear float-right (click)="saveData()">{{"Submit" | translate}}\n\n      <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n   <ion-title (click)="saveData()" text-center >  <button *ngIf="section >= 3 && section < profileData.length + 2" ion-button color="light" clear>{{"Skip All" | translate}}</button></ion-title>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"c:\ionic2\dragonfly\src\pages\manage-profile\manage-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_api_api_provider__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"]])
    ], ManageProfilePage);
    return ManageProfilePage;
}());

//# sourceMappingURL=manage-profile.js.map

/***/ }),

/***/ 753:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_respondent_chat_respondent_chat__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_messages_messages__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_participants_participants__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tasks_tasks__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_confirm_identity_confirm_identity__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_manage_profile_manage_profile__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_language_selection_language_selection__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_shared_shared_provider__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_units_units__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_api_api_provider__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_is_cordova_available__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__config__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_terms_terms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





















var MyApp = /** @class */ (function () {
    function MyApp(_platform, storage, _statusBar, oneSignal, _splashScreen, auth, _shared, _api) {
        this._platform = _platform;
        this.storage = storage;
        this._statusBar = _statusBar;
        this.oneSignal = oneSignal;
        this._splashScreen = _splashScreen;
        this.auth = auth;
        this._shared = _shared;
        this._api = _api;
        this.user = {};
        this.unitName = null;
        this.appState = {};
        this.initializeApp();
        this.cacheApplicationData();
        _platform.ready().then(function () {
            if (_platform.is('ios')) {
                _statusBar.styleLightContent();
                _statusBar.overlaysWebView(false);
            }
            _statusBar.styleDefault();
            _statusBar.backgroundColorByHexString('#e5e5e5');
            setTimeout(function () {
                _splashScreen.hide();
            }, 500);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this._platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this._statusBar.styleDefault();
            if (Object(__WEBPACK_IMPORTED_MODULE_17__common_is_cordova_available__["a" /* isCordovaAvailable */])()) {
                _this.oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_18__config__["a" /* oneSignalAppId */], __WEBPACK_IMPORTED_MODULE_18__config__["b" /* sender_id */]);
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                _this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this._onPushReceived(data.payload); });
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this._onPushOpened(data.notification.payload); });
                _this.oneSignal.endInit();
            }
        });
        setTimeout(function () {
            _this._splashScreen.hide();
        }, 300);
    };
    MyApp.prototype._onPushReceived = function (payload) {
        console.log('Push recevied:' + payload.body);
    };
    MyApp.prototype._onPushOpened = function (payload) {
        console.log('Push opened: ' + payload.body);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.cacheApplicationData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._shared.LS.get('appState')];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            this._shared.Loader.show();
                            this._api.getTranslation().subscribe(function (response) {
                                _this.appState.translation = response.translation;
                                _this._shared.LS.set('appState', _this.appState);
                                _this.auth.cacheTranslation(response.translation);
                                _this._shared.Loader.hide();
                            }, function (err) {
                                console.log(err);
                                _this._shared.Loader.hide();
                            });
                        }
                        else {
                            this.auth.cacheTranslation(data.translation);
                        }
                        if (!data || !data.profileCompleted) {
                            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_language_selection_language_selection__["a" /* LanguageSelectionPage */];
                        }
                        else {
                            this.auth.cacheTranslation(data.translation);
                            this.auth.cacheToken(data.user.token);
                            this.auth.cacheUserData(data.user);
                            this.auth.cacheUnitId(data.unitId);
                            this.auth.cacheUnitName(data.unitName, data.userUnitRole);
                            this.auth.cacheLanguage(data.language);
                            this.auth.cacheProfileCompletedState(data.profileCompleted);
                            if (data.profileCompleted) {
                                this.rootPage = data.unitId ? __WEBPACK_IMPORTED_MODULE_3__pages_tasks_tasks__["a" /* TasksPage */] : __WEBPACK_IMPORTED_MODULE_13__pages_units_units__["a" /* UnitsPage */];
                            }
                            else {
                                this.rootPage = data.user.dob ? __WEBPACK_IMPORTED_MODULE_4__pages_confirm_identity_confirm_identity__["a" /* ConfirmIdentityPage */] : __WEBPACK_IMPORTED_MODULE_6__pages_manage_profile_manage_profile__["a" /* ManageProfilePage */];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.viewPage = function (pageName) {
        if (pageName == 'participants') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_participants_participants__["a" /* ParticipantsPage */]);
        }
        else if (pageName == 'messages') {
            if (this.auth.userUnitRole == 4) {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_respondent_chat_respondent_chat__["a" /* RespondentChatPage */], { id: this.auth.user.id });
            }
            else {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_1__pages_messages_messages__["a" /* MessagesPage */]);
            }
        }
        else if (pageName == 'profile') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */], { user_id: this.auth.user.id, page: 'profile' });
        }
        else if (pageName == 'unit') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_13__pages_units_units__["a" /* UnitsPage */]);
        }
        else if (pageName == 'terms') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_19__pages_terms_terms__["a" /* TermsPage */], { source: 'sidemenu' });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({template:/*ion-inline-start:"c:\ionic2\dragonfly\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header no-border no-shadow>\n\n    <ion-toolbar class="pl8">\n\n      <ion-row class="p0">\n\n        <ion-col col-9 class="p0">\n\n          <ion-item class="p0" (click)="viewPage(\'profile\')" menuClose>\n\n            <ion-avatar item-start>\n\n              <img src="../assets/icon/ic_user.svg">\n\n            </ion-avatar>\n\n            <h2 class="user-name">{{auth.user?.full_name}}</h2>\n\n            <p> {{auth.translateData(\'View Profile\')}}\n\n              <ion-icon name="ios-arrow-forward"></ion-icon>\n\n            </p>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-3 text-right class="p0">\n\n          <button ion-button class="notifications-btn" clear icon-only (click)="showNotifications()">\n\n            <ion-badge color="danger">10</ion-badge>\n\n            <ion-icon name="notifications"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <div class="selected-unit">\n\n      <div padding (click)="viewPage(\'unit\')" menuClose>\n\n        <h6 class="app-label">{{auth.translateData(\'Currently Viewing\')}}</h6>\n\n        <p class="selected-unit-text">{{auth.unitName}}\n\n          <span class="ficon">\n\n            <ion-icon name="ios-arrow-forward"></ion-icon>\n\n          </span>\n\n        </p>\n\n        <span class="sub-title">Project - Food</span>\n\n      </div>\n\n    </div>\n\n    <ion-list class="mt15 menu-list" no-lines>\n\n      <ion-item class="ion-button" menuClose>\n\n        <ion-icon name="md-list-box" item-start></ion-icon>\n\n        {{auth.translateData(\'Tasks\')}}\n\n        <!-- <ion-badge color="danger" item-end>12</ion-badge> -->\n\n      </ion-item>\n\n      <ion-item class="ion-button" menuClose (click)="viewPage(\'messages\')">\n\n        <ion-icon name="md-chatbubbles" item-start></ion-icon>\n\n        {{auth.translateData(\'Messages\')}}\n\n        <!-- <ion-badge color="danger" item-end>1</ion-badge> -->\n\n      </ion-item>\n\n      <ion-item class="ion-button" menuClose (click)="viewPage(\'participants\')">\n\n        <ion-icon name="md-people" item-start></ion-icon>\n\n        {{auth.translateData(\'Participants\')}}\n\n      </ion-item>\n\n      <ion-item class="ion-button" menuClose (click)="viewPage(\'terms\')">\n\n        <ion-icon name="md-paper" item-start></ion-icon>\n\n        {{auth.translateData(\'Terms & Conditions\')}}\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"c:\ionic2\dragonfly\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_12__providers_shared_shared_provider__["a" /* SharedProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_20__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__providers_authentication_authentication__["a" /* AuthenticationProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_shared_shared_provider__["a" /* SharedProvider */], __WEBPACK_IMPORTED_MODULE_15__providers_api_api_provider__["a" /* ApiProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCordovaAvailable; });
var isCordovaAvailable = function () {
    if (!window.cordova) {
        console.info('This is a native feature. Please use a device');
        return false;
    }
    return true;
};
//# sourceMappingURL=is-cordova-available.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sender_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return oneSignalAppId; });
var sender_id = '640479410707';
var oneSignalAppId = 'c7e28a75-773b-46e8-a0ce-f1a73d672d6b';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativeTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RelativeTime = /** @class */ (function () {
    function RelativeTime() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativeTime.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_date_fns_distance_in_words_to_now___default()(new Date(value), { addSuffix: true });
    };
    RelativeTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'relativeTime',
        })
    ], RelativeTime);
    return RelativeTime;
}());

//# sourceMappingURL=relative-time.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Translate = /** @class */ (function () {
    function Translate(_auth) {
        this._auth = _auth;
        this.translatedData = {};
        this.translatedData = _auth.translation;
    }
    Translate.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        value = value.trim();
        var key = value.toLowerCase().split(' ').join('_');
        if (Object.keys(this.translatedData).length > 0) {
            if (typeof this.translatedData[this._auth.language][key] == 'undefined') {
                return value;
            }
            else {
                return this.translatedData[this._auth.language][key];
            }
        }
        else {
            return value;
        }
    };
    Translate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'translate',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], Translate);
    return Translate;
}());

//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLevelTranslation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppLevelTranslation = /** @class */ (function () {
    function AppLevelTranslation(_auth) {
        this._auth = _auth;
        this.translatedData = {};
        this.translatedData = __webpack_require__(399);
    }
    AppLevelTranslation.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var key = value.toLowerCase().split(' ').join('_');
        if (this.translatedData) {
            if (typeof this.translatedData[this._auth.language][key] == 'undefined') {
                return value;
            }
            else {
                return this.translatedData[this._auth.language][key];
            }
        }
        else {
            return value;
        }
    };
    AppLevelTranslation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'appLevelTranslation',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], AppLevelTranslation);
    return AppLevelTranslation;
}());

//# sourceMappingURL=app-level-translation.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenProvider; });
/* unused harmony export dummyTask */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var baseURL = 'https://dragonflyuat.infini.work/api';
//export const baseURL = 'http://192.168.2.98:8080/api';  

var TokenProvider = /** @class */ (function () {
    function TokenProvider() {
        this.user = {};
        this.isTaskAdded = null;
    }
    TokenProvider.prototype.setAuthData = function (data) {
        try {
            this.user = JSON.parse(data);
        }
        catch (e) {
            this.user = data;
        }
    };
    TokenProvider.prototype.dropAuthData = function () {
        this.token = null;
        this.user = null;
    };
    TokenProvider.prototype.toggleTaskAdded = function (id) {
        this.isTaskAdded = id || null;
    };
    TokenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenProvider);
    return TokenProvider;
}());

var dummyTask = { "taskDetail": { "attachment_required": [], "attachment_optional": [], "attachment_notrequired": [], "task_attachments": {}, "is_public": 1, "frequency": "1", "assign_to": "1", "task_name": "Lunch", "note": "Lunch note", "description": "lunch description", "start_date": "2018-09-26", "start_time": "13:00", "due_time": "26", "expiry_time": "36", "days": "5" }, "access": [{ "icon": "image", "id": 1, "name": "Add Image", "status": 2 }, { "icon": "mic", "id": 2, "name": "Add Audio", "status": 0 }, { "icon": "videocam", "id": 3, "name": "Add Video", "status": 1 }, { "icon": "pin", "id": 4, "name": "Add Location", "status": 0 }, { "icon": "document", "id": 5, "name": "Add File", "status": 1 }], "users": [{ "id": 9, "full_name": "test", "profile_image": "" }] };
//# sourceMappingURL=config.js.map

/***/ })

},[405]);
//# sourceMappingURL=main.js.map