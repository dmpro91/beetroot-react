import { Container } from 'react-bootstrap';
import './Main.scss';

export const Main = ({children}) => {
    return (<Container className='pt-4 pb-4'>{children} </Container>);
};