export default function fetchMoedas() {
  return (dispatch) => {
    // dispatch(requestMoedas());
    fetch(API)
      .then((response) => response.json())
      .then((moedas) => {
        console.log(moedas);
        dispatch(receiveMoedas(moedas));
      });
  };
}
