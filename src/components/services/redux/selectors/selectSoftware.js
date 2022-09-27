export const selectSoftware = (state) => {
    const {dataReducer} = state;
    if (dataReducer.done === false) {
        return []
    }
    return dataReducer.data.result['selectPanel'].map(el => {
        return {
            text: el['description'],
            id: el['id']
        }
    });

}