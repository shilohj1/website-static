import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import shilohSkyDiveImage from "../../static/images/shiloh-sky-dive.jpg"
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"
import { Link } from "gatsby"
const IndexPage = () => (
    <Layout>
        <SEO title="Shiloh Jordan"/>

        <div className={"page-header home"}>
            <h1>Shiloh Jordan</h1>
            <p>Welcome! Click around and explore to learn more about Shiloh!<br/></p>
            <img alt={"SkyDive"} src={shilohSkyDiveImage}/>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Thrill Seeker, Life Explorer</h2>
                    <div className={"quote"}>
                        <p>"Don't take life too seriously, no one makes it out alive"</p>
                        <p>-Elbert Hubbard </p>
                    </div>
                </div>

                <div className={"button"}>
                    <Link to="/contact">
                        Contact me 
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
