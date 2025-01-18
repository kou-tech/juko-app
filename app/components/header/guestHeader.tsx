import { Link } from 'react-router';

export function GuestHeader() {
  return (
    <header className="bg-primary sticky top-0 z-50 flex h-20 w-full items-center justify-start">
      <div className="px-4">
        <Link to="/">
          <h1 className="text-accent text-3xl font-bold">受講管理アプリ</h1>
        </Link>
      </div>
    </header>
  );
}
