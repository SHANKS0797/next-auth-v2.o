import Image from "next/image";

export default function App() {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-4 py-6 px-4">
      {/* -------------------- TEXT 1 -------------------- */}
      <div className="flex flex-col lg:flex-row justify-start items-start w-full px-4">
        <Image
          src="/images/pic.png"
          alt="banner_img"
          height={200}
          width={200}
          className="w-full lg:w-auto"
        />
        <span className="flex flex-col justify-start items-start w-full text-wrap">
          <h1 className="text-lg font-semibold text-navy-blue dark:text-soft-lavender">
            Welcome to BeingTested – Where Bugs are Just Undocumented Features!
          </h1>
          <span className="font-medium text-dark-gray dark:text-soft-white leading-loose">
            Welcome, fearless coder! The only place where your keyboard tantrums
            and caffeine addiction are not just accepted—they&apos;re
            celebrated. Whether you&apos;re a seasoned dev or just realized &
            &quot;Hello, World&quot; isn&apos;t an alien greeting, you&apos;re
            in the right place. Here, we believe every bug is just a
            misunderstood piece of art, and every late-night debugging session
            is a rite of passage. Our motto? & &quot;Ctrl+Z is life, Git is
            salvation, and Stack Overflow is therapy.&quot; Need tutorials?
            We&apos;ve got you covered, from & &quot;Python for Beginners&quot;
            to & &quot;JavaScript: The Language That Loves Chaos.&quot; Stuck on
            a project? Join our forums where fellow coders will provide
            solutions—or at least send a funny meme to ease your pain. And
            don&apos;t worry about breaking things. As the wise philosopher
            (probably a senior dev) once said, & &quot;You can&apos;t break code
            that&apos;s already broken!&quot; So grab a coffee, stretch those
            fingers, and dive into the wonderful, maddening world of coding with
            us. Who knows? You might even debug that one error without crying
            today.Because your dreams deserve to be in semicolons and curly
            braces.
          </span>
        </span>
      </div>
      {/* -------------------- TEXT 2 -------------------- */}
      <div className="flex flex-col lg:flex-row-reverse justify-start items-start w-full px-4">
        <Image
          src="/images/pic2.png"
          alt="banner_img2"
          height={200}
          width={200}
          className="w-full lg:w-auto"
        />
        <span className="flex flex-col justify-start items-start w-full text-wrap">
          <h1 className="text-lg font-semibold text-navy-blue dark:text-soft-lavender">
            The Glamorous Life of Debugging: A Coder&apos;s Tale
          </h1>
          <span className="font-medium text-dark-gray dark:text-soft-white leading-loose">
            Coding is often portrayed as glamorous, like you&apos;re a digital
            wizard summoning apps and systems from the void. The reality?
            You&apos;re mostly battling invisible bugs, arguing with the syntax,
            and questioning why you ever thought this was a good idea. But hey,
            you&apos;re not alone! Every coder has stared at their screen,
            wondering how a missing comma could ruin their entire day. Every
            coder has celebrated a bug fix with a victory dance, only to realize
            they broke five other things in the process. Coding is a journey
            where the destination is always &quot;it works on my machine.&quot;
            And that&apos;s okay. Because in this world, every error is an
            opportunity to learn, every deploy is an adventure, and every
            all-nighter is a badge of honor. So keep coding, keep learning, and
            remember: even if your code doesn&apos;t work, your memes always
            will.
          </span>
        </span>
      </div>
      {/* -------------------- TEXT 3 -------------------- */}
      <div className="flex flex-col lg:flex-row justify-start items-start w-full px-4">
        <Image
          src="/images/pic3.png"
          alt="banner_img"
          height={200}
          width={200}
          className="w-full lg:w-auto"
        />
        <span className="flex flex-col justify-start items-start w-full text-wrap">
          <h1 className="text-lg font-semibold text-navy-blue dark:text-soft-lavender">
            Ah, Coding: Where Chaos Meets Curly Braces
          </h1>
          <span className="font-medium text-dark-gray dark:text-soft-white leading-loose">
            Ah, coding. The noble pursuit of creating logic out of chaos—only to
            introduce more chaos. It&apos;s a profession where you can go from
            feeling like a genius to questioning your life choices in the span
            of a single compile. You&apos;ll spend hours tweaking your code,
            only to realize the problem wasn&apos;t in your logic but in your
            spelling. You&apos;ll face errors that seem impossible—until you
            discover you missed a curly brace. You&apos;ll question reality
            itself, wondering how code that worked yesterday is suddenly
            conspiring against you. But there&apos;s beauty in the madness.
            Every bug fixed is a triumph, every feature built is a masterpiece,
            and every crash is...well, a reminder to save your work. So embrace
            the journey. Celebrate the small wins, laugh at the inevitable
            fails, and remember: coding is 10% writing code and 90% convincing
            yourself it&apos;s not the computer&apos;s fault. braces.
          </span>
        </span>
      </div>
      {/* -------------------- TEXT 4 -------------------- */}
      <div className="flex flex-col lg:flex-row-reverse justify-start items-start w-full px-4">
        <Image
          src="/images/pic4.png"
          alt="banner_img"
          height={200}
          width={200}
          className="w-full lg:w-auto"
        />
        <span className="flex flex-col justify-start items-start w-full text-wrap">
          <h1 className="text-lg font-semibold text-navy-blue dark:text-soft-lavender">
            Coding: The Emotional Rollercoaster of Unexpected Errors
          </h1>
          <span className="font-medium text-dark-gray dark:text-soft-white leading-loose">
            Coding isn&apos;t just a job; it&apos;s an emotional rollercoaster.
            One moment, you&apos;re on top of the world, marveling at your
            genius. The next, you&apos;re crying into your coffee because an
            error message said &quot;unexpected&quot; and you feel personally
            attacked. But let&apos;s be honest: that&apos;s what makes it
            exciting. Coding is problem-solving at its most ridiculous.
            It&apos;s staring at a blank screen and imagining all the
            possibilities—and then spending hours making one of those
            possibilities actually work. You&apos;ll celebrate tiny victories,
            like getting your API call to return the right data, and endure
            crushing defeats, like realizing you&apos;ve been working in the
            wrong branch all day. But through it all, you&apos;ll learn, grow,
            and occasionally make something truly amazing. So keep typing, keep
            breaking things, and keep fixing them. Coding isn&apos;t about
            perfection—it&apos;s about persistence. And when all else fails,
            just remember: rubber ducks don&apos;t judge your questions, and
            Stack Overflow is always there to save the day.
          </span>
        </span>
      </div>
    </div>
  );
}
