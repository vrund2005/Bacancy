// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService

interface userss {
    id : number,
    name : string
}

abstract class Service<T>{
    abstract execute(id:number):T
}

class UserService extends Service<userss>{
    execute(id:number) : userss {
        return {
            id : 34 ,
            name : "abc"
        }
    }
}