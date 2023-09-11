import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              className="mr-1 h-10 w-10 stroke-cyan-600"
              src="/assets/images/rivu-talks.webp"
            />
          }
          name="Rivu Chakraborty's Cohort Based Courses"
        />
      </a>

      <NavMenu>
        <NavMenuItem>
          <a href="https://rivu.dev" target="_blank">
            Blogs
          </a>
        </NavMenuItem>
        <NavMenuItem>
          <a href="/courses/">Courses</a>
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
