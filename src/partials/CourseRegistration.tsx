import { Section } from 'astro-boilerplate-components';
import type { IFrontmatter } from 'astro-boilerplate-components/dist/esm/types/types/IFrontMatter';

const CourseRegistration = (props: IFrontmatter) => (
  <Section>
    <form name="register-compose" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name:<br/> <input type="text" name="name" className="text-cyan-400 w-80" required />
        </label>
      </p>
      <p>
        <label>
          Your Email:<br/> <input type="email" name="email" className="text-cyan-400 w-80" required />
        </label>
      </p>
      <p>
        <label>
          Your City:<br/> <input type="text" name="city" className="text-cyan-400 w-80" required />
        </label>
      </p>
      <p>
        <label>
          Your State:<br/> <input type="text" name="state" className="text-cyan-400 w-80" required />
        </label>
      </p>
      <p>
        <label>
          Number of Years Experience:{' '}<br/>
          <input type="number" name="yoe" className="text-cyan-400 w-80" required />
        </label>
      </p>
      <input
        type="phone"
        id="phone"
        className="text-cyan-400 w-80"
        name="courseName"
        value={props.title}
      />
 <p>
        <label>
          Phone Number:{' '}<br/>
          <input type="tel" name="yoe" className="text-cyan-400 w-80" required />
        </label>
      </p>
      <input
        type="hidden"
        id="courseName"
        name="courseName"
        value={props.title}
      />
      <p>
        <button type="submit" className="button-outlined title text-cyan-400 hover:underline h-10">Enroll</button>
      </p>
    </form>
  </Section>
);

export { CourseRegistration };
