import { createReducer } from "@reduxjs/toolkit";



/*export const fetchAllData = () => async (dispatch) =>{
    try {
        dispatch({type : 'DATA_REQUEST'})
    
        const {data} = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment ");

        dispatch({type : 'DATA_SUCCESS', payload : data});
//Vineeth -20BIT0063
    } catch (error) {
        dispatch({type : 'DATA_FAILURE'})
    }
}
*/
export const DataReducer = createReducer({}, {
    DATA_REQUEST : (state) => {
        state.loading = true;
    },
    DATA_SUCCESS : (state, action) => {
        state.loading = false;
        state.allTickets = action.payload.tickets;
        state.allUser = action.payload.users;
    },
    DATA_FAILURE : (state) => {
        state.loading = false;
        state.allTickets = []
        state.allUser = [];
    },
});
//Vineeth -20BIT0063


export const SelectDataReducer = createReducer({}, {
    SELECT_DATA_REQUEST : (state) => {
        state.loading = true;
        state.selectedData = [];
    },
    SELECT_DATA_SUCCESS : (state, action) => {
        state.loading = false;
        state.selectedData = action.payload.selectedData;
        state.user = action.payload.user
    },
    SELECT_DATA_FAILURE : (state, action) => {
        state.loading = false;
        state.selectedData = []
        state.message = action.payload.message
    },
});