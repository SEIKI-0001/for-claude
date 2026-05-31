import type { Metadata } from "next";
import Hero from "./ai-pc-guide/components/Hero";
import UseCaseSelector from "./ai-pc-guide/components/UseCaseSelector";
import Guide from "./ai-pc-guide/components/Guide";
import ComparisonTable from "./ai-pc-guide/components/ComparisonTable";
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
      <UseCaseSelector />
      <Guide />
      <ComparisonTable />
      <AvoidSection />
      <DesktopNote />
      <Conclusion />

      <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-4 text-center">
        <p className="mb-1">
          価格は2026年5月31日時点の税込目安です。BTO構成、セール、在庫状況、為替により変動します。
        </p>
        <p>
          購入前には必ず公式サイト・販売店で最新価格と構成を確認してください。
        </p>
      </footer>
    </main>
  );
}
