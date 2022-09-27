export const selectCategory = (state) => {
    const {dataReducer} = state;
    if (dataReducer.done === false) {
        return []
    }
    return dataReducer.data.result['categories'].map(el => {
        return {
            id: el['id'],
            text: el['name'],
        }
    });
}