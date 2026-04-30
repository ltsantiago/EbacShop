//Login messages
const requiredUser = "Erro: Nome de usuário é obrigatório.";
const requiredPassword = "Erro: O campo da senha está vazio.";
const invalidEmail =
  "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.";

function formatProductName(productName) {
  return `“${productName}” foi adicionado no seu carrinho.`;
}
function formatLoginMessage(username) {
  return `Erro: O usuário ${username} não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.`;
}

// Register messages
const registerEmailRequired = "Erro: Informe um endereço de e-mail válido.";
const registerPasswordRequired = "Erro: Digite a senha da conta.";
const duplicateEmailRegister =
  "Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login.";

module.exports = {
  formatProductName,
  formatLoginMessage,
  requiredUser,
  requiredPassword,
  invalidEmail,
  registerEmailRequired,
  registerPasswordRequired,
  duplicateEmailRegister,
};
