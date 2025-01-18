import { GuestHeader } from 'app/components/header';
import { LoginForm } from 'app/feature/auth/components';

export function LoginPage() {
  return (
    <>
      <GuestHeader />
      <main className="flex w-full flex-col items-center justify-center py-8">
        <div className="w-1/2 rounded-lg bg-white px-4 py-8 shadow">
          <h1 className="text-center text-3xl font-bold">ログイン画面</h1>
          <LoginForm />
        </div>
      </main>
    </>
  );
}
