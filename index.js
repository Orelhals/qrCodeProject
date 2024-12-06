const btnGerar = document.getElementById("btnGerar")
btnGerar.addEventListener('click', gerarCodigo)

const btnFechar = document.getElementById("btnFechar")
btnFechar.addEventListener('click', fecharModal)

const modal = document.getElementById("modal")

function gerarCodigo() {
    const texto = document.getElementById("texto").value;
    if (!texto) return;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: texto, // O texto ou URL a ser codificado no QR Code
        width: 128, // Largura do QR Code
        height: 128, // Altura do QR Code
        colorDark : "#111729", // Cor das partes escuras do QR Code
        colorLight : "#ffffff", // Cor de fundo (branco)
        correctLevel : QRCode.CorrectLevel.H // Nível de correção de erro (pode ser L, M, Q, H)
    });

    modal.style.display = "flex";
}

function fecharModal() {
    modal.style.display = "none";
}