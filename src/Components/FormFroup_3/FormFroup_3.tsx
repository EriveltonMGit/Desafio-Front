/* eslint-disable @next/next/no-img-element */
// IMPORT CSS
import "./FormGroup_3.css";
import { useState } from "react";

function FormGroup_3() {
  const [fileInfo, setFileInfo] = useState("Nenhum arquivo selecionado");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setFileInfo(`Arquivo: ${file.name} | Tamanho: ${(file.size / 1024).toFixed(2)} KB`);
    } else {
      setFileInfo("");
    }
  };

  return (
    <section className="group_3" id="func_verification">
      <label>Selecione Atestado de Saúde (Opcional):</label>

      <div id="fileDisplay" className="file-display">
        <p>{fileInfo}</p>
        <label htmlFor="fileInput">
         <img src="/text-icone.webp" alt="Ícone de adicionar arquivo" />
        </label>
      </div>

      <div className="selecionarArquivo">
        {/* Input oculto */}
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          style={{ display: "none" }} // Esconde o input nativo
        />
        {/* Botão personalizado */}
        <label htmlFor="fileInput" className="custom-label">
          {/* {buttonText} */}
          Selecionar Arquivo
        </label>
      </div>
    </section>
  );
}

export default FormGroup_3;
