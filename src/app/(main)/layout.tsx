import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import ElectricTraces from "@/components/ElectricTraces";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full relative">
      <div className="h-svh w-svw phone-back fixed "></div>
      <ElectricTraces />
      <TopBar />
      <div className="pr-30 pt-10/ flex h-full w-full">{children}</div>
      <BottomBar />
    </div>
  );
}
