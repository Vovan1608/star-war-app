import { Navigate } from 'react-router-dom';

const LoginPage = ({ isLogginedIn, onLogIn }) => {
    if (isLogginedIn) {
        return <Navigate to={'/secret'} />;
    }

    return (
        <div className='jambotron'>
            <p>Login to see the secret page!</p>
            <button
                className='btn btn-primary'
                onClick={onLogIn}
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;
