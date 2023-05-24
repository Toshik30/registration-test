module.exports = class UserDto {
    email;
    id;
    isActivated;
    firstName;
    secondName;
    thirtyName;
    birthday;
    sex; 
    phone;
    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.isActivated = model.isActivated;
        this.firstName = model.firstName;
        this.secondName = model.secondName;
        this.thirtyName = model.thirtyName;
        this.birthday = model.birthday;
        this.sex = model.sex; 
        this.phone = model.phone;
    }
}