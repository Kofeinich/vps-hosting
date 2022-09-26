export const selectCategory = (state) => {
    const {osReducer} = state;
    return osReducer.os;
}