import axios from 'axios';
import { QuestionType, UserRegistrationFormDataType, UserType } from "../types";


const baseURL:string = 'https://cae-bookstore.herokuapp.com'
const userEndpoint:string = '/user'
const questionAllEndpoint:string = '/question/all'

const apiClientNoAuth = () => axios.create({
    baseURL:baseURL
})



//===========================================from documentation===================================
// var axios = require('axios');
// var data = JSON.stringify({
//     "email": "miked@bears.com",
//     "first_name": "Mike",
//     "last_name": "Ditka",
//     "password": "1234"
// });

// var config = {
//     method: 'post',
//     url: 'https://cae-bookstore.herokuapp.com/user',
//     headers: { 
//     'Content-Type': 'application/json'
//     },
//     data : data
// };

// axios(config)
// .then(function (response) {
//     console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//     console.log(error);
// });



// var config:string = {
//     method: 'get',
//     url: 'https://cae-bookstore.herokuapp.com/question/all',
//     headers: { }
// };

// axios(config)
// .then(function (response) {
//     console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//     console.log(error);
// });
      
//===========================================from documentation===================================
type APIResponse<T> = { //generic type T because data will be in all different kinds of responses
    data?:T,
    error?:string
}



async function getAllQuestions(): Promise<APIResponse<{'questions':QuestionType[]}>> {
    let data;
    let error;
    try{
        const response = await apiClientNoAuth().get(questionAllEndpoint);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.message
        } else {
            error = 'Uh Oh - Error!'
        }
    }
    return { data, error }
}

async function register(newUserData:UserRegistrationFormDataType): Promise<APIResponse<UserType>> { //when it returns it will either be data or error and if it is data it will be UserType
    let data;
    let error;
    try{
        const response = await apiClientNoAuth().post(userEndpoint, newUserData);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return { data, error }
}


export {
    getAllQuestions,
    register
}
