export const selectOs = (state) => {
    const {dataReducer} = state;
    return dataReducer.data['selectOs'].map(el => {
        return {
            text: el['description'],
            id: el['id']
        }
    });
}