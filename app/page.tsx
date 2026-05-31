import type { Metadata } from "next";
import Hero from "./ai-pc-guide/components/Hero";
import ConclusionTable from "./ai-pc-guide/components/ConclusionTable";
import Guide from "./ai-pc-guide/components/Guide";
import ComparisonTable from "./ai-pc-guide/components/ComparisonTable";
import UseCaseTable from "./ai-pc-guide/components/UseCaseTable";
import Budget from "./ai-pc-guide/components/Budget";
import PcCards from "./ai-pc-guide/components/PcCards";
import AvoidSection from "./ai-pc-guide/components/AvoidSection";
import Conclusion from "./ai-pc-guide/components/Conclusion";

export const metadata: Metadata = {
  title: "AI開発用PCおすすめ比較 2026年版｜初心者が失敗しない選び方",
  description:
    "AI開発を始めたい初心者向けに、MacBook Air・MacBook Pro・Windows NVIDIA GPU搭載PCなどを徹底比較。ローカルLLM・画像生成・API開発など用途別に最適なPCの選び方を解説。GPU必要性・予算別おすすめも掲載。",
  keywords: [
    "AI開発 PC",
    "AI開発 ノートPC",
    "AI開発 MacBook Air",
    "AI開発 GPU",
    "ローカルLLM PC",
    "AI開発 おすすめ PC",
    "機械学習 PC",
    "Stable Diffusion PC",
  ],
  openGraph: {
    title: "AI開発用PCおすすめ比較 2026年版｜初心者が失敗しない選び方",
    description:
      "MacBook Air・MacBook Pro・Windows NVIDIA GPU搭載PCを徹底比較。用途・予算別に最適なAI開発PCを解説します。",
    type: "article",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ConclusionTable />
      <Guide />
      <ComparisonTable />
      <UseCaseTable />
      <Budget />
      <PcCards />
      <AvoidSection />
      <Conclusion />

      <footer className="bg-slate-900 text-slate-400 text-xs py-8 px-4 text-center">
        <p className="mb-1">
          ※ 本ページに記載の価格・スペックは2026年5月31日時点の目安であり、モデル構成・時期により変動します。
        </p>
        <p>
          ※ 実際の購入前に必ず最新情報をメーカー・販売店でご確認ください。
        </p>
      </footer>
    </main>
  );
}
