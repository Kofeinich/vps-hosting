export const selectSoftware = (state) => {
    const {dataReducer} = state;
    return dataReducer.data['selectPanel'].map(el => {
        return {
            text: el['description'],
            id: el['id']
        }
    });
}