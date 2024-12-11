import "./FormGroup_2.css";

function FormGroup_2() {
  // Função para adicionar um novo card
  function addNewCard(e: { preventDefault: () => void }) {
    const newCard = document.getElementById(`newCard`);
    e.preventDefault();
    if (newCard) {
      newCard.style.display = "flex";
    }
  }
  // FUNÇÃO PARA ADICIONAR UM NO CAMPO DE EPI
  function addNewEpi(e: { preventDefault: () => void }) {
    e.preventDefault();
    const epiOculta = document.getElementById(`epi-oculta`);
    const spanEpi = document.getElementById(`span-epi`);
    if (epiOculta) {
      epiOculta.style.display = "flex";
    }
    if (spanEpi) {
      spanEpi.innerHTML = "Excluir EPI";
    }
  }

  // FUNÇÃO PARA FECHAR OS CARDS ABAIXO DE EPIS
  function epiverification() {
    const funcVerification = document.getElementById('func_verification');
    const funcVerification2 = document.getElementById('func_verification_2');
    const ContainerHeight = document.getElementById('form-container');
  // FUÇÃO PARA ESCONDER O CARD DE EPI - GROUP 2
    if (funcVerification) {

      funcVerification.style.display = funcVerification.style.display === 'none' ? 'flex' : 'none';
    }
  // FUNÇÃO PARA ESCONDER O CARD DE SELECINAR ALGUM AQUIVO - ULTIMO CARD DO FORMULARIO - GROUP - 3
    if (funcVerification2) {
      funcVerification2.style.display = funcVerification2.style.display === 'none' ? 'flex' : 'none';
    }
  
  // FUNÇÃO PARA DIMINIUR O CONTAINER PRINCIPAL DO FORMULÁRIO
    if (ContainerHeight) {
      if (ContainerHeight.style.height === '630px') {
        ContainerHeight.style.height = '1032px'; // altura padrão
      } else {
        ContainerHeight.style.height = '630px'; // altura reduzida
        ContainerHeight.style.paddingTop = '100px'
      }
    }
  }
  return (
    <>
      <section className="group_container_epis">
        {/* AQUI FICA O SWITCH */}
        <div className="form_switch_cadastro_epis">
          <p>Quais EPIs o trabalhador usa na atividade?</p>
          <div>
            <input type="checkbox" name="" id="" onClick={epiverification} />{" "}
            <p>O trabalhador não usa EPI.</p>
          </div>
        </div>
        {/* AQUI FICA O 2 FORM GROUP */}
        <main className="card_atividade" id="func_verification_2">
          <div className="fomr_epi">
            <div className="add_atividade">
              <label htmlFor="atividade">Atividade</label>
              <select name="atividade" id="atividade">
                <option value="">Calçado de Segurança</option>
                <option value="">Capacete</option>
                <option value="">EPIs</option>
                <option value="">Outros</option>
              </select>
            </div>

            {/* ADICIONAR EPI */}
            <div className="add_epi">
              <div className="epi">
                <label htmlFor="">Selecione o EPI:</label>
                <select name="" id="">
                  <option value="">Calçado de segurança</option>
                  <option value="">Luvas</option>
                  <option value="">Outros</option>
                </select>
              </div>

              {/*  */}
              <div className="info_ca">
                <label htmlFor="number_ca">Informe o número do CA:</label>
                <input
                  type="number"
                  name="number_ca"
                  id="number_ca"
                  placeholder="000000"
                />
              </div>
              {/*  */}
              <div className="add-epi-button">
                <button className="btn_add_epi_funcionario" onClick={addNewEpi}>
                  <span id="span-epi">Adicionar EPI</span>
                </button>
              </div>
            </div>
            {/* ADD EPI OCUTA  */}
            <div className="add_epi " id="epi-oculta">
              <div className="epi">
                <label htmlFor="">Selecione o EPI:</label>
                <select name="" id="">
                  <option value="">Calçado de segurança</option>
                  <option value="">Luvas</option>
                  <option value="">Outros</option>
                </select>
              </div>

              {/*  */}
              <div className="info_ca">
                <label htmlFor="number_ca">Informe o número do CA:</label>
                <input
                  type="number"
                  name="number_ca"
                  id="number_ca"
                  placeholder="000000"
                />
              </div>
              {/*  */}
              <div className="add-epi-button">
                <button className="btn_add_epi_funcionario">
                  Adicionar EPI
                </button>
              </div>
            </div>
          </div>
          {/* CARD OCUTO */}
          <div className="fomr_epi" id="newCard">
            <div className="add_atividade">
              <label htmlFor="atividade">Atividade</label>
              <select name="atividade" id="atividade">
                <option value="">Calçado de Segurança</option>
                <option value="">Capacete</option>
                <option value="">EPIs</option>
                <option value="">Outros</option>
              </select>
            </div>

            {/* ADICIONAR EPI */}
            <div className="add_epi">
              <div className="epi">
                <label htmlFor="">Selecione o EPI:</label>
                <select name="" id="">
                  <option value="">Calçado de segurança</option>
                  <option value="">Luvas</option>
                  <option value="">Outros</option>
                </select>
              </div>
              {/*  */}
              <div className="info_ca">
                <label htmlFor="number_ca">Informe o número do CA:</label>
                <input
                  type="number"
                  name="number_ca"
                  id="number_ca"
                  placeholder="000000"
                />
              </div>
              {/*  */}
              <div className="add-epi-button">
                <p className="btn_add_epi_funcionario">Adicionar EPI</p>
              </div>
            </div>
          </div>
          {/* CARD OCUTO */}
          <div className="fomr_epi" id="newCard">
            <div className="add_atividade">
              <label htmlFor="atividade">Atividade</label>
              <select name="atividade" id="atividade">
                <option value="">Calçado de Segurança</option>
                <option value="">Capacete</option>
                <option value="">EPIs</option>
                <option value="">Outros</option>
              </select>
            </div>

            {/* ADICIONAR EPI */}
            <div className="add_epi">
              <div className="epi">
                <label htmlFor="">Selecione o EPI:</label>
                <select name="" id="">
                  <option value="">Calçado de segurança</option>
                  <option value="">Luvas</option>
                  <option value="">Outros</option>
                </select>
              </div>
              {/*  */}
              <div className="info_ca">
                <label htmlFor="number_ca">Informe o número do CA:</label>
                <input
                  type="number"
                  name="number_ca"
                  id="number_ca"
                  placeholder="000000"
                />
              </div>
              {/*  */}
              <div className="add-epi-button">
                <p className="btn_add_epi_funcionario">Adicionar EPI</p>
              </div>
            </div>
          </div>
          <button className="add-to-form-epis" onClick={addNewCard}>
            Adicionar outra atividade
          </button>
        </main>
      </section>
    </>
  );
}

export default FormGroup_2;
