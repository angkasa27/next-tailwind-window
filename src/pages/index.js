import clsx from "clsx";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { UserCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

export default function index() {
  const color = "light";

  return (
    <div className="bg-teal-400 h-screen w-screen overflow-hidden p-4">
      <div className="container relative">
        <Card className="md:m-10 h-96" color={color} header="welcome.exe">
          test
        </Card>
        <Card
          className="absolute -bottom-8 flex justify-between w-[75vw] px-4 py-2"
          color={color}
        >
          <h5 className="title-3 bold">angkasa</h5>
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <UserCircleIcon className="h-6 w-6" />
              </Link>
            </li>
            <li>project</li>
            <li>contact</li>
            <li>
              <Cog6ToothIcon className="h-6 w-6" />
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export function Card({ className, children, header, color }) {
  const config = {
    color,
  };

  const containerStyles = cva(["bg-teal-400 border-main", className], {
    variants: {
      color: {
        dark: "border-white ring-slate-800",
        light: "border-slate-800 ring-white",
      },
    },
    defaultVariants: {
      color: "light",
    },
  });

  const headerStyles = cva(
    "px-4 py-2 flex justify-between items-center border-b-4  font-mono",
    {
      variants: {
        color: {
          dark: "border-white",
          light: "border-slate-800",
        },
      },
      defaultVariants: {
        color: "light",
      },
    }
  );

  return (
    <div className={containerStyles(config)}>
      {!!header && (
        <div className={headerStyles(config)}>
          {header}
          <div className="flex gap-2">
            <div className="h-4 w-4 bg-teal-200 rounded-full" />
            <div className="h-4 w-4 bg-teal-600 rounded-full" />
            <div className="h-4 w-4 bg-teal-800 rounded-full" />
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
