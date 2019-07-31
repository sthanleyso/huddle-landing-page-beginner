import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"

import {
  HeroSection,
  CardSection,
  ContactSection,
  Card,
  CardReverse,
  Box,
  ContactBox,
  Menu,
  SocialMedia,
} from "../styles"

import logo from "../images/logo-white.svg"
import mockups from "../images/illustration-mockups.svg"
import growTogether from "../images/illustration-grow-together.svg"
import flowingConversation from "../images/illustration-flowing-conversation.svg"
import yourUsers from "../images/illustration-your-users.svg"
import phone from "../images/icon-phone.svg"
import email from "../images/icon-email.svg"
import location from "../images/icon-location.svg"

const Home = () => {
  return (
    <Layout>
      <HeroSection>
        <h1>
          Build The Community
          <br />
          Your Fans Will Love
        </h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <a href="#!">Get Started For Free</a>
        <img src={mockups} alt="Illustration Mockups" />
      </HeroSection>
      <CardSection>
        <Card>
          <img src={growTogether} alt="Grow together illustration" />
          <h2>Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </Card>
        <CardReverse>
          <img
            src={flowingConversation}
            alt="Flowing conversation illlustration"
          />
          <h2>Flowing Conversations</h2>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </CardReverse>
        <Card>
          <img src={yourUsers} alt="Your users illustration" />
          <h2>Your Users</h2>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </Card>
        <Box>
          <h2>Ready To Build Your Community?</h2>
          <a href="#!">Get Started For Free</a>
        </Box>
      </CardSection>
      <ContactSection>
        <ContactBox>
          <img src={logo} alt="Huddle brand" />
          <div>
            <img src={location} alt="Location icon" />
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. Tá deprimidis, eu conheço uma cachacis que
              pode alegrar sua vidis.
            </p>
          </div>
          <div>
            <img src={phone} alt="Phone icon" />
            <p>+1-543-123-4567</p>
          </div>
          <div>
            <img src={email} alt="Email icon" />
            <p>example@huddle.com</p>
          </div>
        </ContactBox>
        <Menu>
          <li><a href="#!">About Us</a></li>
          <li><a href="#!">What We Do</a></li>
          <li><a href="#!">FAQ</a></li>
          <li><a href="#!">Career</a></li>
          <li><a href="#!">Blog</a></li>
          <li><a href="#!">Contact Us</a></li>
        </Menu>
        <SocialMedia>
          <li>
            <a href="#!">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="#!">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#!">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </SocialMedia>
        <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </ContactSection>
    </Layout>
  )
}

export default Home
