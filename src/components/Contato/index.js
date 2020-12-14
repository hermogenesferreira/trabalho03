import React from 'react';

const Contato = ({ contato, removerContato }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <tbody>
          <tr>
            <td>
              Nome: {contato.nome} {contato.sobrenome}
            </td>
            <td>Cel: {contato.celular}</td>
            <td>Empresa: {contato.empresa}</td>
            <td>
              <a
                href="#"
                className="badge bg-danger"
                onClick={() => removerContato(contato.id)}
              >
                Excluir
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contato;
