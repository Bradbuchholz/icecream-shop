import React from 'react';
import IceCreamList from './IceCreamList';
import NewIceCreamForm from './NewIceCreamForm';
import IceCreamDetail from './IceCreamDetail';

class IceCreamControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainIceCreamList: [],
      formVisible: false,
      selectedIceCream: null
    }
  }

  handleClick = () => {
    if (this.state.selectedIceCream != null) {
      this.setState({
        formVisible: false,
        selectedIceCream: null
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible
      }));
    }
  }

  handleAddingIceCreamToList = newKeg => {
    const newMainIceCreamList = this.state.mainIceCreamList.concat(newIceCream);
    this.setState({
      mainIceCreamList: newMainIceCreamList,
      formVisible: false
    });
  }

  handleChangingSelectedIceCream = iceCreamId => {
    const selectedIceCream = this.state.mainIceCreamList.filter(iceCream => iceCream.id === iceCreamId )[0];
    this.setState({
      selectedIceCream: selectedIceCream
    });
  }

  handleDecrementingScoopsSold = iceCreamId => {
    const newMainIceCreamList = this.state.mainIceCreamList.map((element) => {
      if (element.id === iceCreamId && element.scoops >= 1) {
        const iceCream = {...element, scoops: element.scoops - 1}
        return iceCream;
      } 
      return element;
    });
    this.setState({
      mainIceCreamList: newMainIceCreamList
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedIceCream !== null) {
      currentlyVisibleState = <IceCreamDetail iceCream={this.state.selectedIceCream} />
      buttonText="Return to IceCream List";
    } else if (this.state.formVisible) {
      currentlyVisibleState = <NewIceCreamForm onNewIceCreamCreation={this.handleAddingNewIceCreamToList} />
      buttonText="Return to IceCream List";
    } else {
      currentlyVisibleState = <IceCreamList iceCreamList={this.state.mainIceCreamList} onIceCreamDetailsSelection={this.handleChangingSelectedIceCream} onDecrementingScoops={this.handleDecrementingScoopsSold} />
      buttonText="Add IceCream to Inventory";
    }

    return (
      <React.Fragment>
  
          {currentlyVisibleState}
          <Button onClick={this.handleClick}>{buttonText}</Button>{" "}
        
      </React.Fragment>
    );
  }
}

export default IceCreamControl;