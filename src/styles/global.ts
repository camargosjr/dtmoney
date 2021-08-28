import {createGlobalStyle} from 'styled-components';

/**
 * Arquivo global de css utilizando styled components
 */
export const GlobalStyle = createGlobalStyle `
    :root { /**Variaveis de cores para ser usada em toda aplicação */
        --background: #F0F2F5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }
    *{/**Reseta css padrão dos browsers */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /**Font padrão 16px, para desktop ótimo, mas outros dispositivos 
    ***é preciso adaptar para melhor experiência do usuário */

    html{
        @media(max-width: 1080px){/**Menor que 1080 15px=93.75% */
            font-size: 93,75%;
        }
        @media(max-width: 720px){
            font-size: 87,5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`