const Data = (page = 1) => {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then((res) => res.json())
        // .then((result) => result.data)
        .catch((error) => {
            console.log(error);
        })
}

export default Data