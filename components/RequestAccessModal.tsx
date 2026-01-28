"use client";

import * as React from "react";

import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface LeadFormState {
  name: string;
  email: string;
  company: string;
  role: string;
  agents: string;
  useCase: string;
  website?: string;
}

interface RequestAccessContextValue {
  openModal: () => void;
}

const RequestAccessContext = React.createContext<RequestAccessContextValue | undefined>(undefined);

export function useRequestAccess() {
  const context = React.useContext(RequestAccessContext);
  if (!context) {
    throw new Error("useRequestAccess must be used within RequestAccessProvider");
  }
  return context;
}

export function RequestAccessProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = React.useState<string | null>(null);
  const [formState, setFormState] = React.useState<LeadFormState>({
    name: "",
    email: "",
    company: "",
    role: "",
    agents: "1–10",
    useCase: "",
    website: ""
  });

  React.useEffect(() => {
    if (!open) {
      setStatus("idle");
      setMessage(null);
    }
  }, [open]);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      company: "",
      role: "",
      agents: "1–10",
      useCase: "",
      website: ""
    });
    setMessage(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      trackEvent("lead_submit", { source: "request_access_modal" });
      resetForm();
    } catch (error) {
      setStatus("error");
      setMessage("We could not submit your request. Please try again or email us directly.");
    }
  };

  return (
    <RequestAccessContext.Provider value={{ openModal }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Access</DialogTitle>
            <DialogDescription>
              Tell us about your autonomous execution stack. We will follow up within one business day.
            </DialogDescription>
          </DialogHeader>
          {status === "success" ? (
            <div className="rounded-md border border-border/60 bg-muted p-4 text-sm">
              Thanks! Your request is in our queue. Our team will reach out shortly.
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    value={formState.company}
                    onChange={(event) => setFormState((prev) => ({ ...prev, company: event.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    name="role"
                    required
                    value={formState.role}
                    onChange={(event) => setFormState((prev) => ({ ...prev, role: event.target.value }))}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="agents"># of agents</Label>
                  <select
                    id="agents"
                    name="agents"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={formState.agents}
                    onChange={(event) => setFormState((prev) => ({ ...prev, agents: event.target.value }))}
                  >
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>200+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website (leave blank)</Label>
                  <Input
                    id="website"
                    name="website"
                    value={formState.website}
                    onChange={(event) => setFormState((prev) => ({ ...prev, website: event.target.value }))}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="useCase">Primary use case</Label>
                <Textarea
                  id="useCase"
                  name="useCase"
                  rows={4}
                  value={formState.useCase}
                  onChange={(event) => setFormState((prev) => ({ ...prev, useCase: event.target.value }))}
                />
              </div>
              {status === "error" && message ? (
                <p className="text-sm text-destructive">{message}</p>
              ) : null}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to share your information with AlgoPilotX.
                </p>
                <Button type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Submitting..." : "Request Access"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </RequestAccessContext.Provider>
  );
}
