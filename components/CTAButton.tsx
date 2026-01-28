"use client";

import * as React from "react";

import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { useRequestAccess } from "@/components/RequestAccessModal";

interface CTAButtonProps {
  label?: string;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  source?: string;
  className?: string;
}

export function CTAButton({
  label = "Request Access",
  variant = "default",
  size = "default",
  source = "cta_button",
  className
}: CTAButtonProps) {
  const { openModal } = useRequestAccess();

  const handleClick = () => {
    trackEvent("cta_click", { source });
    openModal();
  };

  return (
    <Button variant={variant} size={size} onClick={handleClick} className={className}>
      {label}
    </Button>
  );
}
