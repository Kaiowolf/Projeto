const INITIAL_STATE = {
    codigo: ' ',
    descricao: 'Usuário',
    cargaHoraria: 0,
    preco: 0,
    categoria: 'ENGENHARIA',
    textoBotao : 'Adicionar',
    lista: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ATUALIZAR_CODIGO': return { ...state, codigo: action.info }
        case 'ATUALIZAR_DESCRICAO': return { ...state, descricao: action.info }
        case 'ATUALIZAR_CARGAHORARIA': return { ...state, cargaHoraria: action.info }
        case 'ATUALIZAR_PRECO': return {...state, preco: action.info }
        case 'ATUALIZAR_CATEGORIA': return {...state, categoria: action.info }
        case 'LIMPAR_FORM': return INITIAL_STATE
        case 'GET_LISTA': return { ...state, lista : action.info}
        default: return state;
    }
}