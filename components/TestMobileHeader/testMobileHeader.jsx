import React from "react";
import styles from "./testMobileHeader.module.scss";
import Link from "next/link";

export default function TestMobileHeader(props) {
  //console.log(props);
  return (
    <div>
      <input type="checkbox" id="main-nav-check" />
      <div id="menu">
        <label htmlFor="main-nav-check" className="toggle" title="Close">
          &times;
        </label>
        <ul>
          <li>
            <Link href="/">Page</Link>{" "}
            <label htmlFor="fof" className="toggle-sub">
              &#9658;
            </label>
            <input type="checkbox" id="fof" className="sub-nav-check" />
            <ul id="fof-sub" className="sub-nav">
              <li className="sub-heading">
                Page{" "}
                <label htmlFor="fof" className="toggle" title="Back">
                  &#9658;
                </label>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/about-us-2">About Us 2</a>
              </li>
              <li>
                <a href="/about-us-3">About Us 3</a>
              </li>
              <li>
                <a href="/about-our-team">About Our Team</a>
              </li>
              <li>
                <a href="/career">Career</a>
              </li>
              <li>
                <a href="#">Contact</a>{" "}
                <label htmlFor="Contact" className="toggle-sub">
                  &#9658;
                </label>
                <input type="checkbox" id="Contact" className="sub-nav-check" />
                <ul id="fof-portfolio-sub" className="sub-nav">
                  <li className="sub-heading">
                    Contact{" "}
                    <label htmlFor="Contact" className="toggle" title="Back">
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <Link
                 href="/contact">Contact 1</Link>
                  </li>
                  <li>
                    <Link href="/contact-2">Contact 2</Link>
                  </li>
                  <li>
                    <Link href="/contact-3">Contact 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">Team</Link>{" "}
                <label htmlFor="Team" className="toggle-sub">
                  &#9658;
                </label>
                <input type="checkbox" id="Team" className="sub-nav-check" />
                <ul id="fof-portfolio-sub" className="sub-nav">
                  <li className="sub-heading">
                    Team{" "}
                    <label htmlFor="Team" className="toggle" title="Back">
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <Link href="/team-plain-style">Team / Plain Style</Link>
                  </li>
                  <li>
                    <Link href="/team-thumbnail-style">Team / Thumbnail Style</Link>
                  </li>
                  <li>
                    <Link href="/team-frame-style">Team / Frame Style</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/price-table">Price Table</Link>
              </li>
              <li>
                <Link href="/maintenance">Maintenance</Link>
              </li>
              <li>
                <Link href="/coming-soon">Coming Soon</Link>
              </li>
              <li>
                <Link href="/404">404 Page</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">Our Services</Link>
            <label htmlFor="Our-Services" className="toggle-sub">
              &#9658;
            </label>
            <input
              type="checkbox"
              id="Our-Services"
              className="sub-nav-check"
            />
            <ul id="fast-apps-sub" className="sub-nav">
              <li className="sub-heading">
                Our Services{" "}
                <label htmlFor="Our-Services" className="toggle" title="Back">
                  &#9658;
                </label>
              </li>
              <li>
                <Link href="/servicedetails">Capital Markets</Link>
              </li>
              <li>
                <Link href="/servicedetails">Insurance</Link>
              </li>
              <li>
                <Link href="/servicedetails">Blockchain</Link>
              </li>
              <li>
                <a href="/servicedetails">Technology Advisory</a>
              </li>
              <li>
                <a href="/servicedetails">Finance & Risk</a>
              </li>
              <li>
                <a href="/servicedetails">Portfolio Management</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://fast-apps.co.uk/">Our Cases</a>{" "}
            <label htmlFor="Our-Cases" className="toggle-sub">
              &#9658;
            </label>
            <input type="checkbox" id="Our-Cases" className="sub-nav-check" />
            <ul id="fast-apps-sub" className="sub-nav">
              <li className="sub-heading">
                Our Cases{" "}
                <label htmlFor="Our-Cases" className="toggle" title="Back">
                  &#9658;
                </label>
              </li>
              <li>
                <a href="#">Portfolio Grid</a>
                <label htmlFor="Our-CasesOne" className="toggle-sub">
                  &#9658;
                </label>
                <input
                  type="checkbox"
                  id="Our-CasesOne"
                  className="sub-nav-check"
                />
                <ul id="fast-apps-sub" className="sub-nav">
                  <li className="sub-heading">
                    Portfolio Grid{" "}
                    <label
                      htmlFor="Our-CasesOne"
                      className="toggle"
                      title="Back"
                    >
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <a href="/cases">Portfolio Columns</a>
                  </li>
                  <li>
                    <a href="/portfolio-frame">Portfolio Columns With Frame</a>
                  </li>
                  <li>
                    <a href="/portfolio-nospace">Portfolio Columns No Space</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio Modern</a>
                <label htmlFor="Our-CasesTwo" className="toggle-sub">
                  &#9658;
                </label>
                <input
                  type="checkbox"
                  id="Our-CasesTwo"
                  className="sub-nav-check"
                />
                <ul id="fast-apps-sub" className="sub-nav">
                  <li className="sub-heading">
                    Portfolio Modern{" "}
                    <label
                      htmlFor="Our-CasesTwo"
                      className="toggle"
                      title="Back"
                    >
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <a href="/portfolio-modern">Modern Columns</a>
                  </li>
                  <li>
                    <a href="/portfolio-modern-nospace">
                      Modern Columns No Space
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio Side Thumbnail</a>
                <label htmlFor="Our-CasesThree" className="toggle-sub">
                  &#9658;
                </label>
                <input
                  type="checkbox"
                  id="Our-CasesThree"
                  className="sub-nav-check"
                />
                <ul id="fast-apps-sub" className="sub-nav">
                  <li className="sub-heading">
                    Portfolio Side Thumbnail{" "}
                    <label
                      htmlFor="Our-CasesThree"
                      className="toggle"
                      title="Back"
                    >
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <a href="/portfolio-left-right-large-thumbnail">
                      Portfolio Left & Right Large Thumbnail
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio-left-large-thumbnail">
                      Portfolio Left Large Thumbnail
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio-right-large-thumbnail">
                      Portfolio Right Large Thumbnail
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio-left-right-small-thumbnail">
                      Portfolio Left & Right Small Thumbnail
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio-left-small-thumbnail">
                      Portfolio Left Small Thumbnail
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio-right-small-thumbnail">
                      Portfolio Right Small Thumbnail
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Single Case(Portfolio)</a>
                <label htmlFor="Our-CasesFour" className="toggle-sub">
                  &#9658;
                </label>
                <input
                  type="checkbox"
                  id="Our-CasesFour"
                  className="sub-nav-check"
                />
                <ul id="fast-apps-sub" className="sub-nav">
                  <li className="sub-heading">
                    Single Case(Portfolio){" "}
                    <label
                      htmlFor="Our-CasesFour"
                      className="toggle"
                      title="Back"
                    >
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <a href="/portfolio-singlecase-one">Custom Style 1</a>
                  </li>
                  <li>
                    <a href="/portfolio-singlecase-two">Custom Style 2</a>
                  </li>
                  <li>
                    <a href="/portfolio-singlecase-three">Custom Style 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://www.dynamicdrive.com/">Features</a>
          </li>
          <li>
            <a href="http://www.jemcon.org/">Blog</a>
            <label htmlFor="Blog" className="toggle-sub">
              &#9658;
            </label>
            <input type="checkbox" id="Blog" className="sub-nav-check" />
            <ul id="fast-apps-sub" className="sub-nav">
              <li className="sub-heading">
                Blog{" "}
                <label htmlFor="Blog" className="toggle" title="Back">
                  &#9658;
                </label>
              </li>
              <li>
                <a href="#">Blog Grid</a>
                <label htmlFor="BlogGrid" className="toggle-sub">
                  &#9658;
                </label>
                <input
                  type="checkbox"
                  id="BlogGrid"
                  className="sub-nav-check"
                />
                <ul id="fast-apps-sub" className="sub-nav">
                  <li className="sub-heading">
                    Blog Grid{" "}
                    <label htmlFor="BlogGrid" className="toggle" title="Back">
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <a href="/blog-grid-2-columns">Blog Grid 2 Columns</a>
                  </li>
                  <li>
                    <a href="/blog-grid-3-columns">Blog Grid 3 Columns</a>
                  </li>
                  <li>
                    <a href="/blog-grid-4-columns">Blog Grid 4 Columns</a>
                  </li>
                  <li>
                    <a href="/blog-grid-2-columns-no-space">
                      Blog Grid 2 Columns No Space
                    </a>
                  </li>
                  <li>
                    <a href="/blog-grid-3-columns-no-space">
                      Blog Grid 3 Columns No Space
                    </a>
                  </li>
                  <li>
                    <a href="/blog-grid-4-columns-no-space">
                      Blog Grid 4 Columns No Space
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog Columns</a>
                <label htmlFor="BlogColumns" className="toggle-sub">
                  &#9658;
                </label>
                <input
                  type="checkbox"
                  id="BlogColumns"
                  className="sub-nav-check"
                />
                <ul id="fast-apps-sub" className="sub-nav">
                  <li className="sub-heading">
                    Blog Columns{" "}
                    <label
                      htmlFor="BlogColumns"
                      className="toggle"
                      title="Back"
                    >
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <a href="/blog-4-columns-with-frame">
                      Blog 4 Columns With Frame
                    </a>
                  </li>
                  <li>
                    <a href="/portfolio-modern-nospace">Blog 4 Columns</a>
                  </li>
                  <li>
                    <a href="/blog-3-columns-with-frame-post-format">
                      Blog Columns With Post Format
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog Full</a>
                <label htmlFor="BlogFull" className="toggle-sub">
                  &#9658;
                </label>
                <input
                  type="checkbox"
                  id="BlogFull"
                  className="sub-nav-check"
                />
                <ul id="fast-apps-sub" className="sub-nav">
                  <li className="sub-heading">
                    Blog Full{" "}
                    <label htmlFor="BlogFull" className="toggle" title="Back">
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <a href="/blog-full-right-sidebar-with-frame">
                      Blog Full Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="/blog-full-left-sidebar-with-frame">
                      Blog Full Left Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="/blog-full-both-sidebar-with-frame">
                      Blog Full Both Sidebar With Frame
                    </a>
                  </li>
                  <li>
                    <a href="/blog-full-right-sidebar">
                      Blog Full Right Sidebar
                    </a>
                  </li>
                  <li>
                    <a href="/blog-full-left-sidebar">Blog Full Left Sidebar</a>
                  </li>
                  <li>
                    <a href="/blog-full-both-sidebar">Blog Full Both Sidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Single Post</a>
                <label htmlFor="SinglePost" className="toggle-sub">
                  &#9658;
                </label>
                <input
                  type="checkbox"
                  id="SinglePost"
                  className="sub-nav-check"
                />
                <ul id="fast-apps-sub" className="sub-nav">
                  <li className="sub-heading">
                    Single Post{" "}
                    <label htmlFor="SinglePost" className="toggle" title="Back">
                      &#9658;
                    </label>
                  </li>
                  <li>
                    <a href="/standard-post-type">Standard Post Format</a>
                  </li>
                  <li>
                    <a href="/single-post-custom-layout-1">Custom Layout 1</a>
                  </li>
                  <li>
                    <a href="/single-post-custom-layout-2">Custom Layout 2</a>
                  </li>
                  <li>
                    <a href="/single-post-custom-layout-3">Custom Layout 3</a>
                  </li>
                  <li>
                    <a href="/aside-post-format">Aside Post Format</a>
                  </li>
                  <li>
                    <a href="/audio-post-format">Audio Post Format</a>
                  </li>
                  <li>
                    <a href="/gallery-post-format">Gallery Post Format</a>
                  </li>
                  <li>
                    <a href="/image-post-format">Image Post Format</a>
                  </li>
                  <li>
                    <a href="/link-post-format">Link Post Format</a>
                  </li>
                  <li>
                    <a href="/quote-post-format">Quote Post Format</a>
                  </li>
                  <li>
                    <a href="/video-post-format">Video Post Format</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* closing menu */}

      <div className="containerSetup">
        <div id="header">
          <span className={styles.classtwo}>
            <img
              alt="Grouparoo Logo"
              width={150}
              height={80}
              className={"img-fluid " + styles.logoSetup}
              src="/uploads/Logo-$color_text_light_one-01.png"
            />
          </span>
          <label htmlFor="main-nav-check" className="toggle" title="Menu">
            &#x2261;
          </label>
        </div>
        {/* closing "#header" */}
      </div>
      {/* <!-- closing ".container" --> */}
    </div>
  );
}
