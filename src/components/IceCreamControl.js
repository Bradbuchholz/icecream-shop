import React from 'react';
import { Button } from "@mui/material";
import IceCreamList from './IceCreamList';
import NewIceCreamForm from './NewIceCreamForm';
import IceCreamDetail from './IceCreamDetail';
import EditIceCreamForm from './EditIceCreamForm';
class IceCreamControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      iceCreamListArray: [],
      selectedIceCream: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedIceCream != null)
    {
      this.setState({
        formVisible: false,
        selectedIceCream: null,
        editing: false
      });
    }
    else 
    {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  handleAddingNewIceCream = (newIceCream) => {
    const newIceCreamListArray = this.state.iceCreamListArray.concat(newIceCream);
    this.setState({
      iceCreamListArray: newIceCreamListArray, 
      formVisible: false
    });
  }

  handleChangingSelectedIceCream = (id) => {
    const selectedIceCream = this.state.iceCreamListArray.filter(iceCream => iceCream.id === id)[0];
    this.setState({selectedIceCream: selectedIceCream});
  }

  handleDeletingIceCream = (id) => {
    const newIceCreamListArray = this.state.iceCreamListArray.filter(iceCream => iceCream.id !== id);
    this.setState({
      iceCreamListArray: newIceCreamListArray,
      selectedIceCream: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingIceCream = (iceCreamToEdit) => {
    const editedIceCreamListArray = this.state.iceCreamListArray
    .filter(iceCream => iceCream.id !== this.state.selectedIceCream.id)
    .concat(iceCreamToEdit);
    this.setState({
      iceCreamListArray: editedIceCreamListArray,
      editing: false,
      selectedIceCream: null
    });
  }

  handleSellingScoop = (id) => {
    const selectedIceCream = this.state.iceCreamListArray.filter(iceCream => iceCream.id === id)[0]; 
    if (selectedIceCream.quantity >= 0.007)
    {
      const newQuantity = selectedIceCream.quantity - (1/130)
      const modifiedIceCream = {...selectedIceCream, quantity: newQuantity}
      const newIceCreamListArray = this.state.iceCreamListArray.filter(item => item.id !== id).concat(modifiedIceCream);
      this.setState({
        iceCreamListArray: newIceCreamListArray
      });
    } else {
      console.log("No More Ice Cream");
    }
  }

  render() {
    let visibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      visibleState = <EditIceCreamForm 
      iceCream = {this.state.selectedIceCream} 
      onEditIceCream = {this.handleEditingIceCream} />
      buttonText = "Back To Inventory";
    }
    else if (this.state.selectedIceCream != null){
      visibleState = <IceCreamDetail 
      iceCream = {this.state.selectedIceCream} 
      onClickingDelete = {this.handleDeletingIceCream}
      onClickingEdit = {this.handleEditClick}/>
      buttonText = "Back To Inventory";
    }
    else if (this.state.formVisible){
      visibleState = <NewIceCreamForm onNewIceCreamCreation={this.handleAddingNewIceCream} />;
      buttonText = "Back To Inventory";
    }
    else
    {
      visibleState = <IceCreamList 
      iceCreamList={this.state.iceCreamListArray} 
      onIceCreamSelection={this.handleChangingSelectedIceCream}
      onSellingScoop={this.handleSellingScoop} />;
      buttonText = "Add Inventory";
    }


    return (
      <>
        {visibleState}
        <Button variant="contained" onClick={this.handleClick}>{buttonText}</Button>
      </>
    );
  }
}

export default IceCreamControl;