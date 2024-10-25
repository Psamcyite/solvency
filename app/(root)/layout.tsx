import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: 'Samuel',
    lastName: 'Amojo',
    $id: '1',
    email: 'samuel.amojo@example.com',
    userId: 'user123',
    dwollaCustomerUrl: 'https://example.com/dwolla',
    dwollaCustomerId: 'customer123',
    name: 'Samuel Amojo',
    address1: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
    country: 'USA',
    phone: '555-555-5555',
    postalCode: '12345',
    dateOfBirth: '1990-01-01',
    ssn: '123-45-6789',
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
      {children}
    </main>
  );
}
