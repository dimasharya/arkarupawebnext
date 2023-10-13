"use client";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className=" bg-zinc-900/50 backdrop-blur-2xl mx-auto w-full sticky top-0 z-30"
        aria-label="Global"
      >
        <div className="mx-auto max-w-screen-2xl flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 py-1.5 px-4">
              <span className="sr-only">PT. Arkarupa Cahaya Nusantara</span>
              <img
                className="w-auto lg:h-8 h-6"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU5IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTU5IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMjguNzMgNy4wOEgyNS44MlYyNS4yNEgyOC43M1Y3LjA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTMzLjUxIDkuMzVDMzQuNzYgOS4zNSAzNS43OCA4LjMzIDM1Ljc4IDcuMDhIMzEuMjRDMzEuMjQgOC4zMyAzMi4yNiA5LjM1IDMzLjUxIDkuMzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTQuODkgN0w1MC44MiA3LjA0TDQzLjA2IDE1TDQyLjkxIDAuMzYwMDAxTDM4LjM3IDAuNDFDMzguMzggMS40IDM5LjAyIDIuMjMgMzkuOTEgMi41M0w0MC4xNSAyNS4zMUw0My4xOCAyNS4yOEw0My4xMSAxOC44OUw0NS4zNCAxNi42NUw1Mi4zNyAyNS4xOUw1Ni4wNyAyNS4xNUw0Ny4zOSAxNC42TDU0LjkgN0g1NC44OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMi4xNiAwLjMySDcuNjIwMDNDNy42MjAwMyAxLjM5IDguMzYwMDIgMi4yOSA5LjM2MDAyIDIuNTNMMC4wMjAwMTk1IDI1LjI0SDIuODMwMDJMMTEuMDMgNS4zM0wxOC45MSAyNS4yNEgyMi40TDEyLjE2IDAuMzJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODMuNjEgNy4wOEg4MC43VjI1LjI0SDgzLjYxVjcuMDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNODguNCA5LjM1Qzg5LjY1IDkuMzUgOTAuNjcgOC4zMyA5MC42NyA3LjA4SDg2LjEzQzg2LjEzIDguMzMgODcuMTUgOS4zNSA4OC40IDkuMzVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTI1LjQyIDYuNzJDMTIyLjg0IDYuNzIgMTIwLjE5IDguMSAxMTguNzcgMTAuMTdWNy4wOEgxMTQuMTVDMTE0LjE1IDguMTQgMTE0Ljg4IDkuMDMgMTE1Ljg2IDkuMjhWMzJIMTE4Ljc3VjIyLjE2QzEyMC4xOSAyNC4yMyAxMjIuODQgMjUuNjEgMTI1LjQyIDI1LjYxQzEzMC44IDI1LjYxIDEzNC4zOSAyMS44MyAxMzQuMzkgMTYuMTdDMTM0LjM5IDEwLjUxIDEzMC43OSA2LjczIDEyNS40MiA2LjczVjYuNzJaTTEyNS4xMyAyMy4wN0MxMjEuMzIgMjMuMDcgMTE4Ljc3IDIwLjMxIDExOC43NyAxNi4xN0MxMTguNzcgMTIuMDMgMTIxLjMxIDkuMjcgMTI1LjEzIDkuMjdDMTI4Ljk1IDkuMjcgMTMxLjQ5IDEyLjAzIDEzMS40OSAxNi4xN0MxMzEuNDkgMjAuMzEgMTI4Ljk1IDIzLjA3IDEyNS4xMyAyMy4wN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMTAuMDYgMjMuMDdWNy4wOEgxMDcuMTVWMTcuODNDMTA3LjE1IDIwLjk1IDEwNS4wOCAyMy4wNiAxMDEuOTkgMjMuMDZDOTguOTAwMSAyMy4wNiA5Ni44MyAyMC45NSA5Ni44MyAxNy44M1Y3LjA4SDkzLjkyVjE4LjM0QzkzLjkyIDIyLjcgOTYuOTQgMjUuNiAxMDEuNDggMjUuNkMxMDMuNTkgMjUuNiAxMDUuODcgMjQuNTEgMTA3LjE1IDIyLjkxVjI1LjIzSDEwNy4xNkMxMDcuMTYgMjUuMjMgMTA3LjE2IDI1LjIzIDEwNy4xNiAyNS4yNEgxMTEuN0MxMTEuNyAyNC4yIDExMSAyMy4zMyAxMTAuMDUgMjMuMDZMMTEwLjA2IDIzLjA3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE1My43OSAyNS4yNkgxNTguMzNDMTU4LjMzIDI0LjIzIDE1Ny42NCAyMy4zNiAxNTYuNyAyMy4wOFY3LjA4SDE1My43OVYxMC4xM0MxNTIuMzcgOC4xIDE0OS43OSA2LjcyIDE0Ny4zMiA2LjcyQzE0Mi4wMiA2LjcyIDEzOC40NiAxMC41IDEzOC40NiAxNi4xNkMxMzguNDYgMjEuODIgMTQyLjAyIDI1LjYgMTQ3LjMyIDI1LjZDMTQ5Ljc5IDI1LjYgMTUyLjM3IDI0LjIyIDE1My43OSAyMi4xOVYyNS4yM0MxNTMuNzkgMjUuMjMgMTUzLjc5IDI1LjI1IDE1My43OSAyNS4yNlpNMTQ3LjYyIDIzLjA3QzE0My44OCAyMy4wNyAxNDEuMzcgMjAuMzEgMTQxLjM3IDE2LjE3QzE0MS4zNyAxMi4wMyAxNDMuODggOS4yNyAxNDcuNjIgOS4yN0MxNTEuMzYgOS4yNyAxNTMuOCAxMi4wMyAxNTMuOCAxNi4xN0MxNTMuOCAyMC4zMSAxNTEuMzMgMjMuMDcgMTQ3LjYyIDIzLjA3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTc0Ljg5IDIzLjA4VjcuMDhINzEuOThWMTAuMTNDNzAuNTYgOC4xIDY3Ljk4IDYuNzIgNjUuNTEgNi43MkM2MC4yMSA2LjcyIDU2LjY1IDEwLjUgNTYuNjUgMTYuMTZDNTYuNjUgMjEuODIgNjAuMjEgMjUuNiA2NS41MSAyNS42QzY3Ljk4IDI1LjYgNzAuNTYgMjQuMjIgNzEuOTggMjIuMTlWMjUuMjRDNzEuOTggMjUuMjQgNzEuOTggMjUuMjQgNzEuOTggMjUuMjVINzYuNTJDNzYuNTIgMjQuMjIgNzUuODMgMjMuMzUgNzQuODggMjMuMDdMNzQuODkgMjMuMDhaTTY1LjgxIDIzLjA3QzYyLjA3IDIzLjA3IDU5LjU2IDIwLjMxIDU5LjU2IDE2LjE3QzU5LjU2IDEyLjAzIDYyLjA3IDkuMjcgNjUuODEgOS4yN0M2OS41NSA5LjI3IDcxLjk5IDEyLjAzIDcxLjk5IDE2LjE3QzcxLjk5IDIwLjMxIDY5LjUyIDIzLjA3IDY1LjgxIDIzLjA3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExLjA0IDIwLjg1QzEyLjg4IDIwLjg1IDE0LjM2IDE5LjM2IDE0LjM2IDE3LjUzSDcuNzEwMDJDNy43MTAwMiAxOS4zNyA5LjIwMDAyIDIwLjg1IDExLjAzIDIwLjg1SDExLjA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                alt=""
              />
            </a>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              About
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Service
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Project
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Contact
            </a>
          </Popover.Group>
          <div className="lg:hidden flex">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-2"
              aria-disabled
            >
              {mobileMenuOpen ? (
                <>
                  <div className="h-1 w-8 bg-white rotate-45 animate-ease-in delay-150 duration-300" />
                  <div className="h-1 w-8 bg-white -rotate-45 -translate-y-1 animate-ease-in delay-150 duration-300" />
                </>
              ) : (
                <>
                  <div className="h-1 w-8 bg-white mb-2 animate-ease-in delay-150 duration-300" />
                  <div className="h-1 w-8 bg-white mt-2 animate-ease-in delay-150 duration-300" />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>
      {mobileMenuOpen ? (
        <>
        <div className="fixed lg:hidden inset-0 z-10 animate-fade-down animate-once animate-duration-300 animate-delay-150 animate-ease-in">
        <div className="w-max-sm bg-zinc-900/50 backdrop-blur-xl pt-20 px-8">
          <div className="inline-flex flex-col gap-4 py-4">
          <a href="#" className="text-base leading-6 text-white">
            About
          </a>
          <a href="#" className="text-base leading-6 text-white">
            Service
          </a>
          <a href="#" className="text-base leading-6 text-white">
            Project
          </a>
          <a href="#" className="text-base leading-6 text-white">
            Contact
          </a>
          </div>
        </div>
      </div>
        </>)
        : ""
      }

      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </>
  );
}
