import { useState } from "react";

const Form = () => {

    const [input, getInput] = useState({

        name: "",
        mail: "",
        number: "",
        org: "",
        desc: ""
    });

    const Change = (event) => {

        const { name, value } = event.target;

        getInput((preValue) => {
            return ({
                ...preValue,
                [name]: value
            });
        })
    }

    const Submit = (event) => {

        event.preventDefault();

        alert(`Your Name is ${input.name}. Your Email is ${input.mail}. Your Number Is ${input.number}. You Work In ${input.org}. Your Description Is ${input.desc}`);
        
        getInput({

            name: "",
            mail: "",
            number: "",
            org: "",
            desc: ""
        });
    }

    return (
        <>

            <form onSubmit={Submit} className='d-flex flex-column col-10 col-sm-8 col-md-6 col-lg-3 mx-auto my-5 '>

                <input className='mb-5 text-center fs-5 border-0 border-bottom border-primary' name='name' type="text" placeholder='Enter Your Name' onChange={Change} value={input.name} required />
                <input className='mb-5 text-center fs-5 border-0 border-bottom border-primary' name='mail' type="email" placeholder='Enter Your Email' onChange={Change} value={input.mail} required />
                <input className='mb-5 text-center fs-5 border-0 border-bottom border-primary' name='number' type="number" placeholder='Enter Your Number 03xx-xxxxxxx' onChange={Change} value={input.number} required />
                <input className='mb-5 text-center fs-5 border-0 border-bottom border-primary' name='org' type="text" placeholder='Enter Your Organization Name' onChange={Change} value={input.org} required />
                <textarea className='mb-4 border-primary border-1 px-2 py-1' name="desc" placeholder='Enter Description' onChange={Change} value={input.desc} required />

                <button type='submit' className='btn btn-primary' > Submit </button>

            </form>

        </>);
}

export default Form;