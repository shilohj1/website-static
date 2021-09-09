import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact"/>
        <div className={"container"}>
            <div className={"content"}>
                <div className={"title"}>
                    <h1>Contact</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-7"}>
                        <p>Please reach out to me. I'd love to hear from you!</p>
                    </div>

                    <div className={"col-5"}>
                        <div className={"contact-items"}>
                            <p>Plain email is the best way to contact us.</p>
                            <h2>jordan.shiloh1@gmail.com</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage
