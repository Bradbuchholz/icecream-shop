import React from 'react';
import IceCreamList from './IceCreamList';
import NewIceCreamForm from './NewIceCreamForm';
import IceCreamDetail from './IceCreamDetail';
import EditIceCreamForm from './EditIceCreamForm';
import { findAllByTestId } from '@testing-library/react';

class IceCreamControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisable: false,
      inventoryListArray: [],
      selectedItem: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null)
    {
      this.setState({
        formVisable: false,
        selectedItem: null,
        editing: false
      });
    }
    else
    {
      this.setState(prevState => ({
        formVisable: !prevState.formVisable,
      }));
    }
  }

  handleAddingNewInventory = (newItem) => {
    const newInventoryListArry = this.state.inventoryListArray.concat(newItem);
    this.setState({
      inventoryListArray: newInventoryListArry,
      formVisable: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.inventoryListArray.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleDeletingItem = (id) => {
    const newInventoryListArry = this.state.inventoryListArray.filter(item => item.id !== id);
    this.setState({
      inventoryListArray: newInventoryListArry,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingItem = (itemToEdit) => {
    const editedInventoryListArry = this.state.inventoryListArray.filter(item => item.id !== this.state.selectedItem.id).concat(itemToEdit);
    this.setState({
      inventoryListArray: editedInventoryListArry,
      editing: false,
      selectedItem: null
    });
  }

  handleSellingScoop = (id) => {
    const selectedItem = this.state.inventoryListArray.filter(item => item.id === id)[0];
    if (selectedItem.quantity >= 0.02)
    {
      const newQuantity = selectedItem.quantity - (1/130)
      const modifiedItem = {selectedItem, quantity: newQuantity}
      const newInventoryListArry = this.state.inventoryListArray.filter(item => item.id !== id).concat(modifiedItem);
      this.setState({
        inventoryListArray: newInventoryListArry
      });
    }
  }
}