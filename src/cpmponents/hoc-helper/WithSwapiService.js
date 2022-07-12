import { SwapiServiceConsumer } from '../swapiServiceContext';

const WithSwapiService = (Component, mapMethodsToProps) => {
    return function F(props) {

        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);

                        return (
                            <Component {...props} {...serviceProps} />
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
    };
};

export default WithSwapiService;
