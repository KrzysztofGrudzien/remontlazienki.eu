import React from "react"
import Main from "../components/main"
import WelcomeParagraph from "../components/welcomeParagraph"
import WelcomeHeader from "../components/welcomeHeader"
import styled from "styled-components"
import CrossDecoration from "../components/crossDecoration"
import { graphql } from "gatsby"

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
  width: 100%;
`

const ArticleForm = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;

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

  form {
    justify-content: flex-end;
    display: flex;
    flex-wrap: wrap;

    p.form-input {
      margin: 0;
      padding: 20px 10px 20px 0;
      width: 50%;
    }
  }
`

const ArticleContact = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;

  .owner {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  .owner-title {
    font-size: ${({ theme }) => theme.fontSize.mml};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-top: 50px;
  }

  .big-text {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.mml};
    margin-top: 200px;
  }

  span {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`

const CompanyDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.8;
`

const ButtonMessage = styled.button`
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
`

const ContactPage = ({ data }) => (
  <Main>
    <ImageWrapper image={data.file.publicURL} alt="hero">
      <WelcomeHeader type="about" />
      <WelcomeParagraph type="about-more" />
      <CrossDecoration type="left-top" />
      <CrossDecoration type="center-bottom" />
      <CrossDecoration type="right-top-fix" />
      <CrossDecoration type="left-bottom" />
      <CrossDecoration type="center-top" />
      <CrossDecoration type="right-bottom-fix" />
    </ImageWrapper>
    <FormWrapper>
      <ArticleForm>
        <WelcomeParagraph type="contact" />
        <WelcomeHeader type="contact" />
        <CompanyDescription>
          Oferujemy usługi wykończeniowe łazienek. Idziemy z duchem czasu i
          wiemy, że od kilku lat nastał trend na tworzenie łazienek o
          nietuzinkowym wyglądzie, gdzie inwestor może stworzyć niesamowite i
          efektowne wnętrze sam czy korzystając z usług projektantów.
        </CompanyDescription>
        <form>
          <p className="form-input">
            <label>
              imię
              <br />
              <input type="text" placeholder="twoję imię" />
            </label>
          </p>
          <p className="form-input">
            <label>
              e-mail
              <br />
              <input type="email" placeholder="twój adres e-mail" />
            </label>
          </p>
          <p className="form-textarea">
            <label>
              wiadomość
              <br />
              <textarea placeholder="twoja wiadomość" />
            </label>
          </p>
          <ButtonMessage>wyślij</ButtonMessage>
        </form>
      </ArticleForm>
      <ArticleContact>
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
      </ArticleContact>
    </FormWrapper>
  </Main>
)

export const query = graphql`
  {
    file(name: { eq: "hero2" }) {
      publicURL
    }
  }
`

export default ContactPage
