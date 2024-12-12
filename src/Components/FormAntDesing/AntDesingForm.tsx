/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Form, Input, Select, DatePicker, Upload } from "antd";
import { UploadChangeParam } from "antd/es/upload";
import Switch from "../Switch/Swhitch";
// IMPORT CSS
import "./AntDesingForm.css";

const { Option } = Select;

const InstallerForm = () => {
  // Função para tratar a entrada do CPF, aceitando apenas números
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Substitui qualquer caractere que não seja número
    e.target.value = e.target.value.replace(/\D/g, "");
  };
  const handleFileChange = (info: UploadChangeParam) => {
    console.log("File selected: ", info.file);
  };

  return (
    <div className="form-group">
      {/* Formulário com campos de entrada e rótulos */}
      <Form layout="vertical">
        <div
          className="container-form"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* PRIMEITO CARD DO FORM ONDE FICA O SWITCH */}
          <div className="swith-func">
            <label htmlFor="">O trabalhador está ativo ou inativo?</label>

            <Switch />
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
                <span className="error-message">
                  {/* Aqui você pode mostrar mensagens de erro manualmente */}
                </span>
              </div>
              <Form.Item
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
                <Select placeholder="Selecione seu cargo">
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
              {/* Novo Campo - EPIs */}
              <div className="checkbox-epi">
                <label
                  htmlFor="checkbox-epi"
                  style={{ display: "block", marginBottom: "8px" }}
                >
               <p>   Quais EPIs o trabalhador usa na atividade?</p>
                </label>
                <div>
                <input type="checkbox" id="checkbox-epi" />
                <p>O trabalhador não usa EPI</p>
                </div>
  
            
              </div>
            </div>

            {/* Segunda Div - Atividade e CA */}
            <div className="second-group-2">
              {/* Novo Campo - Atividade e CA */}
              <div className="area-atividade-selected">
                <div className="container-atividade-epi">
                  <div className="selected_atividade">
                    <Form.Item
                      label="Selecione Atividade"
                      name="atividade"
                      rules={[
                        {
                          required: true,
                          message: "Por favor, selecione a atividade!",
                        },
                      ]}
                    >
                      <Select placeholder="Selecione a atividade">
                        <Option value="seguranca">Calçados de Segurança</Option>
                        <Option value="capacete">Capacete</Option>
                        <Option value="luvas">Luvas</Option>
                        <Option value="outros">Outros</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  {/* div 2 */}
                  <div className="area-numero-ca">
                    <div className="card-epi">
                      <Form.Item
                        label="Informe o número do EPI"
                        name="numeroEpi"
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
                        label="Informe o número do CA"
                        name="ca"
                        rules={[
                          {
                            required: true,
                            message: "Por favor, insira o número do CA!",
                          },
                        ]}
                      >
                        <Input placeholder="Informe o número do CA" />
                      </Form.Item>
                    </div>
                    <div className="card-btn">
                      <Form.Item className="card">
                        <button
                          type="button"
                          className="ant-btn ant-btn-dashed"
                        >
                          Adicionar EPI
                        </button>
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
              <button className="add-atividade-epi">
                <p>Adicionar nova atividade</p>
              </button>
            </div>
          </main>
          {/* AQUI FICA O FORM DE SELECIONAR ARQUIVO */}
          <main className="container_group_3">
            <Form.Item
              className="title_saude"
              label="Adicione Atestato de saúde (opcional)"
            >
              {" "}
            </Form.Item>

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
            <Form.Item
              name="file2"
              className="selected-arquivo"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
            >
              <Upload
                beforeUpload={() => false}
                onChange={handleFileChange}
                showUploadList={false}
              >
                <button>Selecione o arquivo</button>
              </Upload>
            </Form.Item>
          </main>
        </div>
        <button className="salvarFomr">Salvar</button>
      </Form>
    </div>
  );
};

export default InstallerForm;
