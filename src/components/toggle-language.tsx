"use client";

import {
  LANGUAGES,
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/wed/button";
import { LanguagesIcon } from "lucide-react";

export const ToggleLanguage = () => {
  const t = useScopedI18n("locale");
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale({
    preserveSearchParams: true,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <LanguagesIcon className="!size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        aria-label="Languages"
        className="min-w-fit"
      >
        {LANGUAGES.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale}
            onClick={() => changeLocale(locale)}
            checked={currentLocale === locale}
          >
            {t(locale)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
