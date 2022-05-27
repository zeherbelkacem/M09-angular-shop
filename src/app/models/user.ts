export class User{
    name: string;
    email: string;
    password : string;
    roles : string[];

    constructor(name: string, email: string, password : string, roles : string[]){
        this.name = name;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}
