"use client";

import { Button } from "@/components/ui/button";

const connectedDomains = [
  {
    domain: "yourlawfirm.com",
    status: "Connected",
    dns: "A @ → 76.76.21.21",
  },
];

export default function ConnectedDomainsTable() {
  return (
    <div className="bg-background border border-border rounded-lg p-4">
      <h5 className="text-base font-semibold mb-4">Connected Domains</h5>
      <table className="w-full text-sm">
        <thead className="text-muted-foreground text-left">
          <tr>
            <th className="py-2">Domain</th>
            <th className="py-2">DNS</th>
            <th className="py-2">Status</th>
            <th className="py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {connectedDomains.map((domain, idx) => (
            <tr key={idx} className="border-t border-border">
              <td className="py-2">{domain.domain}</td>
              <td className="py-2">{domain.dns}</td>
              <td className="py-2 text-green-600">{domain.status}</td>
              <td className="py-2 text-right">
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
