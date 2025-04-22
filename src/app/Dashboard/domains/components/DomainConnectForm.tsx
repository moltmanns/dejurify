"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function DomainConnectForm() {
  const [domain, setDomain] = useState("");

  const handleConnect = () => {
    // TODO: Hook into API
    alert(`Request to connect domain: ${domain}`);
    setDomain("");
  };

  return (
    <div className="bg-background border border-border rounded-lg p-4 space-y-4">
      <div>
        <Label htmlFor="domain">Custom Domain</Label>
        <Input
          id="domain"
          placeholder="yourlawfirm.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
      </div>

      <Button onClick={handleConnect}>Connect Domain</Button>
    </div>
  );
}
