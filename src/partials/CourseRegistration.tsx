import { GradientText, Section } from 'astro-boilerplate-components';

const CourseRegistration = () => (
  <Section>
    <div id="payment" className="mb-12 text-2xl md:flex md:items-center">
      <div className="w-full md:items-center">
        <GradientText>
          Looks good? Enroll now. First Batch starting in October.
        </GradientText>{' '}
        Make the payment of the above amount to the below QR code and fill form.
        Add the UPI Reference Number from the transaction in the UPI Ref Number
        Field.<br/> I'll get in touch with you soon.
      </div>
    </div>
    <div className="mb-6 md:flex md:items-center">
      <div className="md:w-1/3">
        <img
          className="h-100 w-72 shadow-md"
          src="/assets/images/GooglePay_QR.png"
          alt="Rivu Chakraborty's GPay UPI"
          loading="lazy"
        />
      </div>
      <div className="md:w-2/3">
        <form
          name="register-compose"
          method="POST"
          data-netlify="true"
          className="max-w-s w-full rounded bg-black px-8 pt-6 pb-8 shadow-md"
        >
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-2 block text-sm font-bold text-gray-300"
                htmlFor="name"
              >
                Your Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-2 block text-sm font-bold text-gray-300"
                htmlFor="email"
              >
                Your Email:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-2 block text-sm font-bold text-gray-300"
                htmlFor="city"
              >
                Your City:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                id="city"
                name="city"
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-2 block text-sm font-bold text-gray-300"
                htmlFor="state"
              >
                Your State:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                name="state"
                id="state"
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-2 block text-sm font-bold text-gray-300"
                htmlFor="yoe"
              >
                Number of Years Experience:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="number"
                name="yoe"
                id="yoe"
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-2 block text-sm font-bold text-gray-300"
                htmlFor="mobile"
              >
                Phone Number:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="tel"
                name="mobile"
                id="mobile"
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-2 block text-sm font-bold text-gray-300"
                htmlFor="upi"
              >
                UPI Ref Number:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                name="upi"
                id="upi"
                className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-2 block text-sm font-bold text-gray-300"
                htmlFor="courseName"
              >
                Course:
              </label>
            </div>
            <div className="relative inline-block w-64 md:w-2/3">
              <select
                id="courseName"
                name="courseName"
                required
                placeholder="Select The Course You are interested in"
                className="focus:shadow-outline focus:border-purple-500 block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight text-gray-700 shadow hover:border-purple-500 focus:outline-none"
              >
                <option selected disabled hidden value="">
                  Select The Course You are interested in
                </option>
                <option>Jetpack Compose with Additional Weeks</option>
                <option>Jetpack Compose without Additional Weeks</option>
                <option>Jetpack Compose without Additional Weeks</option>
                <option>Kotlin Language</option>
                <option>Kotlin Multiplatform</option>
                <option>Backend Development with Ktor</option>
                <option>Advanced Android Development</option>
                <option>Android Development Basics</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                type="submit"
                className="focus:shadow-outline w-60 rounded bg-purple-500 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
              >
                Enroll
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Section>
);

export { CourseRegistration };
