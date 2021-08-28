import logImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps{
    OnRequestOpen : () => void;
}
export function Header({OnRequestOpen}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logImg} alt="dt money" />
                <button type="button" onClick={OnRequestOpen}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
}