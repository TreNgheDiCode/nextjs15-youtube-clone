import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import Link from "next/link";
import { SearchInput } from "./search-inputl";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center w-full gap-4">
        {/* Menu and Logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="p-4 flex items-center gap-1">
              <p className="text-xl font-semibold tracking-tight">
                ありがとう Lolicon&apos;s World
              </p>
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>

        {/* User Menu */}
        <div className="flex-shrink-0 items-center gap-4 flex">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
