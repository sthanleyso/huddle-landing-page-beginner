import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import {
  HeroSection,
  CardSection,
  ContactSection,
  Card,
  Box,
} from "../styles"

import logo from "../images/logo-white.svg"
import mockups from "../images/illustration-mockups.svg";
import growTogether from "../images/illustration-grow-together.svg";
import flowingConversation from "../images/illustration-flowing-conversation.svg";
import yourUsers from "../images/illustration-your-users.svg";

const Home = () => {
  return (
    <Layout>
      <HeroSection>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Link to="#!" className="btn">
          Get Started For Free
        </Link>
        <img src={mockups} alt="Illustration Mockups"/>
      </HeroSection>
      <CardSection>
        <Card>
          <img src={growTogether} alt="Grow together illustration"/>
          <h2>Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </Card>
        <Card>
          <img src={flowingConversation} alt="Flowing conversation illlustration"/>
          <h2>Flowing Conversations</h2>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </Card>
        <Card>
          <img src={yourUsers} alt="Your users illustration"/>
          <h2>Your Users</h2>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </Card>
        <Box>
          <h2>Ready To Build Your Community?</h2>
          <Link to="#!" className="btn">
            Get Started For Free
          </Link>
        </Box>
      </CardSection>
      <ContactSection>
        <article class="contacts__box">
          <img src={logo} alt="Huddle brand"/>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
            malandris se pirulitá. Tá deprimidis, eu conheço uma cachacis que
            pode alegrar sua vidis.
          </p>
          <p>+1-543-123-4567</p>
          <p>example@huddle.com</p>
        </article>
        <nav>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </nav>

        <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </ContactSection>
    </Layout>
  )
}

export default Home
