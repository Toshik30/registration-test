import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {

    static async login(email:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/login', {email, password})
    }
    static async registration(email:string, password:string, 
        firstName: string,
        secondName: string,
        thirtyName: string,
        birthday: string,
        sex: string,
        phone: string,
    ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/api/registration', {email, password, firstName, secondName, thirtyName,birthday,sex, phone,})
    }
    static async logout(): Promise<void> {
        return $api.post('/api/logout')
    }
}