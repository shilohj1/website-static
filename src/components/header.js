import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.svg"
import logo2 from "../../static/images/shiloh-test.png"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo2"}>
                    <Link to="/" title={"HiStaff"}>
                        <img alt={"Logo"} src={logo2}/>
                    </Link>
                </div>

                <div className={"get-started"}>
                    <Link to="/about">
                    <a href={"https://app.histaff.io"}>Resume</a>
                    </Link>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
