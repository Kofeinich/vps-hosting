
export const selectCategory = (state) => {
    const {dataReducer} = state;
    return dataReducer.data['categories'].map(el => {
        return {
            text: el['name'],
        }
    });
}