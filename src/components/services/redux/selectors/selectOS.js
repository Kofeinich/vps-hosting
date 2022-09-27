export const selectOS = (state) => {
    const {dataReducer} = state;
    if (dataReducer.done === false) {
        return []
    }
    return dataReducer.data.result['selectOs'].map(el => {
        return {
            text: el['description'],
            id: el['id']
        }
    });
}