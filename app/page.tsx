import type { Metadata } from "next";
import Hero from "./ai-pc-guide/components/Hero";
import QuickPick from "./ai-pc-guide/components/QuickPick";
import UseCaseSelector from "./ai-pc-guide/components/UseCaseSelector";
import ComparisonTable from "./ai-pc-guide/components/ComparisonTable";
import Guide from "./ai-pc-guide/components/Guide";
import AvoidSection from "./ai-pc-guide/components/AvoidSection";
import DesktopNote from "./ai-pc-guide/components/DesktopNote";
import Conclusion from "./ai-pc-guide/components/Conclusion";

export const metadata: Metadata = {
  title: "AI開発用ノートPCおすすめ比較 2026年版｜初心者が失敗しない選び方",
  description:
    "AI開発を始めたい初心者向けに、MacBook Air・RTX 5060 / 5070搭載Windowsノートなどを徹底比較。ローカルLLM・画像生成AI・API開発など用途別に最適なノートPCの選び方を解説。",
  keywords: [
    "AI開発 ノートPC",
    "AI開発 おすすめ PC",
    "AI開発 MacBook Air",
    "AI開発 GPU ノート",
    "ローカルLLM ノートPC",
    "Stable Diffusion ノートPC",
    "RTX 5060 ノートPC AI開発",
    "Python学習 PC",
  ],
  openGraph: {
    title: "AI開発用ノートPCおすすめ比較 2026年版｜初心者が失敗しない選び方",
    description:
      "MacBook Air・RTX 5060 / 5070搭載Windowsノートを徹底比較。用途別・予算別に最適なAI開発ノートPCを解説します。",
    type: "article",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickPick />
      <UseCaseSelector />
      <ComparisonTable />
      <Guide />
      <AvoidSection />
      <DesktopNote />
      <Conclusion />

      <footer className="border-t border-slate-200 text-slate-400 text-xs py-8 px-4 text-center bg-slate-50">
        <p>
          価格は2026年5月31日時点の税込目安です。BTO構成・セール・在庫状況・為替により変動します。購入前に公式サイト・販売店で最新情報をご確認ください。
        </p>
      </footer>
    </main>
  );
}
