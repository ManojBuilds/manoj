"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
} from "@/components/ui/resizable-navbar";

export function NavbarDemo({ className }: { className?: string }) {
  return (
    <Navbar className={className}>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <div className="flex items-center gap-4">
          {/* Add buttons here if needed */}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
        </MobileNavHeader>
      </MobileNav>
    </Navbar>
  );
}

