import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
              
              <div className="mt-10">
              <h2 className='text-4xl text-center'>Opps !!!</h2>
              </div>
                <div className="text-center">
                <Link to={'/'}><button className=" text-2xl border rounded-lg text-center py-3 px-10 mt-10 hover:bg-slate-950">Go Back To Home</button></Link>
                </div>
        </div>
    );
};

export default ErrorPage;