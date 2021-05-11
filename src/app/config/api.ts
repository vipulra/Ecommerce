import { environment } from 'src/environments/environment'

export const baseUrl = environment.production ? "https://www.google.com/":"https://609265ea85ff510017212a0d.mockapi.io";
export const productUrl = baseUrl + '/product/'
export const cartUrl = baseUrl + '/cart/';
