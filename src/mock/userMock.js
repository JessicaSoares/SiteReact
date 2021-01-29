import mock from '../utils/mock';

mock.onPost('/api/home/login').reply((config)=> {
    console.log(config)
    const {email, password} = JSON.parse(config.data);
    console.log(email, password)

if (email !== 'jessicassoarez@gmail.com' || password !== 'gfg'){

    return[400,{message: 'email ou senha incorretos'}]
}

const user ={

    id:1,
    name:'jess soares',
    username:'jess',
    email:'jessicassoarez@gmail.com'
}


return[200,{user}]

})