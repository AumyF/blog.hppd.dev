import { css } from "@emotion/core";
import { PageProps } from "gatsby";
import React from "react";

import { Article } from "../components/article";
import {
  Chronology,
  ChronologyNote,
  ChronologyTime,
  ChronologyTitle,
} from "../components/chronology";
import { Layout } from "../components/layout";

export type AboutPageProps = PageProps<{}>;

export const About: React.VFC<AboutPageProps> = () => (
  <Layout title="About This Blog" path="about">
    <Article>
      <h1>TL;DR</h1>
      <ul>
        <li>Aumyのブログです</li>
        <li>このアニメがいいとかこのキーボードがいいとかを書く</li>
        <li>
          プログラミング技術的なことは
          <a href="https://zenn.dev/aumy">Zenn</a>で書く
        </li>
      </ul>
      <h1>Aumy について</h1>
      <p>
        2003年，横浜市生まれ．プログラミングが趣味．初めてのプログラミングはVBS．最も打ち込んだ言語は
        (2020年現在) TypeScript．
      </p>
      <Chronology>
        <section>
          <ChronologyTime>2003</ChronologyTime>
          <ChronologyTitle>誕生</ChronologyTitle>
          <div>横浜市にて。</div>
        </section>
        <section>
          <ChronologyTime>2010.4 ~ 2019.3</ChronologyTime>
          <ChronologyTitle>義務教育</ChronologyTitle>
          <ChronologyNote>
            公立小中学校。小4ぐらいのとき、ニコニコ動画のプログラミング動画でVBAに触れプログラミングに入門する。年数から干支を出力するプログラムを書いてたのを覚えている。中学校ぐらいではノートPCにUbuntuを入れてデュアルブートにしたり、HTML/CSS/JSを学んだり、Mastodonにいた関係でRubyにちょっと触れたりした。未だに
            <code>grub rescue&gt;</code>
            がトラウマ。この頃はどちらかというとプログラミングよりゲームとかアニメを優先していた。ポケモンとかモンハンとか。ヒットしたのは高校に上がったころだが鬼滅の刃、呪術廻戦、チェンソーマンが始まったのも中学のとき。
          </ChronologyNote>
        </section>
        <section>
          <ChronologyTime>2019.4 ~</ChronologyTime>
          <ChronologyTitle>高校</ChronologyTitle>
          <ChronologyNote>
            中学ではプログラミングのできる知り合いが1人ぐらいしかいなかったので、同業者がいるだろうと思い公立工業高校の情報科に入学。実際の所ほとんどいなかった。この頃からプログラミングに本腰を入れるようになる。学校ではC言語
            (関数先頭でしか変数宣言できない ANSI C 仕様) を Borland C++ Compiler
            (著作権表示が 2000 年、フラグがないと Unicode にならない)
            でコンパイルして実行したり、Excelマクロで VB
            と感動の再会を果たしたりしている。趣味では TypeScript, React
            などを学び、ときたま OSS に
            <ruby>
              貢献
              <rt>コントリビュート</rt>
            </ruby>
            したりする。
          </ChronologyNote>
        </section>
        <section>
          <ChronologyTime>Just now!</ChronologyTime>
          <ChronologyNote>
            Rust, Scala, Haskell, Elm, F#
            などやってみたいと思う言語は多いがなかなか手が出せていない。進学に向けた勉強もしなくてはならないが工業高校ゆえ本当にマジでやらないと受からないと思われる
            (指定校推薦を取らない場合)。そして高校はレベルに余裕を持ちまくった上で推薦を使って入ったので受験勉強をほとんどやっておらず、大学受験の折に盛大なツケを払わねばならないことが予想される。
          </ChronologyNote>
        </section>
      </Chronology>
    </Article>
  </Layout>
);

export default About;
