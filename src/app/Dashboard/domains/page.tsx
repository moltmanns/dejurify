"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { FiCheckCircle, FiEdit2, FiTrash2 } from "react-icons/fi"

export default function DomainsPage() {
  const [domain, setDomain] = useState("")
  const [connectedDomain, setConnectedDomain] = useState<string | null>("example.yourlawfirm.com")

  const handleConnect = () => {
    // Simulate API call
    setConnectedDomain(domain)
    setDomain("")
  }

  const handleRemove = () => {
    setConnectedDomain(null)
  }

  return (
    <div className="space-y-8 p-4">
      <div>
        <h3 className="text-xl font-bold pb-4">Custom Domain Settings</h3>
        <p className="text-muted-foreground text-sm">
          Connect your custom domain and manage DNS records for your law firm website.
        </p>
      </div>

      {/* Domain Connect Form */}
      <Card>
        <CardHeader>
          <CardTitle>Connect a Custom Domain</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label htmlFor="domain">Domain Name</Label>
          <Input
            id="domain"
            placeholder="yourfirm.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <Button onClick={handleConnect} disabled={!domain}>
            Connect Domain
          </Button>
        </CardContent>
      </Card>

      {/* Connected Domain Display */}
      {connectedDomain && (
        <Card>
          <CardHeader className="flex flex-row justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FiCheckCircle className="text-green-500" />
                {connectedDomain}
              </CardTitle>
              <p className="text-muted-foreground text-sm">Verified & Active</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <FiEdit2 className="mr-2" /> Edit
              </Button>
              <Button variant="destructive" size="sm" onClick={handleRemove}>
                <FiTrash2 className="mr-2" /> Remove
              </Button>
            </div>
          </CardHeader>

          {/* Mock DNS Settings */}
          <CardContent className="space-y-2 text-sm mt-4">
            <h5 className="font-semibold mb-2">DNS Settings</h5>
            <div className="grid grid-cols-3 gap-4 font-mono text-xs text-muted-foreground">
              <div><strong>Type</strong></div>
              <div><strong>Host</strong></div>
              <div><strong>Value</strong></div>

              <div>CNAME</div>
              <div>@</div>
              <div>proxy.platformhost.com</div>

              <div>TXT</div>
              <div>@</div>
              <div>verify.platform=abc123</div>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              Update your DNS records to point to our platform. Changes may take up to 48 hours.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
