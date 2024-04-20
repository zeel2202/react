import React from 'react'
import { useForm } from 'react-hook-form'


function FormComp() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const savedata = (data) => {
        console.log(data);
    }
    // console.log(errors);
    return (
        <form onSubmit={handleSubmit(savedata)} className='w-50 mx-auto'>
          <input {...register("firstname",{required:"First Name is required",})} />
        <br /><br />
          {errors.firstname && <span className='text-danger'>{errors.firstname.message}</span>}
          <br />
          <input {...register("lastname",{required:"Last Name is required",})} />
          <br /><br />
          {errors.lastname && <span className='text-danger'>{errors.lastname.message}</span>}
          <br />
          <input type="submit" />
        </form>
      )
}

export default FormComp