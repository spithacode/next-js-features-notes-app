import { getRecentActivity } from "@/use-cases/get-recent-activity";

export default async function RecentActivity() {
  const activities = await getRecentActivity();

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="mb-2">
            {activity.action} - {activity.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
