import axios from 'axios'
axios.defaults.headers.common['Authorization'] = `conqueror`;
axios.defaults.headers.common['Content-Type'] = `application/json`;


export function createUser(params){
    const promise = axios.post(import.meta.env.VITE_BACKEND_URI+"/user", params)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data).catch(err => err.response)
    
    // return it
    return dataPromise
}

export function getUser(query){
    const promise = axios.get(import.meta.env.VITE_BACKEND_URI+"/user", {params: query})
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch(err => err.response)
    // return it
    return dataPromise
}  

export function deleteUser(id){
    axios.delete(import.meta.env.VITE_BACKEND_URI+"/user", {data:{id: id}}).then((response) => response).catch((err) => err); 
}

export function updateUser(user_id,query){
    const promise = axios.patch(import.meta.env.VITE_BACKEND_URI+"/user/"+user_id, query)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch((err) => err);
    // return it
    return dataPromise 
} 

export function createPost(params){
    const promise = axios.post(import.meta.env.VITE_BACKEND_URI+"/post", params)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data).catch(err => err.response)
    // return it
    return dataPromise
}

export function getPost(query){
    const promise = axios.get(import.meta.env.VITE_BACKEND_URI+"/post", {params: query})
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch(err => err.response)
    // return it
    return dataPromise
}  

export function updatePost(post_id,query){
    const promise = axios.patch(import.meta.env.VITE_BACKEND_URI+"/post/"+post_id, query)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch((err) => err);
    // return it
    return dataPromise 
} 

export function deletePost(id){
    axios.delete(import.meta.env.VITE_BACKEND_URI+"/post", {data:{id: id}}).then((response) => response).catch((err) => err); 
}

export function createCourse(params){
    const promise = axios.post(import.meta.env.VITE_BACKEND_URI+"/course", params)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data).catch(err => err.response)
    // return it
    return dataPromise
}

export function getCourse(query){
    const promise = axios.get(import.meta.env.VITE_BACKEND_URI+"/course", {params: query})
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch(err => err.response)
    // return it
    return dataPromise
}  

export function updateCourse(course_id,query){
    const promise = axios.patch(import.meta.env.VITE_BACKEND_URI+"/course/"+course_id, query)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch((err) => err);
    // return it
    return dataPromise 
} 

export function deleteCourse(id){
    axios.delete(import.meta.env.VITE_BACKEND_URI+"/course", {data:{id: id}}).then((response) => response).catch((err) => err); 
}

export function createMessage(params){
    const promise = axios.post(import.meta.env.VITE_BACKEND_URI+"/message", params)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data).catch(err => err.response)
    // return it
    return dataPromise
}

export function getMessage(query){
    const promise = axios.get(import.meta.env.VITE_BACKEND_URI+"/message", {params: query})
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch(err => err.response)
    // return it
    return dataPromise
}  

export function deleteMessage(id){
    axios.delete(import.meta.env.VITE_BACKEND_URI+"/message", {data:{id: id}}).then((response) => response).catch((err) => err); 
}

export function createFollow(params){
    const promise = axios.post(import.meta.env.VITE_BACKEND_URI+"/follow", params)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data).catch(err => err.response)
    // return it
    return dataPromise
}

export function getFollow(query){
    const promise = axios.get(import.meta.env.VITE_BACKEND_URI+"/follow", {params: query})
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch(err => err.response)
    // return it
    return dataPromise
}  

export function deleteFollow(id){
    axios.delete(import.meta.env.VITE_BACKEND_URI+"/follow", {data:{id: id}}).then((response) => response).catch((err) => err); 
}

export function createComment(params){
    const promise = axios.post(import.meta.env.VITE_BACKEND_URI+"/comment", params)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data).catch(err => err.response)
    // return it
    return dataPromise
}

export function getComment(query){
    const promise = axios.get(import.meta.env.VITE_BACKEND_URI+"/comment", {params: query})
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch(err => err.response)
    // return it
    return dataPromise
}  

export function updateComment(comment_id,query){
    const promise = axios.patch(import.meta.env.VITE_BACKEND_URI+"/comment/"+comment_id, query)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch((err) => err);
    // return it
    return dataPromise 
} 

export function deleteComment(id){
    axios.delete(import.meta.env.VITE_BACKEND_URI+"/comment", {data:{id: id}}).then((response) => response).catch((err) => err); 
}

export function createLike(params){
    const promise = axios.post(import.meta.env.VITE_BACKEND_URI+"/like", params)
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data).catch(err => err.response)
    // return it
    return dataPromise
}

export function getLike(query){
    const promise = axios.get(import.meta.env.VITE_BACKEND_URI+"/like", {params: query})
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response).catch(err => err.response)
    // return it
    return dataPromise
}  

export function deleteLike(id){
    axios.delete(import.meta.env.VITE_BACKEND_URI+"/like", {data:{id: id}}).then((response) => response).catch((err) => err); 
}
