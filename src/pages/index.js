import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import {banner, bannerImg, recipeText, bannerSection} from '../styles/index.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={bannerSection}>
        <StaticImage
          src='../images/image-1.jpg'
          alt="A recipe"
          placeholder="blurred"
          layout="constrained"
          className={banner}
          imgClassName={bannerImg}
        />
        <div className={recipeText}>Hello Recipe</div>
      </section>
    </Layout>
  )
}
