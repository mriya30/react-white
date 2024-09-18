import React, { useState } from "react";
const SignUp = () => {
    const [user, setUser] = useState({})
    function input(e) {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name);
        console.log(value);

        const newUser = { [name]: value }
        console.log(newUser);

        // setUser({...user,[name]:value})
        setUser({ ...user, ...newUser })
    }
    function Regist(e) {
        e.preventDefault();
        console.log(user);
    }
    return (
        <>
            <form action="" method="post" onSubmit={(e) => Regist(e)} className="col-6 mx-auto shadow my-5 p-5">
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control" name="userName" placeholder="enter your name" />
                </div>
                <div className="mt-4">
                    <input type="text" onChange={(e) => input(e)} className="form-control" name="email" placeholder="enter your email" />
                </div>
                <div className="mt-4">
                    <button className="btn btn-success">submit</button>
                </div>
            </form>
        </>
    )
}

export default SignUp