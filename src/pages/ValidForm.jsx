import React from "react";
import { useForm } from "react-hook-form";

const ValidForm=()=>{
    const {register,handleSubmit}=useForm()


function Regist(data) {
    console.log(data);
}
return (
    <>
        <form action="" method="post" onSubmit={handleSubmit(Regist)} className="col-6 mx-auto shadow my-5 p-5 border">
            <div className="mt-4">
                <input type="text" {...register('username')} className="form-control" placeholder="enter your name" />
            </div>
            <div className="mt-4">
                <input type="text" {...register('email')} className="form-control"  placeholder="enter your email" />
            </div>
            <div className="mt-4">
                <input type="text" {...register('mobile')} className="form-control"  placeholder="enter your Mobile Number" />
            </div>
            <div className="mt-4">
                <button className="btn btn-success">submit</button>
            </div>
        </form>
    </>
)
}

export default ValidForm