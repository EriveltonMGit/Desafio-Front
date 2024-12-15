/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Upload, Switch } from "antd";
import { UploadChangeParam, RcFile } from "antd/es/upload";
import { Moment } from "moment"; // Se estiver utilizando moment.js para datas
// import Switch from "../../Components/Switch/Switch";
// IMPORT CSS
import "./AntDesingForm.css";

const { Option } = Select;
// INTERFACE DE ATIVIDADE EPI
interface Epi {
  id: number;
  numeroEpi: string;
  codigoCa: string;
}
// INTERFACE DE ATIVIDADE EPI
interface Atividade {
  id: number;
  epis: Epi[];
}
// INTEFACE DO FOMR
interface FormData {
  estado: boolean;
  nome: string;
  cpf: string;
  rg: string;
  sexo: string;
  dataNascimento: Moment;
  cargo: string;
  epi: boolean;
  atividade: string;
  numeroEpi: string;
  ca: string;
  files: RcFile[];
  [key: string]: string | boolean | Moment | RcFile[];
}
const InstallerForm = () => {
 

  // Função para tratar a entrada do CPF, aceitando apenas números
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Substitui qualquer caractere que não seja número
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  const handleFileChange = (info: UploadChangeParam) => {
    console.log("File selected: ", info.file);
  };
  // INTERFACE DO FORMULARIO
  const onFinish = async (values: FormData) => {
    // Preparando os dados para envio
    const formData = {
      nome: values.nome,
      cpf: values.cpf,
      rg: values.rg,
      sexo: values.sexo,
      dataNascimento: values.dataNascimento.format("DD/MM/YYYY"),
      cargo: values.cargo,
      epi: values.epi,
      atividade: values.atividade,
      // Coletando dados de EPIs
      atividades: atividades.map((atividade) => {
        const epis = atividade.epis.map((epi) => ({
          numeroEpi: values[`numeroEpi_${atividade.id}_${epi.id}`], // Captura o numero do EPI
          codigoCa: values[`codigoCa_${atividade.id}_${epi.id}`], // Captura o código do CA
        }));
        return {
          atividadeId: atividade.id,
          epis,
        };
      }),
      files: values.files, // Não inclui o campo 'id'
    };
 // Salvando os dados no Local Storage
//  try {
//   localStorage.setItem("formData", JSON.stringify(formData)); 
//   alert("Dados salvos no Local Storage com sucesso!");
// } catch (error) {
//   console.error("Erro ao salvar no Local Storage:", error);
//   alert("Erro ao salvar os dados localmente.");
// }
    // FUNÇÃO PARA ENVIAR OS DADOS PARA O JSON SERVER VIA POST
    try {
      const response = await fetch("http://localhost:3001/funcionarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar dados");
      }

      alert("Funcionário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao salvar dados. Tente novamente.");
    }
  };

  // Estado para armazenar os cards


  // Função para adicionar um novo card
  const [atividades, setAtividades] = useState<Atividade[]>([
    { id: 1, epis: [{ id: 1, numeroEpi: "", codigoCa: "" }] },
  ]);

  // Função para adicionar um novo EPI
  const addNewEpi = (atividadeId: number) => {
    setAtividades((prevAtividades) =>
      prevAtividades.map((atividade) => {
        if (atividade.id === atividadeId) {
          const novosEpis = atividade.epis || [];
          return {
            ...atividade,
            epis: [
              ...novosEpis,
              { id: novosEpis.length + 1, numeroEpi: "", codigoCa: "" },
            ],
          };
        }

        return atividade;
      })
    );
    // Chama a função para aumentar o container do EPI
    heightAuto(atividadeId);
  };

  // Função para ajustar a altura do container do EPI
  function heightAuto(atividadeId: number) {
    const aumentContainer = document.getElementById(
      `container-atividade-epi-${atividadeId}`
    );
    if (aumentContainer) {
      aumentContainer.style.height = "auto";
    }
  }

  // Função para remover um EPI
  // const removeEpi = (atividadeId: number, epiId: number) => {
  //   setAtividades((prevAtividades) =>
  //     prevAtividades.map((atividade) => {
  //       if (atividade.id === atividadeId) {
  //         return {
  //           ...atividade,
  //           epis: atividade.epis.filter((epi) => epi.id !== epiId),
  //         };
  //       }
  //       return atividade;
  //     })
  //   );
  // };
  // Função para adicionar uma nova atividade
  const adicionarAtividade = () => {
    const novaAtividade = {
      id: atividades.length + 1,
      epis: [{ id: 1, numeroEpi: "", codigoCa: "" }],
    };
    setAtividades([...atividades, novaAtividade]);
  };

  return (
    <section className="form-group">
      {/* Formulário com campos de entrada e rótulos */}
      <Form layout="vertical" className="vertical-form" onFinish={onFinish}>
        <div
          className="container-form"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* PRIMEIRO CARD DO FORM ONDE FICA O SWITCH */}
          <section className="swith-func">
            <label>O trabalhador está ativo ou inativo?</label>
            {/* <Switch isSelected={isSelected} onToggle={toggleSwitch} /> */}
            <Switch className="custom-switch"
              checkedChildren="Ativo"
              unCheckedChildren="Inativo"
              defaultChecked />
          </section>

          {/* Primeira Div - Nome, CPF, RG */}
          <main className="container_group_1">
            <div className="primary-group">
              <Form.Item
                label="Nome"
                name="nome"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira o nome do funcionário!",
                  },
                ]}
              >
                <Input placeholder="Digite o nome do funcionário" />
              </Form.Item>
              <Form.Item
                label="CPF"
                name="cpf"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira o CPF do funcionário!",
                  },
                ]}
              >
                <Input
                  placeholder="Digite o CPF do funcionário"
                  maxLength={14} // Limite de caracteres para o CPF
                  onChange={handleCpfChange} // Chama a função para validar a entrada
                />
              </Form.Item>
              <Form.Item 
                label="RG"
                name="rg"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira o RG do funcionário!",
                  },
                ]}
              >
                <Input
                  placeholder="Digite o RG do funcionário"
                  maxLength={12} // Limite de caracteres para o RG
                  pattern="\d*" // Permite apenas números
                />
              </Form.Item>
            </div>

            {/* Segunda Div - Sexo, Data de Nascimento, Cargo */}
            <div className="primary-group">
              <div className="sexo">
                <label htmlFor="sexo" className="form-label">
                  Sexo <span style={{ color: "red" }}>*</span>
                </label>
                <div className="form-radio-group">
                  <label htmlFor="masculino" className="check_label">
                    <input
                      type="radio"
                      id="masculino" // O id agora está correto
                      name="sexo"
                      value="masculino"
                      required
                    />
                    Masculino
                  </label>
                  <label htmlFor="feminino" className="check_label">
                    <input
                      type="radio"
                      id="feminino" // O id agora está correto
                      name="sexo"
                      value="feminino"
                      required
                    />
                    Feminino
                  </label>
                </div>
              </div>
              <Form.Item
                className="datanasc"
                label="Data de Nascimento"
                name="dataNascimento"
                rules={[
                  {
                    required: true,
                    message:
                      "Por favor, selecione a data de nascimento do funcionário!",
                  },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  format="DD/MM/YYYY"
                  placeholder="Selecione a data de nascimento do funcionário"
                />
              </Form.Item>
              <Form.Item 
                label="Cargo"
                name="cargo"
                rules={[
                  {
                    required: true,
                    message: "Por favor, selecione o cargo do funcionário!",
                  },
                ]}
              >
                <Select placeholder="Selecione seu cargo" className="cargo">
                  <Option value="developer">Desenvolvedor</Option>
                  <Option value="designer">Designer</Option>
                  <Option value="manager">Gerente</Option>
                </Select>
              </Form.Item>
            </div>
          </main>
          {/* AQUI FICA O SEGUNDO GROUP CARD */}
          <main className="container_group_2">
            {/* { EPIs */}
            <div className="second-group">
              <div className="checkbox-epi">
                <label
                  htmlFor="checkbox-epi"
                  style={{ display: "block", marginBottom: "8px" }}
                >
                  <p>Quais EPIs o trabalhador usa na atividade?</p>
                </label>
                <div>
                  <input type="checkbox" id="checkbox-epi" />
                  <p>O trabalhador não usa EPI</p>
                </div>
              </div>
            </div>

            {/* Segunda Div - Atividade e CA */}
            <div className="second-group-2">
              <div className="area-atividade-selected">
                {atividades.map((atividade) => (
                  <div
                    key={atividade.id}
                    className="container-atividade-epi"
                    id={`container-atividade-epi-${atividade.id}`}
                  >
                    <div className="selected_atividade">
                      <Form.Item
                        label={`Atividade ${atividade.id}`}
                        name={`atividade_${atividade.id}`}
                        rules={[
                          {
                            required: true,
                            message: "Por favor, selecione a atividade!",
                          },
                        ]}
                      >
                        <Select placeholder="Selecione a atividade">
                          <Option value="seguranca">
                            Calçados de Segurança
                          </Option>
                          <Option value="capacete">Capacete</Option>
                          <Option value="luvas">Luvas</Option>
                          <Option value="outros">Outros</Option>
                        </Select>
                      </Form.Item>
                    </div>

                    {atividade.epis.map((epi) => (
                      <div key={epi.id} className="area-numero-ca">
                        <div className="card-epi">
                          <Form.Item
                            className="input-epi"
                            label={`Número do EPI ${epi.id}`}
                            name={`numeroEpi_${atividade.id}_${epi.id}`}
                            rules={[
                              {
                                required: true,
                                message: "Por favor, insira o número do EPI!",
                              },
                            ]}
                          >
                            <Input placeholder="Informe o número do EPI" />
                          </Form.Item>
                        </div>
                        <div className="card-epi">
                          <Form.Item
                            className="input-ca"
                            label={`Código do CA ${epi.id}`}
                            name={`codigoCa_${atividade.id}_${epi.id}`}
                            rules={[
                              {
                                required: true,
                                message: "Por favor, insira o código do CA!",
                              },
                            ]}
                          >
                            <Input placeholder="Informe o código do CA" />
                          </Form.Item>
                        </div>
                        <div className="card-btn">
                          <div className="card">
                            <button
                              className="ant-btn-dashed"
                              type="button"
                              onClick={() => addNewEpi(atividade.id)}
                            >
                              Adicionar EPI
                            </button>
                          </div>
                        </div>

                        {/* <button
                          className="card-btn"
                          type="button"
                          onClick={() => removeEpi(atividade.id, epi.id)}
                        >
                          Remover EPI
                        </button> */}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <button
                className="add-atividade-epi"
                type="button"
                onClick={adicionarAtividade}
              >
                <p>Adicionar nova atividade</p>
              </button>
            </div>
          </main>

          {/* AQUI FICA O FORM DE SELECIONAR ARQUIVO */}
          <main className="container_group_3">
            <div className="title_saude">
              <p>Adicione Atestado de saúde (opcional)</p>
            </div>

            <Form.Item
              className="up_arquivo-1"
              name="file1"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
            >
              <Upload
                className="exibi-documento"
                beforeUpload={() => false}
                onChange={handleFileChange}
                showUploadList={false}
              >
                <div>
                  <p>Documento 1.png</p>
                  <img src="/text-icone.webp" alt="" />
                </div>
              </Upload>
            </Form.Item>

            {/* Segundo Input com Texto */}

            <div className="selected-arquivo">
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <label htmlFor="fileInput" className="custom-label">
                Selecionar Arquivo
              </label>
            </div>
          </main>
        </div>
        <button className="salvarFomr" type="submit">
          Salvar
        </button>
      </Form>
    </section>
  );
};

export default InstallerForm;
