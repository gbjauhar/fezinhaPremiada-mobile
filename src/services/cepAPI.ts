import axios from 'axios';

export async function checkCEP(cep: string) {
  return axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(answer => {
      if (answer.data.erro) {
        return {success: false};
      }
      return {data: answer.data, success: true};
    })
    .catch(error => error);
}
