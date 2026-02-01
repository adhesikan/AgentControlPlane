import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const users = [
  {
    name: "Jamie Patel",
    role: "Admin",
    email: "jamie.patel@demo-ria.com"
  },
  {
    name: "Lina Chen",
    role: "Supervisor",
    email: "lina.chen@demo-ria.com"
  },
  {
    name: "Diego Rivera",
    role: "Analyst",
    email: "diego.rivera@demo-ria.com"
  },
  {
    name: "Avery Kim",
    role: "Viewer",
    email: "avery.kim@demo-ria.com"
  }
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <Card className="border-border/60">
        <CardHeader className="space-y-2">
          <CardTitle>Identity & access</CardTitle>
          <p className="text-sm text-muted-foreground">
            Role-based access is enforced at the API and UI layers. Assign supervisors to approve
            runs and analysts to draft research packets.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {users.map((user) => (
            <div
              key={user.email}
              className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/60 bg-background px-4 py-3 text-sm"
            >
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.email}</p>
              </div>
              <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                {user.role}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="border-border/60">
        <CardHeader>
          <CardTitle>SSO readiness</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>OIDC provider placeholders are ready for Okta, Azure AD, and Ping.</p>
          <p>JWT session cookies expire every 12 hours by default.</p>
          <p>Provisioning is restricted to admin users.</p>
        </CardContent>
      </Card>
    </div>
  );
}
