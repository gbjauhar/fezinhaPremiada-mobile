import {api} from './api';

export async function postSignUp(form: Record<string, any>) {
  const body = {
    name: form.name,
    email: form.email,
    password: form.password,
    cel: form.cel,
    doccument: form.doccument,
  };
  return api
    .post('/users/seller', body)
    .then(answer => ({data: answer.data, success: true}))
    .catch(error => ({error, success: false}));
}

export async function postSignIn(form: Record<string, any>) {
  const body = {
    password: form.password,
    doccument: form.doccument,
  };
  return api
    .post('auth/doccument', body)
    .then(answer => ({data: answer.data, success: true}))
    .catch(error => ({data: error, success: false}));
}

export async function postUpdate(form: Record<string, any>) {
  return api
    .patch('sellers/address/my', form)
    .then(answer => ({data: answer.data, success: true}))
    .catch(error => ({data: error, success: false}));
}

export async function getProfile() {
  return api
    .get('/profile')
    .then(answer => ({data: answer.data, success: true}))
    .catch(error => ({data: error, success: false}));
}

export async function postRegister(form: Record<string, any>) {
  return api
    .post('/users', form)
    .then(answer => ({data: answer.data, success: true}))
    .catch(error => ({data: error, success: false}));
}

export async function patchSale(form: Record<string, any>) {
  return api
    .patch('/titles/buy', form)
    .then(answer => ({data: answer.data, success: true}))
    .catch(error => ({data: error, success: false}));
}
