import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Rivu Chakraborty</GradientText> 👋
        </>
      }
      description={
        <>
          <a
            className="text-cyan-400 hover:underline"
            href="https://developers.google.com/profile/u/rivuchk"
            target="_blank"
          >
            India's first GDE (Google Developers Expert) for Kotlin.
          </a>{' '}
          A Software Engineer with over a decade of Industry Experience. A{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://sessionize.com/rivu-chakraborty/"
            target="_blank"
          >
            speaker
          </a>
          ,{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.goodreads.com/author/list/17062937.Rivu_Chakraborty"
            target="_blank"
          >
            author with multiple published Kotlin and Android Books.
          </a>{' '}
          And a community person.
          <br />
          Over the years, I've worked with numerous startups, including major
          unicorns from India and South-East Asia, as listed below.
          <br />
          <ul className="list-inside list-disc">
            <li> Current: Android Architect / Senior Manager @ JioCinema </li>
            <li> Ex: Lead Android @ Meesho </li>
            <li> Ex: Senior Product Engineer @ Gojek </li>
            <li> Ex: Android Architect @ Paytm (Chat, Movies, Insider) </li>
            <li> Ex: Senior Software Engineer @ Byju's </li>
          </ul>
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/rivu-gde.webp"
          alt="Rivu Chakraborty"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/@RivuChakraborty" target="_blank">
            <HeroSocial
              src="/assets/images/x-twitter-dark.svg"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/rivuchk" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-dark.svg"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://www.youtube.com/@rivutalks" target="_blank">
            <HeroSocial
              src="/assets/images/youtube-dark.svg"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
