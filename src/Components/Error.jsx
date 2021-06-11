import { useHistory } from "react-router-dom";

const Error = () => {

    const history = useHistory();

    return (
        <>

            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='bg-dark' >

                <h1 className="text-warning fw-bold fs-1 text-center">Error 404. Page Not Found !!! 😢</h1>

                <div className='d-flex align-items-center justify-content-evenly  mt-5'>

                    <button className="btn btn-primary mx-5" onClick={() => history.push('/')}>Home</button>
                    <button className="btn btn-primary mx-5" onClick={() => history.goBack()}>Return</button>

                </div>

            </div>

        </>);
}

export default Error;