import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form">
          <label htmlFor="nome">
            Nome
            <input type="text" data-testid="name-input" />
          </label>
          <label htmlFor="descricao">
            <input type="textarea" data-testid="description-input" />
          </label>
          <label htmlFor="attr1">
            Atributo 1
            <input type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            Atributo 2
            <input type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            Atributo 3
            <input type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="urlImg">
            <input type="text" data-testid="image-input" />
          </label>
          <label>
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            <input type="checkbox" data-testid="trunfo-input" />
          </label>

          <button type="button" data-testid="save-button">Salvar</button>

        </form>
      </div>
    );
  }
}

export default Form;
