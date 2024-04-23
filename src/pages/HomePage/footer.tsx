import { FaGithub, FaDiscord } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";

const navigation = {
  social: [
    {
      name: "Telegram",
      href: "https://t.me/definodal",
      icon: TbBrandTelegram,
    },
    {
      name: "Discord",
      href: "https://discord.gg/9pQzYDxG2P",
      icon: FaDiscord,
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/DeFiNodal",
      icon: RiTwitterXLine,
    },
    {
      name: "GitHub",
      href: "#",
      icon: FaGithub,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 flex flex-col items-center justify-center">
            <p className="text-xl leading-6 text-trueblack">
              Chek out our socials
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-trueblack hover:text-body"
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="rounded-md bg-trueblack px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black w-full sm:w-1/2"
            >
              Launch App
            </a>

            <a
              href="https://definodal.gitbook.io/definodal"
              target="_blank"
              className="rounded-md bg-trueblack px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black w-full sm:w-1/2"
            >
              Docs
            </a>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; Made with ❤️ by DefiNodal.
          </p>
        </div>
      </div>
    </footer>
  );
}
