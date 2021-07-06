import React, { useEffect } from 'react';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { GlobalStyle } from "../components/styles";

const colors = {
  primary : "#4ec600",
  light : "#ffffff",
  dark : "#2d2d2d",
  ultradark : "#1b1b1b"
}
const Logo = styled.a`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 36px;
  text-decoration: none;
  line-height: 46px;
  margin: 0;
  border: none;
  background: none;
  padding: 0;
  color: ${colors.light};
  cursor: pointer;
  display: flex;
  & span {
    color: ${colors.primary};
  }
  & b {
    width: 0;
    overflow: hidden;
    transition: all .3s ease;
  }
  &:hover {
    & .first-word {
      width: 50px;
    }
    & .second-word {
      width: 63px;
    }
  }
`
const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 0 24px;
`
const Navbar = styled.header`
  position: fixed;
  background: ${colors.ultradark};
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  ${Container} {
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Menu = styled.nav`
  display: flex;
`
const Item = styled.a`
  color: ${colors.light};
  font-size: 16px;
  text-decoration: none;
  margin-left: 24px;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  padding-top: 4px;
  transition: all .3s ease;
  &:hover,
  &.active {
    border-color: ${colors.primary};
  }
`
const Content = styled.section`
  color: ${colors.light};
  display: flex;
  min-height: 100vh;
  padding: 100px 0 40px;
  position: relative;
  &#projects {
    background: ${colors.primary};
    color: ${colors.dark};
    min-height: auto;
    padding: 120px 0 140px;
  }
`
const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  top: 0;
  opacity: 0;
  animation: fadeInBottom 1s ease-in-out;
  animation-delay: 5.5s;
  animation-fill-mode: forwards;
  @keyframes fadeInBottom {
    from { opacity:0; top: 16px; }
    to { opacity:1; top: 0; }
  }
`
const Tool = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px 24px;
  & span {
    font-size: 16px;
    margin-top: 4px;
    opacity: 0;
    transition: all .3s ease;
    color: ${colors.light}
  }
  & i {
    font-size: 48px;
    color: ${colors.primary};
    position: relative;
    top: 0;
    transition: all .3s ease;
  }
  &:hover {
    & span {
      opacity: 1;
    }
    & i {
      top: -4px;
    }
  }
`
const Typewriter = styled.div`
  max-width: 464px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    border-right: 1px solid white;
    white-space: nowrap;
    overflow: hidden;
    width: 254px;
    white-space: nowrap;
    overflow: hidden;
    -webkit-animation: typewriter 2s steps(25) 1s 1 normal both;
    animation: typewriter 2s steps(25) 1s 1 normal both;
    font-size: 36px;
    font-weight: 600;
    color: ${colors.light};
    & span {
      color: ${colors.primary};
    }
  }
  & .lines {
    font-size: 13px;
    line-height: 24px;
    border-right: 1px solid white;
    white-space: nowrap;
    overflow: hidden;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 2s steps(40) 1s 1 normal both;
    & span {
      color: ${colors.primary};
    }
  }
  & .line-1 {
    width: 256px;
    animation-delay: 3s;
  }
  & .line-2 {
    width: 290px;
    font-size: 15px;
    line-height: 24px;
    margin-top: 64px;
    margin-bottom: 8px;
    border: none;

    position: relative;
    top: 0;
    opacity: 0;
    animation: fadeInBottom 1s ease-in-out;
    animation-delay: 5s;
    animation-fill-mode: forwards;
  }
  @keyframes typewriter {
    0% {
      width: 0;
      border-right: none;
    }
    0.1% {
      border-right: 1px solid rgb(220,220,220);
    }
    99.9% {
      border-right: 1px solid rgb(220,220,220);
    }
    100% {
      border: none;
    }
  }
  @keyframes fadeInBottom {
    from { opacity:0; top: 16px; }
    to { opacity:1; top: 0; }
  }

  @media screen and (min-width: 480px) {
    & h1 {
      width: 338px;
      font-size: 48px;
      font-weight: 600;
    }
    & .lines {
      font-size: 18px;
    }
    & .line-2 {
      width: 462px;
      font-size: 24px;
      line-height: 36px;
    }
    & .line-1 {
      width: 355px;
    }
  }
`
const Shape = styled.img`
  position: absolute;
  width: 100%;
  height: 80px;
  left: 0;
  bottom: -1px;
  pointer-events: none;
`
const Projects = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const Head = styled.header`
  & h2 {
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    text-align: center;
    padding: 0 0 24px;
  }
`
const Foot = styled.footer`
  text-align: center;
  padding: 80px 0 0;
  & p {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.4px;
    @media screen and (min-width: 480px) {
      font-size: 18px;
    }
  }
`
const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 80px;
  position: relative;
  transition: all .3s ease;
  top: 0;
`
const Caption = styled.figcaption`
  margin: 12px 0 0;
  text-align: center;
  color: ${colors.dark};
  font-size: 16px;
  line-height: 20px;
  & u {
    display: block;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.5;
    font-size: 14px;
  }
`
const Project = styled.a`
  display: flex;
  text-decoration: none;
  margin: 16px;
  &:hover {
    ${Image}{
      top: -8px;
    }
  }
`
const Footer = styled.footer`
  text-align: center;
  padding-bottom: 48px;
  & p {
    color: ${colors.light};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 24px 0 0;
  }
  & a.user {
    color: ${colors.light};
    text-decoration: none;
    margin-left: 4px;
  }
  & svg {
    width: 16px;
    height: 16px;
    margin: 0px 6px;
    transition: all .3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`
const Icons = styled.div`
  padding-top: 8px;
  transition: all .3s ease;
  font-size: 0;
  @media screen and (min-width: 768px) {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
    opacity: 0;
    animation: fadeInBottom 1s ease-in-out;
    animation-delay: 6s;
    animation-fill-mode: forwards;
    @keyframes fadeInBottom {
      from { opacity:0; top: 52%; }
      to { opacity:1; top: 50%; }
    }
  }
`
const Icon = styled.a`
  color: ${colors.light};
  font-size: 24px;
  transition: all .3s ease;
  margin: 8px;
  display: inline-block;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    display: block;
    background: ${colors.ultradark};
    width: 36px;
    height: 36px;
    line-height: 38px;
    border-radius: 36px;
  }
  &:hover {
    color: ${colors.primary};
  }
`

const IndexPage = () => {

  useEffect(() => {
    let mainNavLinks = document.querySelectorAll("nav a");

    mainNavLinks.forEach(link => {
      link.onclick = function () {
        mainNavLinks.forEach(link => {
          link.classList.remove("active");
        })
        link.classList.add("active");
      };
    });

  }, []);

  return  <>
            <Helmet>
                <title>Frontsigner</title>
                <meta charset="utf-8" />
                <meta name="author" content="Zabdiel Maestre" />
                <meta name="description" content="Website developed and managed by Zabdiel Maestre, a frontend developer based in Ecuador. Frontsigner contains Zabdiel's work and a blog with web development tips." />
                <meta property="og:title" content="Frontsigner"/>
                <meta property="twitter:title" content="Frontsigner"/>
                <meta name="description" content="Website developed and managed by Zabdiel Maestre, a frontend developer based in Ecuador. Frontsigner contains Zabdiel's work and a blog with web development tips."/>
                <meta property="og:description" content="Website developed and managed by Zabdiel Maestre, a frontend developer based in Ecuador. Frontsigner contains Zabdiel's work and a blog with web development tips."/>
                <meta property="twitter:description" content="Website developed and managed by Zabdiel Maestre, a frontend developer based in Ecuador. Frontsigner contains Zabdiel's work and a blog with web development tips."/>
                <meta name="twitter:image:src" content="https://frontsigner.com/static/images/opengraph.png"/>
                <meta name="twitter:site" content="@frontsigner"/>
                <meta name="twitter:creator" content="@zabdielmaestre"/><meta name="twitter:card" content="summary_large_image"/>
                <meta property="og:image" content="https://frontsigner.com/static/images/opengraph.png"/><meta property="og:type" content="website"/>
                <meta property="og:url" content="https://frontsigner.com"/><meta property="og:site_name" content="Frontsigner"/>
                <link rel="canonical" href="https://frontsigner.com" />
                <link rel="icon" type="image/png" href="https://frontsigner.com/static/images/favicon.png"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
            </Helmet>
            <GlobalStyle/>
            <Navbar>
              <Container>
                <Logo href="#about"><span>{'<'}</span>f<b className="first-word">ront</b>s<b className="second-word">igner</b><span>{'/>'}</span></Logo>
                <Menu>
                  <Item href="#about" className="active">About</Item>
                  <Item href="#projects">Projects</Item>
                </Menu>
              </Container>
            </Navbar>
            <Content id="about">
              <Container>
                <Typewriter>
                  <h1>Hi<span>,</span> I'm <span>Zabdiel</span></h1>
                  <p className="lines line-1">Frontend Developer behind <span>Frontsigner</span>.</p>
                  <h2 className="lines line-2">I've experience with the following tools.</h2>
                </Typewriter>
                <Tools>
                  <Tool>
                    <i className="fab fa-css3-alt"></i>
                    <span>CSS</span>
                  </Tool>
                  <Tool>
                    <i className="fab fa-html5"></i>
                    <span>HTML</span>
                  </Tool>
                  <Tool>
                    <i className="fab fa-sass"></i>
                    <span>Sass</span>
                  </Tool>
                  <Tool>
                    <i className="fab fa-wordpress-simple"></i>
                    <span>WordPress</span>
                  </Tool>
                  <Tool>
                    <i className="fab fa-react"></i>
                    <span>React</span>
                  </Tool>
                  <Tool>
                    <i className="fab fa-angular"></i>
                    <span>Angular</span>
                  </Tool>
                  <Tool>
                    <i className="fab fa-gitlab"></i>
                    <span>Gitlab</span>
                  </Tool>
                  <Tool>
                    <i className="fab fa-github"></i>
                    <span>Github</span>
                  </Tool>
                </Tools>
              </Container>
              <Shape src="/static/images/shape.svg"></Shape>
            </Content>
            <Content id="projects">
              <Container>
                <Head>
                  <h2>These are some of my recent works</h2>
                </Head>
                <Projects>
                  <Project target="_blank" href="https://play.google.com/store/apps/details?id=viteri.boxing">
                    <Figure>
                      <Image src="/static/images/projects/viteri-boxing.svg" width="80" height="80"/>
                      <Caption>Viteri Boxing <u>Ionic/Angular</u></Caption>
                    </Figure>
                  </Project>
                  <Project target="_blank" href="https://wordpress.org/plugins/open-one-on-demand-delivery/">
                    <Figure>
                      <Image src="/static/images/projects/open-one.svg" width="80" height="80"/>
                      <Caption>Open One Delivery <u>Plugin/Wordpress</u></Caption>
                    </Figure>
                  </Project>
                  <Project target="_blank" href="https://github.com/frontsigner/frontsigner">
                    <Figure>
                      <Image src="/static/images/projects/frontsigner.svg" width="80" height="80"/>
                      <Caption>Frontsigner <u>React/Gatsby</u></Caption>
                    </Figure>
                  </Project>
                  <Project target="_blank" href="https://wuffinsdogbakery.com/">
                    <Figure>
                      <Image src="/static/images/projects/wuffins.svg" width="80" height="80"/>
                      <Caption>Wuffins Dog Bakery <u>Wordpress</u></Caption>
                    </Figure>
                  </Project>
                </Projects>
                <Foot>
                  <p>I'm passionate about writing clean code.</p>
                  <p>I constantly work hard to improve my skills.</p>
                </Foot>
              </Container>
              <Shape src="/static/images/shape-dark.svg"></Shape>
            </Content>
            <Footer>
              <Container>
                <p>Coded with <svg viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 35L16.245 32.4823C6.46 23.5749 0 17.7003 0 10.4905C0 4.6158 4.598 0 10.45 0C13.756 0 16.929 1.54496 19 3.98638C21.071 1.54496 24.244 0 27.55 0C33.402 0 38 4.6158 38 10.4905C38 17.7003 31.54 23.5749 21.755 32.5014L19 35Z" fill="#4ec600"></path></svg> by <a href="mailto:frontsigner@gmail.com" className="user">Zabdiel Maestre</a></p>
                <Icons>
                  <Icon target="_blank" href="https://instagram.com/frontsigner/" title="Instagram"><i className="fab fa-instagram"></i></Icon>
                  <Icon target="_blank" href="https://github.com/frontsigner/" title="Github"><i className="fab fa-github"></i></Icon>
                </Icons>
              </Container>
            </Footer>
          </>
}

export default IndexPage