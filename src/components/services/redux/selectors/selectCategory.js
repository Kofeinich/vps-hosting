
export const selectCategory = (state) => {
    const {categoryReducer} = state;
    return categoryReducer.category;
}