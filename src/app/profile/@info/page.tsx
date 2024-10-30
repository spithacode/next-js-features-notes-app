import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserInfo } from "@/core/use-cases/get-user-info.use-case";

export default async function UserInfoPage() {
  const user = await getUserInfo();

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4 ">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User avatar"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <div className="text-sm text-gray-500">
            <p>Joined: {user.joinDate}</p>
            <p>Total Notes: {user.notesCount}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
