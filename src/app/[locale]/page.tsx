import { ToggleLanguage } from "@/components/toggle-language";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const page = () => {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex gap-4 items-center">
        <ToggleLanguage />
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
};

export default page;
