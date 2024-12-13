/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Upload } from "antd";
import { UploadChangeParam, RcFile } from "antd/es/upload";
import { Moment } from "moment"; // Se estiver utilizando moment.js para datas
import Switch from "../Switch/Swhitch";
// IMPORT CSS
import "./AntDesingForm.css";

const { Option } = Select;

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
}

const InstallerForm = () => {
  // FUNÇAO PARA SALVAR O ESTADO DO SWITCH
  const [isSelected, setIsSelected] = useState<boolean>(false); // Estado para o Switch

  const toggleSwitch = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSelected((prevState) => !prevState); // Alterna o estado do Switch
  };

  // Função para tratar a entrada do CPF, aceitando apenas números
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Substitui qualquer caractere que não seja número
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  const handleFileChange = (info: UploadChangeParam) => {
    console.log("File selected: ", info.file);
  };

  const onFinish = async (values: FormData) => {
    // Preparando os dados para envio
    const formData = {
      estado: isSelected, // Passa o estado do Switch
      nome: values.nome,
      cpf: values.cpf,
      rg: values.rg,
      sexo: values.sexo,
      dataNascimento: values.dataNascimento.format("DD/MM/YYYY"),
      cargo: values.cargo,
      epi: values.epi,
      atividade: values.atividade,
      numeroEpi: values.numeroEpi,
      ca: values.ca,
      files: values.files, // Não inclui o campo 'id'
    };

    //FUNÇÃO PARA ENVIAR OS DADOS PARA O JSCON SERVER VIA POST
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
  const [atividades, setAtividades] = useState([{ id: 1 }]); // Inicializado com um ID fixo

  // Função para adicionar um novo card
  const adicionarAtividade = () => {
    const novoId = atividades.length + 1; // Usa um contador fixo para IDs
    setAtividades([...atividades, { id: novoId }]);
  };
  // FUNÇÃO PARA ADIONCAR O CAMPO DE EPI

  // Função para adicionar um novo card
  const addNewEpi = () => {
    const newEpi = document.getElementById(`novaEpi`);
    if (newEpi) {
      newEpi.style.display = "flex";
    }
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
          <div className="swith-func">
            <label htmlFor="swith">O trabalhador está ativo ou inativo?</label>
            <Switch isSelected={isSelected} onToggle={toggleSwitch} />
          </div>

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
                  <label htmlFor="masculino">
                    <input
                      type="radio"
                      id="masculino"
                      name="sexo"
                      value="masculino"
                      required
                    />
                    Masculino
                  </label>
                  <label htmlFor="feminino">
                    <input
                      type="radio"
                      id="feminino"
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
                  <div key={atividade.id} className="container-atividade-epi">
                    <div className="selected_atividade">
                      <Form.Item
                        label="Selecione Atividade"
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
                    {/* div 2 */}
                    <div className="area-numero-ca">
                      <div className="card-epi">
                        <Form.Item className="input-epi"
                          label="Informe o número do EPI"
                          name={`numeroEpi_${atividade.id}`}
                          rules={[
                            {
                              // required: true,
                              message: "Por favor, insira o número do EPI!",
                            },
                          ]}
                        >
                          <Input placeholder="Informe o número do EPI" />
                        </Form.Item>
                      </div>
                      <div className="card-epi" id="novaEpi">
                        <Form.Item  className="input-epi"
                          label="Informe o número do CA"
                          name={`ca_${atividade.id}`}
                          rules={[
                            {
                              // required: true,
                              message: "Por favor, insira o número do CA!",
                            },
                          ]}
                        >
                          <Input placeholder="Informe o número do CA" />
                        </Form.Item>
                      </div>
                      {/* epi oculta */}

                      <div className="card-btn">
                        <Form.Item className="card">
                          <button
                            type="button"
                            className="ant-btn ant-btn-dashed"
                            onClick={addNewEpi}
                          >
                            Adicionar EPI
                          </button>
                        </Form.Item>
                      </div>
                    </div>
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
            <Form.Item
              className="title_saude"
              label="Adicione Atestado de saúde (opcional)"
            ></Form.Item>

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
              {/* Botão personalizado para seleção de arquivo */}
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
