import { LoginPage } from 'app/pages/loginPage';
import type { Route } from './+types/login';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'ログイン画面' },
    { name: 'description', content: 'ログインしてください' },
  ];
}

export default function Login() {
  return <LoginPage />;
}
