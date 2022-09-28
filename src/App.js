import React from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  validationSaveButton = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const validationNome = cardName.length !== 0;
    const validationDescription = cardDescription.length !== 0;
    const validationImagem = cardImage.length !== 0;
    const validationRare = cardRare.length !== 0;
    const attrsMax = 90;
    const attrsSome = 210;
    const attr1Validation = Number(cardAttr1) <= attrsMax && Number(cardAttr1) >= 0;
    const attr2Validation = Number(cardAttr2) <= attrsMax && Number(cardAttr2) >= 0;
    const attr3Validation = Number(cardAttr3) <= attrsMax && Number(cardAttr3) >= 0;
    const validationAttrs = Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3) <= attrsSome;
    const isEnable = validationNome && validationDescription && validationImagem
    && validationRare && attr1Validation
    && attr2Validation && attr3Validation && validationAttrs;
    if (isEnable) {
      this.setState({ isSaveButtonDisabled: false });
    } else { this.setState({ isSaveButtonDisabled: true }); }
  };

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.validationSaveButton);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardImage, cardTrunfo } = this.state;
    const newCard = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo };
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      savedCards: [...prevState.savedCards, newCard],
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,

    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
