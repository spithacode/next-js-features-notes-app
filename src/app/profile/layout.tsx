export default function ProfileLayout({
  children,
  info,
  notes,
}: {
  children: React.ReactNode;
  info: React.ReactNode;
  notes: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="flex gap-6">
        <div className="w-1/3">{info}</div>
        <div className="w-2/3">{notes}</div>
      </div>
      {children}
    </div>
  );
}
