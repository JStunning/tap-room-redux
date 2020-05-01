import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import DailyKeg from './DailyKeg';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          name: "Party Keg",
          brand: "Brewer Bros",
          flavor: "Light and easily chuggable",
          price: "69",
          alcohol: "2.20",
          pints: 100,
          id: "1"
        },
        {
          name: "BBQ Keg",
          brand: "Johnson",
          flavor: "Medium dark with lots of hops",
          price: "59",
          alcohol: "5.2",
          pints: 100,
          id: "2"
        },
        {
          name: "Sorority Keg",
          brand: "Vivian's",
          flavor: "Smells and tastes like perfume",
          price: "64",
          alcohol: "4",
          pints: 100,
          id: "3"
        }
      ],
      selectedKeg: null,
      editing:false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, flavor, price, alcohol, pints } = newKeg;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      name: name,
      brand: brand,
      flavor: flavor,
      price: price,
      alcohol: alcohol,
      pints: pints
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onPintBuy={this.handleBuyingPint} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg"; 
    }
    return (
      <React.Fragment>
        <div id="container">
          <div id="CurrentState">
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>
          </div>
          <div id="DailyKeg">
            <DailyKeg kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
          </div>
        </div>
      </React.Fragment>
    );
  }

}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;