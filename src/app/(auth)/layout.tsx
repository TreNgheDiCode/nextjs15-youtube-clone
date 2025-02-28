interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      {children}
    </main>
  );
};

export default AuthLayout;
