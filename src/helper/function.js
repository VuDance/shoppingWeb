const isSelected = (state, id) => {
    const result = !!state.selectedItems.find((item) => item.id === id);
    return result;
  };
  // checks then number of products that user added
  const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    if (index === -1) {
      return false;
    } else {
      return state.selectedItems[index].quantity;
    }
  };
  export { isSelected, quantityCount };