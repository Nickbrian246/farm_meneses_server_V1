
function userDetailsfilter(userDetails){
    return {
        name:userDetails.name,
        age:userDetails.age,
        state:userDetails.state,
        email:userDetails.email,
        role:userDetails.role
    }
}
module.exports = {userDetailsfilter}