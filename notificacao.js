// Pede permissão para mandar notificações assim que a página abre
if (Notification.permission === 'default') {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Permissão concedida!');
    }
  });
}

/*---------------------------------------- */
function enviarNotificacao() {
  const inputTitulo = document.getElementById("titulo_mensagem");
  const inputCorpo = document.getElementById("corpo");
  
  // Pegando os valores digitados nos inputs
  let titulo = inputTitulo.value;
  let corpo = inputCorpo.value;

  if (Notification.permission === 'granted') {
    // Configurações da notificação real do sistema
    const opcoes = {
      body: corpo, // Agora exibe o texto que você digitou no input corpo
      icon: 'https://flaticon.com' // Ícone válido para testes
    };
    
    // Dispara o alerta nativo do Windows / Celular / Mac
    new Notification(titulo, opcoes);
  } else {
    alert('Você precisa habilitar as notificações no navegador.');
  }
}
