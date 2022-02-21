import { client, checkError } from './services/client';

export function getUser() {
  return client.auth.session();

}

export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return window.location.href = './';
}

export async function addToWatchList(movie){
  const response = await client
    .from('movies')
    .insert([movie]);

  return checkError(response);
}

export async function getMovies() {
  const response = await client
    .from('movies')
    .select();

  return checkError(response);    
}

export async function getWatchList(id) {
  const response = await client
    .from('movies')
    .select()
    .order('id');
  
  

  return checkError(response);    
}
export async function watchMovie(id){
  const response = await client
    .from('movies')
    .update({ watched: true })
    .match({ id });

  return checkError(response);

}
