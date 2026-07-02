import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";
import { ModalProvider } from "@/context/ModalContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <div className="flex w-full h-full">
        <div className="h-svh w-svw phone-back fixed "></div>
        <TopBar />
        <div className="pr-30 pt-10/ flex h-full w-full">{children}</div>
        <BottomBar />
      </div>
    </ModalProvider>
  );
}
