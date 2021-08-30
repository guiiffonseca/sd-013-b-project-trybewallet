// Coloque aqui suas actions

export function ClickButtonLogin(valorRecebido) {
  return (
    {
      type: 'CLICK_BUTTON_LOGIN',
      email: valorRecebido,
    }
  );
}
