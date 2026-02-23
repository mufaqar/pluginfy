import { useEffect, useState } from "react"
import BackToTop from "../elements/BackToTop"
import MouseCursor from "../elements/MouseCursor"
import Breadcrumb from "./Breadcrumb"
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Header from "./Header"

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  headercls,
  nf3,
  bShape,
  breadcrumbCls,
  blogSearch,
  breadcrumbDesc,
}) {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const WOW = require("wowjs")
    window.wow = new WOW.WOW({ live: false })
    window.wow.init()

    const handleScroll = () => {
      setScroll(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <MouseCursor />

      {!headerStyle && <Header scroll={scroll} headercls={headercls} />}
      {headerStyle == 1 ? (
        <Header scroll={scroll} headercls={headercls} />
      ) : null}

      <main>
        {breadcrumbTitle && (
          <Breadcrumb
            breadcrumbTitle={breadcrumbTitle}
            breadcrumbDesc={breadcrumbDesc}
            bShape={bShape}
            breadcrumbCls={breadcrumbCls}
            blogSearch={blogSearch}
          />
        )}

        {children}
      </main>

      {footerStyle == 2 ? <Footer2 nf3={nf3} /> : <Footer1 />}

      <BackToTop />
    </>
  )
}