import { chatTypes } from "../../types/chatTypes";


// const initialState={
//     uid: '',
//     chatActivo: null,
//     usuarios:[],
//     mensajes:[],
// }


export const chatReducer = (state, action) => {

    switch (action.type) {

        case chatTypes.getUsuarios:
            return {
                ...state,
                usuarios: [...action.payload]
            }

        case chatTypes.pugarChat:
            return {
                uid: '',
                chatActivo: null,
                usuarios: [],
                mensajes: [],
            }

        case chatTypes.cargarChat:
            return {
                ...state,
                mensajes: [...action.payload]
            }

        case chatTypes.nuevoMensaje:
            if (state.chatActivo === action.payload.de || state.chatActivo === action.payload.para) {
                return {
                    ...state,
                    mensajes: [...state.mensajes, action.payload]
                }
            } else {
                return {
                    ...state
                }
            }

        case chatTypes.activeChat:
            if (state.chatActivo === action.payload) return state;

            return {
                ...state,
                chatActivo: action.payload,
                mensajes: []
            }

        default:
            return state
    }
};