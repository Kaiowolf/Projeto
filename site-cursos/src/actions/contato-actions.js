import axios from 'axios';
const URL = "http://localhost:3200/api/contato";

export const alteraData = e => {
    return {
        type: 'ATUALIZAR_DATA',
        info: e.target.value
    }
}
export const alteraNome = e => {
    return {
        type: 'ATUALIZAR_NOME',
        info: e.target.value
    }
}
export const alteraEmail = e => {
    return {
        type: 'ATUALIZAR_EMAIL',
        info: e.target.value
    }
}
export const alteraAssunto = e => {
    return {
        type: 'ATUALIZAR_ASSUNTO',
        info: e.target.value
    }
}

export const adicionaContato = (data, nome, email, assunto) => {
    axios.post(URL, { data, nome, email, assunto })
    return {
        type: 'LIMPAR_FORM'
    }
}