class User {
  username: string;
  email: string;
  password: string;
  upassword: string;
  img : string;

  constructor(username : string, email : string, password: string, upassword: string, img : string){
    this.username = username;
    this.email = email;
    this.password = password;
    this.upassword = upassword;
    this.img = img;
  }
}

export default User;