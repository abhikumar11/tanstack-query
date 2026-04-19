import React from "react";
import { useForm } from "react-hook-form";
const UserForm = () => {
     const { register, handleSubmit } = useForm();
     const onSubmit = (data) => {
        
          console.log(data);
     };

     return (
          <div className="container mt-5">
               <h2>User Form</h2>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                         <label htmlFor="name" className="form-label">
                              Name
                         </label>
                         <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter name"
                              {...register("name")}
                         />
                    </div>
                    <div className="mb-3">
                         <label htmlFor="email" className="form-label">
                              Email
                         </label>
                         <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter email"
                              {...register("email")}
                         />
                    </div>
                    <div className="mb-3">
                         <label htmlFor="age" className="form-label">
                              Age
                         </label>
                         <input
                              type="number"
                              className="form-control"
                              id="age"
                              placeholder="Enter age"
                              {...register("age")}
                         />
                    </div>
                    <div className="mb-3">
                         <label htmlFor="gender" className="form-label">
                              Gender
                         </label>
                         <select
                              className="form-select"
                              id="gender"
                              {...register("gender")}
                         >
                              <option value="">Select gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                         </select>
                    </div>
                    <div className="mb-3">
                         <label htmlFor="city" className="form-label">
                              City
                         </label>
                         <input
                              type="text"
                              className="form-control"
                              id="city"
                              placeholder="Enter city"
                              {...register("city")}
                         />
                    </div>
                    <button type="submit" className="btn btn-primary">
                         Submit
                    </button>
               </form>
          </div>
     );
};

export default UserForm;
