import { Navigate } from 'react-router-dom';

const SecretPage = ({ isLogginedIn }) => {
    if (isLogginedIn) {
        return (
            <div className='jambotron text-center'>
                <h3>This page is full os secrets!!!</h3>
            </div>
        );
    }

    return <Navigate to={'/login'} />
};

export default SecretPage;