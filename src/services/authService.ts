import { User } from '@models/UserModel'

export function useAuth() {
  async function login(user: User) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
  }
  async function register() {
    return {};
  }
  async function logout() {
    return {};
  }
  return {
    login
  };
}