import React from 'react';
import uuid from 'react-uuid';
import Contato from '../../components/Contato';
import FormularioContato from '../../components/FormularioContato';

const Contatos = () => {
  const [contatos, setContatos] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem('contatos')) {
      setContatos(JSON.parse(localStorage.getItem('contatos')));
    }
  }, []);

  function adicionarContato(nome, sobrenome, celular, empresa) {
    const id = uuid();
    setContatos([...contatos, { id, nome, sobrenome, celular, empresa }]);
  }

  React.useEffect(() => {
    localStorage.setItem('contatos', JSON.stringify(contatos));
  }, [contatos]);

  function removerContato(id) {
    setContatos(contatos.filter((contato) => contato.id !== id));
  }

  return (
    <div span className="shadow-lg p-3 mb-5 bg-white rounded">
      <h1 align="center" className="p-3 mb-2 bg-primary text-white">
        Agenda
      </h1>
      <ul className="list-group">
        {contatos.map((contato) => (
          <Contato
            key={contato.id}
            contato={contato}
            removerContato={removerContato}
          />
        ))}
      </ul>
      <hr />
      <h2>Formulário de Contato</h2>

      <FormularioContato adicionar={adicionarContato} />
    </div>
  );
};

export default Contatos;
