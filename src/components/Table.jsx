import "../assets/css/Table.css";
import { DataContext, DataContextProvider } from "../context/dataContext";
import React, { useContext, useEffect, useState, useRef } from "react";
import closeBtn from "../assets/images/close.svg";
import pdfImage from "../assets/images/pdfImage.svg";
import csvImage from "../assets/images/csvImage.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Table = () => {
  const person = useContext(DataContext);
  const date = new Date();
  const year = date.getFullYear();
  const body = document.body;
  const [isDownloading, setIsDownloading] = useState(false);
  const [tableReady, setTable] = useState(false);

  useEffect(() => {
    if (person.dietData !== null) {
      setTable(true);
      body.classList.add("modalOpen");
    }
  }, [person]);

  const closeTable = () => {
    setTable(false);
    body.classList.remove("modalOpen");
  };

  const pdfRef = useRef();

  const downloadPDF = () => {
    setIsDownloading(true);
    const input = pdfRef.current;

    input.style.height = `1080px`;
    input.style.width = `1980px`;

    const dietDescriptionTitle = input.querySelector(".dietDescriptionTitle");
    dietDescriptionTitle.style.fontSize = "18px";

    const logoDietTable = input.querySelector(".logo");
    logoDietTable.style.fontSize = "1.7rem";

    const buttonTable = input.querySelector(".closeBtn");
    buttonTable.style.display = "none";

    const tableContainer = input.querySelector(".tableContainer");
    tableContainer.style.width = "90%";

    const suggestionTitle = input.querySelector(".suggestionTitle");
    suggestionTitle.style.fontSize = "18px";

    const suggestionContent = input.querySelector(".suggestionContent");
    suggestionContent.style.fontSize = "16px";

    const tdElements = input.querySelectorAll("table#tableDiet tbody tr td");
    tdElements.forEach((td) => {
      td.style.padding = "10px";
      td.style.fontSize = "14px";
    });
    const thElements = input.querySelectorAll("table#tableDiet thead tr th");
    thElements.forEach((th) => {
      th.style.padding = "10px";
      th.style.fontSize = "14px";
    });
    const dietDescriptionContentElements = input.querySelectorAll(
      ".dietDescriptionContent"
    );
    dietDescriptionContentElements.forEach((content) => {
      content.style.fontSize = "16px";
    });

    const tableTitle = input.querySelector(".tableTitle");
    tableTitle.style.fontSize = "25px";

    const dietDownload = input.querySelector(".dietDownload");
    dietDownload.style.display = "none";

    const tableElement = input.querySelector(".tableResponsiveContainer");
    tableElement.style.overflow = "visible";
    tableElement.style.maxHeight = "1000px";
    tableElement.style.border = "none";

    html2canvas(input).then((canvas) => {
      input.style.height = "";
      input.style.width = "";
      dietDownload.style.display = "";
      tableTitle.style.fontSize = "";
      tableElement.style.overflow = "";
      tableElement.style.maxHeight = "";
      tableElement.style.border = "";
      buttonTable.style.display = "";
      logoDietTable.style.fontSize = "";
      suggestionTitle.style.fontSize = "14px";
      suggestionContent.style.fontSize = "14px";

      if (window.innerWidth < 1000) {
        tableContainer.style.width = "90%";
        tdElements.forEach((td) => {
          td.style.padding = "0px";
          td.style.fontSize = "12px";
        });
        dietDescriptionContentElements.forEach((content) => {
          content.style.fontSize = "14px";
        });
        dietDescriptionTitle.style.fontSize = "14px";
      } else {
        tableContainer.style.width = "70%";
        const dietDescriptionTitle = input.querySelector(
          ".dietDescriptionTitle"
        );
        dietDescriptionTitle.style.fontSize = "18px";
      }

      const imgData = canvas.toDataURL("image/png");
      const componentWidth = 1920;
      const componentHeight = 1080;

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [componentWidth, componentHeight],
      });

      pdf.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      pdf.save("diet.pdf");
      setIsDownloading(false);
    });
  };

  return (
    <div>
      {tableReady ? (
        <div className="modalDietTable" ref={pdfRef}>
          <div className="tableContainer" id="tablePdf">
            <div className="tableHeader">
              <div className="logoContainer">
                <h1 className="logo">NUTRI.IO</h1>
                <button className="closeTableBtn" onClick={closeTable}>
                  <img src={closeBtn} alt="" className="closeBtn" />
                </button>
              </div>

              <h2 className="tableTitle">
                Olá, {person.dietData.Nome}! Aqui está sua dieta com objetivo de{" "}
                {person.dietData.Objetivo}. Espero que goste!{" "}
              </h2>
            </div>

            <div className="tableResponsiveContainer">
              <table id="tableDiet">
                <thead>
                  <tr>
                    <th>Dia</th>
                    <th>Café da manhã</th>
                    <th>Lanche da manhã</th>
                    <th>Almoço</th>
                    <th>Lanche da tarde</th>
                    <th>Jantar</th>
                    <th>Ceia</th>
                  </tr>
                </thead>
                <tbody>
                  {person.dietData.Refeicoes.map((refeicao, index) => {
                    return (
                      <tr key={index}>
                        <td className="dayColumn">{refeicao.Dia}</td>
                        <td className="snackCell">{refeicao.CafeDaManha}</td>
                        <td className="snackCell">{refeicao.LancheDaManha}</td>
                        <td className="snackCell">{refeicao.Almoco}</td>
                        <td className="snackCell">{refeicao.LancheDaTarde}</td>
                        <td className="snackCell">{refeicao.Jantar}</td>
                        <td className="snackCell">{refeicao.Ceia}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="descriptionContainer">
              <div className="dietDescription">
                <h3 className="dietDescriptionTitle">
                  essa dieta contém aproximadamente :
                </h3>
                <div>
                  <p className="dietDescriptionContent">
                    Calorias Diárias: {person.dietData.IngestaoDiaria.Calorias}
                  </p>
                  <p className="dietDescriptionContent">
                    Proteinas Diarias: {person.dietData.IngestaoDiaria.Proteina}
                  </p>
                  <p className="dietDescriptionContent">
                    Carboidratos Diários:{" "}
                    {person.dietData.IngestaoDiaria.Carboidratos}
                  </p>
                </div>
              </div>
              <div className="dietDownload">
                <h3 className="dietDescriptionTitle">
                  faça o download da dieta :
                </h3>
                <div className="tableBtnContainer">
                  <button className="tableButton" onClick={downloadPDF}>
                    PDF <img className="tableImgBtn" src={pdfImage} alt="" />
                  </button>
                  <button className="tableButton">
                    CSV <img className="tableImgBtn" src={csvImage} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="suggestionContainer">
              <h3 className="suggestionTitle">Sugestão :</h3>

              <div className="suggestionContentContainer">
                <h3 className="suggestionContent">
                  {person.dietData.InformacoesAdicionais}
                </h3>
              </div>
            </div>

            <footer>
              <h3 className="copyright">copyright &copy; nutri.io {year}</h3>
            </footer>
          </div>
        </div>
      ) : (
        <></>
      )}
      {isDownloading && (
        <div className="modalDietTable">
          <div className="tableDownloadAnimationContainer">
            <div class="lds-dual-ring"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
