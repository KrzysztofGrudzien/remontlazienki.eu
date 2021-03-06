import React from "react"
import Main from "../components/main"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/crossDecoration"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

const ImageWrapper = styled.div`
  align-items: center;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.grey100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 355px;
  position: relative;
  margin-bottom: 50px;
  width: 100%;
`

const FormWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.open};
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
`

const ArticleForm = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
  @media (max-width: 850px) {
    width: 100%;
  }

  input {
    border: none;
    color: ${({ theme }) => theme.colors.grey300};
    background-color: ${({ theme }) => theme.colors.grey100};
    height: 45px;
    line-height: 45px;
    margin-top: 5px;
    padding-left: 10px;
    width: 100%;
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  .form-textarea {
    width: 100%;
    textarea {
      border: none;
      background-color: ${({ theme }) => theme.colors.grey100};
      color: ${({ theme }) => theme.colors.grey300};
      margin-top: 5px;
      height: 200px;
      padding: 10px;
      width: 100%;
      &::placeholder {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    }
  }

  .form {
    justify-content: flex-end;
    display: flex;
    flex-wrap: wrap;
  }
`

const FormParagraph = styled.p`
  margin: 0;
  padding: 20px 10px 20px 0;
  width: 50%;
  @media (max-width: 850px) {
    width: 100%;
  }
`

const ArticleContact = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;
  @media (max-width: 850px) {
    width: 100%;
  }

  .owner {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  .owner-title {
    font-size: ${({ theme }) => theme.fontSize.mml};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-top: 50px;
    margin-bottom: 0;
    @media (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontSize.ml};
    }
  }

  .big-text {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.mml};
    margin-top: 200px;
  }

  span {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    text-decoration: none;
  }

  .form-button {
    border: none;
    background-color: ${({ theme }) => theme.colors.grey300};
    color: ${({ theme }) => theme.colors.grey50};
    cursor: pointer;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-family: ${({ theme }) => theme.fontFamily.open};
    padding: 10px 40px;
    position: relative;
    text-align: center;
    transition: all 0.3s linear;
    text-decoration: none;
    width: 150px;

    &:hover::before {
      right: 0;
      width: 0;
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.grey100};
      box-shadow: ${({ theme }) => theme.shadow.primary};
      color: ${({ theme }) => theme.colors.grey300};
    }
  }
`

const CompanyDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.8;
`

const ContactPage = ({ data }) => {
  const animateProps = {
    visible: { opacity: 1, x: 0 },
    visibleTop: { opacity: 1, y: 0 },
    hidden: { opacity: 0, x: -200 },
    hiddenTop: { opacity: 0, y: -200 },
    hiddenLeft: { opacity: 0, x: -200 },
    hiddenRight: { opacity: 0, x: 200 },
  }
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Main>
        <ImageWrapper image={data.file.publicURL} alt="hero">
          <motion.div
            animate="visibleTop"
            initial="hiddenTop"
            variants={animateProps}
            transition={{ duration: 0.7, times: [0, 0.2, 1] }}
          >
            <WelcomeHeader type="about" />
            <WelcomeParagraph type="about-more" />
          </motion.div>
          <CrossDecoration type="left-top" />
          <CrossDecoration type="center-bottom" />
          <CrossDecoration type="right-top-fix" />
          <CrossDecoration type="left-bottom" />
          <CrossDecoration type="center-top" />
          <CrossDecoration type="right-bottom-fix" />
        </ImageWrapper>
        <FormWrapper>
          <ArticleForm>
            <motion.div
              animate="visible"
              initial="hiddenLeft"
              variants={animateProps}
              transition={{ duration: 0.7, times: [0, 0.2, 1] }}
            >
              <WelcomeParagraph type="contact" />
              <WelcomeHeader type="contact" />
              <CompanyDescription>
                Oferujemy usługi wykończeniowe łazienek. Idziemy z duchem czasu
                i wiemy, że od kilku lat nastał trend na tworzenie łazienek o
                nietuzinkowym wyglądzie, gdzie inwestor może stworzyć
                niesamowite i efektowne wnętrze sam czy korzystając z usług
                projektantów.
              </CompanyDescription>
              <form
                name="contact"
                className="form"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <FormParagraph>
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                </FormParagraph>
                <FormParagraph>
                  <label>
                    imię
                    <br />
                    <input name="name" type="text" placeholder="twoję imię" />
                  </label>
                </FormParagraph>
                <FormParagraph>
                  <label>
                    e-mail
                    <br />
                    <input
                      name="email"
                      type="email"
                      placeholder="twój adres e-mail"
                    />
                  </label>
                </FormParagraph>
                <p className="form-textarea">
                  <label>
                    wiadomość
                    <br />
                    <textarea placeholder="twoja wiadomość" />
                  </label>
                </p>
                <button className="form-button" type="submit">
                  wyślij
                </button>
              </form>
            </motion.div>
          </ArticleForm>
          <ArticleContact>
            <motion.div
              animate="visible"
              initial="hiddenRight"
              variants={animateProps}
              transition={{ duration: 0.7, times: [0, 0.2, 1] }}
            >
              <WelcomeParagraph type="company-desc" />
              <WelcomeHeader type="about" />

              <p className="owner-title">główny wykonawca</p>
              <h3 className="owner">Arturt Grudzień</h3>
              <p>
                Znajdziesz nas na{" "}
                <a href="https://facebook.com/dekorilla" target="_blanks">
                  facebooku
                </a>
              </p>
              <span>tel. 519-811-460</span>
              <span>e-mail: dekorilla@wp.pl</span>
              <p className="big-text">WE CAN SPEAK ENGLISH, SO CALL TO US</p>
            </motion.div>
          </ArticleContact>
        </FormWrapper>
      </Main>
    </motion.div>
  )
}

export const query = graphql`
  {
    file(name: { eq: "bricks" }) {
      publicURL
    }
  }
`

export default ContactPage
