import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Formulario from '../Components/Formulario';
import Header from '../Components/Header';
import Table from '../Components/Table';
import { editBool } from '../actions';
import FormularioEdit from '../Components/FormularioEdit';

class Wallet extends React.Component {
  render() {
    const { edit } = this.props;
    return (
      <div>
        <Header />
        {
          edit ? <FormularioEdit /> : <Formulario />
        }
        <Table />
      </div>
    );
  }
}
const mapStateToProps = (dispatch) => ({
  edit: dispatch.wallet.edit,
});
const mapDispatchToProps = (dispatch) => ({
  editOption: (option) => dispatch(editBool(option)),
});

Wallet.propTypes = {
  edit: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
