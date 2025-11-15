let users = [
    {
        user: "user",
        pass: "123",
        role: "Dev",
        token: "token",
    }

]

export function verifyUsers(user,pass){
    const userFound = users.find((u)=> {
        return u.user === user && u.pass === pass
    })

    return userFound ? {role:userFound.role,token:userFound.token} :null
}