import { User } from '@models/UserModel'
import { apiUrl } from '@services/envValueService'

export function useAuth() {
  async function login(user: User) {
    const response = await fetch(`${apiUrl}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
    localStorage.setItem('jwt', JSON.stringify(response));
  }
  async function register(user: User) {
    const response = await fetch(`${apiUrl}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
    localStorage.setItem('jwt', JSON.stringify(response));
  }
  async function logout() {
    localStorage.removeItem('jwt');
  }
  return {
    login,
    register,
    logout
  };
}