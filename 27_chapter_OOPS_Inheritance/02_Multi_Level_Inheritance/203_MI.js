//Grand Father -> Father ->Son
class BaseClass{
    constructor(name){
        this.name =name;
    }
    open()
    {
        console.log("[OPEN]" + this.name);
    }
   
}
 class AuthPage extends BaseClass{
    login(user){
        console.log("[LOGIN]"+ user);
    }
        
    }
    class AdminPage extends AuthPage{
        constructor()
        {
            super("Admin Panel")
        }
        manageUsers(){
            console.log("[ADMIN] Managing users");
        }
    }

    let admin = new AdminPage();
    admin.open();
    admin.login("superadmin");
    admin.manageUsers();