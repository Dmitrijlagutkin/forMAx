import { padsList} from "../../data/padsList"
import { ADD_COLUMN, ADD_ITEM, CHANGE_COLUMN_NAME } from "../types"

const defaultState = padsList
    

export default function dataReducer(state = defaultState, action) {
    
    switch(action.type) {
        
        case ADD_COLUMN:
            const targetClipPad = action.payload.clipPadName
            return {
                ...state,
                [targetClipPad] : action.payload.changedClipPad,
            }
        case ADD_ITEM:
            const targetClipPadItem = action.payload.clipPadName          
            return {
                ...state,
                [targetClipPadItem] : action.payload.changedClipPad,
            }
        case CHANGE_COLUMN_NAME:
            const targetClipPadName = action.payload.clipPadName   
            return {
                ...state,
                [targetClipPadName] : action.payload.changedClipPadColumnName,
            }
        default:
            return state
    }
}

