import React from "react"
import { css } from "@emotion/core"
import { PageProps } from "gatsby"
import { Layout } from "../components/templates/Layout"

export type ExamplePageProps = PageProps<{}>

export const Example: React.FC<ExamplePageProps> = ({}) => (
  <Layout title="ここがタイトル">
    <section>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>
        paragraph。段落段落段落段落。Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Laborum quas, dicta atque quis impedit nam debitis
        officia repudiandae vero minus molestiae facilis possimus architecto,
        laboriosam optio, laudantium aperiam qui repellendus.
      </p>
    </section>
    <pre>
      <code>import React from "react"</code>
    </pre>
  </Layout>
)

export default Example
