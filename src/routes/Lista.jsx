import { useState } from "react";

export default function Lista() {
  const [formData, setFormData] = useState({
    item: "",
    estoque: "",
  });

  const [itens, setItens] = useState([]);

  const enviaForm = (event) => {
    event.preventDefault();

    if (formData.item === "") {
      alert("Informe um item");
      return;
    }

    setItens([...itens, formData]);
  };

  return (
    <form action="#" method="post" onSubmit={enviaForm}>
      <fieldset>
        <div className="form-group mb-3">
          <label htmlFor="item">Informe o item:</label>
          <input
            type="text"
            className="form-control"
            id="item"
            value={formData.item}
            onChange={(event) =>
              setFormData({ ...formData, item: event.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-success">
          Adicionar
        </button>
      </fieldset>

      <ul>
        <label htmlFor="item">Seu carrinho</label>
        {itens.map((item) => (
          <li>{item.item}</li>
        ))}
      </ul>
    </form>
  );
}
