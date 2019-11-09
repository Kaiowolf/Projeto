import axios from 'axios';
const URL = "http://localhost:3200/api/curso";

export const alteraCodigo = e => {
    return {
        type: 'ATUALIZAR_CODIGO',
        info: e.target.value
    }
}

export const alteraDescricao = e => {
    return {
        type: 'ATUALIZAR_DESCRICAO',
        info: e.target.value
    }
}

export const alteraCargaHoraria = e => {
    return {
        type: 'ATUALIZAR_CARGAHORARIA',
        info: e.target.value
    }
}

export const alteraPreco = e => {
    return {
        type: 'ATUALIZAR_PRECO',
        info: e.target.value
    }
}

export const alteraCategoria = e => {
    return {
        type: 'ATUALIZAR_CATEGORIA',
        info: e.target.value
    }
}

export const getList = () => {
    return (dispatch) => {
        return axios.get(URL).then(
            (response) => {
                dispatch({
                    type : 'GET_LISTA',
                    info : response.data
                })
            },
            (err) => {
                console.log(err);
            }
        )
    }
}