export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7 text-teal-500  ">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-lime-300 to-teal-300 group-hover:from-lime-300 group-hover:to-teal-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                About Nikhil&apos;s Blog
              </span>
            </button>
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Nikhil Blog! This platform is crafted by Nikhil, a
              passionate developer, as a personal haven for sharing thoughts and
              ideas with the world.
            </p>

            <p>
              Nikhil, a tech enthusiast, shares weekly insights into the realms
              of web development, software engineering, and diverse programming
              languages. Join him on this journey of continuous learning and
              exploration of new technologies.
            </p>

            <p>
              Feel free to engage with the community by leaving your thoughts in
              the comments section. Like and reply to other reader comments,
              fostering a collaborative environment where we all learn and grow
              together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
