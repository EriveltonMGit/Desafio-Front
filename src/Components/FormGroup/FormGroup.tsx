// IMPORT CSS
import Switch from "../Switch/Swhitch";
import "./FormGroup.css";

function FormGroup_1() {
  return (
    <>
      {/* AQUI FICA O SWITCH */}
      <div className="form_switch_cadastro">
        <p>O tabalhador está ativo ou inativo?</p>
        <Switch />
      </div>
      {/* AQUI FICA O 1 FORM GROUP  */}
      <div className="form_group">
        <div className="card_group_form">
          <div className="div-inputs">
            <label htmlFor="nome"><p>Nome</p></label>
            <input type="text" placeholder="Nome" id="nome" />
          </div>
          <div className="div-inputs">
            <label htmlFor="cpf"><p>CPF</p></label>
            <input type="number" placeholder="Cpf" id="cpf" />
          </div>
          <div className="div-inputs">
            <label htmlFor="rg"><p>RG</p></label>
            <input type="number" placeholder="N° do RG" id="rg" />
          </div>
        </div>
        {/* aqui fica o segundo grupo do primeiro */}
        <div className="card_group_form">
        <div className="container-radio-group">
            <label htmlFor="sexo"><p>Sexo</p></label>
            <div className="radio-group">
              <label>
                <input type="radio" id="masculino" name="sexo" value="masculino" />
                Masculino
              </label>
              <label>
                <input type="radio" id="feminino" name="sexo" value="feminino" />
                Feminino
              </label>
            </div>
          </div>
          <div className="nascimento div-inputs">
            <label htmlFor="data_nasc" id="data_nasc">
             <p> Data de Nascimento</p>
            </label>
            <input type="number" placeholder="00/00/0000" />
          </div>

          <div id="cargo">
            <select name="" className="select">
              <option value="">Selecione o Cargo</option>
              <option value="cargo1" className="opc">
                Cargo 1
              </option>
              <option value="cargo2" className="opc">
                Cargo 2
              </option>
              <option value="cargo3" className="opc">
                Cargo 3
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormGroup_1;
