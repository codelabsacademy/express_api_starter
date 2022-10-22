// will include database connection in upcomming version



const findAllUsers = () => {
    return [
        {
            username: "username 1",
            email: "email 1"
        },
        {
            username: "username 2",
            email: "email 2"
        },
    ];
};

const createUser = (username, email) => {

    const newUser = {
        username: username,
        email: email
    };

    return newUser;
}


export default {
    findAllUsers,
    createUser
}