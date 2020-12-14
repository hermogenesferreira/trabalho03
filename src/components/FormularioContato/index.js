import React from 'react';

const FormularioContato = ({ adicionar }) => {
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [celular, setCelular] = React.useState('');
  const [empresa, setEmpresa] = React.useState('');

  function submeterFormulario(e) {
    e.preventDefault();

    adicionar(nome, sobrenome, celular, empresa);

    setNome('');
    setCelular('');
    setSobrenome('');
    setEmpresa('');
  }

  return (
    <form onSubmit={submeterFormulario}>
      <div className="form-group">
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          className="form-control"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="sobrenome">Sobrenome: </label>
        <input
          type="text"
          className="form-control"
          id="sobrenome"
          name="sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="celular">Celular: </label>
        <input
          type="text"
          className="form-control"
          id="celular"
          name="celular"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="empresa">Empresa: </label>
        <input
          type="text"
          className="form-control"
          id="empresa"
          name="empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Salvar
      </button>
    </form>
  );
};

export default FormularioContato;
