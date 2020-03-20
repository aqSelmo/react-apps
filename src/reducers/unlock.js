const setMiddleName = (state = {name: 'Falcs', middleName : 'Falcao'}, action) => {
    switch(action.type){
        case 'SET_LOL':
            return state = { ...state, middleName : 'LoL'}; 
        case 'SET_LOi':
            return state = { ...state, middleName : 'Loi'};
        default :
            return state;
    }
}

const setName = (state = {name: 'Falcs', middleName : 'Falcao'}, action) => {
    switch(action.type){
        case 'SET_AMADEU':
            return state = { ...state, name : 'AMADEU'};
        case 'SET_TIFUDEU':
            return state = { ...state, name : 'TIFUDEU'};
        default :
            return state;
    }
}

export {setMiddleName, setName};