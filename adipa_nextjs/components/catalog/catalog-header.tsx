"use client";

import { useEffect, useState } from "react";

import { CartDrawer } from "@/components/catalog/cart-drawer";
import { HeaderDesktop } from "@/components/catalog/header-desktop";
import { HeaderMobile } from "@/components/catalog/header-mobile";
import { MobileMenuDrawer } from "@/components/catalog/mobile-menu-drawer";
import { useCartStore } from "@/lib/cart-store";
import { desktopNavItems, mobileNavItems } from "@/lib/header-navigation";

export function CatalogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const openCart = useCartStore((state) => state.openCart);
  const totalItems = useCartStore((state) => state.totalItems);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isCartOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen, isMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#e8e2f8] bg-white shadow-sm">
        <HeaderDesktop
          navItems={desktopNavItems}
          onOpenCart={openCart}
          totalItems={totalItems}
        />
        <HeaderMobile
          onOpenCart={openCart}
          onOpenMenu={() => setIsMenuOpen(true)}
          totalItems={totalItems}
        />
      </header>
      <MobileMenuDrawer
        navItems={mobileNavItems}
        onClose={() => setIsMenuOpen(false)}
        open={isMenuOpen}
      />
      <CartDrawer open={isCartOpen} />
    </>
  );
}
