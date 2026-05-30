import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._isUser = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setIsUser(user) {
        this._user = user
    }
    get isAuth() {
        return this._isAuth
    }
    get isUser() {
        return this._isUser
    }
}